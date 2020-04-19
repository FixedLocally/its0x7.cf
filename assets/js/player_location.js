let player_markers = [];
let uuids = {};

function img_fill_uuid(marker, player) {
	// get uuid from mojang
	$.get('https://api.mojang.com/users/profiles/minecraft/' + player.name, function(data) {
		// remove marker
		marker.remove();
		player_markers = player_markers.filter(v => v != marker);
		// construct a new one and add it
		uuids[player.name] = data.id;
		add_player_marker(player);
	});
}

function getMyLocation() {
	player_markers.map(v => v.remove());
	player_markers = [];
	$.get('https://api.wynncraft.com/map/getMyLocation', function (data) {
		add_player_marker(data);
		for (let i = data.party.length - 1; i >= 0; i--) {
			add_player_marker(data.party[i]);
		}
	});
	setTimeout(getMyLocation, 5000);
}

function add_player_marker(data) {
	let ovconf = overviewer.current_layer[overviewer.current_world].tileSetConfig;
	let latLng = overviewer.util.fromWorldToLatLng(data.x, data.y, data.z, ovconf);
	let uuid = uuids[data.name] || '';
	let mi = L.icon({
		iconUrl: 'https://visage.surgeplay.com/face/32/' + uuid, 
		iconRetinaUrl: 'https://visage.surgeplay.com/face/32/' + uuid,
		iconSize: [32, 32]
	});
	let m = L.marker(latLng, {
		icon: mi, 
		title: data.name,
		zIndexOffset: 99999
	});
	m.addTo(overviewer.map);
	player_markers.push(m);
	if (!uuid.length) {
		img_fill_uuid(m, data);
	}
}

getMyLocation();