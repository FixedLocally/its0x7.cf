let guildColours = {
    "DiamondDeities": "00ffff", // updated
    "Sins of Seedia": "540a0a", // updated
    "IceBlue Team": "71368a",
    "TheNoLifes": "1f8b4c",
    "Blacklisted": "2186f0", // updated
    "HackForums": "ba1afb", // updated
    "Titans Valor": "edac3d",
    "Wrath Of Poseidon": "11f024", // updated
    "Spectral Cabbage": "cccccc", // updated
    "Imperial": "ff0000", // updated
    "Avicia": "1010fe", // updated
    "Kingdom Foxes": "ff8800", // updated
    "Empire of Sindria": "98ff98", // updated
    "ShadowFall": "440066", // updated
    "Phantom Hearts": "ac4648", // updated
    "Lux Nova": "a049b8", // updated
    "The Simple Ones": "0fcad6", // updated
    "Emorians": "1b5ff1",
    "Paladins United": "c7b3f0",
    "Achte Shadow": "80181d",
    "The Aquarium": "0098ff",
    "Nerfuria": "cb70ff",
    "Show/Hide all": "f0f0f0", // special
};

let FORMATTER_PERCENT = (x) => `+${Math.round(x * 100)}%`;  // weird shit like 4.4*100=440.000...
let FORMATTER_SECONDS = (x) => `${x} s`;
let FORMATTER_ID = (x) => `${x}`;
let FORMATTER_PERCENT_2DP = (x) => Number.isFinite(x) ? `(${Math.round(x * 10000) / 100}%)` : "(No Output)";
let FORMATTER_HOURS = (x) => `+${x} /h`;
let FORMATTER_PERCENT_HOUR = (x) => `+${x}% /h`
let PROPS = ["damage", "attack", "health", "defense", "minions", "multi", "aura", "volley", "res_storage", "em_storage", "eff_res", "eff_em", "res_rate", "em_rate", "gather_xp", "mob_xp", "mob_damage", "pvp_damage", "xp_seeking", "tome_seeking", "eme_seeking"];

let terrData = {"Air Temple Upper":{"routes":["Air Temple Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Maro Peaks":{"routes":["Skiens Island","Tree Island"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Plains":{"routes":["Maltic Plains","North Nivla Woods","South Farmers Valley","Nivla Woods Entrance","Arachnid Route"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Path To Thanos":{"routes":["Cinfras Thanos Transition","Thanos","Cinfras County Upper","Path To Ozoth's Spire Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Savannah West Lower":{"routes":["Ternaves Plains Upper","Savannah East Lower","Savannah West Upper","Detlas Savannah Transition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Durum Isles Upper":{"routes":["Selchar","Mage Island","Durum Isles Center","Nodguj Nation"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Selchar":{"routes":["Skiens Island","Durum Isles Upper","Rooster Island","Durum Isles Center","Durum Isles Lower"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Llevigar Plains West Lower":{"routes":["Llevigar Farm Plains West","Llevigar Plains East Lower","Llevigar Gate West","Llevigar Plains West Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nesaak Plains South East":{"routes":["Nesaak Village","Bob's Tomb","Nesaak Plains South West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Llevigar Plains East Lower":{"routes":["Llevigar Plains East Upper","Llevigar Plains West Lower","Orc Lake","Llevigar Farm Plains East"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Kander Mines":{"routes":["Path to Talor","Mesquis Tower","Dark Forest Village","Abandoned Manor"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp Dark Forest Transition Upper":{"routes":["Olux","Swamp Dark Forest Transition Mid","Taproot Descent"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Mine Base Plains":{"routes":["Plains Lake","The Silent Road","Mining Base Lower","Mining Base Upper","Ternaves Plains Lower","Detlas Savannah Transition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Detlas Savannah Transition":{"routes":["Detlas","Ternaves Plains Upper","Savannah West Lower","Mine Base Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Fortress South":{"routes":["Fortress North","Mansion of Insanity","Swamp Dark Forest Transition Lower","Orc Battlegrounds"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Aldorei Lowlands":{"routes":["Aldorei's River","Cinfras's Small Farm","Aldorei's Waterfall"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Llevigar Gate East":{"routes":["Llevigar Gate West","Orc Road","Llevigar Farm Plains East","Llevigar"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Viscera Pits West":{"routes":["Entrance to Kander","Lexdales Prison","Viscera Pits East","Twisted Ridge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Sanctuary Bridge":{"routes":["Nesaak Plains Upper North West","Time Valley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Desert West Upper":{"routes":["Desert Upper","Almuj City"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Maltic Plains":{"routes":["Ragni East Suburbs","Plains","Emerald Trail","Maltic","South Farmers Valley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Savannah West Upper":{"routes":["Cathedral Harbour","Savannah West Lower","Savannah East Upper","Bremminglar"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Mage Island":{"routes":["Half Moon Island","Santa's Hideout","Durum Isles Upper","Durum Isles East","Nodguj Nation"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Ahmsord":{"routes":["Path to Ahmsord Lower","Sky Island Ascent","Temple Island","Path to Ahmsord Upper","Central Islands"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp Mountain Transition Mid":{"routes":["Swamp Mountain Transition Lower","Swamp Mountain Transition Mid-Upper","Swamp West Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Bob's Tomb":{"routes":["Nesaak Plains South East","Nesaak Plains North East","Nesaak Village"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Fallen Factory":{"routes":["Factory Entrance","Ruined Houses","Corkus City South","Corkus Sea Port","Corkus Sea Cove"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Canyon Valley South":{"routes":["Canyon Mountain East","Bandit Cave Lower","Bandit Camp Exit"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Swamp East Lower":{"routes":["Swamp West Lower","Sunspark Camp","Llevigar Plains East Upper","Swamp East Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Path to Light":{"routes":["Azure Frontier","Otherwordly Monolith"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Corkus City":{"routes":["Corkus Castle","Corkus Forest North","Corkus Forest South","Corkus Countryside","Corkus City South"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Canyon Path North Mid":{"routes":["Canyon Path South West","Bandit Camp Exit","Canyon Waterfall Mid North","Canyon Entrance Waterfall"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"The Silent Road":{"routes":["The Broken Road","Mine Base Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"City of Troms":{"routes":["Temple of Legends","Jungle Lake","South Pigmen Ravines"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Gylia Lake South West":{"routes":["Dark Forest Cinfras Transition","Gylia Lake North West","Gylia Lake South East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Primal Fen":{"routes":["Field of Life"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Canyon Mountain East":{"routes":["Canyon Walk Way","Canyon Valley South"],"production":{"emerald":9000,"wood":0,"ore":7200,"fish":0,"crop":0}},"Dark Forest Cinfras Transition":{"routes":["Gylia Lake South West","Fallen Village","Cinfras Outskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Cliffside Lake":{"routes":["Cliffside Passage","Canyon Of The Lost"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Nemract Plains West":{"routes":["Nivla Woods Edge","Nemract Road","Nemract Quarry","Arachnid Route"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Twain Mansion":{"routes":["Twain Lake"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Savannah East Lower":{"routes":["Savannah West Lower","Ternaves","Savannah East Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp Lower":{"routes":["Swamp Mountain Base","Swamp Dark Forest Transition Lower","Iron Road","Entrance to Olux"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Bremminglar":{"routes":["Lion Lair","Savannah West Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Road To Light Forest":{"routes":["Fleris Trail","Leadin Fortress","Light Forest Entrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp East Mid-Upper":{"routes":["Swamp West Mid-Upper","Swamp Plains Basin","Swamp East Upper","Swamp East Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Thanos Valley West":{"routes":["Military Base Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Llevigar Entrance":{"routes":["Volcano Lower","Llevigar"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Volcanic Slope":{"routes":["Active Volcano","Lava Lake"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Durum Isles Center":{"routes":["Durum Isles Upper","Selchar","Durum Isles Lower","Durum Isles East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Canyon Waterfall North":{"routes":["Canyon Upper North West","Aldorei's Arch"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Gelibord Corrupted Farm":{"routes":["Twisted Housing","Gelibord","Gelibord Castle","Taproot Descent"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Pirate Town":{"routes":["Bloody Beach","Lost Atoll","Zhight Island","Volcano Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Fungal Grove":{"routes":["Old Crossroads North","Decayed Basin","Fallen Village","Cinfras Outskirts","Old Crossroads South"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Orc Road":{"routes":["Orc Lake","Loamsprout Camp","Llevigar Farm Plains East","Llevigar Gate East"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Llevigar Farm Plains East":{"routes":["Llevigar Farm Plains West","Llevigar Gate East","Llevigar Plains East Lower","Orc Road"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Old Crossroads North":{"routes":["Old Crossroads South","Fungal Grove","Lexdale","Path to Talor"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Corkus Docks":{"routes":["Corkus Mountain"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Canyon Upper North West":{"routes":["Canyon Waterfall North","Canyon Lower South East"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Ahmsord Outskirts":{"routes":["Central Islands","Angel Refuge","Wybel Island","Swamp Island"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Desert West Lower":{"routes":["Almuj City","Desert Lower","Desert Mid-Lower","Rymek West Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Swamp West Mid":{"routes":["Swamp West Lower","Swamp West Mid-Upper","Swamp East Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Krolton's Cave":{"routes":["Air Temple Lower","Wizard Tower North","Temple of the Lost East","Canyon Mountain South"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Royal Gate":{"routes":["Phinas Farm"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":7200,"crop":0}},"Paths of Sludge":{"routes":["Lutho","Toxic Drip"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Nesaak Plains Lower North West":{"routes":["Nesaak Village","Nesaak Plains Upper North West","Nesaak Plains Mid North West","Nesaak Plains South West","Nesaak Plains North East"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Lone Farmstead":{"routes":["Twisted Housing","Abandoned Manor","Gelibord"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Road to Elkurn":{"routes":["Elkurn","Elkurn Fields","South Nivla Woods","Nivla Woods Edge"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Rooster Island":{"routes":["Selchar","The Bear Zoo","Nemract Town","Durum Isles Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Dernel Jungle Mid":{"routes":["Dernel Jungle Upper","Dernel Jungle Lower","Jungle Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Swamp Plains Basin":{"routes":["Swamp East Mid-Upper","Swamp East Upper","Swamp Mountain Base","Entrance to Olux"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Final Step":{"routes":["Gateway to Nothing","Bizarre Passage"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Tree Island":{"routes":["Light Peninsula","Lost Atoll","Volcano Upper","Maro Peaks"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Canyon Dropoff":{"routes":["Mountain Path","Cliff Side of the Lost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Ancient Nemract":{"routes":["Cathedral Harbour","Nemract Road","Nemract Cathedral","Detlas Trail East Plains","Detlas Trail West Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Aldorei Valley Mid":{"routes":["Aldorei Valley Upper","Aldorei Valley Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Cinfras County Upper":{"routes":["Gylia Lake South East","Cinfras County Mid-Upper","Path To Thanos"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"South Farmers Valley":{"routes":["Maltic Plains","Maltic Coast","Plains","North Farmers Valley","Maltic"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Katoa Ranch":{"routes":["Ragni North Suburbs","Ragni North Entrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":7200}},"Decayed Basin":{"routes":["Heart of Decay","Mushroom Hill","Fungal Grove","Lexdale"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Ragni North Suburbs":{"routes":["Ragni North Entrance","Ragni Plains","Katoa Ranch"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Durum Isles Lower":{"routes":["Durum Isles Center","Selchar","Rooster Island","Cathedral Harbour"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Orc Battlegrounds":{"routes":["Leadin Fortress","Fortress South"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Thanos":{"routes":["Path To Thanos","Path To Military Base","Gylia Lake South East","Path To Ozoth's Spire Lower"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Path To Ozoth's Spire Lower":{"routes":["Military Base Lower","Thanos"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Worm Tunnel":{"routes":["The Broken Road","Grey Ruins"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Cinfras County Mid-Lower":{"routes":["Cinfras County Lower","Cinfras's Small Farm","Cinfras County Mid-Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Tower of Ascension":{"routes":["Icy Descent"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Skiens Island":{"routes":["Nodguj Nation","Selchar","Dead Island South West","Maro Peaks"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Active Volcano":{"routes":["Lava Lake Bridge","Lava Lake","Volcanic Slope"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Cliffside Waterfall":{"routes":["Canyon High Path"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Valley of the Lost":{"routes":["Canyon Of The Lost","Temple of the Lost East","Canyon Fortress","Cliff Side of the Lost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Frozen Fort":{"routes":["Sky Falls"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Path to Cinfras":{"routes":["Cinfras Entrance","Light Forest East Upper","Mesquis Tower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Temple Island":{"routes":["Kandon Ridge","Central Islands","Swamp Island","Ahmsord","Snail Island"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nodguj Nation":{"routes":["Dujgon Nation","Santa's Hideout","Icy Island","Skiens Island","Mage Island","Durum Isles Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Arachnid Route":{"routes":["Plains","North Nivla Woods","Nemract Plains West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nesaak Bridge Transition":{"routes":["Nesaak Plains South West","Great Bridge Nesaak"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Cinfras's Small Farm":{"routes":["Cinfras County Lower","Aldorei Lowlands","Cinfras County Mid-Lower","Aldorei Valley South Entrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"South Nivla Woods":{"routes":["Road to Elkurn","Nivla Woods","Road to Time Valley","Nivla Woods Exit","Elkurn Fields"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Heart of Decay":{"routes":["Decayed Basin","Mushroom Hill","Lexdale"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Regular Island":{"routes":["Jofash Docks","Icy Island","Dujgon Nation","Dead Island South East"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Quartz Mines South West":{"routes":["Quartz Mines South East","Quartz Mines North West","Llevigar"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Pigmen Ravines":{"routes":["Abandoned Farm","Pigmen Ravines Entrance"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Swamp West Mid-Upper":{"routes":["Swamp East Mid-Upper","Swamp West Upper","Swamp West Mid"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Rymek West Mid":{"routes":["Rymek West Upper","Rymek East Mid","Rymek West Lower"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Avos Workshop":{"routes":["Avos Temple"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp Mountain Transition Lower":{"routes":["Swamp Mountain Transition Mid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Crater Descent":{"routes":["Lava Lake Bridge","Rodoroc","Molten Heights Portal"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Jofash Docks":{"routes":["Regular Island","Dead Island North East","Jofash Tunnel"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Bandit Camp Exit":{"routes":["Canyon Valley South","Canyon Path North Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Ragni Main Entrance":{"routes":["Ragni East Suburbs","Emerald Trail","Ragni"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Canyon Fortress":{"routes":["Canyon Waterfall Mid North","Valley of the Lost"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Llevigar Farm":{"routes":["Loamsprout Camp","Goblin Plains West","Quartz Mines North West","Goblin Plains East","Pre-Light Forest Transition","Quartz Mines North East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Detlas Suburbs":{"routes":["Detlas Close Suburbs","Detlas Far Suburbs","Nether Plains Upper","Detlas Trail East Plains","Detlas Trail West Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Corkus Sea Cove":{"routes":["Road To Mine","Fallen Factory","Corkus City Mine","Corkus Sea Port"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Iron Road":{"routes":["Meteor Crater","Goblin Plains West","Swamp Lower","Forgotten Path"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Thesead Suburbs":{"routes":["Ranol's Farm","Chained House","Entrance to Rodoroc","Thesead"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Burning Farm":{"routes":["Ghostly Path","Burning Airship"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Desert Mid-Upper":{"routes":["Desert Mid-Lower","Desert Upper","Desert East Mid","Almuj City"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Forgotten Town":{"routes":["Grey Ruins","Forest of Eyes"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Nemract Quarry":{"routes":["Nemract Road","Plains Coast","Nemract Plains West"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Nether Plains Upper":{"routes":["Nether Gate","Plains Lake","Detlas Close Suburbs","Corrupted Road","Detlas Far Suburbs","Detlas Suburbs"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Desert East Upper":{"routes":["Desert East Mid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Savannah East Upper":{"routes":["Savannah East Lower","Almuj City","Savannah West Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Sunspark Camp":{"routes":["Swamp Mountain Base","Llevigar Plains East Upper","Meteor Crater","Swamp East Lower","Orc Lake"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Icy Island":{"routes":["Dujgon Nation","Santa's Hideout","Nodguj Nation","Regular Island"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Quartz Mines North East":{"routes":["Llevigar Farm","Quartz Mines South East","Quartz Mines North West","Pre-Light Forest Transition"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Gert Camp":{"routes":["Gylia Lake North East","Jitak's Farm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Thesead":{"routes":["Thesead Suburbs","Entrance to Thesead South"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Military Base Upper":{"routes":["Military Base Lower","Military Base"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Volcano Upper":{"routes":["Light Peninsula","Lost Atoll","Pirate Town","Tree Island","Volcano Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Entrance to Olux":{"routes":["Swamp Dark Forest Transition Mid","Swamp Plains Basin","Swamp Lower","Swamp Dark Forest Transition Lower","Olux"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Otherwordly Monolith":{"routes":["Path to Light","Azure Frontier"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Lava Lake Bridge":{"routes":["Crater Descent","Active Volcano","Molten Heights Portal"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Aldorei Valley West Entrance":{"routes":["Hobbit River","Aldorei Valley Lower","Mantis Nest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Kandon-Beda":{"routes":["Canyon Of The Lost"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Raider's Base Upper":{"routes":["Sky Island Ascent","Raider's Base Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Light Forest East Lower":{"routes":["Light Forest West Mid","Hobbit River","Mantis Nest","Light Forest East Mid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Jungle Upper":{"routes":["Jungle Mid","Dernel Jungle Mid"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Dead Island South East":{"routes":["Dujgon Nation","Dead Island South West","Regular Island","Dead Island North East"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Mesquis Tower":{"routes":["Path to Cinfras","Abandoned Manor","Kander Mines","Cinfras Entrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Light Forest West Mid":{"routes":["Light Forest East Lower","Light Forest West Upper","Light Forest Entrance","Light Forest West Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Path To Military Base":{"routes":["Thanos","Military Base"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Light Forest West Upper":{"routes":["Efilim South East Plains","Light Forest North Entrance","Light Forest West Mid","Light Forest East Mid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Mountain Edge":{"routes":["Cliff Side of the Lost"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nivla Woods Exit":{"routes":["Nivla Woods Edge","North Nivla Woods","Nivla Woods","South Nivla Woods"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Legendary Island":{"routes":["Zhight Island","Southern Outpost"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Abandoned Pass":{"routes":["Mining Base Upper","Ternaves Plains Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Nesaak Plains Upper North West":{"routes":["Elkurn","Nesaak Plains North East","Nesaak Plains Lower North West","Nesaak Plains Mid North West","Sanctuary Bridge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Detlas":{"routes":["Detlas Savannah Transition","Detlas Close Suburbs","Detlas Trail East Plains"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Chained House":{"routes":["Cherry Blossom Forest","Hive South","Thesead Suburbs","Entrance to Thesead South"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Corkus City Mine":{"routes":["Road To Mine","Corkus Statue","Corkus Sea Cove"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Mountain Path":{"routes":["Canyon Dropoff"],"production":{"emerald":9000,"wood":0,"ore":7200,"fish":0,"crop":0}},"Cinfras":{"routes":["Aldorei's River","Cinfras Entrance","Guild Hall","Cinfras Outskirts"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Lexdale":{"routes":["Old Crossroads North","Heart of Decay","Decayed Basin","Viscera Pits East"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Corkus City South":{"routes":["Factory Entrance","Corkus City","Fallen Factory","Corkus Forest South","Road To Mine","Corkus Forest North"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Zhight Island":{"routes":["Legendary Island","The Bear Zoo","Pirate Town"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Toxic Caves":{"routes":["Toxic Drip"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Nesaak Plains North East":{"routes":["Bob's Tomb","Nesaak Plains Upper North West","Nesaak Village","Nesaak Transition","Nesaak Plains Lower North West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Desolate Valley":{"routes":["Nesaak Transition","Plains Lake","Nether Plains Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Ragni":{"routes":["Ragni North Entrance","Pigmen Ravines Entrance","Ragni Main Entrance"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Field of Life":{"routes":["Azure Frontier","Luminous Plateau","Heavenly Ingress","Primal Fen"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nemract Town":{"routes":["Nemract Road","Plains Coast","Rooster Island","Nemract Cathedral"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Entrance to Thesead North":{"routes":["Entrance to Thesead South","Cliffside Passage North","Cliffside Valley"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Detlas Far Suburbs":{"routes":["Nether Plains Upper","Corrupted Road","Detlas Trail West Plains","Detlas Suburbs","Nivla Woods Edge"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Lighthouse Plateau":{"routes":["Corkus Sea Port","Phinas Farm","Southern Outpost"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Entrance to Thesead South":{"routes":["Thesead","Entrance to Thesead North","Chained House","Cliffside Valley"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Dark Forest Village":{"routes":["Path to Talor","Kander Mines","Cinfras Outskirts","Old Crossroads South"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp East Mid":{"routes":["Swamp East Mid-Upper","Swamp Mountain Base","Swamp West Mid","Swamp East Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Mummy's Tomb":{"routes":["Desert Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Dernel Jungle Upper":{"routes":["Dernel Jungle Mid"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crop":0}},"Lexdales Prison":{"routes":["Viscera Pits West","Twisted Ridge"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crop":0}},"Wybel Island":{"routes":["Central Islands","Sky Falls","Ahmsord Outskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Avos Temple":{"routes":["Avos Workshop","Bloody Beach","Corkus Countryside"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Swamp Dark Forest Transition Mid":{"routes":["Entrance to Olux","Taproot Descent","Swamp Dark Forest Transition Upper","Swamp Dark Forest Transition Lower","Olux"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Rymek West Upper":{"routes":["Desert West Lower","Desert Lower","Rymek East Upper","Rymek West Mid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Goblin Plains East":{"routes":["Forgotten Path","Llevigar Farm","Goblin Plains West","Pre-Light Forest Transition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Azure Frontier":{"routes":["Nexus of Light","Otherwordly Monolith","Path to Light","Field of Life"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Cinfras County Mid-Upper":{"routes":["Cinfras Thanos Transition","Cinfras County Upper","Cinfras County Mid-Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Maltic":{"routes":["Coastal Trail","Maltic Coast","Maltic Plains","Ragni Plains","South Farmers Valley"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Abandoned Manor":{"routes":["Entrance to Kander","Lone Farmstead","Mesquis Tower","Kander Mines"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp West Upper":{"routes":["Swamp East Upper","Swamp West Mid-Upper","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Ragni East Suburbs":{"routes":["Maltic Plains","Ragni Main Entrance","Ragni Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Plains Lake":{"routes":["Nether Gate","Desolate Valley","Mine Base Plains","Nether Plains Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Ternaves Plains Upper":{"routes":["Ternaves","Savannah West Lower","Ternaves Plains Lower","Detlas Savannah Transition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Swamp Dark Forest Transition Lower":{"routes":["Swamp Dark Forest Transition Mid","Entrance to Olux","Forgotten Path","Fortress North","Fortress South","Swamp Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Twisted Housing":{"routes":["Efilim Village","Gelibord Corrupted Farm","Lone Farmstead","Mansion of Insanity","Gelibord"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Hobbit River":{"routes":["Light Forest East Lower","Aldorei Valley West Entrance","Light Peninsula","Light Forest West Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Cinfras Entrance":{"routes":["Cinfras","Light Forest North Exit","Path to Cinfras","Mesquis Tower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Detlas Close Suburbs":{"routes":["Detlas","Detlas Suburbs","Nether Plains Upper","Detlas Trail East Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Lost Atoll":{"routes":["Tree Island","Pirate Town","Volcano Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":7200,"crop":0}},"Twisted Ridge":{"routes":["Entrance to Kander","Viscera Pits West","Lexdales Prison"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Cliffside Valley":{"routes":["Entrance to Thesead North","Bandits Toll","Entrance to Thesead South","Air Temple Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Detlas Trail West Plains":{"routes":["Detlas Far Suburbs","Nemract Plains East","Ancient Nemract","Detlas Suburbs"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Canyon Survivor":{"routes":["Cliff Side of the Lost","Canyon Lower South East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Aldorei Valley South Entrance":{"routes":["Aldorei's Waterfall","Aldorei's North Exit","Cinfras's Small Farm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Path To Ozoth's Spire Upper":{"routes":["Path To Ozoth's Spire Mid","Bandit Cave Lower","Cinfras Thanos Transition","Path To Thanos"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Light Forest West Lower":{"routes":["Hobbit River","Light Forest South Entrance","Light Forest West Mid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Rymek East Mid":{"routes":["Rymek East Lower","Rymek East Upper","Rymek West Mid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Forgotten Path":{"routes":["Iron Road","Swamp Dark Forest Transition Lower","Goblin Plains East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Lusuco":{"routes":["Icy Descent"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Ternaves":{"routes":["Ternaves Plains Lower","Savannah East Lower","Ternaves Plains Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Swamp Island":{"routes":["Astraulus' Tower","Ahmsord Outskirts","Temple Island"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Temple of the Lost East":{"routes":["Krolton's Cave","Valley of the Lost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Gateway to Nothing":{"routes":["Final Step","Void Valley","Toxic Drip"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Goblin Plains West":{"routes":["Goblin Plains East","Sablestone Camp","Iron Road","Llevigar Farm"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Half Moon Island":{"routes":["Mage Island"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":7200}},"Molten Heights Portal":{"routes":["Crater Descent","Lava Lake Bridge","Lava Lake","Molten Reach"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Jungle Lake":{"routes":["Temple of Legends","Herb Cave","City of Troms","Jungle Mid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Great Bridge Jungle":{"routes":["Jungle Lower","Herb Cave","Great Bridge Nesaak"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Canyon Entrance Waterfall":{"routes":["Canyon Path North West","Canyon Path North Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Orc Lake":{"routes":["Sablestone Camp","Llevigar Plains East Upper","Sunspark Camp","Llevigar Plains East Lower","Orc Road"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Corkus Forest South":{"routes":["Factory Entrance","Corkus City","Corkus Forest North","Corkus City South"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nesaak Plains South West":{"routes":["Nesaak Plains South East","Nesaak Bridge Transition","Icy Descent","Twain Lake","Nesaak Village","Nesaak Plains Lower North West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nether Gate":{"routes":["Plains Lake","Corrupted Road","Nether Plains Lower","Nether Plains Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Aldorei's Arch":{"routes":["Path To The Arch","Canyon Waterfall North"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Gelibord Castle":{"routes":["Gelibord Corrupted Farm","Taproot Descent"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Llevigar Gate West":{"routes":["Llevigar Farm Plains West","Llevigar Gate East","Llevigar Plains West Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Cathedral Harbour":{"routes":["Savannah West Upper","Ancient Nemract","Nemract Cathedral","Durum Isles Lower","Durum Isles East","Detlas Trail East Plains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Great Bridge Nesaak":{"routes":["Nesaak Bridge Transition","Great Bridge Jungle"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Phinas Farm":{"routes":["Royal Gate","Lighthouse Plateau"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Jofash Tunnel":{"routes":["Jofash Docks","Sky Island Ascent"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Light Forest North Exit":{"routes":["Cinfras Entrance","Light Forest South Exit","Light Forest Canyon"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Sablestone Camp":{"routes":["Meteor Crater","Orc Lake","Loamsprout Camp","Goblin Plains West"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Viscera Pits East":{"routes":["Path to Talor","Viscera Pits West","Lexdale"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"The Broken Road":{"routes":["Worm Tunnel","The Silent Road"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Aldorei's Waterfall":{"routes":["Aldorei Valley Upper","Aldorei Valley South Entrance","Aldorei Lowlands"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Gylia Lake North West":{"routes":["Gylia Lake South West","Gylia Lake North East","Fallen Village","Jitak's Farm"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Dernel Jungle Lower":{"routes":["Dernel Jungle Mid","Jungle Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Gylia Lake South East":{"routes":["Gylia Lake South West","Gylia Lake North East","Thanos","Cinfras County Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Mushroom Hill":{"routes":["Heart of Decay","Jitak's Farm","Decayed Basin","Fallen Village"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Forest of Eyes":{"routes":["Sinister Forest","Forgotten Town"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Void Valley":{"routes":["Gateway to Nothing"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Kandon Farm":{"routes":["Kandon Ridge"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Meteor Crater":{"routes":["Sablestone Camp","Sunspark Camp","Iron Road"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Astraulus' Tower":{"routes":["Dragonling Nests","Swamp Island"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Desert East Mid":{"routes":["Desert East Lower","Desert Mid-Upper","Desert East Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Efilim South East Plains":{"routes":["Efilim East Plains","Light Forest West Upper","Efilim South Plains","Light Forest East Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Taproot Descent":{"routes":["Swamp Dark Forest Transition Mid","Fortress North","Gelibord Corrupted Farm","Gelibord Castle","Swamp Dark Forest Transition Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Cinfras County Lower":{"routes":["Aldorei's North Exit","Cinfras County Mid-Lower","Cinfras's Small Farm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Dead Island North West":{"routes":["Dead Island South West","Dead Island North East"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Cinfras Outskirts":{"routes":["Dark Forest Cinfras Transition","Cinfras","Fungal Grove","Dark Forest Village","Old Crossroads South"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Plains Coast":{"routes":["Nemract Quarry","North Farmers Valley","Nemract Town"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Desert East Lower":{"routes":["Desert Mid-Lower","Desert East Mid","Rymek East Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Cliff Side of the Lost":{"routes":["Canyon Survivor","Canyon Dropoff","Canyon Of The Lost","Mountain Edge","Valley of the Lost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Llevigar Plains East Upper":{"routes":["Orc Lake","Sunspark Camp","Llevigar Plains East Lower","Llevigar Plains West Upper","Swamp East Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Raider's Base Lower":{"routes":["Raider's Base Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Time Valley":{"routes":["Little Wood","Abandoned Farm","Elkurn Fields","Sanctuary Bridge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp Mountain Transition Mid-Upper":{"routes":["Swamp East Upper","Swamp Mountain Transition Mid","Swamp Mountain Transition Upper","Swamp West Upper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Ghostly Path":{"routes":["Burning Farm","Path To The Arch"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"North Nivla Woods":{"routes":["Plains","Nivla Woods Exit","Nivla Woods Edge","Arachnid Route"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Gylia Lake North East":{"routes":["Gylia Lake North West","Military Base","Gert Camp","Gylia Lake South East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Bandit Cave Lower":{"routes":["Canyon Valley South","Path To Ozoth's Spire Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Military Base Lower":{"routes":["Thanos Valley West","Military Base Upper","Path To Ozoth's Spire Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Canyon Walk Way":{"routes":["Canyon Mountain East","Path To Ozoth's Spire Mid","Bandits Toll"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Mining Base Upper":{"routes":["Mining Base Lower","Ternaves Plains Lower","Abandoned Pass","Mine Base Plains"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Volcano Lower":{"routes":["Light Peninsula","Bloody Beach","Llevigar Entrance","Volcano Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Hive South":{"routes":["Thanos Exit Upper","Hive","Canyon High Path","Cherry Blossom Forest","Chained House"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Road To Mine":{"routes":["Corkus City Mine","Corkus Sea Cove","Corkus City South"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Swamp West Lower":{"routes":["Swamp West Mid","Llevigar Plains West Upper","Swamp East Lower"],"production":{"emerald":9000,"wood":0,"ore":7200,"fish":0,"crop":0}},"Llevigar":{"routes":["Llevigar Entrance","Quartz Mines South West","Llevigar Gate East"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Entrance to Rodoroc":{"routes":["Rodoroc","Thesead Suburbs","Eltom"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Light Forest Canyon":{"routes":["Light Forest North Exit","Light Forest East Mid","Mantis Nest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Corkus Castle":{"routes":["Corkus City"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Snail Island":{"routes":["Temple Island","Dragonling Nests"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Sky Castle":{"routes":["Path to Ahmsord Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Lava Lake":{"routes":["Active Volcano","Molten Heights Portal","Volcanic Slope"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Canyon Path South East":{"routes":["Canyon Path North West","Canyon Lower South East"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Ternaves Plains Lower":{"routes":["Mine Base Plains","Ternaves","Mining Base Upper","Ternaves Plains Upper","Abandoned Pass"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"The Gate":{"routes":["Bizarre Passage"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":7200}},"Fleris Trail":{"routes":["Road To Light Forest"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crop":0}},"Corkus Forest North":{"routes":["Corkus City","Corkus Mountain","Corkus Forest South","Corkus City South"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Sinister Forest":{"routes":["Lutho","Forest of Eyes"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp East Upper":{"routes":["Swamp Plains Basin","Swamp East Mid-Upper","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Upper","Swamp West Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Pigmen Ravines Entrance":{"routes":["Pigmen Ravines","South Pigmen Ravines","Ragni"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Corkus Outskirts":{"routes":["Corkus Statue","Bloody Beach","Corkus Countryside"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Maltic Coast":{"routes":["Coastal Trail","North Farmers Valley","Maltic","South Farmers Valley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Quartz Mines North West":{"routes":["Quartz Mines North East","Quartz Mines South West","Llevigar Farm","Loamsprout Camp"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Guild Hall":{"routes":["Cinfras"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Nemract Plains East":{"routes":["Nemract Road","Detlas Trail West Plains"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Corkus Sea Port":{"routes":["Lighthouse Plateau","Corkus Sea Cove","Fallen Factory","Ruined Houses"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Efilim South Plains":{"routes":["Efilim South East Plains","Light Forest North Entrance","Efilim Village"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Path to Talor":{"routes":["Old Crossroads North","Entrance to Kander","Viscera Pits East","Dark Forest Village","Kander Mines","Old Crossroads South"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Mansion of Insanity":{"routes":["Twisted Housing","Fortress North","Fortress South"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Detlas Trail East Plains":{"routes":["Detlas","Cathedral Harbour","Ancient Nemract","Detlas Close Suburbs","Detlas Suburbs"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Efilim East Plains":{"routes":["Efilim Village","Efilim South East Plains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Light Forest Entrance":{"routes":["Road To Light Forest","Light Forest North Entrance","Light Forest South Entrance","Light Forest West Mid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Light Forest East Upper":{"routes":["Efilim South East Plains","Path to Cinfras"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Eltom":{"routes":["Entrance to Rodoroc","Ranol's Farm"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Molten Reach":{"routes":["Angel Refuge","Molten Heights Portal"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Llevigar Farm Plains West":{"routes":["Llevigar Farm Plains East","Llevigar Gate West","Llevigar Plains West Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Mantis Nest":{"routes":["Light Forest East Lower","Aldorei Valley West Entrance","Light Forest South Exit","Light Forest Canyon","Aldorei Valley Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Quartz Mines South East":{"routes":["Quartz Mines South West","Quartz Mines North East"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Dragonling Nests":{"routes":["Snail Island","Astraulus' Tower"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crop":0}},"Grey Ruins":{"routes":["Worm Tunnel","Forgotten Town"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Corkus Mountain":{"routes":["Corkus Docks","Corkus Forest North","Corkus Countryside"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Bizarre Passage":{"routes":["Final Step","The Gate"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Burning Airship":{"routes":["Cinfras Thanos Transition","Burning Farm","Bandit Cave Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Bloody Beach":{"routes":["Pirate Town","Corkus Outskirts","Volcano Lower","Avos Temple"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Nivla Woods Edge":{"routes":["Detlas Far Suburbs","Road to Elkurn","North Nivla Woods","Nivla Woods Exit","Nemract Plains West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nesaak Transition":{"routes":["Elkurn","Desolate Valley","Nether Plains Lower","Nesaak Plains North East"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Light Peninsula":{"routes":["Volcano Upper","Hobbit River","Tree Island","Volcano Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Road to Time Valley":{"routes":["Nivla Woods","Nivla Woods Entrance","South Nivla Woods"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Swamp Mountain Base":{"routes":["Sunspark Camp","Swamp Plains Basin","Swamp Lower","Swamp East Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Loamsprout Camp":{"routes":["Llevigar Farm","Sablestone Camp","Orc Road","Quartz Mines North West"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Elkurn Fields":{"routes":["Road to Elkurn","Time Valley","South Nivla Woods","Elkurn"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Nexus of Light":{"routes":["Azure Frontier"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Aldorei Valley Upper":{"routes":["Aldorei Valley Mid","Aldorei's Waterfall"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Jitak's Farm":{"routes":["Mushroom Hill","Gert Camp","Gylia Lake North West"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Twain Lake":{"routes":["Twain Mansion","Nesaak Plains South West"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Herb Cave":{"routes":["Great Bridge Jungle","Jungle Lake"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Durum Isles East":{"routes":["Mage Island","Durum Isles Center","Cathedral Harbour"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Pre-Light Forest Transition":{"routes":["Leadin Fortress","Quartz Mines North East","Goblin Plains East","Llevigar Farm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Aldorei's River":{"routes":["Aldorei Lowlands","Cinfras"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Cliffside Passage North":{"routes":["Entrance to Thesead North","Cliffside Passage"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Temple of Legends":{"routes":["Jungle Lake","City of Troms"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Lion Lair":{"routes":["Bremminglar"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nesaak Village":{"routes":["Nesaak Plains South East","Bob's Tomb","Nesaak Plains North East","Nesaak Plains South West","Nesaak Plains Lower North West"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Swamp Mountain Transition Upper":{"routes":["Swamp East Upper","Olux","Swamp Mountain Transition Mid-Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Leadin Fortress":{"routes":["Pre-Light Forest Transition","Road To Light Forest","Orc Battlegrounds"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Corrupted Road":{"routes":["Nether Gate","Detlas Far Suburbs","Nether Plains Upper","Elkurn"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"North Farmers Valley":{"routes":["Maltic Coast","South Farmers Valley","Plains Coast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Ruined Houses":{"routes":["Factory Entrance","Fallen Factory","Corkus Sea Port"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Emerald Trail":{"routes":["Maltic Plains","Nivla Woods Entrance","Ragni Main Entrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Heavenly Ingress":{"routes":["Field of Life","Light Forest South Entrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Sky Island Ascent":{"routes":["Central Islands","Jofash Tunnel","Raider's Base Upper","Sky Falls","Ahmsord"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Lutho":{"routes":["Paths of Sludge","Sinister Forest"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Old Coal Mine":{"routes":["Kandon Ridge"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Dead Island South West":{"routes":["Skiens Island","Dead Island South East","Dead Island North West","Dujgon Nation"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Jungle Mid":{"routes":["Jungle Lower","Jungle Lake","Jungle Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Aldorei's North Exit":{"routes":["Cinfras County Lower","Path To The Arch","Aldorei Valley South Entrance"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Light Forest South Entrance":{"routes":["Light Forest West Lower","Heavenly Ingress","Light Forest Entrance"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Desert Upper":{"routes":["Desert West Upper","Desert Mid-Upper","Mummy's Tomb"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Southern Outpost":{"routes":["Legendary Island","Lighthouse Plateau"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Factory Entrance":{"routes":["Fallen Factory","Ruined Houses","Corkus Forest South","Corkus City South"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"The Bear Zoo":{"routes":["Rooster Island","Zhight Island"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Dead Island North East":{"routes":["Jofash Docks","Dead Island South East","Dead Island North West"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Cherry Blossom Forest":{"routes":["Ranol's Farm","Chained House","Hive South"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Wizard Tower North":{"routes":["Krolton's Cave","Bandits Toll"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Canyon Of The Lost":{"routes":["Cliffside Lake","Kandon-Beda","Cliff Side of the Lost","Valley of the Lost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Rymek West Lower":{"routes":["Rymek East Lower","Rymek West Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Central Islands":{"routes":["Ahmsord","Sky Island Ascent","Temple Island","Wybel Island","Ahmsord Outskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Canyon Path North West":{"routes":["Canyon Path South East","Canyon Entrance Waterfall","Canyon Path South West"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Canyon Waterfall Mid North":{"routes":["Canyon Mountain South","Canyon Path North Mid","Canyon Fortress"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Military Base":{"routes":["Path To Military Base","Military Base Upper","Gylia Lake North East"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Icy Descent":{"routes":["Tower of Ascension","Lusuco","Nesaak Plains South West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Canyon Path South West":{"routes":["Canyon Path North West","Canyon Lower South East","Canyon Path North Mid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Aldorei Valley Lower":{"routes":["Aldorei Valley Mid","Aldorei Valley West Entrance","Mantis Nest"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"South Pigmen Ravines":{"routes":["Little Wood","Pigmen Ravines Entrance","City of Troms"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Desert Lower":{"routes":["Desert Mid-Lower","Rymek West Upper","Desert West Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Abandoned Farm":{"routes":["Pigmen Ravines","Time Valley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Nether Plains Lower":{"routes":["Elkurn","Nether Gate","Desolate Valley","Nesaak Transition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Olux":{"routes":["Swamp Dark Forest Transition Mid","Swamp Dark Forest Transition Upper","Entrance to Olux","Swamp Mountain Transition Upper"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Gelibord":{"routes":["Twisted Housing","Entrance to Kander","Gelibord Corrupted Farm","Lone Farmstead"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Mining Base Lower":{"routes":["Mining Base Upper","Mine Base Plains"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Ragni North Entrance":{"routes":["Katoa Ranch","Ragni","Ragni North Suburbs"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Ranol's Farm":{"routes":["Cherry Blossom Forest","Thesead Suburbs","Eltom"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Path To The Arch":{"routes":["Aldorei's Arch","Aldorei's North Exit","Ghostly Path"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Light Forest North Entrance":{"routes":["Light Forest West Upper","Light Forest Entrance","Efilim South Plains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Light Forest South Exit":{"routes":["Mantis Nest","Light Forest North Exit"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nivla Woods":{"routes":["Road to Time Valley","Nivla Woods Exit","Nivla Woods Entrance","South Nivla Woods"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Luminous Plateau":{"routes":["Field of Life"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Rymek East Lower":{"routes":["Rymek East Mid","Rymek West Lower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Llevigar Plains West Upper":{"routes":["Swamp West Lower","Llevigar Plains East Upper","Llevigar Plains West Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Desert Mid-Lower":{"routes":["Almuj City","Desert West Lower","Desert Lower","Desert Mid-Upper","Desert East Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Coastal Trail":{"routes":["Maltic Coast","Ragni Plains","Maltic"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Thanos Exit Upper":{"routes":["Canyon High Path","Bandits Toll","Thanos Exit","Hive","Hive South"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Elkurn":{"routes":["Road to Elkurn","Nesaak Plains Upper North West","Corrupted Road","Elkurn Fields","Nesaak Transition","Nether Plains Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Bandit Cave Upper":{"routes":["Burning Airship"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Light Forest East Mid":{"routes":["Light Forest East Lower","Light Forest West Upper","Light Forest Canyon"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Corkus Countryside":{"routes":["Corkus City","Avos Temple","Corkus Mountain","Corkus Outskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Kandon Ridge":{"routes":["Old Coal Mine","Kandon Farm","Path to Ahmsord Upper","Temple Island"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Jungle Lower":{"routes":["Dernel Jungle Lower","Great Bridge Jungle","Jungle Mid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Cliffside Passage":{"routes":["Cliffside Passage North","Cliffside Lake"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Corkus Statue":{"routes":["Corkus City Mine","Corkus Outskirts"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Hive":{"routes":["Thanos Exit Upper","Hive South"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Dujgon Nation":{"routes":["Nodguj Nation","Dead Island South East","Icy Island","Dead Island South West","Regular Island"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Canyon Lower South East":{"routes":["Canyon Path South West","Canyon Path South East","Canyon Survivor","Canyon Upper North West"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Sky Falls":{"routes":["Sky Island Ascent","Frozen Fort","Wybel Island"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Rodoroc":{"routes":["Crater Descent","Entrance to Rodoroc"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Almuj City":{"routes":["Desert West Lower","Desert Mid-Lower","Desert West Upper","Desert Mid-Upper","Savannah East Upper"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Bandits Toll":{"routes":["Wizard Tower North","Canyon Walk Way","Thanos Exit Upper","Cliffside Valley"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Toxic Drip":{"routes":["Paths of Sludge","Gateway to Nothing","Toxic Caves"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Canyon High Path":{"routes":["Cliffside Waterfall","Thanos Exit Upper","Hive South"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Rymek East Upper":{"routes":["Rymek West Upper","Rymek East Mid","Desert East Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Cinfras Thanos Transition":{"routes":["Burning Airship","Path To Thanos","Cinfras County Mid-Upper","Path To Ozoth's Spire Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Fortress North":{"routes":["Mansion of Insanity","Taproot Descent","Fortress South","Swamp Dark Forest Transition Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Santa's Hideout":{"routes":["Icy Island","Mage Island","Nodguj Nation"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Path To Ozoth's Spire Mid":{"routes":["Canyon Walk Way","Path To Ozoth's Spire Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Nivla Woods Entrance":{"routes":["Road to Time Valley","Emerald Trail","Nivla Woods","Plains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Path to Ahmsord Lower":{"routes":["Sky Castle","Ahmsord","Path to Ahmsord Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Path to Ahmsord Upper":{"routes":["Path to Ahmsord Lower","Kandon Ridge","Ahmsord"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Canyon Mountain South":{"routes":["Krolton's Cave","Canyon Waterfall Mid North"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Air Temple Lower":{"routes":["Krolton's Cave","Air Temple Upper","Cliffside Valley"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crop":900}},"Fallen Village":{"routes":["Fungal Grove","Mushroom Hill","Dark Forest Cinfras Transition","Gylia Lake North West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Entrance to Kander":{"routes":["Path to Talor","Gelibord","Viscera Pits West","Abandoned Manor","Twisted Ridge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Thanos Exit":{"routes":["Thanos Exit Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Nemract Road":{"routes":["Nemract Quarry","Nemract Plains East","Nemract Town","Ancient Nemract","Nemract Cathedral","Nemract Plains West"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Angel Refuge":{"routes":["Molten Reach","Ahmsord Outskirts"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Efilim Village":{"routes":["Efilim East Plains","Twisted Housing","Efilim South Plains"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crop":0}},"Nesaak Plains Mid North West":{"routes":["Nesaak Plains Upper North West","Nesaak Plains Lower North West"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Nemract Cathedral":{"routes":["Nemract Town","Ancient Nemract","Cathedral Harbour","Nemract Road"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crop":0}},"Ragni Plains":{"routes":["Ragni East Suburbs","Coastal Trail","Maltic","Ragni North Suburbs"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crop":3600}},"Old Crossroads South":{"routes":["Old Crossroads North","Path to Talor","Fungal Grove","Dark Forest Village","Cinfras Outskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}},"Little Wood":{"routes":["Time Valley","South Pigmen Ravines"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crop":0}}};
let terrNames = ["Abandoned Farm","Abandoned Manor","Abandoned Pass","Active Volcano","Ahmsord","Ahmsord Outskirts","Air Temple Lower","Air Temple Upper","Aldorei Lowlands","Aldorei Valley Lower","Aldorei Valley Mid","Aldorei Valley South Entrance","Aldorei Valley Upper","Aldorei Valley West Entrance","Aldorei's Arch","Aldorei's North Exit","Aldorei's River","Aldorei's Waterfall","Almuj City","Ancient Nemract","Angel Refuge","Arachnid Route","Astraulus' Tower","Avos Temple","Avos Workshop","Azure Frontier","Bandit Camp Exit","Bandit Cave Lower","Bandit Cave Upper","Bandits Toll","Bizarre Passage","Bloody Beach","Bob's Tomb","Bremminglar","Burning Airship","Burning Farm","Canyon Dropoff","Canyon Entrance Waterfall","Canyon Fortress","Canyon High Path","Canyon Lower South East","Canyon Mountain East","Canyon Mountain South","Canyon Of The Lost","Canyon Path North Mid","Canyon Path North West","Canyon Path South East","Canyon Path South West","Canyon Survivor","Canyon Upper North West","Canyon Valley South","Canyon Walk Way","Canyon Waterfall Mid North","Canyon Waterfall North","Cathedral Harbour","Central Islands","Chained House","Cherry Blossom Forest","Cinfras","Cinfras County Lower","Cinfras County Mid-Lower","Cinfras County Mid-Upper","Cinfras County Upper","Cinfras Entrance","Cinfras Outskirts","Cinfras Thanos Transition","Cinfras's Small Farm","City of Troms","Cliff Side of the Lost","Cliffside Lake","Cliffside Passage","Cliffside Passage North","Cliffside Valley","Cliffside Waterfall","Coastal Trail","Corkus Castle","Corkus City","Corkus City Mine","Corkus City South","Corkus Countryside","Corkus Docks","Corkus Forest North","Corkus Forest South","Corkus Mountain","Corkus Outskirts","Corkus Sea Cove","Corkus Sea Port","Corkus Statue","Corrupted Road","Crater Descent","Dark Forest Cinfras Transition","Dark Forest Village","Dead Island North East","Dead Island North West","Dead Island South East","Dead Island South West","Decayed Basin","Dernel Jungle Lower","Dernel Jungle Mid","Dernel Jungle Upper","Desert East Lower","Desert East Mid","Desert East Upper","Desert Lower","Desert Mid-Lower","Desert Mid-Upper","Desert Upper","Desert West Lower","Desert West Upper","Desolate Valley","Detlas","Detlas Close Suburbs","Detlas Far Suburbs","Detlas Savannah Transition","Detlas Suburbs","Detlas Trail East Plains","Detlas Trail West Plains","Dragonling Nests","Dujgon Nation","Durum Isles Center","Durum Isles East","Durum Isles Lower","Durum Isles Upper","Efilim East Plains","Efilim South East Plains","Efilim South Plains","Efilim Village","Elkurn","Elkurn Fields","Eltom","Emerald Trail","Entrance to Kander","Entrance to Olux","Entrance to Rodoroc","Entrance to Thesead North","Entrance to Thesead South","Factory Entrance","Fallen Factory","Fallen Village","Field of Life","Final Step","Fleris Trail","Forest of Eyes","Forgotten Path","Forgotten Town","Fortress North","Fortress South","Frozen Fort","Fungal Grove","Gateway to Nothing","Gelibord","Gelibord Castle","Gelibord Corrupted Farm","Gert Camp","Ghostly Path","Goblin Plains East","Goblin Plains West","Great Bridge Jungle","Great Bridge Nesaak","Grey Ruins","Guild Hall","Gylia Lake North East","Gylia Lake North West","Gylia Lake South East","Gylia Lake South West","Half Moon Island","Heart of Decay","Heavenly Ingress","Herb Cave","Hive","Hive South","Hobbit River","Icy Descent","Icy Island","Iron Road","Jitak's Farm","Jofash Docks","Jofash Tunnel","Jungle Lake","Jungle Lower","Jungle Mid","Jungle Upper","Kander Mines","Kandon Farm","Kandon Ridge","Kandon-Beda","Katoa Ranch","Krolton's Cave","Lava Lake","Lava Lake Bridge","Leadin Fortress","Legendary Island","Lexdale","Lexdales Prison","Light Forest Canyon","Light Forest East Lower","Light Forest East Mid","Light Forest East Upper","Light Forest Entrance","Light Forest North Entrance","Light Forest North Exit","Light Forest South Entrance","Light Forest South Exit","Light Forest West Lower","Light Forest West Mid","Light Forest West Upper","Light Peninsula","Lighthouse Plateau","Lion Lair","Little Wood","Llevigar","Llevigar Entrance","Llevigar Farm","Llevigar Farm Plains East","Llevigar Farm Plains West","Llevigar Gate East","Llevigar Gate West","Llevigar Plains East Lower","Llevigar Plains East Upper","Llevigar Plains West Lower","Llevigar Plains West Upper","Loamsprout Camp","Lone Farmstead","Lost Atoll","Luminous Plateau","Lusuco","Lutho","Mage Island","Maltic","Maltic Coast","Maltic Plains","Mansion of Insanity","Mantis Nest","Maro Peaks","Mesquis Tower","Meteor Crater","Military Base","Military Base Lower","Military Base Upper","Mine Base Plains","Mining Base Lower","Mining Base Upper","Molten Heights Portal","Molten Reach","Mountain Edge","Mountain Path","Mummy's Tomb","Mushroom Hill","Nemract Cathedral","Nemract Plains East","Nemract Plains West","Nemract Quarry","Nemract Road","Nemract Town","Nesaak Bridge Transition","Nesaak Plains Lower North West","Nesaak Plains Mid North West","Nesaak Plains North East","Nesaak Plains South East","Nesaak Plains South West","Nesaak Plains Upper North West","Nesaak Transition","Nesaak Village","Nether Gate","Nether Plains Lower","Nether Plains Upper","Nexus of Light","Nivla Woods","Nivla Woods Edge","Nivla Woods Entrance","Nivla Woods Exit","Nodguj Nation","North Farmers Valley","North Nivla Woods","Old Coal Mine","Old Crossroads North","Old Crossroads South","Olux","Orc Battlegrounds","Orc Lake","Orc Road","Otherwordly Monolith","Path To Military Base","Path To Ozoth's Spire Lower","Path To Ozoth's Spire Mid","Path To Ozoth's Spire Upper","Path To Thanos","Path To The Arch","Path to Ahmsord Lower","Path to Ahmsord Upper","Path to Cinfras","Path to Light","Path to Talor","Paths of Sludge","Phinas Farm","Pigmen Ravines","Pigmen Ravines Entrance","Pirate Town","Plains","Plains Coast","Plains Lake","Pre-Light Forest Transition","Primal Fen","Quartz Mines North East","Quartz Mines North West","Quartz Mines South East","Quartz Mines South West","Ragni","Ragni East Suburbs","Ragni Main Entrance","Ragni North Entrance","Ragni North Suburbs","Ragni Plains","Raider's Base Lower","Raider's Base Upper","Ranol's Farm","Regular Island","Road To Light Forest","Road To Mine","Road to Elkurn","Road to Time Valley","Rodoroc","Rooster Island","Royal Gate","Ruined Houses","Rymek East Lower","Rymek East Mid","Rymek East Upper","Rymek West Lower","Rymek West Mid","Rymek West Upper","Sablestone Camp","Sanctuary Bridge","Santa's Hideout","Savannah East Lower","Savannah East Upper","Savannah West Lower","Savannah West Upper","Selchar","Sinister Forest","Skiens Island","Sky Castle","Sky Falls","Sky Island Ascent","Snail Island","South Farmers Valley","South Nivla Woods","South Pigmen Ravines","Southern Outpost","Sunspark Camp","Swamp Dark Forest Transition Lower","Swamp Dark Forest Transition Mid","Swamp Dark Forest Transition Upper","Swamp East Lower","Swamp East Mid","Swamp East Mid-Upper","Swamp East Upper","Swamp Island","Swamp Lower","Swamp Mountain Base","Swamp Mountain Transition Lower","Swamp Mountain Transition Mid","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Upper","Swamp Plains Basin","Swamp West Lower","Swamp West Mid","Swamp West Mid-Upper","Swamp West Upper","Taproot Descent","Temple Island","Temple of Legends","Temple of the Lost East","Ternaves","Ternaves Plains Lower","Ternaves Plains Upper","Thanos","Thanos Exit","Thanos Exit Upper","Thanos Valley West","The Bear Zoo","The Broken Road","The Gate","The Silent Road","Thesead","Thesead Suburbs","Time Valley","Tower of Ascension","Toxic Caves","Toxic Drip","Tree Island","Twain Lake","Twain Mansion","Twisted Housing","Twisted Ridge","Valley of the Lost","Viscera Pits East","Viscera Pits West","Void Valley","Volcanic Slope","Volcano Lower","Volcano Upper","Wizard Tower North","Worm Tunnel","Wybel Island","Zhight Island"];
// {upgrade: {base: [normal, hq], cost: [[effect, cost]], type}}
let upgradeData = {
    // base tower stats
    "damage": {"name": "Damage", "base": [1000, 1000], "cost": [[0,0], [100,0.4], [300,0.8], [600,1.2], [1200,1.6], [2400,2], [4800,2.4], [8400,2.8], [12000,3.2], [14600,3.6], [17200,4], [19800,4.4]], "type": "ore", formatter: FORMATTER_PERCENT},
    "attack": {"name": "Attack", "base": [0.5, 0.5], "cost": [[0,0], [100,0.5], [300,1], [600,1.5], [1200,2.2], [2400,3], [4800,4], [8400,5], [12000,6.2], [14600,6.6], [17200,7.4], [19800,8.4]], "type": "crop", formatter: FORMATTER_PERCENT},
    "health": {"name": "Health", "base": [300000, 300000], "cost": [[0,0], [100,0.5], [300,1], [600,1.5], [1200,2.2], [2400,3], [4800,4], [8400,5], [12000,6.2], [14600,6.6], [17200,7.4], [19800,8.4]], "type": "wood", formatter: FORMATTER_PERCENT},
    "defense": {"name": "Defense", "base": [0.1, 0.1], "cost": [[0,0], [100,3], [300,4.5], [600,5.25], [1200,5.8], [2400,6.2], [4800,6.45], [8400,6.65], [12000,6.8], [14600,6.95], [17200,7.1], [19800,7.2]], "type": "fish", formatter: FORMATTER_PERCENT},

    // offensive bonuses
    "minions": {"name": "Stronger Minions", "base": [0, 0], "cost": [[0,0], [200,1.5], [400,2], [800,2.5], [1600,3]], "type": "wood", formatter: FORMATTER_PERCENT},
    "multi": {"name": "Tower Multi-Attack", "base": [-1, -1], "cost": [[0,1], [4800,2], [9600,3],], "type": "fish", formatter: FORMATTER_ID},
    "aura": {"name": "Tower Aura", "base": [-1, -1], "cost": [[0,0], [800,24], [1600,18], [3200,12],], "type": "crop", formatter: FORMATTER_SECONDS},
    "volley": {"name": "Tower Volley", "base": [-1, -1], "cost": [[0,0], [200,20], [400,15], [800,10],], "type": "ore", formatter: FORMATTER_SECONDS},

    // misc bonuses
    "gather_xp": {"name": "Gathering Experience", "base": [0, 0], "cost": [[0, 0], [600, 0.1], [1300, 0.2], [2000, 0.3], [2700, 0.4], [3400, 0.5], [5500, 0.6], [10000, 0.8], [20000, 1.0]], "type": "wood", formatter: FORMATTER_PERCENT},
    "mob_xp": {"name": "Mob Experience", "base": [0, 0], "cost": [[0, 0], [600, 0.1], [1200, 0.2], [2000, 0.3], [2400, 0.4], [3000, 0.5], [5000, 0.6], [10000, 0.8], [20000, 1.0]], "type": "fish", formatter: FORMATTER_PERCENT},
    "mob_damage": {"name": "Mob Damage", "base": [0, 0], "cost": [[0, 0], [600, 0.1], [1200, 0.2], [2000, 0.4], [2400, 0.6], [3000, 0.8], [5000, 1.2], [10000, 1.6], [20000, 2.0]], "type": "crop", formatter: FORMATTER_PERCENT},
    "pvp_damage": {"name": "PvP Damage", "base": [0, 0], "cost": [[0, 0], [600, 0.05], [1200, 0.1], [2000, 0.15], [2400, 0.2], [3000, 0.25], [5000, 0.4], [10000, 0.65], [20000, 0.8]], "type": "ore", formatter: FORMATTER_PERCENT},
    "xp_seeking": {"name": "Experience Seeking", "base": [0, 0], "cost": [[0, 0], [100, 36000], [200, 66000], [400, 120000], [800, 228000], [1600, 456000], [3200, 900000], [6400, 1740000], [9600, 2580000], [12800, 3360000]], "type": "emerald", formatter: FORMATTER_HOURS},
    "tome_seeking": {"name": "Tome Seeking", "base": [0, 0], "cost": [[0, 0], [400, 0.15], [3200, 1.2], [6400, 2.4]], "type": "fish", formatter: FORMATTER_PERCENT_HOUR},
    "eme_seeking": {"name": "Emerald Seeking", "base": [0, 0], "cost": [[0, 0], [200, 0.3], [800, 3], [1600, 6], [3200, 12], [6400, 24]], "type": "fish", formatter: FORMATTER_PERCENT_HOUR},

    // resource bonuses
    "res_storage": {"name": "Resource Storage", "base": [300, 1500], "cost": [[0,0], [400,1], [800,3], [2000,7], [5000,14], [16000,33], [48000,79],], "type": "emerald", formatter: FORMATTER_PERCENT},
    "em_storage": {"name": "Emerald Storage", "base": [3000, 5000], "cost": [[0,0], [200,1], [400,3], [1000,7], [2500,14], [8000,33], [24000,79],], "type": "wood", formatter: FORMATTER_PERCENT},
    "eff_res": {"name": "Efficient Resource", "base": [0, 0], "cost": [[0,0], [6000,0.5], [12000,1], [24000,1.5], [48000,2], [96000,2.5], [192000,3],], "type": "emerald", formatter: FORMATTER_PERCENT},
    "eff_em": {"name": "Efficient Emeralds", "base": [0, 0], "cost": [[0,0], [2000,0.35], [8000,1], [32000,3],], "type": "ore", formatter: FORMATTER_PERCENT},
    "res_rate": {"name": "Resource Rate", "base": [-1, -1], "cost": [[0,4], [6000,3], [18000,2], [32000,1],], "type": "emerald", formatter: FORMATTER_SECONDS},
    "em_rate": {"name": "Emerald Rate", "base": [-1, -1], "cost": [[0,4], [2000,3], [8000,2], [32000,1],], "type": "crop", formatter: FORMATTER_SECONDS}
};
let resSymbols = {
    emerald: "💰",
    crop: "🌾",
    ore: "⛏️",
    wood: "🪓",
    fish: "🐟",
    rainbow: "🌈",
};

function load_map() {
    let Position = L.Control.extend({
        _container: null,
        options: {
            position: "bottomleft",
        },

        onAdd: function () {
            let latlng = L.DomUtil.create(
                "div",
                "leaflet-control leaflet-control-attribution"
            );
            this._latlng = latlng;
            return latlng;
        },

        updateHTML: function (lat, lng) {
            this._latlng.innerHTML = `X: ${Math.floor(lat)} Y: ${Math.floor(
                lng
            )}`;
        },
    });
    let polygons = {};
    let guildTags = {};
    let connLines = {};
    let routesShown = true;
    let prefShowRoutes = true;
    let mapMode = "cooldown";
    let tooltipContents = {};
    let spreadsheetShown = false;
    let treasury = 0;
    let selectedTerr;
    let hq;

    let map = L.map("mcmap", {
        center: [0, 0],
        zoom: 6,
        zoomControl: false,
    });
    L.tileLayer("/assets/tiles/2d/{z}/{x}/{y}.png", {
        minZoom: 5,
        maxZoom: 14,
        attribution: "Wynncraft",
    }).addTo(map);
    new L.Control.Zoom({ position: "topright" }).addTo(map);
    // position
    let position = new Position();
    map.addControl(position);
    map.on("mousemove", function (event) {
        let coords = latLngToCoords(event.latlng);
        position.updateHTML(coords[0], coords[1]);
    });
    map.on("zoomend", function () {
        if (map.getZoom() > 5 && prefShowRoutes) {
            showRoutes();
        } else {
            hideRoutes();
        }
        if (map.getZoom() > 5) {
            $(".terr-details").css("opacity", "1");
        } else {
            $(".terr-details").css("opacity", "0");
        }
    });
    map.on("click", function () {
        $("#right_sidebar").hide();
        $("#terr_stats").hide();
        selectedTerr = void 0;
    });
    // draw test territory
    // createPolygon({"startX":-1212,"startY":-2576,"endX":-1001,"endY":-2342});
    // initial requests to wynn api
    fetchTags().then(() => updateMap(true));

    function fetchTags() {
        return fetch(
            "https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe=0"
        )
            .then((r) => r.json())
            .then(function (res) {
                for (let i in res.data) {
                    guildTags[res.data[i].name] = res.data[i].prefix;
                }
            });
    }

    function updateMap(init) {
        fetch("https://api.wynncraft.com/public_api.php?action=territoryList")
            .then((r) => r.json())
            .then(function (res) {
                let terrs = res["territories"];
                for (let i in terrs) {
                    let polygon = createPolygon(terrs[i]);
                    polygon.addTo(map);
                }
                updatePopups();
                if (init) {
                    $("#right_sidebar").hide();
                    $("#terr_stats").hide();
                    for (let i in terrs) {
                        if (!terrs.hasOwnProperty(i)) continue;
                        for (let j of terrData[i].routes) {
                            if (!terrs.hasOwnProperty(j)) continue;
                            // if (i <= j) continue;
                            let sx =
                                (terrs[i]["location"]["startX"] +
                                    terrs[i]["location"]["endX"]) /
                                2;
                            let sy =
                                (terrs[i]["location"]["startY"] +
                                    terrs[i]["location"]["endY"]) /
                                2;
                            let ex =
                                (terrs[j]["location"]["startX"] +
                                    terrs[j]["location"]["endX"]) /
                                2;
                            let ey =
                                (terrs[j]["location"]["startY"] +
                                    terrs[j]["location"]["endY"]) /
                                2;
                            let line = L.polyline(
                                [
                                    [sx, sy],
                                    [ex, ey],
                                ].map(coordsToLatLng),
                                {
                                    color: "#fff7",
                                    zIndexOffset: -204,
                                }
                            );
                            setConnLine(i, j, line);
                            if (routesShown) {
                                line.addTo(map);
                            }
                        }
                    }
                    $("input[name=show_routes]").change(function () {
                        if (this.checked) showRoutes();
                        else hideRoutes();
                        prefShowRoutes = this.checked;
                    });
                    $("input[type=radio][name=map_mode]").change(function () {
                        mapMode = this.value;
                        updatePopups(true);
                    });
                    $("#eco_include").change(function () {
                        if (!selectedTerr) return;
                        polygons[selectedTerr].include = this.checked;
                        if (this.checked) {
                            polygons[selectedTerr].setStyle({
                                fillColor: "#00ff00",
                                color: "#00ff00",
                            });
                        } else {
                            polygons[selectedTerr].setStyle({
                                fillColor: "#ffffff",
                                color: "#ffffff",
                            });
                            if (hq === selectedTerr) {
                                hq = void 0;
                                clearDistances();
                                $("#eco_hq").prop("checked", false);
                            }
                        }
                        updateEco();
                    });
                    $("#eco_hq").change(function () {
                        if (!selectedTerr) return;
                        if (this.checked) {
                            polygons[selectedTerr].include = true;
                            polygons[selectedTerr].setStyle({
                                fillColor: "#cccc00",
                                color: "#cccc00",
                            });
                            if (hq && hq !== selectedTerr) {
                                polygons[hq].setStyle({
                                    fillColor: "#00ff00",
                                    color: "#00ff00",
                                });
                            }
                            hq = selectedTerr;
                            calcDistances();
                            $("#eco_include").prop("checked", true);
                        } else {
                            if (hq === selectedTerr) {
                                polygons[hq].setStyle({
                                    fillColor: "#00ff00",
                                    color: "#00ff00",
                                });
                                hq = void 0;
                            }
                        }
                        updateEco();
                    });
                    $("input[type=radio][name=treasury]").change(function () {
                        switch (this.value) {
                            case "vlow": treasury = 0; break;
                            case "low": treasury = 0.1; break;
                            case "med": treasury = 0.2; break;
                            case "high": treasury = 0.25; break;
                            case "vhigh": treasury = 0.3; break;
                        }
                        updateEco();
                    });
                    let dropdownDiv = $("#eco_dropdowns");
                    for (let i in upgradeData) {
                        let id = `select_${i}`;
                        let dropdown = $(`<label for="${id}">${upgradeData[i].name}<br></label><br>`);
                        let select
                        if (upgradeData[i].name === "Defense" || upgradeData[i].name === "Tower Volley" || upgradeData[i].name === "Emerald Seeking") {
                            select = $(`<select id="${id}" class="upgrade_select"></select><br>`);
                        } else {
                            select = $(`<select id="${id}" class="upgrade_select"></select>`);
                        }
                        for (let j in upgradeData[i].cost) {
                            select.append($(`<option value="${j}">${upgradeData[i].formatter(upgradeData[i].cost[j][1])} (${upgradeData[i].cost[j][0]} ${upgradeData[i].type})</option>`));
                        }
                        select.change(function () {
                            if (!selectedTerr) return;
                            polygons[selectedTerr].territory.upgrades[i] = parseInt(this.value);
                            let stats = calcTerr(terrData[selectedTerr], polygons[selectedTerr].territory.upgrades, hq === selectedTerr);
                            console.log(stats);
                            updateTerrStats(stats);
                            let popup = `${selectedTerr}<br><br>Production:`;
                            for (let i in stats.production) {
                                if (stats.production[i] === 0) {
                                    continue
                                }
                                popup += `<br>${stats.production[i]} ${i}`;
                            }
                            polygons[selectedTerr].bindPopup(popup);
                            updateEco();
                        });
                        dropdownDiv.append(dropdown);
                        dropdownDiv.append(select);
                        dropdownDiv.append($("<br>"));
                    }
                    $(".terr-details").css("opacity", "1");
                    try {
                        parseHash();
                    } catch (e) {
                        console.error(e);
                    }
                    $("#btn-spreadsheet").click(toggleSpreadsheetMode);
                }
            });
    }

    function updatePopups() {
        for (let name in polygons) {
            let polygon = polygons[name];
            /** Territory name **/
            if (spreadsheetShown) {
                polygon.unbindPopup();
            } else {
                let territory = polygon.territory.territory;
                let guild = polygon.territory.guild;
                let popup = `${territory}<br><br>Production:`;
                let stats = calcTerr(terrData[territory], polygons[territory].territory.upgrades, hq === territory);
                for (let i in stats.production) {
                    if (stats.production[i] === 0) {
                        continue;
                    }
                    popup += `<br>${Math.round(stats.production[i])} ${i}`;
                }
                polygon.bindPopup(popup);
                updateTooltip(
                    territory,
                    `${getGuildTag(guild)}<br>${getSecondLine(territory)}`
                );
            }
        }
    }

    /**
     * Transforms latitude and longditude to a x and y coordinate
     * @param {any} latLng The latitude / longditude.
     * @returns {number[]} The x and y coordinate mapped from the latitude and londitude.
     * @reverseOperation The reverse operation is `coordsToLatLng()`
     */
    function latLngToCoords(latLng) {
        let lat = latLng.lat;
        let lng = latLng.lng;
        let proj = map.project([lat, lng], 7);
        return [proj.x, proj.y]
            .map((x) => x - 16384)
            .map((x) => x * 2)
            .map((x, i) => x + [0, -3072][i]);
    }
    /**
     * Transforms x and y coordinate to a latitude and a longditude.
     * @param {number[]} coords The x and y coordinate.
     * @returns {any} The latitude / longditude.
     * @reverseOperation The reverse operation is `latLngToCoords()`
     */
    function coordsToLatLng(coords) {
        return map.unproject(
            coords
                .map((x, i) => x - [0, -3072][i])
                .map((x) => x / 2)
                .map((x) => x + 16384),
            7
        );
    }

    function createPolygon(territory) {
        let sx = territory["location"]["startX"];
        let sy = territory["location"]["startY"];
        let ex = territory["location"]["endX"];
        let ey = territory["location"]["endY"];
        let paths = [];
        paths.push(coordsToLatLng([sx, sy]));
        paths.push(coordsToLatLng([sx, ey]));
        paths.push(coordsToLatLng([ex, ey]));
        paths.push(coordsToLatLng([ex, sy]));
        let polygon = L.polygon(paths, {
            color: `#ffffff`,
            fillOpacity: 0.25,
            fillColor: `#ffffff`,
            strokeOpacity: 0.8,
            stroke: true,
            fill: true,
            interactive: true,
            map: map,
            name: territory.territory,
        });
        polygon.bindTooltip(
            ``,
            {
                direction: "center",
                opacity: map.getZoom() - 5,
                permanent: true,
                interactive: false,
                className: "terr-details",
            }
        );
        polygon.territory = territory;
        polygon.territory.upgrades = {};
        polygon.include = false;
        polygon.on("click", function(e) {
            if (spreadsheetShown) return;
            let polygon = e.target;
            let terr = polygon.territory.territory;
            $("#right_sidebar").show();
            $("#terr_name").html(polygon.territory.territory);
            $("select").map((i, v) => {
                let type = v.id.substr(7);
                v.value = polygon.territory.upgrades[type] || 0;
            });
            $("#eco_include").prop("checked", polygon.include);
            $("#eco_hq").prop("checked", terr === hq);
            selectedTerr = terr;
            if (polygon.include) {
                let stats = calcTerr(terrData[terr], polygon.territory.upgrades, terr === hq);
                updateTerrStats(stats);
            }
        })
        polygons[territory["territory"]] = polygon;
        return polygon;
    }

    function getSecondLine(terr) {
        switch (mapMode) {
            default:
                return terrData[terr].distance || "";
        }
    }

    /**
     * Set a territory connection line
     * @param t1 The starting territory
     * @param t2 The target territory
     * @param line Line type / data
     */
    function setConnLine(t1, t2, line) {
        // if (connLines[t2] && connLines[t2][t1]) {
        //     connLines[t2][t1] = line;
        // } else {
        connLines[t1] = connLines[t1] || {};
        connLines[t1][t2] = line;
        // }
    }

    function hideRoutes() {
        if (!routesShown) return;
        for (let i in connLines) {
            for (let j in connLines[i]) {
                connLines[i][j].remove();
            }
        }
        routesShown = false;
    }

    function showRoutes() {
        if (routesShown) return;
        for (let i in connLines) {
            for (let j in connLines[i]) {
                connLines[i][j].addTo(map);
            }
        }
        routesShown = true;
    }

    function resource(terr) {
        let type = "";
        if (terrData[terr].production.emerald === 18000) {
            type += resSymbols["emerald"];
        }
        for (let i in terrData[terr].production) {
            if (i === "emerald") continue;
            switch (terrData[terr].production[i]) {
                case 3600:
                    type += resSymbols[i];
                    break;
                case 7200:
                    type += resSymbols[i] + resSymbols[i];
                    break;
                case 900:
                    type += resSymbols["rainbow"];
                    return type;
            }
        }
        return type;
    }

    function updateTooltip(terr, content) {
        if (tooltipContents[terr] !== content.toString()) {
            tooltipContents[terr] = content.toString();
            polygons[terr].unbindTooltip();
            polygons[terr].bindTooltip(
                `${getSecondLine(terr)}`,
                {
                    direction: "center",
                    opacity: map.getZoom() - 5,
                    permanent: true,
                    interactive: false,
                    className: "terr-details",
                }
            );
        }
    }

    function getGuildTag(guild) {
        if (guildTags[guild] !== undefined) {
            return guildTags[guild];
        }
        fetch(`https://api.wynncraft.com/public_api.php?action=guildStats&command=${guild}`)
            .then(r => r.json())
            .then(function (res) {
                if (res.prefix) {
                    guildTags[guild] = res.prefix;
                }
            });
        guildTags[guild] = guild;
        return guild;
    }

    function calcTerr(terr, upgrades, hq) {
        // {"eff_res":6,"eff_em":3,"res_rate":3,"em_rate":3}
        let damage = upgradeData.damage.base[0];
        let attack = upgradeData.attack.base[0];
        let health = upgradeData.health.base[0];
        let defense = upgradeData.defense.base[0];
        let resStorage = upgradeData.res_storage.base[hq ? 1 : 0];
        let emStorage = upgradeData.em_storage.base[hq ? 1 : 0];
        let oreUsage = 0;
        let cropUsage = 0;
        let fishUsage = 0;
        let woodUsage = 0;
        let emeraldUsage = 0;

        let oreProd = terr.production.ore;
        let cropProd = terr.production.crop;
        let fishProd = terr.production.fish;
        let woodProd = terr.production.wood;
        let emeraldProd = terr.production.emerald;
        let treasuryMulti = Math.min(1, Math.max(1.3 - terr.distance * 0.15, 0.4));

        // tower
        let statMulti = 1;
        // conns
        statMulti += 0.3 * terr.routes.filter(x => polygons[x].include).length;
        // hq conns
        if (hq) {
            let hqMulti = 1.25;
            for (let i in terrData) {
                if (terrData[i].distance <= 2 && polygons[i].include) { // includes the hq itself
                    hqMulti += 0.25;
                }
            }
            statMulti *= hqMulti;
        }
        damage *= (1 + upgradeData.damage.cost[upgrades.damage || 0][1]) * statMulti;
        oreUsage += upgradeData.damage.cost[upgrades.damage || 0][0];
        attack *= (1 + upgradeData.attack.cost[upgrades.attack || 0][1]);
        cropUsage += upgradeData.attack.cost[upgrades.attack || 0][0];
        health *= (1 + upgradeData.health.cost[upgrades.health || 0][1]) * statMulti;
        woodUsage += upgradeData.health.cost[upgrades.health || 0][0];
        defense *= (1 + upgradeData.defense.cost[upgrades.defense || 0][1]);
        fishUsage += upgradeData.defense.cost[upgrades.defense || 0][0];

        // storage
        resStorage *= (1 + upgradeData.res_storage.cost[upgrades.res_storage || 0][1]);
        emeraldUsage += upgradeData.res_storage.cost[upgrades.res_storage || 0][0];
        emStorage *= (1 + upgradeData.em_storage.cost[upgrades.em_storage || 0][1]);
        woodUsage += upgradeData.em_storage.cost[upgrades.em_storage || 0][0];

        //bonuses
        woodUsage += upgradeData.gather_xp.cost[upgrades.gather_xp || 0][0];
        fishUsage += upgradeData.mob_xp.cost[upgrades.mob_xp || 0][0];
        cropUsage += upgradeData.mob_damage.cost[upgrades.mob_damage || 0][0]
        oreUsage += upgradeData.pvp_damage.cost[upgrades.pvp_damage || 0][0]
        emeraldUsage += upgradeData.xp_seeking.cost[upgrades.xp_seeking || 0][0]
        fishUsage += upgradeData.tome_seeking.cost[upgrades.tome_seeking || 0][0]
        fishUsage += upgradeData.eme_seeking.cost[upgrades.eme_seeking || 0][0]


        // boosts
        let resMulti = 1;
        let emMulti = 1;
        resMulti += upgradeData.eff_res.cost[upgrades.eff_res || 0][1];
        emeraldUsage += upgradeData.eff_res.cost[upgrades.eff_res || 0][0];
        emMulti += upgradeData.eff_em.cost[upgrades.eff_em || 0][1];
        oreUsage += upgradeData.eff_em.cost[upgrades.eff_em || 0][0];
        resMulti *= (4 / upgradeData.res_rate.cost[upgrades.res_rate || 0][1]);
        emeraldUsage += upgradeData.res_rate.cost[upgrades.res_rate || 0][0];
        emMulti *= (4 / upgradeData.em_rate.cost[upgrades.em_rate || 0][1]);
        cropUsage += upgradeData.em_rate.cost[upgrades.em_rate || 0][0];
        // treasury
        emMulti *= (1 + treasury * treasuryMulti);
        resMulti *= (1 + treasury * treasuryMulti);
        woodProd *= resMulti;
        oreProd *= resMulti;
        fishProd *= resMulti;
        cropProd *= resMulti;
        emeraldProd *= emMulti;

        // bonuses
        fishUsage += upgradeData.multi.cost[upgrades.multi || 0][0];
        oreUsage += upgradeData.volley.cost[upgrades.volley || 0][0];
        cropUsage += upgradeData.aura.cost[upgrades.aura || 0][0];
        woodUsage += upgradeData.minions.cost[upgrades.minions || 0][0];
        return {
            stats: {
                damage, attack, health, defense
            },
            usage: {
                emerald: emeraldUsage, wood: woodUsage, ore: oreUsage, fish: fishUsage, crop: cropUsage
            },
            production: {
                emerald: emeraldProd, wood: woodProd, ore: oreProd, fish: fishProd, crop: cropProd
            },
            storage: {
                resStorage, emStorage
            }, upgrades, statMulti};
    }

    function updateEco() {
        let prod = {emerald: 0, wood: 0, ore: 0, fish: 0, crop: 0};
        let usage = {emerald: 0, wood: 0, ore: 0, fish: 0, crop: 0};
        for (let i in polygons) {
            if (!polygons[i].include) continue;
            let stats = calcTerr(terrData[i], polygons[i].territory.upgrades, i === hq);
            for (let j in stats.production) {
                prod[j] += stats.production[j];
            }
            for (let j in stats.usage) {
                usage[j] += stats.usage[j];
            }
        }
        $("#em_count").html(`${Math.round(usage.emerald)} / ${Math.round(prod.emerald)} ${FORMATTER_PERCENT_2DP(usage.emerald / prod.emerald)}`);
        $("#wood_count").html(`${Math.round(usage.wood)} / ${Math.round(prod.wood)} ${FORMATTER_PERCENT_2DP(usage.wood / prod.wood)}`);
        $("#crop_count").html(`${Math.round(usage.crop)} / ${Math.round(prod.crop)} ${FORMATTER_PERCENT_2DP(usage.crop / prod.crop)}`);
        $("#ore_count").html(`${Math.round(usage.ore)} / ${Math.round(prod.ore)} ${FORMATTER_PERCENT_2DP(usage.ore / prod.ore)}`);
        $("#fish_count").html(`${Math.round(usage.fish)} / ${Math.round(prod.fish)} ${FORMATTER_PERCENT_2DP(usage.fish / prod.fish)}`);
        updateHash();
        updatePopups();
    }

    function updateTerrStats(stats) {
        $("#terr_stats_name").html(selectedTerr);
        $("#terr_stats_dmg").html(`${Math.round(stats.stats.damage)}-${Math.round(1.5 * stats.stats.damage)}<br>(avg Dps: ${((Math.round(stats.stats.damage) + Math.round(1.5 * stats.stats.damage)) / 2) * Math.round(stats.stats.attack * 100) / 100})`)
        $("#terr_stats_atk").html(`${Math.round(stats.stats.attack * 100) / 100}`);
        $("#terr_stats_hp").html(`${Math.round(stats.stats.health)} (Effective: ${Math.round(stats.stats.health / (1 - stats.stats.defense))})`);
        $("#terr_stats_def").html(`${Math.round(stats.stats.defense * 1000) / 10}%`);
        $("#terr_stats_em").html(`${Math.round(stats.usage.emerald)} / ${Math.round(stats.production.emerald)} - ${Math.round(stats.storage.emStorage)}`);
        $("#terr_stats_ore").html(`${Math.round(stats.usage.ore)} / ${Math.round(stats.production.ore)} - ${Math.round(stats.storage.resStorage)}`);
        $("#terr_stats_wood").html(`${Math.round(stats.usage.wood)} / ${Math.round(stats.production.wood)} - ${Math.round(stats.storage.resStorage)}`);
        $("#terr_stats_fish").html(`${Math.round(stats.usage.fish)} / ${Math.round(stats.production.fish)} - ${Math.round(stats.storage.resStorage)}`);
        $("#terr_stats_crop").html(`${Math.round(stats.usage.crop)} / ${Math.round(stats.production.crop)} - ${Math.round(stats.storage.resStorage)}`);
        $("#terr_stats").show();
    }

    function updateHash() {
        console.log("update hash");
        let hash = "";
        if (hq) {
            let idx = terrNames.indexOf(hq);
            if (idx >= 0) {
                hash += idx.toString(36).padStart(2, "0");
            } else {
                hash += "--";
            }
        } else {
            hash += "--";
        }
        for (let i = 0; i < terrNames.length; ++i) {
            let terr = terrNames[i];
            if (polygons[terr].include) {
                hash += i.toString(36).padStart(2, "0");
                for (let prop of PROPS) {
                    hash += (polygons[terr].territory.upgrades[prop] || 0).toString(36);
                }
            }
        }
        document.location.hash = "3_" + LZString.compressToEncodedURIComponent(hash);
    }

    /**
     * hash v1: stat-relevant upgrades, uncompressed
     * hash v2: stat-relevant upgrades, compressed
     */
    function parseHash() {
        let hash = document.location.hash.replace("#", "");
        console.log("parse hash", hash);
        if (hash.length < 2) return;
        let segments = hash.split("_", 2);
        let v = segments[0];
        let payload = segments[1];
        switch (v) {
            case "1":
                parseDecompressedHashV2(payload, 2);
                break;
            case "2":
                parseDecompressedHashV2(LZString.decompressFromEncodedURIComponent(payload), 2);
                break;
            case "3":
                parseDecompressedHashV2(LZString.decompressFromEncodedURIComponent(payload), 3);
                break;
        }
    }

    function parseDecompressedHashV2(payload, ver) {
        let len;
        switch (ver) {
            case 2: len = 16; break;
            case 3: len = 23; break;
            default: throw new Error("invalid ver");
        }
        // if ((payload.length & 0xf) !== 2) throw new Error("invalid length");
        if (payload.length % len !== 2) throw new Error("invalid length");
        let hqIdx = payload.substr(0, 2);
        for (let i = 2; i < payload.length; i += len) {
            let s = payload.substr(i, len);
            let terr = terrNames[parseInt(s.substr(0, 2), 36)];
            if (!terr) throw new Error("invalid terr index");
            let upgrades = polygons[terr].territory.upgrades;
            polygons[terr].include = true;
            for (let j = 0; j < len - 2; ++j) {
                upgrades[PROPS[j]] = parseInt(s[j + 2], 36);
            }
            polygons[terr].setStyle({
                fillColor: "#00ff00",
                color: "#00ff00",
            });
        }
        if (hqIdx !== "--") {
            hq = terrNames[parseInt(hqIdx, 36)];
            if (!hq) throw new Error("invalid hq");
            polygons[hq].setStyle({
                fillColor: "#cccc00",
                color: "#cccc00",
            });
        }
        if (hq) calcDistances();
        updateEco();
    }

    function calcDistances() {
        clearDistances();
        let solved = new Set();
        let queue = [hq];
        terrData[hq].distance = 0;
        let terrCount = 0;
        for (let i in terrData) {
            if (!terrData.hasOwnProperty(i)) continue;
            ++terrCount;
        }
        solved.add(hq);
        while (solved.size < terrCount && queue.length) {
            let terr = queue.shift();
            // console.log(queue);
            // console.log(terr);
            // console.log(solved.size);
            for (let i of terrData[terr].routes) {
                terrData[i].distance = Math.min(terrData[i].distance, terrData[terr].distance + 1);
                if (!solved.has(i)) {
                    queue.push(i);
                    solved.add(i);
                }
            }
        }
        updatePopups();
    }

    function clearDistances() {
        for (let i in terrData) {
            terrData[i].distance = 99999;
        }
    }

    function toggleSpreadsheetMode() {
        // sync current upgrades to the sheet and show it
        let div = $("#spreadsheet_mode");
        let table = $("#spreadsheet");
        if (spreadsheetShown) {
            div.hide();
            $("#btn-spreadsheet").html("Open Spreadsheet");
        } else {
            map.closePopup();
            selectedTerr = void 0;
            $("#right_sidebar").hide();
            table.find("tr").slice(1).remove();
            // hq
            if (hq) insertSpreadsheetRow(table, hq);
            for (let terr of terrNames) {
                if (polygons[terr].include && terr !== hq) insertSpreadsheetRow(table, terr);
            }
            div.show();
            $("#btn-spreadsheet").html("Close Spreadsheet");
        }
        spreadsheetShown = !spreadsheetShown;
        updatePopups();
    }

    function insertSpreadsheetRow(table, terr) {
        let tr = $("<tr>");
        $(`<td>${terr}</td>`).appendTo(tr);
        for (let i of PROPS) {
            let td = $(`<td></td>`);
            let max = upgradeData[i].cost.length - 1;
            let input = $(`<input class="spreadsheet_input" type="number" min="0" max="${max}">`);
            let lvl = polygons[terr].territory.upgrades[i];
            input.val(lvl > 0 ? lvl : "");
            input.keyup(function () {
                if (this.value > max) this.value = max;
                if (this.value <= 0) this.value = "";
                console.log(terr, i, this.value);
                polygons[terr].territory.upgrades[i] = this.value === "" ? 0 : parseInt(this.value);
                updateEco();
            });
            input.appendTo(td);
            td.appendTo(tr);
        }
        tr.appendTo(table);
    }
}
