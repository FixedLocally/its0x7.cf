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
    'Show/Hide all': 'f0f0f0', // special
};
let terrData = {"Air Temple Upper":{"routes":["Air Temple Lower"],"emerald":9000,"ore":3600},"Maro Peaks":{"routes":["Skiens Island","Tree Island"],"emerald":9000,"ore":3600},"Plains":{"routes":["Maltic Plains","North Nivla Woods","South Farmers Valley","Nivla Woods Entrance"],"emerald":9000,"fish":3600},"Path To Thanos":{"routes":["Cinfras Thanos Transition","Thanos"],"emerald":9000,"ore":3600},"Savannah West Lower":{"routes":["Ternaves Plains Upper","Savannah East Lower","Savannah West Upper"],"emerald":9000,"crop":3600},"Durum Isles Upper":{"routes":["Selchar","Mage Island","Durum Isles Center","Nodguj Nation"],"emerald":9000,"crop":3600},"Selchar":{"routes":["Skiens Island","Durum Isles Upper","Rooster Island","Durum Isles Center","Durum Isles Lower"],"emerald":18000,"fish":3600},"Llevigar Plains West Lower":{"routes":["Llevigar Farm Plains West","Llevigar Plains East Lower","Llevigar Gate West","Llevigar Plains West Upper"],"emerald":9000,"wood":3600},"Nesaak Plains South East":{"routes":["Nesaak Village","Bob's Tomb","Nesaak Plains South West"],"emerald":9000,"wood":3600},"Llevigar Plains East Lower":{"routes":["Llevigar Plains East Upper","Llevigar Plains West Lower","Orc Lake","Llevigar Farm Plains East"],"emerald":9000,"ore":3600},"Kander Mines":{"routes":["Path to Talor","Mesquis Tower","Dark Forest Village","Abandoned Manor"],"emerald":9000,"wood":3600},"Swamp Dark Forest Transition Upper":{"routes":["Olux","Swamp Dark Forest Transition Mid","Taproot Descent"],"emerald":9000,"ore":3600},"Mine Base Plains":{"routes":["Plains Lake","The Silent Road","Mining Base Lower","Mining Base Upper","Ternaves Plains Lower"],"emerald":9000,"crop":3600},"Detlas Savannah Transition":{"routes":["Detlas","Ternaves Plains Upper","Savannah West Lower","Mine Base Plains"],"emerald":9000,"crop":3600},"Fortress South":{"routes":["Fortress North","Mansion of Insanity","Swamp Dark Forest Transition Lower","Orc Battlegrounds"],"emerald":9000,"wood":3600},"Aldorei Lowlands":{"routes":["Aldorei's River","Cinfras's Small Farm","Aldorei's Waterfall"],"emerald":9000,"wood":3600},"Llevigar Gate East":{"routes":["Llevigar Gate West","Orc Road","Llevigar Farm Plains East","Llevigar"],"emerald":9000,"ore":3600},"Viscera Pits West":{"routes":["Entrance to Kander","Lexdales Prison","Viscera Pits East","Twisted Ridge"],"emerald":9000,"wood":3600},"Sanctuary Bridge":{"routes":["Nesaak Plains Upper North West","Time Valley"],"emerald":9000,"fish":3600},"Desert West Upper":{"routes":["Desert Upper","Almuj City"],"emerald":9000,"crop":3600},"Maltic Plains":{"routes":["Ragni East Suburbs","Plains","Emerald Trail","Maltic"],"emerald":9000,"crop":3600},"Savannah West Upper":{"routes":["Cathedral Harbour","Savannah West Lower","Savannah East Upper","Bremminglar"],"emerald":9000,"crop":3600},"Mage Island":{"routes":["Half Moon Island","Santa's Hideout","Durum Isles Upper","Durum Isles East"],"emerald":9000,"wood":3600},"Ahmsord":{"routes":["Path to Ahmsord Lower","Sky Island Ascent","Temple Island","Path to Ahmsord Upper"],"emerald":18000,"wood":3600},"Swamp Mountain Transition Mid":{"routes":["Swamp Mountain Transition Lower","Swamp Mountain Transition Mid-Upper","Swamp West Upper"],"emerald":9000,"fish":3600},"Bob's Tomb":{"routes":["Nesaak Plains South East","Nesaak Plains North East","Nesaak Village"],"emerald":9000,"wood":3600},"Fallen Factory":{"routes":["Factory Entrance","Ruined Houses","Corkus City South","Corkus Sea Port"],"emerald":9000,"fish":3600},"Canyon Valley South":{"routes":["Canyon Mountain East","Bandit Cave Lower","Bandit Camp Exit"],"emerald":9000,"ore":3600},"Swamp East Lower":{"routes":["Swamp West Lower","Sunspark Camp","Llevigar Plains East Upper","Swamp East Mid"],"emerald":9000,"ore":3600},"Path to Light":{"routes":["Azure Frontier","Otherwordly Monolith"],"emerald":9000,"fish":3600},"Corkus City":{"routes":["Corkus Castle","Corkus Forest North","Corkus Forest South","Corkus Countryside","Corkus City South"],"emerald":18000,"fish":3600},"Canyon Path North Mid":{"routes":["Canyon Path South West","Bandit Camp Exit","Canyon Waterfall Mid North","Canyon Entrance Waterfall"],"emerald":9000,"ore":3600},"The Silent Road":{"routes":["The Broken Road","Mine Base Plains"],"emerald":9000,"crop":3600},"City of Troms":{"routes":["Temple of Legends","Jungle Lake","South Pigmen Ravines"],"emerald":18000,"wood":3600},"Gylia Lake South West":{"routes":["Dark Forest Cinfras Transition","Gylia Lake North West","Gylia Lake South East"],"emerald":9000,"fish":3600},"Primal Fen":{"routes":["Field of Life"],"emerald":9000,"ore":3600},"Canyon Mountain East":{"routes":["Canyon Walk Way","Canyon Valley South"],"emerald":9000,"ore":7200},"Dark Forest Cinfras Transition":{"routes":["Gylia Lake South West","Fallen Village","Cinfras Outskirts"],"emerald":9000,"wood":3600},"Cliffside Lake":{"routes":["Cliffside Passage","Canyon Of The Lost"],"emerald":9000,"fish":3600},"Nemract Plains West":{"routes":["Nivla Woods Edge","Nemract Road","Nemract Quarry","Arachnid Route"],"emerald":9000,"crop":3600},"Twain Mansion":{"routes":["Twain Lake"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Savannah East Lower":{"routes":["Savannah West Lower","Ternaves","Savannah East Upper"],"emerald":9000,"wood":3600},"Swamp Lower":{"routes":["Swamp Mountain Base","Swamp Dark Forest Transition Lower","Iron Road","Entrance to Olux"],"emerald":9000,"wood":3600},"Bremminglar":{"routes":["Lion Lair","Savannah West Upper"],"emerald":9000,"ore":3600},"Road To Light Forest":{"routes":["Fleris Trail","Leadin Fortress","Light Forest Entrance"],"emerald":9000,"wood":3600},"Swamp East Mid-Upper":{"routes":["Swamp West Mid-Upper","Swamp Plains Basin","Swamp East Upper","Swamp East Mid"],"emerald":9000,"ore":3600},"Thanos Valley West":{"routes":["Military Base Lower"],"emerald":9000,"wood":3600},"Llevigar Entrance":{"routes":["Volcano Lower","Llevigar"],"emerald":9000,"ore":3600},"Volcanic Slope":{"routes":["Active Volcano","Lava Lake"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Durum Isles Center":{"routes":["Durum Isles Upper","Selchar","Durum Isles Lower","Durum Isles East"],"emerald":9000,"crop":3600},"Canyon Waterfall North":{"routes":["Canyon Upper North West"],"emerald":9000,"ore":3600},"Gelibord Corrupted Farm":{"routes":["Twisted Housing","Gelibord","Gelibord Castle","Taproot Descent"],"emerald":9000,"crop":3600},"Pirate Town":{"routes":["Bloody Beach","Lost Atoll","Zhight Island"],"emerald":9000,"fish":3600},"Fungal Grove":{"routes":["Old Crossroads North","Decayed Basin","Fallen Village","Cinfras Outskirts","Old Crossroads South"],"emerald":9000,"wood":3600},"Orc Road":{"routes":["Orc Lake","Loamsprout Camp","Llevigar Farm Plains East"],"emerald":9000,"ore":3600},"Llevigar Farm Plains East":{"routes":["Llevigar Farm Plains West","Llevigar Gate East","Llevigar Plains East Lower","Orc Road"],"emerald":9000,"crop":3600},"Old Crossroads North":{"routes":["Old Crossroads South","Fungal Grove","Lexdale","Path to Talor"],"emerald":9000,"crop":3600},"Corkus Docks":{"routes":["Corkus Mountain"],"emerald":9000,"fish":3600},"Canyon Upper North West":{"routes":["Canyon Waterfall North"],"emerald":9000,"wood":3600},"Ahmsord Outskirts":{"routes":["Central Islands","Angel Refuge","Wybel Island","Swamp Island"],"emerald":9000,"wood":3600},"Desert West Lower":{"routes":["Almuj City","Desert Lower","Desert Mid-Lower"],"emerald":9000,"crop":3600},"Swamp West Mid":{"routes":["Swamp West Lower","Swamp West Mid-Upper","Swamp East Mid"],"emerald":9000,"ore":3600},"Krolton's Cave":{"routes":["Air Temple Lower","Wizard Tower North","Temple of the Lost East","Canyon Mountain South"],"emerald":9000,"fish":3600},"Royal Gate":{"routes":["Phinas Farm"],"emerald":9000,"fish":7200},"Paths of Sludge":{"routes":["Lutho","Toxic Drip"],"emerald":9000,"crop":3600},"Nesaak Plains Lower North West":{"routes":["Nesaak Village","Nesaak Plains Upper North West","Nesaak Plains Mid North West","Nesaak Plains South West"],"emerald":9000,"wood":3600},"Lone Farmstead":{"routes":["Twisted Housing","Abandoned Manor","Gelibord"],"emerald":9000,"wood":3600},"Road to Elkurn":{"routes":["Elkurn","Elkurn Fields","South Nivla Woods"],"emerald":9000,"fish":3600},"Rooster Island":{"routes":["Selchar","The Bear Zoo","Nemract Town","Durum Isles Lower"],"emerald":9000,"fish":3600},"Dernel Jungle Mid":{"routes":["Dernel Jungle Upper","Dernel Jungle Lower","Jungle Upper"],"emerald":9000,"crop":3600},"Swamp Plains Basin":{"routes":["Swamp East Mid-Upper","Swamp East Upper","Swamp Mountain Base","Entrance to Olux"],"emerald":9000,"ore":3600},"Final Step":{"routes":["Gateway to Nothing","Bizarre Passage"],"emerald":9000,"crop":3600},"Tree Island":{"routes":["Light Peninsula","Lost Atoll","Volcano Upper"],"emerald":9000,"wood":3600},"Canyon Dropoff":{"routes":["Mountain Path","Cliff Side of the Lost"],"emerald":9000,"ore":3600},"Ancient Nemract":{"routes":["Cathedral Harbour","Nemract Road","Nemract Cathedral","Detlas Trail East Plains","Detlas Trail West Plains"],"emerald":9000,"crop":3600},"Aldorei Valley Mid":{"routes":["Aldorei Valley Upper","Aldorei Valley Lower"],"emerald":9000,"crop":3600},"Cinfras County Upper":{"routes":["Gylia Lake South East","Cinfras County Mid-Upper","Path To Thanos"],"emerald":9000,"wood":3600},"South Farmers Valley":{"routes":["Maltic Plains","Maltic Coast","Plains","North Farmers Valley","Maltic"],"emerald":9000,"crop":3600},"Katoa Ranch":{"routes":["Ragni North Suburbs","Ragni North Entrance"],"emerald":9000,"crop":7200},"Decayed Basin":{"routes":["Heart of Decay","Mushroom Hill","Fungal Grove","Lexdale"],"emerald":9000,"wood":3600},"Ragni North Suburbs":{"routes":["Ragni North Entrance","Ragni Plains","Katoa Ranch"],"emerald":9000,"crop":3600},"Durum Isles Lower":{"routes":["Durum Isles Center","Selchar","Rooster Island"],"emerald":9000,"wood":3600},"Orc Battlegrounds":{"routes":["Leadin Fortress","Fortress South"],"emerald":9000,"ore":3600},"Thanos":{"routes":["Path To Thanos","Path To Military Base","Gylia Lake South East","Path To Ozoth's Spire Lower"],"emerald":18000,"ore":3600},"Path To Ozoth's Spire Lower":{"routes":["Military Base Lower","Thanos"],"emerald":9000,"ore":3600},"Worm Tunnel":{"routes":["The Broken Road","Grey Ruins"],"emerald":9000,"crop":3600},"Cinfras County Mid-Lower":{"routes":["Cinfras County Lower","Cinfras's Small Farm","Cinfras County Mid-Upper"],"emerald":9000,"wood":3600},"Tower of Ascension":{"routes":["Icy Descent"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Skiens Island":{"routes":["Nodguj Nation","Selchar","Dead Island South West","Maro Peaks"],"emerald":9000,"ore":3600},"Active Volcano":{"routes":["Lava Lake Bridge","Lava Lake","Volcanic Slope"],"emerald":9000,"crop":3600},"Cliffside Waterfall":{"routes":["Canyon High Path"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Valley of the Lost":{"routes":["Canyon Of The Lost","Temple of the Lost East","Canyon Fortress"],"emerald":9000,"ore":3600},"Frozen Fort":{"routes":["Sky Falls"],"emerald":9000,"crop":3600},"Path to Cinfras":{"routes":["Cinfras Entrance","Light Forest East Upper"],"emerald":9000,"wood":3600},"Temple Island":{"routes":["Kandon Ridge","Central Islands","Swamp Island","Ahmsord","Snail Island"],"emerald":9000,"wood":3600},"Nodguj Nation":{"routes":["Dujgon Nation","Santa's Hideout","Icy Island","Skiens Island","Mage Island"],"emerald":9000,"fish":3600},"Arachnid Route":{"routes":["Plains","North Nivla Woods","Nemract Plains West"],"emerald":9000,"wood":3600},"Nesaak Bridge Transition":{"routes":["Nesaak Plains South West","Great Bridge Nesaak"],"emerald":9000,"wood":3600},"Cinfras's Small Farm":{"routes":["Cinfras County Lower","Aldorei Lowlands","Cinfras County Mid-Lower","Aldorei Valley South Entrance"],"emerald":9000,"wood":3600},"South Nivla Woods":{"routes":["Road to Elkurn","Nivla Woods","Road to Time Valley","Nivla Woods Exit","Elkurn Fields"],"emerald":9000,"wood":3600},"Heart of Decay":{"routes":["Decayed Basin","Mushroom Hill","Lexdale"],"emerald":9000,"wood":3600},"Regular Island":{"routes":["Jofash Docks","Icy Island","Dujgon Nation"],"emerald":9000,"wood":3600},"Quartz Mines South West":{"routes":["Quartz Mines South East","Quartz Mines North West","Llevigar"],"emerald":9000,"ore":3600},"Pigmen Ravines":{"routes":["Abandoned Farm","Pigmen Ravines Entrance"],"emerald":9000,"ore":3600},"Swamp West Mid-Upper":{"routes":["Swamp East Mid-Upper","Swamp West Upper","Swamp West Mid"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Rymek West Mid":{"routes":["Rymek West Upper","Rymek East Mid","Rymek West Lower"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Avos Workshop":{"routes":["Avos Temple"],"emerald":9000,"wood":3600},"Swamp Mountain Transition Lower":{"routes":["Swamp Mountain Transition Mid"],"emerald":9000,"fish":3600},"Crater Descent":{"routes":["Lava Lake Bridge","Rodoroc","Molten Heights Portal"],"emerald":9000,"ore":3600},"Jofash Docks":{"routes":["Regular Island","Dead Island North East","Jofash Tunnel"],"emerald":9000,"fish":3600},"Bandit Camp Exit":{"routes":["Canyon Valley South","Canyon Path North Mid"],"emerald":9000,"ore":3600},"Ragni Main Entrance":{"routes":["Ragni East Suburbs","Emerald Trail","Ragni"],"emerald":9000,"crop":3600},"Canyon Fortress":{"routes":["Canyon Waterfall Mid North","Valley of the Lost"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Llevigar Farm":{"routes":["Loamsprout Camp","Goblin Plains West","Quartz Mines North West","Goblin Plains East","Pre-Light Forest Transition","Quartz Mines North East"],"emerald":9000,"crop":3600},"Detlas Suburbs":{"routes":["Detlas Close Suburbs","Detlas Far Suburbs","Nether Plains Upper","Detlas Trail East Plains"],"emerald":9000,"crop":3600},"Corkus Sea Cove":{"routes":["Road To Mine","Fallen Factory","Corkus City Mine","Corkus Sea Port"],"emerald":9000,"fish":3600},"Iron Road":{"routes":["Meteor Crater","Goblin Plains West","Swamp Lower","Forgotten Path"],"emerald":9000,"ore":3600},"Thesead Suburbs":{"routes":["Ranol's Farm","Chained House","Entrance to Rodoroc","Thesead"],"emerald":9000,"crop":3600},"Burning Farm":{"routes":["Ghostly Path","Burning Airship"],"emerald":9000,"ore":3600},"Desert Mid-Upper":{"routes":["Desert Mid-Lower","Desert Upper","Desert East Mid","Almuj City"],"emerald":9000,"crop":3600},"Forgotten Town":{"routes":["Grey Ruins","Forest of Eyes"],"emerald":9000,"crop":3600},"Nemract Quarry":{"routes":["Nemract Road","Plains Coast","Nemract Plains West"],"emerald":9000,"ore":3600},"Nether Plains Upper":{"routes":["Nether Gate","Plains Lake","Detlas Close Suburbs","Corrupted Road","Detlas Far Suburbs","Detlas Suburbs"],"emerald":9000,"wood":3600},"Desert East Upper":{"routes":["Desert East Mid"],"emerald":9000,"wood":3600},"Savannah East Upper":{"routes":["Savannah East Lower","Almuj City","Savannah West Upper"],"emerald":9000,"crop":3600},"Sunspark Camp":{"routes":["Swamp Mountain Base","Llevigar Plains East Upper","Meteor Crater","Swamp East Lower","Orc Lake"],"emerald":9000,"ore":3600},"Icy Island":{"routes":["Dujgon Nation","Santa's Hideout","Nodguj Nation","Regular Island"],"emerald":9000,"fish":3600},"Quartz Mines North East":{"routes":["Llevigar Farm","Quartz Mines South East","Quartz Mines North West","Pre-Light Forest Transition"],"emerald":9000,"ore":3600},"Gert Camp":{"routes":["Gylia Lake North East","Jitak's Farm"],"emerald":9000,"wood":3600},"Thesead":{"routes":["Thesead Suburbs","Entrance to Thesead South"],"emerald":18000,"ore":3600},"Military Base Upper":{"routes":["Military Base Lower","Military Base"],"emerald":9000,"ore":3600},"Volcano Upper":{"routes":["Light Peninsula","Lost Atoll","Pirate Town","Tree Island","Volcano Lower"],"emerald":9000,"ore":3600},"Entrance to Olux":{"routes":["Swamp Dark Forest Transition Mid","Swamp Plains Basin","Swamp Lower","Swamp Dark Forest Transition Lower","Olux"],"emerald":9000,"ore":3600},"Otherwordly Monolith":{"routes":["Path to Light","Azure Frontier"],"emerald":9000,"crop":3600},"Lava Lake Bridge":{"routes":["Crater Descent","Active Volcano","Molten Heights Portal"],"emerald":9000,"ore":3600},"Aldorei Valley West Entrance":{"routes":["Hobbit River","Aldorei Valley Lower","Mantis Nest"],"emerald":9000,"wood":3600},"Kandon-Beda":{"routes":["Canyon Of The Lost"],"emerald":18000,"ore":3600},"Raider's Base Upper":{"routes":["Sky Island Ascent","Raider's Base Lower"],"emerald":9000,"ore":3600},"Light Forest East Lower":{"routes":["Light Forest West Mid","Hobbit River","Mantis Nest","Light Forest East Mid"],"emerald":9000,"wood":3600},"Jungle Upper":{"routes":["Jungle Mid"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Dead Island South East":{"routes":["Dujgon Nation","Dead Island South West","Regular Island","Dead Island North East"],"emerald":9000,"wood":3600},"Mesquis Tower":{"routes":["Path to Cinfras","Abandoned Manor","Kander Mines","Cinfras Entrance"],"emerald":9000,"wood":3600},"Light Forest West Mid":{"routes":["Light Forest East Lower","Light Forest West Upper","Light Forest Entrance","Light Forest West Lower"],"emerald":9000,"wood":3600},"Path To Military Base":{"routes":["Thanos","Military Base"],"emerald":9000,"ore":3600},"Light Forest West Upper":{"routes":["Efilim South East Plains","Light Forest North Entrance","Light Forest West Mid","Light Forest East Mid"],"emerald":9000,"wood":3600},"Mountain Edge":{"routes":["Cliff Side of the Lost"],"emerald":9000,"wood":3600},"Nivla Woods Exit":{"routes":["Nivla Woods Edge","North Nivla Woods","Nivla Woods","South Nivla Woods"],"emerald":9000,"wood":3600},"Legendary Island":{"routes":["Zhight Island","Southern Outpost"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Abandoned Pass":{"routes":["Mining Base Upper","Ternaves Plains Lower"],"emerald":9000,"ore":3600},"Nesaak Plains Upper North West":{"routes":["Elkurn","Nesaak Plains North East","Nesaak Plains Lower North West","Nesaak Plains Mid North West","Sanctuary Bridge"],"emerald":9000,"wood":3600},"Detlas":{"routes":["Detlas Savannah Transition","Detlas Close Suburbs","Detlas Trail East Plains"],"emerald":18000,"crop":3600},"Chained House":{"routes":["Cherry Blossom Forest","Hive South","Thesead Suburbs","Entrance to Thesead South"],"emerald":9000,"ore":3600},"Corkus City Mine":{"routes":["Road To Mine","Corkus Statue","Corkus Sea Cove"],"emerald":9000,"ore":3600},"Mountain Path":{"routes":["Canyon Dropoff"],"emerald":9000,"ore":7200},"Cinfras":{"routes":["Aldorei's River","Cinfras Entrance","Guild Hall","Cinfras Outskirts"],"emerald":18000,"wood":3600},"Lexdale":{"routes":["Old Crossroads North","Heart of Decay","Decayed Basin","Viscera Pits East"],"emerald":9000,"wood":3600},"Corkus City South":{"routes":["Factory Entrance","Corkus City","Fallen Factory","Corkus Forest South","Road To Mine"],"emerald":9000,"fish":3600},"Zhight Island":{"routes":["Legendary Island","The Bear Zoo","Pirate Town"],"emerald":9000,"fish":3600},"Toxic Caves":{"routes":["Toxic Drip"],"emerald":9000,"fish":3600},"Nesaak Plains North East":{"routes":["Bob's Tomb","Nesaak Plains Upper North West","Nesaak Village","Nesaak Transition","Nesaak Plains Lower North West"],"emerald":9000,"wood":3600},"Desolate Valley":{"routes":["Nesaak Transition","Plains Lake","Nether Plains Lower"],"emerald":9000,"crop":3600},"Ragni":{"routes":["Ragni North Entrance","Pigmen Ravines Entrance","Ragni Main Entrance"],"emerald":18000,"crop":3600},"Field of Life":{"routes":["Azure Frontier","Luminous Plateau","Heavenly Ingress","Primal Fen"],"emerald":9000,"wood":3600},"Nemract Town":{"routes":["Nemract Road","Plains Coast","Rooster Island","Nemract Cathedral"],"emerald":18000,"crop":3600},"Entrance to Thesead North":{"routes":["Entrance to Thesead South","Cliffside Passage North"],"emerald":9000,"wood":3600},"Detlas Far Suburbs":{"routes":["Nether Plains Upper","Corrupted Road","Detlas Trail West Plains","Detlas Suburbs","Nivla Woods Edge"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Lighthouse Plateau":{"routes":["Corkus Sea Port","Phinas Farm","Southern Outpost"],"emerald":9000,"crop":3600},"Entrance to Thesead South":{"routes":["Thesead","Entrance to Thesead North","Chained House","Cliffside Valley"],"emerald":9600,"ore":3600},"Dark Forest Village":{"routes":["Path to Talor","Kander Mines","Cinfras Outskirts","Old Crossroads South"],"emerald":9000,"wood":3600},"Swamp East Mid":{"routes":["Swamp East Mid-Upper","Swamp Mountain Base","Swamp West Mid","Swamp East Lower"],"emerald":9000,"ore":3600},"Mummy's Tomb":{"routes":["Desert Upper"],"emerald":9000,"crop":3600},"Dernel Jungle Upper":{"routes":["Dernel Jungle Mid"],"emerald":9000,"wood":7200},"Lexdales Prison":{"routes":["Viscera Pits West","Twisted Ridge"],"emerald":9000,"wood":7200},"Wybel Island":{"routes":["Central Islands","Sky Falls","Ahmsord Outskirts"],"emerald":9000,"wood":3600},"Avos Temple":{"routes":["Avos Workshop","Bloody Beach"],"emerald":9000,"fish":3600},"Swamp Dark Forest Transition Mid":{"routes":["Entrance to Olux","Taproot Descent","Swamp Dark Forest Transition Upper","Swamp Dark Forest Transition Lower","Olux"],"emerald":9000,"ore":3600},"Rymek West Upper":{"routes":["Desert West Lower","Desert Lower","Rymek East Upper","Rymek West Mid"],"emerald":9000,"crop":3600},"Goblin Plains East":{"routes":["Forgotten Path","Llevigar Farm","Goblin Plains West","Pre-Light Forest Transition"],"emerald":9000,"crop":3600},"Azure Frontier":{"routes":["Nexus of Light","Otherwordly Monolith","Path to Light","Field of Life"],"emerald":9000,"fish":3600},"Cinfras County Mid-Upper":{"routes":["Cinfras Thanos Transition","Cinfras County Upper","Cinfras County Mid-Lower"],"emerald":9000,"wood":3600},"Maltic":{"routes":["Coastal Trail","Maltic Coast","Maltic Plains","Ragni Plains","South Farmers Valley"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Abandoned Manor":{"routes":["Entrance to Kander","Lone Farmstead","Mesquis Tower","Kander Mines"],"emerald":9000,"wood":3600},"Swamp West Upper":{"routes":["Swamp East Upper","Swamp West Mid-Upper","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Mid"],"emerald":9000,"ore":3600},"Ragni East Suburbs":{"routes":["Maltic Plains","Ragni Main Entrance","Ragni Plains"],"emerald":9000,"crop":3600},"Plains Lake":{"routes":["Nether Gate","Desolate Valley","Mine Base Plains","Nether Plains Upper"],"emerald":9000,"fish":3600},"Ternaves Plains Upper":{"routes":["Ternaves","Savannah West Lower","Ternaves Plains Lower","Detlas Savannah Transition"],"emerald":9000,"crop":3600},"Swamp Dark Forest Transition Lower":{"routes":["Swamp Dark Forest Transition Mid","Entrance to Olux","Forgotten Path","Fortress North","Fortress South","Swamp Lower"],"emerald":9000,"ore":3600},"Twisted Housing":{"routes":["Efilim Village","Gelibord Corrupted Farm","Lone Farmstead","Mansion of Insanity","Gelibord"],"emerald":9000,"wood":3600},"Hobbit River":{"routes":["Light Forest East Lower","Aldorei Valley West Entrance","Light Peninsula","Light Forest West Lower"],"emerald":9000,"ore":3600},"Cinfras Entrance":{"routes":["Cinfras","Light Forest North Exit","Path to Cinfras","Mesquis Tower"],"emerald":9000,"wood":3600},"Detlas Close Suburbs":{"routes":["Detlas","Detlas Suburbs","Nether Plains Upper","Detlas Trail East Plains"],"emerald":9000,"crop":3600},"Lost Atoll":{"routes":["Tree Island","Pirate Town","Volcano Upper"],"emerald":9000,"fish":7200},"Twisted Ridge":{"routes":["Entrance to Kander","Viscera Pits West"],"emerald":9000,"fish":3600},"Cliffside Valley":{"routes":["Entrance to Thesead North","Bandits Toll","Entrance to Thesead South","Air Temple Lower"],"emerald":9000,"ore":3600},"Detlas Trail West Plains":{"routes":["Detlas Far Suburbs","Nemract Plains East","Ancient Nemract","Detlas Suburbs"],"emerald":9000,"crop":3600},"Canyon Survivor":{"routes":["Cliff Side of the Lost","Canyon Lower South East"],"emerald":9000,"crop":3600},"Aldorei Valley South Entrance":{"routes":["Aldorei's Waterfall","Aldorei's North Exit","Cinfras's Small Farm"],"emerald":9000,"wood":3600},"Path To Ozoth's Spire Upper":{"routes":["Path To Ozoth's Spire Mid","Bandit Cave Lower","Cinfras Thanos Transition","Path To Thanos"],"emerald":9000,"crop":3600},"Light Forest West Lower":{"routes":["Hobbit River","Light Forest South Entrance","Light Forest West Mid"],"emerald":9000,"wood":3600},"Rymek East Mid":{"routes":["Rymek East Lower","Rymek East Upper","Rymek West Mid"],"emerald":9000,"crop":3600},"Forgotten Path":{"routes":["Iron Road","Swamp Dark Forest Transition Lower","Goblin Plains East"],"emerald":9000,"crop":3600},"Lusuco":{"routes":["Icy Descent"],"emerald":18000,"crop":3600},"Ternaves":{"routes":["Ternaves Plains Lower","Savannah East Lower","Ternaves Plains Upper"],"emerald":9000,"crop":3600},"Swamp Island":{"routes":["Astraulus' Tower","Ahmsord Outskirts","Temple Island"],"emerald":9000,"wood":3600},"Temple of the Lost East":{"routes":["Krolton's Cave","Valley of the Lost"],"emerald":9000,"ore":3600},"Gateway to Nothing":{"routes":["Final Step","Void Valley","Toxic Drip"],"emerald":9000,"crop":3600},"Goblin Plains West":{"routes":["Goblin Plains East","Sablestone Camp","Iron Road","Llevigar Farm"],"emerald":9000,"ore":3600},"Half Moon Island":{"routes":["Mage Island"],"emerald":9000,"crop":7200},"Molten Heights Portal":{"routes":["Crater Descent","Lava Lake Bridge","Lava Lake"],"emerald":9000,"ore":3600},"Jungle Lake":{"routes":["Temple of Legends","Herb Cave","City of Troms","Jungle Mid"],"emerald":9000,"fish":3600},"Great Bridge Jungle":{"routes":["Jungle Lower","Herb Cave","Great Bridge Nesaak"],"emerald":9000,"wood":3600},"Canyon Entrance Waterfall":{"routes":["Canyon Path North West","Canyon Path North Mid"],"emerald":9000,"ore":3600},"Orc Lake":{"routes":["Sablestone Camp","Llevigar Plains East Upper","Sunspark Camp","Llevigar Plains East Lower","Orc Road"],"emerald":9000,"fish":3600},"Corkus Forest South":{"routes":["Factory Entrance","Corkus City","Corkus Forest North","Corkus City South"],"emerald":9000,"wood":3600},"Nesaak Plains South West":{"routes":["Nesaak Plains South East","Nesaak Bridge Transition","Icy Descent","Twain Lake","Nesaak Village","Nesaak Plains Lower North West"],"emerald":9000,"wood":3600},"Nether Gate":{"routes":["Plains Lake","Corrupted Road","Nether Plains Lower","Nether Plains Upper"],"emerald":9000,"crop":3600},"Aldorei's Arch":{"routes":["Path To The Arch","Canyon Waterfall North"],"emerald":9000,"ore":3600},"Gelibord Castle":{"routes":["Gelibord Corrupted Farm","Taproot Descent"],"emerald":9000,"wood":3600},"Llevigar Gate West":{"routes":["Llevigar Farm Plains West","Llevigar Gate East"],"emerald":9000,"ore":3600},"Cathedral Harbour":{"routes":["Savannah West Upper","Ancient Nemract","Nemract Cathedral","Durum Isles Lower","Durum Isles East"],"emerald":9000,"fish":3600},"Great Bridge Nesaak":{"routes":["Nesaak Bridge Transition","Great Bridge Jungle"],"emerald":9000,"ore":3600},"Phinas Farm":{"routes":["Royal Gate","Lighthouse Plateau"],"emerald":9000,"crop":3600},"Jofash Tunnel":{"routes":["Jofash Docks","Sky Island Ascent"],"emerald":9000,"ore":3600},"Light Forest North Exit":{"routes":["Cinfras Entrance","Light Forest South Exit","Light Forest Canyon"],"emerald":9000,"wood":3600},"Sablestone Camp":{"routes":["Meteor Crater","Orc Lake","Loamsprout Camp","Goblin Plains West"],"emerald":9000,"ore":3600},"Viscera Pits East":{"routes":["Path to Talor","Viscera Pits West","Lexdale"],"emerald":9000,"wood":3600},"The Broken Road":{"routes":["Worm Tunnel","The Silent Road"],"emerald":9000,"crop":3600},"Aldorei's Waterfall":{"routes":["Aldorei Valley Upper","Aldorei Valley South Entrance"],"emerald":9000,"crop":3600},"Gylia Lake North West":{"routes":["Gylia Lake South West","Gylia Lake North East","Fallen Village","Jitak's Farm"],"emerald":9000,"fish":3600},"Dernel Jungle Lower":{"routes":["Dernel Jungle Mid","Jungle Lower"],"emerald":9000,"fish":3600},"Gylia Lake South East":{"routes":["Gylia Lake South West","Gylia Lake North East","Thanos","Cinfras County Upper"],"emerald":9000,"fish":3600},"Mushroom Hill":{"routes":["Heart of Decay","Jitak's Farm","Decayed Basin","Fallen Village"],"emerald":9000,"wood":3600},"Forest of Eyes":{"routes":["Sinister Forest","Forgotten Town"],"emerald":9000,"wood":3600},"Void Valley":{"routes":["Gateway to Nothing"],"emerald":9000,"crop":3600},"Kandon Farm":{"routes":["Kandon Ridge"],"emerald":9000,"crop":3600},"Meteor Crater":{"routes":["Sablestone Camp","Sunspark Camp","Iron Road"],"emerald":9000,"wood":3600},"Astraulus' Tower":{"routes":["Dragonling Nests","Swamp Island"],"emerald":9000,"wood":3600},"Desert East Mid":{"routes":["Desert East Lower","Desert Mid-Upper","Desert East Upper"],"emerald":9000,"fish":3600},"Efilim South East Plains":{"routes":["Efilim East Plains","Light Forest West Upper","Efilim South Plains","Light Forest East Upper"],"emerald":9000,"crop":3600},"Taproot Descent":{"routes":["Swamp Dark Forest Transition Mid","Fortress North","Gelibord Corrupted Farm","Gelibord Castle","Swamp Dark Forest Transition Upper"],"emerald":9000,"wood":3600},"Cinfras County Lower":{"routes":["Aldorei's North Exit","Cinfras County Mid-Lower","Cinfras's Small Farm"],"emerald":9000,"wood":3600},"Dead Island North West":{"routes":["Dead Island South West","Dead Island North East"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Cinfras Outskirts":{"routes":["Dark Forest Cinfras Transition","Cinfras","Fungal Grove","Dark Forest Village","Old Crossroads South"],"emerald":9000,"wood":3600},"Plains Coast":{"routes":["Nemract Quarry","North Farmers Valley","Nemract Town"],"emerald":9000,"fish":3600},"Desert East Lower":{"routes":["Desert Mid-Lower","Desert East Mid","Rymek East Upper"],"emerald":9000,"wood":3600},"Cliff Side of the Lost":{"routes":["Canyon Survivor","Canyon Dropoff","Canyon Of The Lost","Mountain Edge","Valley of the Lost"],"emerald":9000,"ore":3600},"Llevigar Plains East Upper":{"routes":["Orc Lake","Sunspark Camp","Llevigar Plains East Lower","Llevigar Plains West Upper","Swamp East Lower"],"emerald":9000,"ore":3600},"Raider's Base Lower":{"routes":["Raider's Base Upper"],"emerald":9000,"ore":3600},"Time Valley":{"routes":["Little Wood","Abandoned Farm","Elkurn Fields"],"emerald":9000,"wood":3600},"Swamp Mountain Transition Mid-Upper":{"routes":["Swamp East Upper","Swamp Mountain Transition Mid","Swamp Mountain Transition Upper"],"emerald":9000,"fish":3600},"Ghostly Path":{"routes":["Burning Farm","Path To The Arch"],"emerald":9000,"ore":3600},"North Nivla Woods":{"routes":["Plains","Nivla Woods Exit","Nivla Woods Edge"],"emerald":9000,"wood":3600},"Gylia Lake North East":{"routes":["Gylia Lake North West","Military Base","Gert Camp","Gylia Lake South East"],"emerald":9000,"fish":3600},"Bandit Cave Lower":{"routes":["Canyon Valley South","Path To Ozoth's Spire Upper"],"emerald":9000,"ore":3600},"Military Base Lower":{"routes":["Thanos Valley West","Military Base Upper","Path To Ozoth's Spire Lower"],"emerald":9000,"ore":3600},"Canyon Walk Way":{"routes":["Canyon Mountain East","Path To Ozoth's Spire Mid","Bandits Toll"],"emerald":9000,"wood":3600},"Mining Base Upper":{"routes":["Mining Base Lower","Ternaves Plains Lower","Abandoned Pass"],"emerald":9000,"ore":3600},"Volcano Lower":{"routes":["Light Peninsula","Bloody Beach","Llevigar Entrance","Volcano Upper"],"emerald":9000,"ore":3600},"Hive South":{"routes":["Thanos Exit Upper","Hive","Canyon High Path","Cherry Blossom Forest","Chained House"],"emerald":9000,"ore":3600},"Road To Mine":{"routes":["Corkus City Mine","Corkus Sea Cove","Corkus City South"],"emerald":9000,"ore":3600},"Swamp West Lower":{"routes":["Swamp West Mid","Llevigar Plains West Upper","Swamp East Lower"],"emerald":9000,"ore":7200},"Llevigar":{"routes":["Llevigar Entrance","Quartz Mines South West","Llevigar Gate East"],"emerald":18000,"ore":3600},"Entrance to Rodoroc":{"routes":["Rodoroc","Thesead Suburbs","Eltom"],"emerald":9000,"ore":3600},"Light Forest Canyon":{"routes":["Light Forest North Exit","Light Forest East Mid","Mantis Nest"],"emerald":9000,"wood":3600},"Corkus Castle":{"routes":["Corkus City"],"emerald":9000,"fish":3600},"Snail Island":{"routes":["Temple Island"],"emerald":9000,"wood":3600},"Sky Castle":{"routes":["Path to Ahmsord Lower"],"emerald":9000,"wood":3600},"Lava Lake":{"routes":["Active Volcano","Molten Heights Portal","Volcanic Slope"],"emerald":9000,"fish":3600},"Canyon Path South East":{"routes":["Canyon Path North West","Canyon Lower South East"],"emerald":9000,"ore":3600},"Ternaves Plains Lower":{"routes":["Mine Base Plains","Ternaves","Mining Base Upper","Ternaves Plains Upper","Abandoned Pass"],"emerald":9000,"crop":3600},"The Gate":{"routes":["Bizarre Passage"],"emerald":9000,"crop":7200},"Fleris Trail":{"routes":["Road To Light Forest"],"emerald":9000,"wood":7200},"Corkus Forest North":{"routes":["Corkus City","Corkus Mountain","Corkus Forest South","Corkus City South"],"emerald":9000,"wood":3600},"Sinister Forest":{"routes":["Lutho","Forest of Eyes"],"emerald":9000,"wood":3600},"Swamp East Upper":{"routes":["Swamp Plains Basin","Swamp East Mid-Upper","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Upper","Swamp West Upper"],"emerald":9000,"wood":3600},"Pigmen Ravines Entrance":{"routes":["Pigmen Ravines","South Pigmen Ravines","Ragni"],"emerald":9000,"ore":3600},"Corkus Outskirts":{"routes":["Corkus Statue","Bloody Beach","Corkus Countryside"],"emerald":9000,"fish":3600},"Maltic Coast":{"routes":["Coastal Trail","North Farmers Valley","Maltic","South Farmers Valley"],"emerald":9000,"crop":3600,"fish":3600},"Quartz Mines North West":{"routes":["Quartz Mines North East","Quartz Mines South West","Llevigar Farm","Loamsprout Camp"],"emerald":9000,"ore":3600},"Guild Hall":{"routes":["Cinfras"],"emerald":9000,"ore":3600},"Nemract Plains East":{"routes":["Nemract Road","Detlas Trail West Plains"],"emerald":9000,"ore":3600},"Corkus Sea Port":{"routes":["Lighthouse Plateau","Corkus Sea Cove","Fallen Factory","Ruined Houses"],"emerald":9000,"fish":3600},"Efilim South Plains":{"routes":["Efilim South East Plains","Light Forest North Entrance","Efilim Village"],"emerald":9000,"wood":3600},"Path to Talor":{"routes":["Old Crossroads North","Entrance to Kander","Viscera Pits East","Dark Forest Village","Kander Mines","Old Crossroads South"],"emerald":9000,"ore":3600},"Mansion of Insanity":{"routes":["Twisted Housing","Fortress North","Fortress South"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Detlas Trail East Plains":{"routes":["Detlas","Cathedral Harbour","Ancient Nemract","Detlas Close Suburbs","Detlas Suburbs"],"emerald":9000,"wood":3600},"Efilim East Plains":{"routes":["Efilim Village","Efilim South East Plains"],"emerald":9000,"wood":3600},"Light Forest Entrance":{"routes":["Road To Light Forest","Light Forest North Entrance","Light Forest South Entrance","Light Forest West Mid"],"emerald":9000,"wood":3600},"Light Forest East Upper":{"routes":["Efilim South East Plains","Path to Cinfras"],"emerald":9000,"wood":3600},"Eltom":{"routes":["Entrance to Rodoroc","Ranol's Farm"],"emerald":9000,"crop":3600},"Molten Reach":{"routes":["Angel Refuge","Molten Heights Portal"],"emerald":9000,"ore":3600},"Llevigar Farm Plains West":{"routes":["Llevigar Farm Plains East","Llevigar Gate West","Llevigar Plains West Lower"],"emerald":9000,"crop":3600},"Mantis Nest":{"routes":["Light Forest East Lower","Aldorei Valley West Entrance","Light Forest South Exit","Light Forest Canyon","Aldorei Valley Lower"],"emerald":9000,"wood":3600},"Quartz Mines South East":{"routes":["Quartz Mines South West","Quartz Mines North East"],"emerald":9000,"ore":3600},"Dragonling Nests":{"routes":["Snail Island","Astraulus' Tower"],"emerald":9000,"wood":7200},"Grey Ruins":{"routes":["Worm Tunnel","Forgotten Town"],"emerald":9000,"crop":3600},"Corkus Mountain":{"routes":["Corkus Docks","Corkus Forest North","Corkus Countryside"],"emerald":9000,"fish":3600},"Bizarre Passage":{"routes":["Final Step","The Gate"],"emerald":9000,"crop":3600},"Burning Airship":{"routes":["Cinfras Thanos Transition","Burning Farm","Bandit Cave Upper"],"emerald":9000,"ore":3600},"Bloody Beach":{"routes":["Pirate Town","Corkus Outskirts","Volcano Lower","Avos Temple"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Nivla Woods Edge":{"routes":["Detlas Far Suburbs","Road to Elkurn","North Nivla Woods","Nivla Woods Exit"],"emerald":9000,"wood":3600},"Nesaak Transition":{"routes":["Elkurn","Desolate Valley","Nether Plains Lower","Nesaak Plains North East"],"emerald":9000,"crop":3600},"Light Peninsula":{"routes":["Volcano Upper","Hobbit River","Tree Island","Volcano Lower"],"emerald":9000,"wood":3600},"Road to Time Valley":{"routes":["Nivla Woods","Nivla Woods Entrance","South Nivla Woods"],"emerald":9000,"wood":3600},"Swamp Mountain Base":{"routes":["Sunspark Camp","Swamp Plains Basin","Swamp Lower","Swamp East Mid"],"emerald":9000,"ore":3600},"Loamsprout Camp":{"routes":["Llevigar Farm","Sablestone Camp","Orc Road","Quartz Mines North West"],"emerald":9000,"ore":3600},"Elkurn Fields":{"routes":["Road to Elkurn","Time Valley","South Nivla Woods","Elkurn"],"emerald":9000,"crop":3600},"Nexus of Light":{"routes":["Azure Frontier"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Aldorei Valley Upper":{"routes":["Aldorei Valley Mid","Aldorei's Waterfall"],"emerald":9000,"crop":3600},"Jitak's Farm":{"routes":["Mushroom Hill","Gert Camp","Gylia Lake North West"],"emerald":9000,"crop":3600},"Twain Lake":{"routes":["Twain Mansion","Nesaak Plains South West"],"emerald":9000,"fish":3600},"Herb Cave":{"routes":["Great Bridge Jungle"],"emerald":9000,"crop":3600},"Durum Isles East":{"routes":["Mage Island","Durum Isles Center"],"emerald":9000,"crop":3600},"Pre-Light Forest Transition":{"routes":["Leadin Fortress","Quartz Mines North East","Goblin Plains East","Llevigar Farm"],"emerald":9000,"wood":3600},"Aldorei's River":{"routes":["Aldorei Lowlands","Cinfras"],"emerald":9000,"wood":3600},"Cliffside Passage North":{"routes":["Entrance to Thesead North","Cliffside Passage"],"emerald":9000,"wood":3600},"Temple of Legends":{"routes":["Jungle Lake","City of Troms"],"emerald":9000,"wood":3600},"Lion Lair":{"routes":["Bremminglar"],"emerald":9000,"wood":3600},"Nesaak Village":{"routes":["Nesaak Plains South East","Bob's Tomb","Nesaak Plains North East","Nesaak Plains South West","Nesaak Plains Lower North West"],"emerald":18000,"fish":3600},"Swamp Mountain Transition Upper":{"routes":["Swamp East Upper","Olux","Swamp Mountain Transition Mid-Upper"],"emerald":9000,"ore":3600},"Leadin Fortress":{"routes":["Pre-Light Forest Transition","Road To Light Forest","Orc Battlegrounds"],"emerald":9000,"ore":3600},"Corrupted Road":{"routes":["Nether Gate","Detlas Far Suburbs","Nether Plains Upper","Elkurn"],"emerald":9000,"crop":3600},"North Farmers Valley":{"routes":["Maltic Coast","South Farmers Valley"],"emerald":9000,"crop":3600},"Ruined Houses":{"routes":["Factory Entrance","Fallen Factory","Corkus Sea Port"],"emerald":9000,"fish":3600},"Emerald Trail":{"routes":["Maltic Plains","Nivla Woods Entrance","Ragni Main Entrance"],"emerald":9000,"crop":3600},"Heavenly Ingress":{"routes":["Field of Life","Light Forest South Entrance"],"emerald":9000,"wood":3600},"Sky Island Ascent":{"routes":["Central Islands","Jofash Tunnel","Raider's Base Upper","Sky Falls"],"emerald":9000,"ore":3600},"Lutho":{"routes":["Paths of Sludge","Sinister Forest"],"emerald":18000,"crop":3600},"Old Coal Mine":{"routes":["Kandon Ridge"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Dead Island South West":{"routes":["Skiens Island","Dead Island South East","Dead Island North West","Dujgon Nation"],"emerald":9000,"fish":3600},"Jungle Mid":{"routes":["Jungle Lower","Jungle Lake","Jungle Upper"],"emerald":9000,"wood":3600},"Aldorei's North Exit":{"routes":["Cinfras County Lower","Path To The Arch","Aldorei Valley South Entrance"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Light Forest South Entrance":{"routes":["Light Forest West Lower","Heavenly Ingress","Light Forest Entrance"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Desert Upper":{"routes":["Desert West Upper","Desert Mid-Upper","Mummy's Tomb"],"emerald":9000,"crop":3600},"Southern Outpost":{"routes":["Legendary Island","Lighthouse Plateau"],"emerald":9000,"fish":3600},"Factory Entrance":{"routes":["Fallen Factory","Ruined Houses","Corkus Forest South","Corkus City South"],"emerald":9000,"fish":3600},"The Bear Zoo":{"routes":["Rooster Island","Zhight Island"],"emerald":9000,"fish":3600},"Dead Island North East":{"routes":["Jofash Docks","Dead Island South East","Dead Island North West"],"emerald":9000,"fish":3600},"Cherry Blossom Forest":{"routes":["Ranol's Farm","Chained House","Hive South"],"emerald":9000,"wood":3600},"Wizard Tower North":{"routes":["Krolton's Cave","Bandits Toll"],"emerald":9000,"ore":3600},"Canyon Of The Lost":{"routes":["Cliffside Lake","Kandon-Beda","Cliff Side of the Lost","Valley of the Lost"],"emerald":9000,"ore":3600},"Rymek West Lower":{"routes":["Rymek East Lower","Rymek West Mid"],"emerald":6000,"ore":3600},"Central Islands":{"routes":["Ahmsord","Sky Island Ascent","Temple Island","Wybel Island","Ahmsord Outskirts"],"emerald":9000,"wood":3600},"Canyon Path North West":{"routes":["Canyon Path South East","Canyon Entrance Waterfall"],"emerald":9000,"crop":3600},"Canyon Waterfall Mid North":{"routes":["Canyon Mountain South","Canyon Path North Mid","Canyon Fortress"],"emerald":9000,"ore":3600},"Military Base":{"routes":["Path To Military Base","Military Base Upper"],"emerald":9000,"ore":3600},"Icy Descent":{"routes":["Tower of Ascension","Lusuco"],"emerald":9000,"wood":3600},"Canyon Path South West":{"routes":["Canyon Path North West","Canyon Lower South East"],"emerald":9000,"ore":3600},"Aldorei Valley Lower":{"routes":["Aldorei Valley Mid","Aldorei Valley West Entrance"],"emerald":9000,"crop":3600},"South Pigmen Ravines":{"routes":["Little Wood","Pigmen Ravines Entrance"],"emerald":9000,"ore":3600},"Desert Lower":{"routes":["Desert Mid-Lower","Rymek West Upper","Desert West Lower"],"emerald":9000,"crop":3600},"Abandoned Farm":{"routes":["Pigmen Ravines","Time Valley"],"emerald":9000,"crop":3600},"Nether Plains Lower":{"routes":["Elkurn","Nether Gate","Desolate Valley","Nesaak Transition"],"emerald":9000,"crop":3600},"Olux":{"routes":["Swamp Dark Forest Transition Mid","Swamp Dark Forest Transition Upper","Entrance to Olux","Swamp Mountain Transition Upper"],"emerald":18000,"ore":3600},"Gelibord":{"routes":["Twisted Housing","Entrance to Kander","Gelibord Corrupted Farm","Lone Farmstead"],"emerald":18000,"wood":3600},"Mining Base Lower":{"routes":["Mining Base Upper"],"emerald":9000,"ore":3600},"Ragni North Entrance":{"routes":["Katoa Ranch","Ragni","Ragni North Suburbs"],"emerald":9000,"crop":3600},"Ranol's Farm":{"routes":["Cherry Blossom Forest","Thesead Suburbs","Eltom"],"emerald":9000,"crop":3600},"Path To The Arch":{"routes":["Aldorei's Arch","Aldorei's North Exit","Ghostly Path"],"emerald":9000,"ore":3600},"Light Forest North Entrance":{"routes":["Light Forest West Upper","Light Forest Entrance","Efilim South Plains"],"emerald":9000,"wood":3600},"Light Forest South Exit":{"routes":["Mantis Nest","Light Forest North Exit"],"emerald":9000,"wood":3600},"Nivla Woods":{"routes":["Road to Time Valley","Nivla Woods Exit","Nivla Woods Entrance","South Nivla Woods"],"emerald":9000,"wood":3600},"Luminous Plateau":{"routes":["Field of Life"],"emerald":9000,"wood":3600},"Rymek East Lower":{"routes":["Rymek East Mid","Rymek West Lower"],"emerald":9000,"ore":3600},"Llevigar Plains West Upper":{"routes":["Swamp West Lower","Llevigar Plains East Upper","Llevigar Plains West Lower"],"emerald":9000,"wood":3600},"Desert Mid-Lower":{"routes":["Almuj City","Desert West Lower","Desert Lower","Desert Mid-Upper","Desert East Lower"],"emerald":9000,"crop":3600},"Coastal Trail":{"routes":["Maltic Coast","Ragni Plains"],"emerald":9000,"wood":3600},"Thanos Exit Upper":{"routes":["Canyon High Path","Bandits Toll","Thanos Exit","Hive","Hive South"],"emerald":9000,"ore":3600},"Elkurn":{"routes":["Road to Elkurn","Nesaak Plains Upper North West","Corrupted Road","Elkurn Fields"],"emerald":9000,"crop":3600},"Bandit Cave Upper":{"routes":["Burning Airship"],"emerald":9000,"wood":3600},"Light Forest East Mid":{"routes":["Light Forest East Lower","Light Forest West Upper","Light Forest Canyon"],"emerald":9000,"fish":3600},"Corkus Countryside":{"routes":["Corkus City","Avos Temple","Corkus Mountain","Corkus Outskirts"],"emerald":9000,"wood":3600},"Kandon Ridge":{"routes":["Old Coal Mine","Kandon Farm","Path to Ahmsord Upper"],"emerald":9000,"wood":3600},"Jungle Lower":{"routes":["Dernel Jungle Lower","Great Bridge Jungle","Jungle Mid"],"emerald":9000,"wood":3600},"Cliffside Passage":{"routes":["Cliffside Passage North","Cliffside Lake"],"emerald":9000,"ore":3600},"Corkus Statue":{"routes":["Corkus City Mine","Corkus Outskirts"],"emerald":9000,"fish":3600},"Hive":{"routes":["Thanos Exit Upper","Hive South"],"emerald":9000,"crop":3600},"Dujgon Nation":{"routes":["Nodguj Nation","Dead Island South East","Icy Island","Dead Island South West","Regular Island"],"emerald":9000,"fish":3600},"Canyon Lower South East":{"routes":["Canyon Path South West","Canyon Path South East","Canyon Survivor","Canyon Upper North West"],"emerald":9000,"ore":3600},"Sky Falls":{"routes":["Sky Island Ascent","Frozen Fort","Wybel Island"],"emerald":9000,"ore":3600},"Rodoroc":{"routes":["Crater Descent"],"emerald":18000,"ore":3600},"Almuj City":{"routes":["Desert West Lower","Desert Mid-Lower","Desert West Upper","Desert Mid-Upper","Savannah East Upper"],"emerald":18000,"crop":3600},"Bandits Toll":{"routes":["Wizard Tower North","Canyon Walk Way","Thanos Exit Upper","Cliffside Valley"],"emerald":9000,"ore":3600},"Toxic Drip":{"routes":["Paths of Sludge","Gateway to Nothing","Toxic Caves"],"emerald":9000,"crop":3600},"Canyon High Path":{"routes":["Cliffside Waterfall","Thanos Exit Upper","Hive South"],"emerald":9000,"ore":3600},"Rymek East Upper":{"routes":["Rymek West Upper","Rymek East Mid","Desert East Lower"],"emerald":9000,"crop":3600},"Cinfras Thanos Transition":{"routes":["Burning Airship","Path To Thanos","Cinfras County Mid-Upper"],"emerald":9000,"ore":3600},"Fortress North":{"routes":["Mansion of Insanity","Taproot Descent","Fortress South"],"emerald":9000,"wood":3600},"Santa's Hideout":{"routes":["Icy Island","Mage Island"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Path To Ozoth's Spire Mid":{"routes":["Canyon Walk Way","Path To Ozoth's Spire Upper"],"emerald":9000,"ore":3600},"Nivla Woods Entrance":{"routes":["Road to Time Valley","Emerald Trail","Nivla Woods","Plains"],"emerald":9000,"wood":3600},"Path to Ahmsord Lower":{"routes":["Sky Castle","Ahmsord","Path to Ahmsord Upper"],"emerald":9000,"wood":3600},"Path to Ahmsord Upper":{"routes":["Path to Ahmsord Lower","Kandon Ridge"],"emerald":9000,"wood":3600},"Canyon Mountain South":{"routes":["Krolton's Cave","Canyon Waterfall Mid North"],"emerald":9000,"ore":3600},"Air Temple Lower":{"routes":["Krolton's Cave","Air Temple Upper","Cliffside Valley"],"emerald":1800,"crop":900,"fish":900,"wood":900,"ore":900},"Fallen Village":{"routes":["Fungal Grove","Mushroom Hill","Dark Forest Cinfras Transition","Gylia Lake North West"],"emerald":9000,"wood":3600},"Entrance to Kander":{"routes":["Path to Talor","Gelibord","Viscera Pits West","Abandoned Manor"],"emerald":9000,"wood":3600},"Thanos Exit":{"routes":["Thanos Exit Upper"],"emerald":9000,"ore":3600},"Nemract Road":{"routes":["Nemract Quarry","Nemract Plains East","Nemract Town","Ancient Nemract","Nemract Cathedral","Nemract Plains West"],"emerald":9000,"crop":3600},"Angel Refuge":{"routes":["Molten Reach","Ahmsord Outskirts"],"emerald":9000,"fish":3600},"Efilim Village":{"routes":["Efilim East Plains","Twisted Housing","Efilim South Plains"],"emerald":9000,"ore":3600},"Nesaak Plains Mid North West":{"routes":["Nesaak Plains Upper North West","Nesaak Plains Lower North West"],"emerald":9000,"wood":3600},"Nemract Cathedral":{"routes":["Nemract Town","Ancient Nemract","Cathedral Harbour","Nemract Road"],"emerald":9000,"fish":3600},"Ragni Plains":{"routes":["Ragni East Suburbs","Coastal Trail","Maltic","Ragni North Suburbs"],"emerald":9000,"crop":3600},"Old Crossroads South":{"routes":["Old Crossroads North","Path to Talor","Fungal Grove","Dark Forest Village","Cinfras Outskirts"],"emerald":9000,"wood":3600},"Little Wood":{"routes":["Time Valley","South Pigmen Ravines"],"emerald":9000,"wood":3600}};
let resSymbols = {"emerald": "💰", "crop": "🌾", "ore": "⛏", "wood": "🪵", "fish": "🐟", "rainbow": "🌈"};

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
    let guildTags = {};
    let cdTerrs = {};
    let hiddenGuilds = [];
    let trackingMode = 0; // -1: hide all; 0: show all; (text): stalking
    let connLines = {};
    let terrResponse;
    let routesShown = true;
    let mapMode = "cooldown";
    let tooltipContents = {};

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
    map.on("zoomend", function () {
        if (map.getZoom() > 5 && routesShown) {
            showRoutes();
        } else {
            hideRoutes();
        }
        if (map.getZoom() > 6) {
            $(".terr-details").css("opacity","1");
        } else {
            $(".terr-details").css("opacity","0");
        }
    })
    // draw test territory
    // createPolygon({"startX":-1212,"startY":-2576,"endX":-1001,"endY":-2342});
    // initial requests to wynn api
    fetchTags().then(() => updateMap(true));

    function fetchTags() {
        return fetch("https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe=0")
            .then(r => r.json())
            .then(function (res) {
                for (let i in res.data) {
                    guildTags[res.data[i].name] = res.data[i].prefix;
                }
            });
    }

    function updateMap(init) {
        console.log(new Date, "updating map");
        fetch("https://api.wynncraft.com/public_api.php?action=territoryList")
            .then(r => r.json())
            .then(function (res) {
                let terrs = res["territories"];
                let guildTerrCount = {};
                terrResponse = terrs;
                if (init) {
                    $("input[type=radio][name=map_mode]").change(function () {
                        mapMode = this.value;
                        updatePopups(true);
                    });
                    $("input[name=show_routes]").change(function () {
                        if (this.checked) showRoutes();
                        else hideRoutes();
                    });
                    $(window).on("beforeunload", function () {
                        // save to localStorage
                        localStorage["hiddenGuilds"] = JSON.stringify(hiddenGuilds);
                        localStorage["map_mode"] = mapMode;
                        localStorage["show_routes"] = routesShown ? "1" : "0";
                    });
                    // load from localStorage
                    hiddenGuilds = JSON.parse(localStorage["hiddenGuilds"] || "[]");
                    $(`input[name=map_mode][value=${localStorage["map_mode"]}]`).click();
                    if (localStorage["show_routes"] === "0") {
                        $(`input[name=show_routes]`).click();
                    }
                    // conns
                    for (let i in terrs) {
                        if (!terrs.hasOwnProperty(i)) continue;
                        for (let j of terrData[i].routes) {
                            if (!terrs.hasOwnProperty(j)) continue;
                            // if (i <= j) continue;
                            let sx = (terrs[i]["location"]["startX"] + terrs[i]["location"]["endX"]) / 2;
                            let sy = (terrs[i]["location"]["startY"] + terrs[i]["location"]["endY"]) / 2;
                            let ex = (terrs[j]["location"]["startX"] + terrs[j]["location"]["endX"]) / 2;
                            let ey = (terrs[j]["location"]["startY"] + terrs[j]["location"]["endY"]) / 2;
                            let line = L.polyline([[sx, sy], [ex, ey]].map(coordsToLatLng), {
                                color: "white",
                                zIndexOffset: -204,
                            });
                            setConnLine(i, j, line);
                            if (routesShown) {
                                line.addTo(map);
                            }
                        }
                    }
                }
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
                    guildTerrCount[guild] = guildTerrCount[guild] || 0;
                    ++guildTerrCount[guild];
                }
                // terr distribution
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
                appendTerrCountRow(showHideAll, -1, guildColours[showHideAll], terrCountDiv);
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
                if (init) {
                    updatePopups();
                }
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
                $(v).find("span.dot").css("background-color", "#1f1f1f");
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

    function updatePopups(emergency) {
        for (let name in polygons) {
            let polygon = polygons[name];
            /** Whether a territory was on cooldown */
            let wasCd = cdTerrs[polygon.territory.territory] || false;
            /** The amount of time the territory was held for in milliseconds */
            let heldFor = 1*new Date - polygon.acquired;
            /** Whether the territory is currently on cooldown (has been taken in the last 10 minutes by a guild) */
            let isCd = heldFor < 600000;
            /** The territories treasury */
            let treasury = "Very Low"
            /** Territory name **/
            let territory = polygon.territory.territory;
            if (heldFor >= 3600000 && heldFor < 24 * 3600000) {
                treasury = "Low"
            } else if (heldFor >= 24 * 3600000 && heldFor < 72 * 3600000) {
                treasury = "Medium"
            } else if (heldFor >= 72 * 3600000 && heldFor < 240 * 3600000) {
                treasury = "High"
            } else if (heldFor >= 240 * 3600000) {
                treasury = "Very High"
            }
            let guild = polygon.territory.guild;
            cdTerrs[territory] = isCd;
            let popup = `${territory}<br>Controlled by ${guild}<br>For ${formatDuration(heldFor)}<br>Treasury: ${treasury}`;
            popup += "<br><br>Production:";
            for (let i in terrData[territory]) {
                if (i === "routes") continue;
                popup += `<br>${terrData[territory][i]} ${i}`
            }
            polygon.bindPopup(popup);
            updateTooltip(territory, `${getGuildTag(guild)}<br>${getSecondLine(territory)}`);
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
                    name: territory,
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
        if (!emergency) {
            setTimeout(updatePopups, 1000);
        }
    }
    /**
     * Formats a given number of milliseconds to a readable string duration,
     * @param {number} millis The amount of milliseconds of the duration.
     * @returns A readable string of the date.
     * @example Example Output:
     * "27 seconds"
     * "2 minutes and 27 seconds"
     * "1 hour, 2 minutes and 27 seconds"
     * "33 days, 1 hour, 2 minutes and 27 seconds"
     */
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
    /**
     * Transforms latitude and longditude to a x and y coordinate
     * @param {any} latLng The latitude / longditude.
     * @returns {number[]} The x and y coordinate mapped from the latitude and londitude.
     * @reverseOperation The reverse operation is `coordsToLatLng()`
     */
    function latLngToCoords(latLng) {
        let lat=latLng.lat;
        let lng=latLng.lng;
        let proj = map.project([lat, lng], 7)
        return [proj.x, proj.y].map(x => x-16384).map(x => x*2).map((x, i) => x+[0,-3072][i]);
    }
    /**
     * Transforms x and y coordinate to a latitude and a longditude.
     * @param {number[]} coords The x and y coordinate.
     * @returns {any} The latitude / longditude.
     * @reverseOperation The reverse operation is `latLngToCoords()`
     */
    function coordsToLatLng(coords) {
        return map.unproject(coords.map((x, i) => x-[0, -3072][i]).map(x => x/2).map(x => x+16384), 7)
    }

    function createPolygon(territory) {
        let sx = territory["location"]["startX"];
        let sy = territory["location"]["startY"];
        let ex = territory["location"]["endX"];
        let ey = territory["location"]["endY"];
        let guild = territory.guild;
        let paths = [];
        paths.push(coordsToLatLng([sx, sy]));
        paths.push(coordsToLatLng([sx, ey]));
        paths.push(coordsToLatLng([ex, ey]));
        paths.push(coordsToLatLng([ex, sy]));
        let acquired = parseAcquiredDate(territory.acquired);
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
        polygon.bindTooltip(`${getGuildTag(guild)}<br>${getSecondLine(territory.territory)}`, {
            direction: "center",
            opacity: map.getZoom() - 6,
            permanent: true,
            interactive: false,
            className: "terr-details",
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

    function setConnLine(t1, t2, line) {
        // if (connLines[t2] && connLines[t2][t1]) {
        //     connLines[t2][t1] = line;
        // } else {
            connLines[t1] = connLines[t1] || {};
            connLines[t1][t2] = line;
        // }
    }

    // function getConnLine(t1, t2) {
    //     return connLines[t1] && connLines[t1][t2];
        // return (connLines[t1] && connLines[t1][t2]) || (connLines[t2] && connLines[t2][t1])
    // }

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
        if (terrData[terr]["emerald"] === 18000) {
            type += resSymbols["emerald"];
        }
        for (let i in terrData[terr]) {
            if (i === "routes" || i === "emerald") continue;
            switch (terrData[terr][i]) {
                case 3600: type += resSymbols[i]; break;
                case 7200: type += resSymbols[i] + resSymbols[i]; break;
                case 900: type += resSymbols["rainbow"]; return type;
            }
        }
        return type;
    }

    function cooldown(terr) {
        let heldFor = 1*new Date - parseAcquiredDate(terrResponse[terr].acquired);
        let remaining = Math.max(0, Math.ceil(600 - heldFor / 1000));
        if (remaining <= 0) return "";
        return `${Math.floor(remaining / 60)}:${(remaining % 60).toString().padStart(2, "0")}`;
    }

    function updateTooltip(terr, content) {
        if (tooltipContents[terr] !== content.toString()) {
            tooltipContents[terr] = content.toString();
            let guild = terrResponse[terr].guild;
            polygons[terr].unbindTooltip();
            polygons[terr].bindTooltip(`${getGuildTag(guild)}<br>${getSecondLine(terr)}`, {
                direction: "center",
                opacity: map.getZoom() - 6,
                permanent: true,
                interactive: false,
                className: "terr-details",
            });
        }
    }

    function parseAcquiredDate(acquired) {
        let acquiredDate = new Date(acquired);
        return 1*acquiredDate - acquiredDate.getTimezoneOffset() * 60000;
    }

    function getSecondLine(terr) {
        switch (mapMode) {
            case "resource":
                return resource(terr);
            case "cooldown":
                return cooldown(terr);
            default:
                return "";
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
}