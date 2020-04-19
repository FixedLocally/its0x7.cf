/* Overviewer.js
 *
 * Must be the first file included from index.php
 */


let overviewer = {};

let test = null;


/**
 * This holds the map, probably the most important var in this file
 */
overviewer.map = null;
overviewer.worldCtrl = null;
overviewer.layerCtrl = null;
overviewer.compass = null;
overviewer.coord_box = null;
overviewer.current_world = null;

/// Records the current layer by name (if any) of each world
overviewer.current_layer = {};
    

overviewer.collections = {
        /**
         * MapTypes that aren't overlays will end up in here.
         */
        'mapTypes':     {},
        /**
         * The mapType names are in here.
         */
        'mapTypeIds':   [],
        /**
         * This is the current infoWindow object, we keep track of it so that
         * there is only one open at a time.
         */
        'infoWindow':   null,

        /**
         * When switching regionsets, where should we zoom to?
         * Defaults to spawn.  Stored as map of world names to [latlng, zoom]
         */
        'centers': {},

        'overlays': {},

        'worldViews': [],

        'haveSigns': false,

        /**
         * Hold the raw marker data for each tilest
         */
        'markerInfo': {},

        /**
         * holds a reference to the spawn marker.
         */
        'spawnMarker': null,

        /**
        * if a user visits a specific URL, this marker will point to the
        * coordinates in the hash
        */
        'locationMarker': null
    };

overviewer.util = {
    
    // vars for callback
    readyQueue: [],
    isReady: false,

    lastHash: null,

    /* fuzz tester!
     */
    'testMaths': function(t) {
        let initx = Math.floor(Math.random() * 400) - 200;
        let inity = 64;
        let initz = Math.floor(Math.random() * 400) - 200;
        console.log("Initial point: %r,%r,%r", initx, inity, initz);

        let latlng = overviewer.util.fromWorldToLatLng(initx, inity, initz, t);
        console.log("LatLng: %r,%r", latlng.lat(), latlng.lng());

        let p = overviewer.util.fromLatLngToWorld(latlng.lat(), latlng.lng(), t);
        console.log("Result: %r,%r,%r", p.x, p.y, p.z);
        if (p.x == initx && p.y == inity && p.z == initz) {
            console.log("Pass");
        }


    },

    /**
     * General initialization function, called when the page is loaded.
     * Probably shouldn't need changing unless some very different kind of new
     * feature gets added.
     */
    'initialize': function() {
        //overviewer.util.initializeClassPrototypes();
        overviewer.util.initializePolyfills();
        overviewer.util.initializeMarkers();

        document.getElementById('NoJSWarning').remove();

        overviewer.coordBoxClass = L.Control.extend({
            options: {
                position: 'bottomleft',
            },
            initialize: function() {
                this.coord_box = L.DomUtil.create('div', 'coordbox');
            },
            render: function(latlng) {
                let currWorld = overviewer.current_world;
                if (currWorld == null) {return;}

                let currTileset = overviewer.current_layer[currWorld];
                if (currTileset == null) {return;}

                let ovconf = currTileset.tileSetConfig;

                w_coords = overviewer.util.fromLatLngToWorld(latlng.lat, latlng.lng, ovconf);

                let r_x = Math.floor(Math.floor(w_coords.x / 16.0) / 32.0);
                let r_z = Math.floor(Math.floor(w_coords.z / 16.0) / 32.0);
                let r_name = "r." + r_x + "." + r_z + ".mca";

                this.coord_box.innerHTML = "<strong>X</strong> " +
                                           Math.round(w_coords.x) +
                                           " <strong>Z</strong> " + Math.round(w_coords.z);
            },
            onAdd: function() {
                return this.coord_box;
            }
        });
        overviewer.compassClass = L.Control.extend({
            initialize: function(imagedict, options) {
                L.Util.setOptions(this, options);
                this.compass_img = L.DomUtil.create('img', 'compass');
                this.imagedict = imagedict;
            },
            render: function(direction) {
                this.compass_img.src = this.imagedict[direction];
            },
            onAdd: function() {
                return this.compass_img;
            }
        });
        overviewer.control = L.Control.extend({
            initialize: function(options) {
                L.Util.setOptions(this, options);
                
                this.container = L.DomUtil.create('div', 'worldcontrol');
                this.select = L.DomUtil.create('select');
                this.select.onchange = this.onChange;
                this.container.appendChild(this.select);
            },
            addWorld: function(world) {
                let option = L.DomUtil.create('option');
                option.value = world;
                option.innerText = world;
                this.select.appendChild(option);
            },
            onChange: function(ev) {
                console.log(ev.target);
                console.log(ev.target.value);
                let selected_world = ev.target.value;
                

                // save current view for the current_world
                overviewer.collections.centers[overviewer.current_world][0] = overviewer.map.getCenter();
                overviewer.collections.centers[overviewer.current_world][1] = overviewer.map.getZoom();

                overviewer.layerCtrl.remove();

                overviewer.layerCtrl = L.control.layers(
                        overviewer.collections.mapTypes[selected_world],
                        overviewer.collections.overlays[selected_world],
                        {collapsed: false})
                .addTo(overviewer.map);

                for (let world_name in overviewer.collections.mapTypes) {
                    for (let tset_name in overviewer.collections.mapTypes[world_name]) {
                        let lyr = overviewer.collections.mapTypes[world_name][tset_name];
                        if (world_name != selected_world) {
                            if (overviewer.map.hasLayer(lyr))
                                overviewer.map.removeLayer(lyr);
                        }
                        if (lyr.tileSetConfig.marker_groups) {
                            for (let marker_group in lyr.tileSetConfig.marker_groups) {
                                lyr.tileSetConfig.marker_groups[marker_group].remove();
                            }
                        }
                        if (lyr.tileSetConfig.markerCtrl) {
                            lyr.tileSetConfig.markerCtrl.remove();
                        }
                    }
                    
                    for (let tset_name in overviewer.collections.overlays[world_name]) {
                        let lyr = overviewer.collections.overlays[world_name][tset_name];
                        if (world_name != selected_world) {
                            if (overviewer.map.hasLayer(lyr))
                                overviewer.map.removeLayer(lyr);
                        }
                    }
                }

                let center = overviewer.collections.centers[selected_world];
                overviewer.map.setView(center[0], center[1]);

                overviewer.current_world = selected_world;

                if (overviewer.collections.mapTypes[selected_world] && overviewer.current_layer[selected_world]) {
                    overviewer.map.addLayer(overviewer.collections.mapTypes[selected_world][overviewer.current_layer[selected_world].tileSetConfig.name]);
                } else {
                    let tset_name = Object.keys(overviewer.collections.mapTypes[selected_world])[0]
                    overviewer.map.addLayer(overviewer.collections.mapTypes[selected_world][tset_name]);
                }
            },
            onAdd: function() {
                console.log("onAdd mycontrol");
                
                return this.container
            }
        });


        
        overviewer.map = L.map('mcmap', {
                crs: L.CRS.Simple,
			});
			
		overviewer.map.on('load', function(){
			console.log("Loaded");
			window.setTimeout(overviewer.util.runReadyQueue(), 500); //Small delay to fix errors
			overviewer.util.isReady = true;
		});

        overviewer.map.attributionControl.setPrefix('0x7cf | <a href="https://wynncraft.com">Wynncraft</a>');

        overviewer.map.on('baselayerchange', function(ev) {
            // before updating the current_layer, remove the marker control, if it exists
            if (overviewer.current_world && overviewer.current_layer[overviewer.current_world]) {
                let tsc = overviewer.current_layer[overviewer.current_world].tileSetConfig;

                if (tsc.markerCtrl)
                    tsc.markerCtrl.remove();
                if (tsc.marker_groups) {
                    for (let marker_group in tsc.marker_groups) {
                        tsc.marker_groups[marker_group].remove();
                    }
                }

            }
            overviewer.current_layer[overviewer.current_world] = ev.layer;
            let ovconf = ev.layer.tileSetConfig;

            // Change the compass
            overviewer.compass.render(ovconf.north_direction);

            // Set the background colour
            document.getElementById("mcmap").style.backgroundColor = ovconf.bgcolor;

            if (overviewer.collections.locationMarker) {
                overviewer.collections.locationMarker.remove();
            }
            // Remove old spawn marker, add new one
            if (overviewer.collections.spawnMarker) {
                overviewer.collections.spawnMarker.remove();
            }
            if (typeof(ovconf.spawn) == "object" && ovconf.spawnMarker) {
                let spawnIcon = L.icon({
                    iconUrl: overviewerConfig.CONST.image.spawnMarker,
                    iconRetinaUrl: overviewerConfig.CONST.image.spawnMarker2x,
                    iconSize: [32, 37],
                    iconAnchor: [15, 33],
                });
                let latlng = overviewer.util.fromWorldToLatLng(ovconf.spawn[0],
                                                               ovconf.spawn[1],
                                                               ovconf.spawn[2],
                                                               ovconf);
                let spawnMarker = L.marker(latlng, {icon: spawnIcon, title: "Spawn"});
                spawnMarker.on('click', function(ev) {
                    overviewer.map.setView(ev.latlng);
                });
                overviewer.collections.spawnMarker = spawnMarker
                overviewer.collections.spawnMarker.addTo(overviewer.map);
            } else {
                overviewer.collections.spawnMarker = null;
            }

            // reset the markers control with the markers for this layer
            if (ovconf.marker_groups) {
                console.log("markers for", ovconf.marker_groups);
                ovconf.markerCtrl = L.control.layers(
                        [],
                        ovconf.marker_groups, {collapsed: false}).addTo(overviewer.map);
            }

            overviewer.util.updateHash();
        });

        overviewer.map.on('moveend', function(ev) {
            overviewer.util.updateHash();
        });
    
        let tset = overviewerConfig.tilesets[0];

        overviewer.map.on("click", function(e) {
            console.log(e.latlng);
            let point = overviewer.util.fromLatLngToWorld(e.latlng.lat, e.latlng.lng, tset);
            console.log(point);
        });

        let tilesetLayers = {}

        overviewer.worldCtrl = new overviewer.control();
        overviewer.compass = new overviewer.compassClass(
            overviewerConfig.CONST.image.compass);
        overviewer.coord_box = new overviewer.coordBoxClass();
        

        $.each(overviewerConfig.worlds, function(idx, world_name) {
            overviewer.collections.mapTypes[world_name] = {}
            overviewer.collections.overlays[world_name] = {}
            overviewer.worldCtrl.addWorld(world_name);
        });

        overviewer.compass.addTo(overviewer.map);
        overviewer.worldCtrl.addTo(overviewer.map);
        overviewer.coord_box.addTo(overviewer.map);

        overviewer.map.on('mousemove', function(ev) {
            overviewer.coord_box.render(ev.latlng);
        });
		
		let checked = [];

        $.each(overviewerConfig.tilesets, function(idx, obj) {
            let myLayer = new L.tileLayer('', {
                tileSize: overviewerConfig.CONST.tileSize,
                noWrap: true,
                maxZoom: obj.maxZoom,
                minZoom: obj.minZoom,
                errorTileUrl: obj.base + obj.path + "/blank." + obj.imgextension,
            });
            myLayer.getTileUrl = overviewer.util.getTileUrlGenerator(obj.path, obj.base, obj.imgextension);

            if (obj.isOverlay) {
                overviewer.collections.overlays[obj.world][obj.name] = myLayer;
            } else {
                overviewer.collections.mapTypes[obj.world][obj.name] = myLayer;
            }

            obj.marker_groups = undefined;

            if (overviewer.collections.haveSigns == true) {
                // if there are markers for this tileset, create them now
				console.log("haveSigns = true");
				console.log(obj);
				test = obj;
                if ((typeof markers !== 'undefined') && (obj.poititle in markers)) {
                    console.log("this tileset has markers:", obj);
                    obj.marker_groups = {};

                    for (let mkidx = 0; mkidx < markers[obj.poititle].length; mkidx++) {
                        let marker_entry = markers[obj.poititle][mkidx];
						if(marker_entry.clustered) {
							let marker_group = L.markerClusterGroup({
								chunkedLoading: true,
								disableClusteringAtZoom: 5,
								iconCreateFunction: function (cluster) {
									let childCount = cluster.getChildCount();
									let c = ' marker-cluster-';
									if (childCount < 10) {
										c += 'small';
									} else if (childCount < 100) {
										c += 'medium';
									} else {
										c += 'large';
									}
									return new L.DivIcon({ html: '<div style="background-color:transparent"><span><b>' + childCount + '</b></span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
								}
								});
						}else{
							let marker_group = new L.layerGroup();
						}
                        let icon =  L.icon({iconUrl: marker_entry.icon});
                        console.log("marker group:", marker_entry.displayName, marker_entry.groupName);
						let entity = markersDB[marker_entry.groupName].raw;
                        for (let dbidx = 0; dbidx < entity.length; dbidx++) {
                            let db = entity[dbidx];

							if(typeof db.x != 'undefined' && typeof db.y != 'undefined' && typeof db.z != 'undefined') { 
								/* Leaflet doesn't like having null values for Lat Lng Marker */			
								let latlng = overviewer.util.fromWorldToLatLng(db.x, db.y, db.z, obj);
								let m_icon;
								if (db.icon != undefined) {
									m_icon = L.icon({
										iconUrl: db.icon
									});
								} else {
									m_icon = icon;
								}
								let new_marker = new L.marker(latlng, {icon: m_icon});
								// new_marker.bindPopup(db.text);
								marker_group.addLayer(new_marker);
							}
							{
								// Polyline stuffs
								if (typeof db.polyline != 'undefined') {
									let polyPoints = [];
									for(point in db.polyline){
										polyPoints.push(overviewer.util.fromWorldToLatLng(db.polyline[point].x, db.polyline[point].y, db.polyline[point].z, obj));
									}
									let polyline = L.polyline(polyPoints, {
										interactive: true,
										stroke: true,
										fill: true,
										fillColor: db.fillColor,
										fillOpacity: db.fillOpacity,
										map: overviewer.map,
										color: db.strokeColor,
										name: db.name,
										strokeOpacity: db.strokeOpacity
									});
									polyline.bindPopup(db.text);
									marker_group.addLayer(polyline);
								}
								
								// Polygon stuffs
								if (typeof db.polygon != 'undefined') {
									let polyPoints = [];
									for(point in db.polygon){
										polyPoints.push(overviewer.util.fromWorldToLatLng(db.polygon[point].x, db.polygon[point].y, db.polygon[point].z, obj));
									}
									let polygon = L.polygon(polyPoints, {
										interactive: true,
										stroke: true,
										fill: true,
										fillColor: db.fillColor,
										fillOpacity: db.fillOpacity,
										map: overviewer.map,
										color: db.strokeColor,
										name: db.name,
										strokeOpacity: db.strokeOpacity
									});
									polygon.bindPopup(db.text);
									marker_group.addLayer(polygon);
								}
							}
							
                        }
                        obj.marker_groups[marker_entry.displayName] = marker_group;
						console.log(marker_entry.checked);
						if(marker_entry.checked) {
							checked.push(marker_group);
						}
						
						let shownLayer, polygon;
						
						marker_group.on('clustermouseover', function (a) {
							if (shownLayer) {
								shownLayer.setOpacity(1);
								shownLayer = null;
							}
							if (polygon) {
								overviewer.map.removeLayer(polygon);
								polygon = null;
							}
							a.layer.setOpacity(0.2);
							shownLayer = a.layer;
							polygon = L.polygon(a.layer.getConvexHull());
							overviewer.map.addLayer(polygon);
						});
						
						marker_group.on('clustermouseout', function(){
							if (shownLayer) {
								shownLayer.setOpacity(1);
								shownLayer = null;
							}
							if (polygon) {
								overviewer.map.removeLayer(polygon);
								polygon = null;
							}							
						});
						
						overviewer.map.on('zoomend', function(){
							if (shownLayer) {
								shownLayer.setOpacity(1);
								shownLayer = null;
							}
							if (polygon) {
								overviewer.map.removeLayer(polygon);
								polygon = null;
							}							
						});
                    }
                }
            }

            myLayer["tileSetConfig"] = obj;

      
            if (typeof(obj.spawn) == "object") {
                let latlng = overviewer.util.fromWorldToLatLng(obj.spawn[0], obj.spawn[1], obj.spawn[2], obj);
                overviewer.collections.centers[obj.world] = [ latlng, 1 ];
            } else {
                overviewer.collections.centers[obj.world] = [ [0, 0], 1 ];
            }

        });
		

        overviewer.layerCtrl = L.control.layers(
                overviewer.collections.mapTypes[overviewerConfig.worlds[0]],
                overviewer.collections.overlays[overviewerConfig.worlds[0]],
                {collapsed: false})
            .addTo(overviewer.map);
        overviewer.current_world = overviewerConfig.worlds[0];
		
		setTimeout(function() { 
			for(let i in checked){
				checked[i].addTo(overviewer.map);
			}
		}, 500);

        overviewer.map.setView(overviewer.util.fromWorldToLatLng(tset.spawn[0], tset.spawn[1], tset.spawn[2], tset), 1);
		

        if (!overviewer.util.initHash()) {
            overviewer.worldCtrl.onChange({target: {value: overviewer.current_world}});
        }
		


    },

    'injectMarkerScript': function(url) {
        let m = document.createElement('script'); m.type = 'text/javascript'; m.async = false;
        m.src = url;
        let s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(m);
    },

    'initializeMarkers': function() {
        if (overviewer.collections.haveSigns==true) {
            console.log("initializeMarkers");


            //Object.keys(
            //
        }
        return;

    },

    /** Any polyfills needed to improve browser compatibility
     */
    'initializePolyfills': function() {
        // From https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
        // IE is missing this
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }

    },
    /**
     * onready function for other scripts that rely on overviewer
     * usage: overviewer.util.ready(function(){ // do stuff });
     *
     *
     */
    'ready': function(callback){
        if (!callback || typeof callback != 'function') {
			return;
		}
        if (overviewer.util.isReady){ // run instantly if overviewer already is ready
            overviewer.util.readyQueue.push(callback);
			window.setTimeout(overviewer.util.runReadyQueue(), 500); //Small delay to fix errors
        } else {
            overviewer.util.readyQueue.push(callback); // wait until initialize is finished
        }
    },       
    'runReadyQueue': function(){
		for(let i in overviewer.util.readyQueue){
			overviewer.util.readyQueue[i]();
		}
        overviewer.util.readyQueue.length = 0;
    },
    /**
     * Quote an arbitrary string for use in a regex matcher.
     * WTB parametized regexes, JavaScript...
     *
     *   From http://kevin.vanzonneveld.net
     *   original by: booeyOH
     *   improved by: Ates Goral (http://magnetiq.com)
     *   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
     *   bugfixed by: Onno Marsman
     *     example 1: preg_quote("$40");
     *     returns 1: '\$40'
     *     example 2: preg_quote("*RRRING* Hello?");
     *     returns 2: '\*RRRING\* Hello\?'
     *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
     *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
     */
    "pregQuote": function(str) {
        return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
    },
    /**
     * Gee, I wonder what this does.
     * 
     * @param string msg
     */
    'debug': function(msg) {
        if (overviewerConfig.map.debug) {
            console.log(msg);
        }
    },
    /**
     * Simple helper function to split the query string into key/value
     * pairs. Doesn't do any type conversion but both are lowercase'd.
     * 
     * @return Object
     */
    'parseQueryString': function() {
        let results = {};
        let queryString = location.search.substring(1);
        let pairs = queryString.split('&');
        for (i in pairs) {
            let pos = pairs[i].indexOf('=');
            let key = pairs[i].substring(0,pos).toLowerCase();
            let value = pairs[i].substring(pos+1).toLowerCase();
            overviewer.util.debug( 'Found GET paramter: ' + key + ' = ' + value);
            results[key] = value;
        }
        return results;
    },
    'getDefaultMapTypeId': function() {
        return overviewer.collections.mapTypeIds[0];
    },
    /**
     * helper to get map LatLng from world coordinates takes arguments in
     * X, Y, Z order (arguments are *out of order*, because within the
     * function we use the axes like the rest of Minecraft Overviewer --
     * with the Z and Y flipped from normal minecraft usage.)
     * 
     * @param int x
     * @param int z
     * @param int y
     * @param TileSetModel model
     * 
     * @return google.maps.LatLng
     */
    'fromWorldToLatLng': function(x, y, z, tset) {

        let zoomLevels = tset.zoomLevels;
        let north_direction = tset.north_direction;

        // the width and height of all the highest-zoom tiles combined,
        // inverted
        let perPixel = 1.0 / (overviewerConfig.CONST.tileSize *
                Math.pow(2, zoomLevels));

        if (north_direction == overviewerConfig.CONST.UPPERRIGHT){
            temp = x;
            x = -z+15;
            z = temp;
        } else if(north_direction == overviewerConfig.CONST.LOWERRIGHT){
            x = -x+15;
            z = -z+15;
        } else if(north_direction == overviewerConfig.CONST.LOWERLEFT){
            temp = x;
            x = z;
            z = -temp+15;
        }

        // This information about where the center column is may change with
        // a different drawing implementation -- check it again after any
        // drawing overhauls!

        // point (0, 0, 127) is at (0.5, 0.0) of tile (tiles/2 - 1, tiles/2)
        // so the Y coordinate is at 0.5, and the X is at 0.5 -
        // ((tileSize / 2) / (tileSize * 2^zoomLevels))
        // or equivalently, 0.5 - (1 / 2^(zoomLevels + 1))
        let lng = 0.5 - (1.0 / Math.pow(2, zoomLevels + 1));
        let lat = 0.5;

        // the following metrics mimic those in
        // chunk_render in src/iterate.c

        // each block on X axis adds 12px to x and subtracts 6px from y
        lng += 12 * x * perPixel;
        lat -= 6 * x * perPixel;

        // each block on Y axis adds 12px to x and adds 6px to y
        lng += 12 * z * perPixel;
        lat += 6 * z * perPixel;

        // each block down along Z adds 12px to y
        lat += 12 * (256 - y) * perPixel;

        // add on 12 px to the X coordinate to center our point
        lng += 12 * perPixel;

        return [-lat*overviewerConfig.CONST.tileSize, lng*overviewerConfig.CONST.tileSize]
    },
    /**
     * The opposite of fromWorldToLatLng
     * NOTE: X, Y and Z in this function are Minecraft world definitions
     * (that is, X is horizontal, Y is altitude and Z is vertical).
     * 
     * @param float lat
     * @param float lng
     * 
     * @return Array
     */
    'fromLatLngToWorld': function(lat, lng, tset) {
        let zoomLevels = tset.zoomLevels;
        let north_direction = tset.north_direction;

        lat = -lat/overviewerConfig.CONST.tileSize;
        lng = lng/overviewerConfig.CONST.tileSize;

        // lat lng will always be between (0,0) -- top left corner
        //                                (-384, 384) -- bottom right corner

        // Initialize world x/y/z object to be returned
        let point = Array();
        point.x = 0;
        point.y = 64;
        point.z = 0;

        // the width and height of all the highest-zoom tiles combined,
        // inverted
        let perPixel = 1.0 / (overviewerConfig.CONST.tileSize *
                Math.pow(2, zoomLevels));

        // Revert base positioning
        // See equivalent code in fromWorldToLatLng()
        lng -= 0.5 - (1.0 / Math.pow(2, zoomLevels + 1));
        lat -= 0.5;

        // I'll admit, I plugged this into Wolfram Alpha:
        //   a = (x * 12 * r) + (z * 12 * r), b = (z * 6 * r) - (x * 6 * r)
        // And I don't know the math behind solving for for X and Z given
        // A (lng) and B (lat).  But Wolfram Alpha did. :)  I'd welcome
        // suggestions for splitting this up into long form and documenting
        // it. -RF
        point.x = Math.floor((lng - 2 * lat) / (24 * perPixel));
        point.z = Math.floor((lng + 2 * lat) / (24 * perPixel));

        // Adjust for the fact that we we can't figure out what Y is given
        // only latitude and longitude, so assume Y=64. Since this is lowering
        // down from the height of a chunk, it depends on the chunk height as
        // so:
        point.x += 256-64;
        point.z -= 256-64;

        if(north_direction == overviewerConfig.CONST.UPPERRIGHT){
            temp = point.z;
            point.z = -point.x+15;
            point.x = temp;
        } else if(north_direction == overviewerConfig.CONST.LOWERRIGHT){
            point.x = -point.x+15;
            point.z = -point.z+15;
        } else if(north_direction == overviewerConfig.CONST.LOWERLEFT){
            temp = point.z;
            point.z = point.x;
            point.x = -temp+15;
        }

        return point;
    },
    'initHash': function() {
        let newHash = window.location.hash;
        if (overviewer.util.lastHash !== newHash) {
            overviewer.util.lastHash = newHash;
            if(newHash.split("/").length > 1) {
                overviewer.util.goToHash();
                // Clean up the hash.
                overviewer.util.updateHash();
                return true;
            } else {
                return false; // signal to caller that we didn't goto any hash
            }
        }
    },
    'setHash': function(x, y, z, zoom, w, maptype)    {
        // save this info is a nice easy to parse format
        let newHash = "#/" + Math.floor(x) + "/" + Math.floor(y) + "/" + Math.floor(z) + "/" + zoom + "/" + encodeURI(w) + "/" + encodeURI(maptype);
        overviewer.util.lastHash = newHash; // this should not trigger initHash
        window.location.replace(newHash);
    },
    'updateHash': function() {
        // name of current world
        let currWorld = overviewer.current_world;
        if (currWorld == null) {return;}

        let currTileset = overviewer.current_layer[currWorld];
        if (currTileset == null) {return;}

        let ovconf = currTileset.tileSetConfig;

        let coordinates = overviewer.util.fromLatLngToWorld(overviewer.map.getCenter().lat, 
                overviewer.map.getCenter().lng,
                ovconf);
        let zoom = overviewer.map.getZoom();

        if (zoom == ovconf.maxZoom) {
            zoom = 'max';
        } else if (zoom == ovconf.minZoom) {
            zoom = 'min';
        } else {
            // default to (map-update friendly) negative zooms
            zoom -= ovconf.maxZoom;
        }
        overviewer.util.setHash(coordinates.x, coordinates.y, coordinates.z, zoom, currWorld, ovconf.name);
    },
    'goToHash': function() {
        // Note: the actual data begins at coords[1], coords[0] is empty.
        let coords = window.location.hash.split("/");


        let zoom;
        let world_name = null;
        let tileset_name = null;
        // The if-statements try to prevent unexpected behaviour when using incomplete hashes, e.g. older links
        if (coords.length > 4) {
            zoom = coords[4];
        }
        if (coords.length > 6) {
            world_name = decodeURI(coords[5]);
            tileset_name = decodeURI(coords[6]);
        }

        let target_layer = overviewer.collections.mapTypes[world_name][tileset_name];
        let ovconf = target_layer.tileSetConfig;

        let latlngcoords = overviewer.util.fromWorldToLatLng(parseInt(coords[1]), 
                parseInt(coords[2]), 
                parseInt(coords[3]),
                ovconf);

        if (zoom == 'max') {
            zoom = ovconf.maxZoom;
        } else if (zoom == 'min') {
            zoom = ovconf.minZoom;
        } else {
            zoom = parseInt(zoom);
            if (zoom < 0) {
                // if zoom is negative, treat it as a "zoom out from max"
                zoom += ovconf.maxZoom;
            } else {
                // fall back to default zoom
                zoom = ovconf.defaultZoom;
            }
        }

        // clip zoom
        if (zoom > ovconf.maxZoom)
            zoom = ovconf.maxZoom;
        if (zoom < ovconf.minZoom)
            zoom = ovconf.minZoom;

        // build a fake event for the world switcher control
        overviewer.worldCtrl.onChange({target: {value: world_name}});
        overviewer.worldCtrl.select.value = world_name;
        if  (!overviewer.map.hasLayer(target_layer)) {
            overviewer.map.addLayer(target_layer);
        }

        overviewer.map.setView(latlngcoords, zoom);

        if (ovconf.showlocationmarker) {
            let locationIcon = L.icon({
                iconUrl: overviewerConfig.CONST.image.queryMarker,
                iconRetinaUrl: overviewerConfig.CONST.image.queryMarker2x,
                iconSize: [32, 37],
                iconAnchor: [15, 33],
            });
            let locationm = L.marker(latlngcoords, {  icon: locationIcon,
                                                title: "Linked location"});
            overviewer.collections.locationMarker = locationm
            overviewer.collections.locationMarker.on('contextmenu', function(ev) {
               overviewer.collections.locationMarker.remove();
            });
            overviewer.collections.locationMarker.on('click', function(ev) {
                overviewer.map.setView(ev.latlng);
            });
            overviewer.collections.locationMarker.addTo(overviewer.map);
        }
    },
    /**
     * Generate a function to get the path to a tile at a particular location
     * and zoom level.
     *
     * @param string path
     * @param string pathBase
     * @param string pathExt
     */
    'getTileUrlGenerator': function(path, pathBase, pathExt) {
        return function(o) {
            let url = path;
            let zoom = o.z;
            let urlBase = ( pathBase ? pathBase : '' );
            if(o.x < 0 || o.x >= Math.pow(2, zoom) ||
                o.y < 0 || o.y >= Math.pow(2, zoom)) {
                url += '/blank';
            } else if(zoom === 0) {
                url += '/base';
            } else {
                for(let z = zoom - 1; z >= 0; --z) {
                    let x = Math.floor(o.x / Math.pow(2, z)) % 2;
                    let y = Math.floor(o.y / Math.pow(2, z)) % 2;
                    url += '/' + (x + 2 * y);
                }
            }
            url = url + '.' + pathExt;
            if(typeof overviewerConfig.map.cacheTag !== 'undefined') {
                url += '?c=' + overviewerConfig.map.cacheTag;
            }
            return(urlBase + url);
        };
    }
};