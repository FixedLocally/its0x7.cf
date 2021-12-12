let guildColours = {
    'DiamondDeities': '00ffff', // updated
    'Sins of Seedia': '540a0a', // updated
    'IceBlue Team': '71368a',
    'TheNoLifes': '1f8b4c',
    'Blacklisted': '2186f0', // updated
    'HackForums': 'ba1afb', // updated
    'Titans Valor': 'edac3d',
    'Wrath Of Poseidon': '11f024', // updated
    'Spectral Cabbage': 'cccccc', // updated
    'Imperial': 'ff0000', // updated
    'Avicia': '1010fe', // updated
    'Kingdom Foxes': 'ff8800', // updated
    'Empire of Sindria': '98ff98', // updated
    'ShadowFall': '440066', // updated
    'Phantom Hearts': 'ac4648', // updated
    'Lux Nova': 'a049b8', // updated
    'The Simple Ones': '0fcad6', // updated
    'Emorians': '1b5ff1',
    'Paladins United': 'c7b3f0',
    'Achte Shadow': '80181d',
    'The Aquarium': '0098ff',
    'Nerfuria': 'cb70ff',
    'Show/Hide all': '000000', // special
};

function load_map() {
    const showHideAll = "Show/Hide all";
    let Position = L.Control.extend({
        _container: null,
        options: {
            position: 'bottomleft'
        },

        onAdd: function () {
            let latlng = L.DomUtil.create('div', 'leaflet-control leaflet-control-attribution');
            this._latlng = latlng;
            return latlng;
        },

        updateHTML: function(lat, lng) {
            this._latlng.innerHTML = `X: ${Math.floor(lat)} Y: ${Math.floor(lng)}`;
        }
    });
    let terrGuilds = {};
    let polygons = {};
    let cdTerrs = {};
    let hiddenGuilds = [];
    let trackingMode = 0; // -1: hide all; 0: show all; (text): stalking

    let map = L.map("mcmap", {
        center: [0, 0],
        zoom: 6,
        zoomControl: false,
    });
    L.tileLayer('/assets/tiles/2d/{z}/{x}/{y}.png', {
        minZoom: 5, maxZoom: 14,
        attribution: 'Wynncraft'
    }).addTo(map);
    new L.Control.Zoom({ position: 'topright' }).addTo(map);
    // position
    let position = new Position();
    map.addControl(position);
    map.on("mousemove", function (event) {
        let coords = latLngToCoords(event.latlng);
        position.updateHTML(coords[0], coords[1])
    });
    // draw test territory
    // createPolygon({"startX":-1212,"startY":-2576,"endX":-1001,"endY":-2342});
    // initial request to wynn api
    updateMap(true);

    function updateMap(init) {
        console.log(new Date, "updating map");
        fetch("https://api.wynncraft.com/public_api.php?action=territoryList")
            .then(r => r.json())
            .then(function (res) {
                let terrs = res.territories;
                let guildTerrCount = {};
                let terrCount = 0;
                let guildCount = 0;
                for (let i in terrs) {
                    if (!terrs.hasOwnProperty(i)) {
                        continue;
                    }
                    if (!terrs[i].guild) {
                        terrs[i].guild = "none";
                    }
                    let guild = terrs[i].guild;
                    if (guild !== terrGuilds[i]) {
                        if (!init) console.log(`${i}: ${terrGuilds[i]} -> ${guild}`);
                        if (polygons[i]) polygons[i].remove();
                        let polygon = createPolygon(terrs[i]);
                        polygon.territory = terrs[i];
                        if (shouldShowGuild(guild)) {
                            polygon.addTo(map);
                        }
                        polygons[i] = polygon;
                        terrGuilds[i] = guild;
                    }
                    guildTerrCount[guild] = guildTerrCount[guild] || (++guildCount, 0);
                    ++guildTerrCount[guild];
                    ++terrCount;
                }
                // terr distribution
                $("#terrs_occupied").html(terrCount);
                $("#guilds_with_terrs").html(guildCount);
                let terrCountDiv = $("#terr_counts");
                let terrRows = [];
                terrCountDiv.empty();
                for (let i in guildTerrCount) {
                    if (!guildTerrCount.hasOwnProperty(i)) {
                        continue;
                    }
                    terrRows.push([i, guildTerrCount[i]]);
                }
                terrRows.sort((a, b) => b[1] - a[1]);
                for (let i in terrRows) {
                    let guild = terrRows[i][0];
                    let count = terrRows[i][1];
                    appendTerrCountRow(guild, count, guildColours[guild], terrCountDiv);
                }
                appendTerrCountRow(showHideAll, -1, "000000", terrCountDiv);
                $(".terr_row").click(function (e) {
                    let guild = e.target.attributes["data-guild"].value;
                    if (guild.indexOf("/") > -1) {
                        if (trackingMode !== 0 || hiddenGuilds.length) {
                            hiddenGuilds = [];
                            setTrackingMode(0);
                        } else {
                            setTrackingMode(-1)
                        }
                    } else {
                        if (trackingMode === -1) {
                            setTrackingMode(guild);
                            return;
                        }
                        if (trackingMode === 0) {
                            if (hiddenGuilds.indexOf(guild) < 0) {
                                hiddenGuilds.push(guild);
                                for (let i in polygons) {
                                    if (polygons[i].territory.guild === guild) {
                                        polygons[i].remove();
                                    }
                                }
                            } else {
                                hiddenGuilds = hiddenGuilds.filter(x => x !== guild);
                                for (let i in polygons) {
                                    if (polygons[i].territory.guild === guild) {
                                        polygons[i].addTo(map);
                                    }
                                }
                            }
                            updateTerrRows();
                            return;
                        }
                        if ("string" === typeof trackingMode) {
                            let guilds = $(".terr_row").map((i, v) => $(v).attr("data-guild")).toArray();
                            let toRemove = [trackingMode, guild, showHideAll];
                            hiddenGuilds = guilds.filter(x => toRemove.indexOf(x) < 0);
                            setTrackingMode(0);
                        }
                    }
                });
                if (init) updatePopups();
                setTimeout(updateMap, 30000);
            });
    }

    function setTrackingMode(newMode) {
        trackingMode = newMode;
        console.log(trackingMode, hiddenGuilds);
        for (let i in polygons) {
            polygons[i].remove();
        }
        for (let i in polygons) {
            if (shouldShowGuild(polygons[i].territory.guild)) {
                polygons[i].addTo(map);
            }
        }
        if ("string" === typeof trackingMode) {
            for (let i in polygons) {
                if (polygons[i].territory.guild === trackingMode) {
                    polygons[i].addTo(map);
                }
            }
        }
        updateTerrRows();
    }

    function updateTerrRows() {
        let terrRows = $('.terr_row');
        terrRows.map((i, v) => {
            let guild =  v.attributes["data-guild"].value;
            if (shouldShowGuild(guild)) {
                $(v).find("span.dot").css("background-color", `#${guildColours[guild]}`);
            } else {
                $(v).find("span.dot").css("background-color", "white");
            }
        });
    }

    function appendTerrCountRow(guild, count, colour, div) {
        let html = `<p class="terr_row"><span class="dot" style="background-color: #${colour}; border: 2px solid #${colour}"></span> ${guild}: ${count}</p>`;
        if (count <= 0) {
            html = html.replace(/: [\-0-9]+</, '<');
        }
        let row = $(html);
        row.attr("data-guild", guild);
        if (!shouldShowGuild(guild)) {
            row.find("span.dot").css("background-color", "white")
        }
        row.appendTo(div);
    }

    function shouldShowGuild(guild) {
        if (trackingMode === 0) return hiddenGuilds.indexOf(guild) < 0 && (guild !== showHideAll || hiddenGuilds.length === 0);
        if (trackingMode === -1) return false;
        return guild === trackingMode;
    }

    function updatePopups() {
        for (let name in polygons) {
            let polygon = polygons[name];
            let wasCd = cdTerrs[polygon.territory.territory] || false;
            let heldFor = 1*new Date - polygon.acquired;
            let isCd = heldFor < 600000;
            cdTerrs[polygon.territory.territory] = isCd;
            polygon.bindPopup(`${polygon.territory.territory}<br>Controlled by ${polygon.territory.guild}<br>For ${formatDuration(heldFor)}`);
            if (isCd !== wasCd) {
                let guild = polygon.territory.guild;
                let baseStyle = {
                    color: `#${guildColours[guild]}`,
                    fillOpacity: 0.25,
                    strokeOpacity: 0.8,
                    stroke: true,
                    fill: true,
                    interactive: true,
                    map: map,
                    name: polygon.territory.territory,
                };
                if (isCd) {
                    baseStyle.fillColor = "#ff8080";
                    baseStyle.dashArray = 7;
                    polygon.setStyle(baseStyle);
                } else {
                    baseStyle.fillColor = baseStyle.color;
                    baseStyle.dashArray = null;
                    polygon.setStyle(baseStyle);
                }
            }
        }
        setTimeout(updatePopups, 1000);
    }

    function formatDuration(millis) {
        let days = Math.floor(millis / 86400000);
        let hours = Math.floor(millis / 3600000) % 24;
        let minutes = Math.floor(millis / 60000) % 60;
        let seconds = Math.floor(millis / 1000) % 60;
        let s = '';
        if (days > 0) {
            s += `${days} day${days !== 1 ? "s" : ""}, `;
        }
        if (hours > 0) {
            s += `${hours} hour${hours !== 1 ? "s" : ""}, `;
        }
        if (minutes > 0) {
            s += `${minutes} minute${minutes !== 1 ? "s" : ""} and `;
        }
        s += `${seconds} second${seconds !== 1 ? "s" : ""}`;
        return s;
    }

    function latLngToCoords(latLng) {
        let lat=latLng.lat;
        let lng=latLng.lng;
        let proj = map.project([lat, lng], 7)
        return [proj.x, proj.y].map(x => x-16384).map(x => x*2).map((x, i) => x+[0,-3072][i]);
    }

    function coordsToLatLng(coords) {
        return map.unproject(coords.map((x, i) => x-[0, -3072][i]).map(x => x/2).map(x => x+16384), 7)
    }

    function createPolygon(territory) {
        let sx = territory.location.startX;
        let sy = territory.location.startY;
        let ex = territory.location.endX;
        let ey = territory.location.endY;
        let guild = territory.guild;
        let paths = [];
        paths.push(coordsToLatLng([sx, sy]));
        paths.push(coordsToLatLng([sx, ey]));
        paths.push(coordsToLatLng([ex, ey]));
        paths.push(coordsToLatLng([ex, sy]));
        let acquiredDate = new Date(territory.acquired);
        let acquired = 1*acquiredDate - acquiredDate.getTimezoneOffset() * 60000;
        let heldTime = 1*new Date - acquired;
        let colour = guildColours[guild] || (guildColours[guild] = generateColor(guild));
        let polygon = L.polygon(paths, {
            color: `#${colour}`,
            fillOpacity: 0.25,
            fillColor: heldTime < 600000 ? "#ff8080" : `#${colour}`,
            dashArray: heldTime < 600000 ? 7 : null,
            strokeOpacity: 0.8,
            stroke: true,
            fill: true,
            interactive: true,
            map: map,
            name: territory.territory,
        });
        polygon.acquired = acquired;
        return polygon;
    }

    function generateColor(guild) {
        let hash = 0, i, chr;
        if (guild.length === 0) return hash;
        for (i = 0; i < guild.length; i++) {
            chr   = guild.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash.toString(16).padStart(9, "0").substr(3);
    }
}