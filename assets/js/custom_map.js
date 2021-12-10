function load_map() {
    window.map = L.map("mcmap", {
        center: [0, 0],
        zoom: 7
    })
    L.tileLayer('tile.php?z={z}&x={x}&y={y}', {
        minZoom: 7, maxZoom: 14,
        attribution: 'My Tile Server'
    }).addTo(map);
}