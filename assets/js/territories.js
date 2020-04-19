!function(n){"use strict";function t(n,t){let r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;let e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){let t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){let t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;let e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){let r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){let t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);

// guild colours
let guild_colours = {
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
};

let name_labels = [];
let terr_labels = [];
let terr_counts = {};
let show_terrs = [true, true]; // boxes, names
let hidden_guilds = [];
let tracking_guild;

// util functions
// function generate_colour(guild) {
// 	let rgb = [0, 0, 0];
// 	let len = guild.length;
// 	for (let i = 0; i < 9; ++i) {
// 		rgb[(i + 1) % 3] ^= guild.charCodeAt(i % len);
// 		rgb[(i + 1) % 3] += guild.charCodeAt(i % len);
// 	}
// 	rgb = rgb.map(x => Math.max(48, x & 0xff)).map(x => ('00' + x.toString(16)).substr(-2));
// 	return rgb.join("");
// }
function generate_colour(guild) {
	return md5(guild).substr(0, 6);
}

function getLatLng(x, z) {
	let ovconf = overviewer.current_layer[overviewer.current_world].tileSetConfig;
	return overviewer.util.fromWorldToLatLng(x, 48, z, ovconf);
}

function getCenter(location) {
	let ovconf = overviewer.current_layer[overviewer.current_world].tileSetConfig;
	let x = location.endX - location.startX;
	let z = location.endZ - location.startZ;
	return overviewer.util.fromWorldToLatLng(location.startX + Math.floor(x / 2), 48, location.startZ + Math.floor(z / 2), ovconf);
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

function terr_count_row(guild, count, color) {
	let html = '<p class="terr_row"><span class="dot" style="background-color: %s; border: 2px solid %s" data-guild="%s"></span> %s: %s</p>'.replace('%s', color).replace('%s', color).replace('%s', guild).replace('%s', guild).replace('%s', count);
	if (count <= 0) {
		html = html.replace(/: [\-0-9]+</, '<');
		console.log(html);
	}
	let row = $(html);
	let span_dot = row.find("span.dot");
	if (tracking_guild && guild !== tracking_guild && !hidden_guilds.includes(guild)) {
		// hide all that arent that tracked guild
		hidden_guilds.push(guild);
	}
	if (count > 0) {
		span_dot.click(function(evt) {
			let dot = $(evt.target);
			let guild = dot.attr('data-guild');
			if (dot.hasClass('_hidden')) {
				// show
				dot.removeClass('_hidden');
				hidden_guilds = hidden_guilds.filter(v => v !== guild);
				if (!hidden_guilds.length) {
					$('#terr_counts > p > span.dot[data-guild="Show/Hide all"]').removeClass('_hidden');
				}
				if (show_terrs[0]) {
					for (let i in terr_labels) {
						if (terr_labels[i].guild === guild) {
							terr_labels[i].addTo(overviewer.map);
						}
					}
					if (show_terrs[1]) {
						for (let i in name_labels) {
							if (name_labels[i].guild === guild) {
								name_labels[i].addTo(overviewer.map);
							}
						}
					}
				}
			} else {
				// hide
				dot.addClass('_hidden');
				hidden_guilds.push(guild);
				$('#terr_counts > p > span.dot[data-guild="Show/Hide all"]').addClass('_hidden');
				for (let i in name_labels) {
					if (name_labels[i].guild === guild) {
						name_labels[i].remove();
					}
				}
				for (let i in terr_labels) {
					if (terr_labels[i].guild === guild) {
						terr_labels[i].remove();
					}
				}
			}
			let non_hidden_dots = $('#terr_counts > p > span.dot').not('._hidden');
			if (non_hidden_dots.length === 1) {
				tracking_guild = non_hidden_dots.attr("data-guild");
			} else {
				tracking_guild = undefined;
			}
		});
	} else {
		// under no conditions we should 'click' the last button
		span_dot.click(function (evt) {
			if (!evt.originalEvent) {
				return;
			}
			let dot = $(evt.target);
			if (dot.hasClass('_hidden')) {
				// show all
				dot.removeClass('_hidden');
				hidden_guilds = [];
				$('#terr_counts > p > span.dot._hidden').click();
			} else {
				// hide all
				dot.addClass('_hidden');
				$('#terr_counts > p > span.dot').not('._hidden').click();
			}
		});
		if (hidden_guilds.length) {
			span_dot.addClass('_hidden');
		}
	}
	if (hidden_guilds.includes(span_dot.attr("data-guild"))) {
		span_dot.click();
	}
	row.appendTo($('#terr_counts'));
}

function draw_terrs() { 
	fetch("https://api.wynncraft.com/public_api.php?action=territoryList").then(resp => resp.json()).then(function(resp) {
		let terrs = resp.territories;
		terr_counts = {};
		for (let key in terrs) {
			if (!terrs.hasOwnProperty(key)) {
				continue;
			}
			let paths = [];
			let terr = terrs[key];
			let color = '#' + (guild_colours[terr.guild] || generate_colour(terr.guild));
			let name = terr.territory;
			if (!terr_labels[name] || terr_labels[name].guild !== terr.guild) {
				console.log(name, ':', (terr_labels[name] || {}).guild, '->', terr.guild);
				if (!global_territories[name]) continue;
				paths.push(getLatLng(global_territories[name].startX, global_territories[name].startZ));
				paths.push(getLatLng(global_territories[name].endX, global_territories[name].startZ));
				paths.push(getLatLng(global_territories[name].endX, global_territories[name].endZ));
				paths.push(getLatLng(global_territories[name].startX, global_territories[name].endZ));
				let polygon = L.polygon(paths, {
					fillColor: color,
					fillOpacity: 0.25,
					color: color,
					strokeOpacity: 0.8,
					stroke: true,
					fill: true,
					interactive: true,
					map: overviewer.map,
					name: name
				});
				polygon.terr = name;
				polygon.guild = terr.guild;
				polygon.bindPopup(`${name}<br>Controlled by ${terr.guild}`);
				polygon.on('click', label_onclick);
				terr_labels[name] && terr_labels[name].remove();
				terr_labels[name] = polygon;

				let nlCoords = getCenter(global_territories[name]);
				let nameLabel = new L.DivIcon({
					html: labelHtml(name + '<div>' + terr.guild + '</div>', 12, color),
					className: 'wctlabel',
					iconSize: [0,0]
				});
				let nlm = L.marker(nlCoords, {icon:nameLabel, zIndexOffset: 204});
				nlm.terr = name;
				nlm.guild = terr.guild;
				nlm.on('click', label_onclick);
				name_labels[name] && name_labels[name].remove();
				name_labels[name] = nlm;
			}

			
			terr_counts[terr.guild] = (terr_counts[terr.guild] || 0) + 1;
		}
		if (show_terrs[0]) {
			for (let i in terr_labels) {
				if (!hidden_guilds.includes(terr_labels[i].guild)) {
					terr_labels[i].addTo(overviewer.map);
				}
			}
			if (show_terrs[1]) {
				for (let i in name_labels) {
					if (!hidden_guilds.includes(name_labels[i].guild)) {
						name_labels[i].addTo(overviewer.map);
					}
				}
			}
		}
		let _terr_counts = [];
		for (let i in terr_counts) {
			_terr_counts.push({guild: i, count: terr_counts[i]});
		}
		_terr_counts.sort((a, b) => (b.count - a.count) || a.guild.localeCompare(b.guild));
		$('#terr_counts').empty();
		for (let i in _terr_counts) {
			let color = '#' + (guild_colours[_terr_counts[i].guild] || generate_colour(_terr_counts[i].guild));
			terr_count_row(_terr_counts[i].guild, _terr_counts[i].count, color);
		}
		terr_count_row('Show/Hide all', -1, '#000000');
		hidden_guilds.sort();
		hidden_guilds = hidden_guilds.filter((v, i, arr) => arr[i-1] !== v);
		$('#terrs_ocupied').html(409 - (_terr_counts['Nobody'] || 0));
		let count = 0;
		for (let i in _terr_counts) {
			if (_terr_counts[i].guild !== 'Nobody') {
				++count;
			}
		}
		$('#guilds_with_terrs').html(count);
	});
	setTimeout(draw_terrs, 30000);
}

function label_onclick(evt) {
	let terr = evt.target.terr;
	let guild = evt.target.guild;
	console.log(terr, guild);
} 

function zoomend() {
	if (overviewer.map._zoom < 5) {
		show_terrs[1] = false;
		for (let i in name_labels) {
			name_labels[i].remove();
		}
	} else {
		show_terrs[1] = true;
		for (let i in name_labels) {
			if (!hidden_guilds.includes(name_labels[i].guild)) {
				name_labels[i].addTo(overviewer.map);
			}
		}
	}
}

$(function() {
	setTimeout(function() {
		overviewer.map.on('zoomend', zoomend);
		zoomend();
	}, 500);
	window.addEventListener("beforeunload", function() {
		localStorage['hidden_guilds'] = JSON.stringify(hidden_guilds);
	});
	if (localStorage['hidden_guilds']) {
		hidden_guilds = JSON.parse(localStorage['hidden_guilds']);
	}
	draw_terrs();
});
