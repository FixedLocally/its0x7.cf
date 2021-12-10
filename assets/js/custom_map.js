function load_map() {
    let map = L.map("mcmap", {
        center: [0, 0],
        zoom: 7
    })
    L.tileLayer('tile.php?z={z}&x={x}&y={y}', {
        minZoom: 7, maxZoom: 14,
        attribution: 'My Tile Server'
    }).addTo(map);
    // log coords on right click
    map.on("contextmenu", function (event) {
        console.log(event.latlng);
        console.log(latLngToCoords(event.latlng));
    });
    // draw test territory
    createPolygon({"startX":-1212,"startY":-2576,"endX":-1001,"endY":-2342});

    function latLngToCoords(latLng) {
        let lat=latLng.lat;
        let lng=latLng.lng;
        let proj = map.project([lat, lng], 7)
        return [proj.x, proj.y].map(x => x-16384).map(x => x*2).map((x, i) => x+[0,-3072][i]);
    }

    function coordsToLatLng(coords) {
        return map.unproject(coords.map((x, i) => x-[0, -3072][i]).map(x => x/2).map(x => x+16384), 7)
    }

    function createPolygon(location) {
        let sx = location.startX;
        let sy = location.startY;
        let ex = location.endX;
        let ey = location.endY;
        let paths = [];
        paths.push(coordsToLatLng([sx, sy]));
        paths.push(coordsToLatLng([sx, ey]));
        paths.push(coordsToLatLng([ex, ey]));
        paths.push(coordsToLatLng([ex, sy]));
        let polygon = L.polygon(paths, {
            color: "#00ff00",
            fillOpacity: 0.25,
            fillColor: "#ff8080",
            dashArray: 7,
            strokeOpacity: 0.8,
            stroke: true,
            fill: true,
            interactive: true,
            map: map,
            name: "polygon1",
        });
        polygon.addTo(map);
    }
}