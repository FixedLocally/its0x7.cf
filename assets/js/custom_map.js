let guildColours = {
    'DiamondDeities': '00ffff', // updated
    'Sins of Seedia': '540a0a', // updated
    'Fantasy': '21c8ec', // updated
    'IceBlue Team': '71368a',
    'TheNoLifes': '1f8b4c',
    'BuildCraftia': '6ae468',
    'Blacklisted': '2186f0', // updated
    'HackForums': 'ba1afb', // updated
    'Titans Valor': 'edac3d',
    'Achte Shadow': 'e2f4aa', // updated
    'Beyond the Scene': '784ca5', // updated
    'Wrath Of Poseidon': '11f024', // updated
    'FinalFront': '0c298e', // updated
    'Spectral Cabbage': 'cccccc', // updated
    'Imperial': 'ff0000', // updated
    'Mystica': '2c007a', // updated
    'Fake News': 'ffd700', // updated
    'VietCong': '5eac3d', // updated
    'Avicia': '1010fe', // updated
    'Kingdom Foxes': 'ff8800', // updated
    'Empire of Sindria': '98ff98', // updated
    'Angels of Eternal': '006600', // updated
    'ShadowFall': '440066', // updated
    'Phantom Hearts': 'ac4648', // updated
    'Lux Nova': 'a049b8', // updated
    'The Simple Ones': '0fcad6', // updated
    'Emorians': 'ffffdd',
};

function load_map() {
    let Position = L.Control.extend({
        _container: null,
        options: {
            position: 'bottomleft'
        },

        onAdd: function (map) {
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

    let map = L.map("mcmap", {
        center: [0, 0],
        zoom: 7
    })
    L.tileLayer('tile.php?z={z}&x={x}&y={y}', {
        minZoom: 7, maxZoom: 14,
        attribution: 'Wynncraft'
    }).addTo(map);
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
                for (let i in terrs) {
                    if (terrs.hasOwnProperty(i)) {
                        let guild = terrs[i].guild;
                        if (guild !== terrGuilds[i]) {
                            if (!init) console.log(`${i}: ${terrGuilds[i]} -> ${guild}`);
                            if (polygons[i]) polygons[i].remove();
                            let polygon = createPolygon(terrs[i]);
                            polygon.territory = terrs[i];
                            polygon.addTo(map);
                            polygons[i] = polygon;
                            terrGuilds[i] = guild;
                        }
                    }
                }
                if (init) updatePopups();
                setTimeout(updateMap, 30000);
            });
    }

    function updatePopups() {
        for (let name in polygons) {
            let polygon = polygons[name];
            let wasCd = cdTerrs[polygon.territory.territory] || false;
            let heldFor = 1*new Date - polygon.acquired;
            let isCd = heldFor < 600000;
            cdTerrs[polygon.territory.territory] = isCd;
            polygon.bindPopup(`Controlled by ${polygon.territory.guild}<br>For ${formatDuration(heldFor)}`);
            if (isCd !== wasCd) {
                let guild = polygon.territory.guild;
                let baseStyle = {
                    color: `#${guildColours[guild] || generateColor(guild)}`,
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
        let polygon = L.polygon(paths, {
            color: `#${guildColours[guild] || generateColor(guild)}`,
            fillOpacity: 0.25,
            fillColor: heldTime < 600000 ? "#ff8080" : `#${guildColours[guild] || generateColor(guild)}`,
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

    function labelHtml(title, fontsize, color) {
        let t = '<div style="text-align:center; z-index:203; position: absolute; left: -50px; top:-10px;">';
        t += '<span style="position: relative;';
        t += 'white-space: nowrap; font-weight: bold;';
        t += 'font-family: sans-serif; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 3px 3px 3px #000;';
        t += 'text-align: center; color:' + color + ';font-size:' + fontsize + 'px;"';
        t += '>' + title + '</span></div>';
        return t;
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