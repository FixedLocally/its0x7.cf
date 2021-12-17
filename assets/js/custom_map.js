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
let conns = {"Air Temple Upper":{"routes":["Air Temple Lower"]},"Maro Peaks":{"routes":["Skiens Island","Tree Island"]},"Plains":{"routes":["Maltic Plains","North Nivla Woods","South Farmers Valley","Nivla Woods Entrance"]},"Path To Thanos":{"routes":["Cinfras Thanos Transition","Thanos"]},"Savannah West Lower":{"routes":["Ternaves Plains Upper","Savannah East Lower","Savannah West Upper"]},"Durum Isles Upper":{"routes":["Selchar","Mage Island","Durum Isles Center","Nodguj Nation"]},"Selchar":{"routes":["Skiens Island","Durum Isles Upper","Rooster Island","Durum Isles Center","Durum Isles Lower"]},"Llevigar Plains West Lower":{"routes":["Llevigar Farm Plains West","Llevigar Plains East Lower","Llevigar Gate West","Llevigar Plains West Upper"]},"Nesaak Plains South East":{"routes":["Nesaak Village","Bob's Tomb","Nesaak Plains South West"]},"Llevigar Plains East Lower":{"routes":["Llevigar Plains East Upper","Llevigar Plains West Lower","Orc Lake","Llevigar Farm Plains East"]},"Kander Mines":{"routes":["Path to Talor","Mesquis Tower","Dark Forest Village","Abandoned Manor"]},"Swamp Dark Forest Transition Upper":{"routes":["Olux","Swamp Dark Forest Transition Mid","Taproot Descent"]},"Mine Base Plains":{"routes":["Plains Lake","The Silent Road","Mining Base Lower","Mining Base Upper","Ternaves Plains Lower"]},"Detlas Savannah Transition":{"routes":["Detlas","Ternaves Plains Upper","Savannah West Lower","Mine Base Plains"]},"Fortress South":{"routes":["Fortress North","Mansion of Insanity","Swamp Dark Forest Transition Lower","Orc Battlegrounds"]},"Aldorei Lowlands":{"routes":["Aldorei's River","Cinfras's Small Farm","Aldorei's Waterfall"]},"Llevigar Gate East":{"routes":["Llevigar Gate West","Orc Road","Llevigar Farm Plains East","Llevigar"]},"Viscera Pits West":{"routes":["Entrance to Kander","Lexdales Prison","Viscera Pits East","Twisted Ridge"]},"Sanctuary Bridge":{"routes":["Nesaak Plains Upper North West","Time Valley"]},"Desert West Upper":{"routes":["Desert Upper","Almuj City"]},"Maltic Plains":{"routes":["Ragni East Suburbs","Plains","Emerald Trail","Maltic"]},"Savannah West Upper":{"routes":["Cathedral Harbour","Savannah West Lower","Savannah East Upper","Bremminglar"]},"Mage Island":{"routes":["Half Moon Island","Santa's Hideout","Durum Isles Upper","Durum Isles East"]},"Ahmsord":{"routes":["Path to Ahmsord Lower","Sky Island Ascent","Temple Island","Path to Ahmsord Upper"]},"Swamp Mountain Transition Mid":{"routes":["Swamp Mountain Transition Lower","Swamp Mountain Transition Mid-Upper","Swamp West Upper"]},"Bob's Tomb":{"routes":["Nesaak Plains South East","Nesaak Plains North East","Nesaak Village"]},"Fallen Factory":{"routes":["Factory Entrance","Ruined Houses","Corkus City South","Corkus Sea Port"]},"Canyon Valley South":{"routes":["Canyon Mountain East","Bandit Cave Lower","Bandit Camp Exit"]},"Swamp East Lower":{"routes":["Swamp West Lower","Sunspark Camp","Llevigar Plains East Upper","Swamp East Mid"]},"Path to Light":{"routes":["Azure Frontier","Otherwordly Monolith"]},"Corkus City":{"routes":["Corkus Castle","Corkus Forest North","Corkus Forest South","Corkus Countryside","Corkus City South"]},"Canyon Path North Mid":{"routes":["Canyon Path South West","Bandit Camp Exit","Canyon Waterfall Mid North","Canyon Entrance Waterfall"]},"The Silent Road":{"routes":["The Broken Road","Mine Base Plains"]},"City of Troms":{"routes":["Temple of Legends","Jungle Lake","South Pigmen Ravines"]},"Gylia Lake South West":{"routes":["Dark Forest Cinfras Transition","Gylia Lake North West","Gylia Lake South East"]},"Primal Fen":{"routes":["Field of Life"]},"Canyon Mountain East":{"routes":["Canyon Walk Way","Canyon Valley South"]},"Dark Forest Cinfras Transition":{"routes":["Gylia Lake South West","Fallen Village","Cinfras Outskirts"]},"Cliffside Lake":{"routes":["Cliffside Passage","Canyon Of The Lost"]},"Nemract Plains West":{"routes":["Nivla Woods Edge","Nemract Road","Nemract Quarry","Arachnid Route"]},"Twain Mansion":{"routes":["Twain Lake"]},"Savannah East Lower":{"routes":["Savannah West Lower","Ternaves","Savannah East Upper"]},"Swamp Lower":{"routes":["Swamp Mountain Base","Swamp Dark Forest Transition Lower","Iron Road","Entrance to Olux"]},"Bremminglar":{"routes":["Lion Lair","Savannah West Upper"]},"Road To Light Forest":{"routes":["Fleris Trail","Leadin Fortress","Light Forest Entrance"]},"Swamp East Mid-Upper":{"routes":["Swamp West Mid-Upper","Swamp Plains Basin","Swamp East Upper","Swamp East Mid"]},"Thanos Valley West":{"routes":["Military Base Lower"]},"Llevigar Entrance":{"routes":["Volcano Lower","Llevigar"]},"Volcanic Slope":{"routes":["Active Volcano","Lava Lake"]},"Durum Isles Center":{"routes":["Durum Isles Upper","Selchar","Durum Isles Lower","Durum Isles East"]},"Canyon Waterfall North":{"routes":["Canyon Upper North West"]},"Gelibord Corrupted Farm":{"routes":["Twisted Housing","Gelibord","Gelibord Castle","Taproot Descent"]},"Pirate Town":{"routes":["Bloody Beach","Lost Atoll","Zhight Island"]},"Fungal Grove":{"routes":["Old Crossroads North","Decayed Basin","Fallen Village","Cinfras Outskirts","Old Crossroads South"]},"Orc Road":{"routes":["Orc Lake","Loamsprout Camp","Llevigar Farm Plains East"]},"Llevigar Farm Plains East":{"routes":["Llevigar Farm Plains West","Llevigar Gate East","Llevigar Plains East Lower","Orc Road"]},"Old Crossroads North":{"routes":["Old Crossroads South","Fungal Grove","Lexdale","Path to Talor"]},"Corkus Docks":{"routes":["Corkus Mountain"]},"Canyon Upper North West":{"routes":["Canyon Waterfall North"]},"Ahmsord Outskirts":{"routes":["Central Islands","Angel Refuge","Wybel Island","Swamp Island"]},"Desert West Lower":{"routes":["Almuj City","Desert Lower","Desert Mid-Lower"]},"Swamp West Mid":{"routes":["Swamp West Lower","Swamp West Mid-Upper","Swamp East Mid"]},"Krolton's Cave":{"routes":["Air Temple Lower","Wizard Tower North","Temple of the Lost East","Canyon Mountain South"]},"Royal Gate":{"routes":["Phinas Farm"]},"Paths of Sludge":{"routes":["Lutho","Toxic Drip"]},"Nesaak Plains Lower North West":{"routes":["Nesaak Village","Nesaak Plains Upper North West","Nesaak Plains Mid North West","Nesaak Plains South West"]},"Lone Farmstead":{"routes":["Twisted Housing","Abandoned Manor","Gelibord"]},"Road to Elkurn":{"routes":["Elkurn","Elkurn Fields","South Nivla Woods"]},"Rooster Island":{"routes":["Selchar","The Bear Zoo","Nemract Town","Durum Isles Lower"]},"Dernel Jungle Mid":{"routes":["Dernel Jungle Upper","Dernel Jungle Lower","Jungle Upper"]},"Swamp Plains Basin":{"routes":["Swamp East Mid-Upper","Swamp East Upper","Swamp Mountain Base","Entrance to Olux"]},"Final Step":{"routes":["Gateway to Nothing","Bizarre Passage"]},"Tree Island":{"routes":["Light Peninsula","Lost Atoll","Volcano Upper"]},"Canyon Dropoff":{"routes":["Mountain Path","Cliff Side of the Lost"]},"Ancient Nemract":{"routes":["Cathedral Harbour","Nemract Road","Nemract Cathedral","Detlas Trail East Plains","Detlas Trail West Plains"]},"Aldorei Valley Mid":{"routes":["Aldorei Valley Upper","Aldorei Valley Lower"]},"Cinfras County Upper":{"routes":["Gylia Lake South East","Cinfras County Mid-Upper","Path To Thanos"]},"South Farmers Valley":{"routes":["Maltic Plains","Maltic Coast","Plains","North Farmers Valley","Maltic"]},"Katoa Ranch":{"routes":["Ragni North Suburbs","Ragni North Entrance"]},"Decayed Basin":{"routes":["Heart of Decay","Mushroom Hill","Fungal Grove","Lexdale"]},"Ragni North Suburbs":{"routes":["Ragni North Entrance","Ragni Plains","Katoa Ranch"]},"Durum Isles Lower":{"routes":["Durum Isles Center","Selchar","Rooster Island"]},"Orc Battlegrounds":{"routes":["Leadin Fortress","Fortress South"]},"Thanos":{"routes":["Path To Thanos","Path To Military Base","Gylia Lake South East","Path To Ozoth's Spire Lower"]},"Path To Ozoth's Spire Lower":{"routes":["Military Base Lower","Thanos"]},"Worm Tunnel":{"routes":["The Broken Road","Grey Ruins"]},"Cinfras County Mid-Lower":{"routes":["Cinfras County Lower","Cinfras's Small Farm","Cinfras County Mid-Upper"]},"Tower of Ascension":{"routes":["Icy Descent"]},"Skiens Island":{"routes":["Nodguj Nation","Selchar","Dead Island South West","Maro Peaks"]},"Active Volcano":{"routes":["Lava Lake Bridge","Lava Lake","Volcanic Slope"]},"Cliffside Waterfall":{"routes":["Canyon High Path"]},"Valley of the Lost":{"routes":["Canyon Of The Lost","Temple of the Lost East","Canyon Fortress"]},"Frozen Fort":{"routes":["Sky Falls"]},"Path to Cinfras":{"routes":["Cinfras Entrance","Light Forest East Upper"]},"Temple Island":{"routes":["Kandon Ridge","Central Islands","Swamp Island","Ahmsord","Snail Island"]},"Nodguj Nation":{"routes":["Dujgon Nation","Santa's Hideout","Icy Island","Skiens Island","Mage Island"]},"Arachnid Route":{"routes":["Plains","North Nivla Woods","Nemract Plains West"]},"Nesaak Bridge Transition":{"routes":["Nesaak Plains South West","Great Bridge Nesaak"]},"Cinfras's Small Farm":{"routes":["Cinfras County Lower","Aldorei Lowlands","Cinfras County Mid-Lower","Aldorei Valley South Entrance"]},"South Nivla Woods":{"routes":["Road to Elkurn","Nivla Woods","Road to Time Valley","Nivla Woods Exit","Elkurn Fields"]},"Heart of Decay":{"routes":["Decayed Basin","Mushroom Hill","Lexdale"]},"Regular Island":{"routes":["Jofash Docks","Icy Island","Dujgon Nation"]},"Quartz Mines South West":{"routes":["Quartz Mines South East","Quartz Mines North West","Llevigar"]},"Pigmen Ravines":{"routes":["Abandoned Farm","Pigmen Ravines Entrance"]},"Swamp West Mid-Upper":{"routes":["Swamp East Mid-Upper","Swamp West Upper","Swamp West Mid"]},"Rymek West Mid":{"routes":["Rymek West Upper","Rymek East Mid","Rymek West Lower"]},"Avos Workshop":{"routes":["Avos Temple"]},"Swamp Mountain Transition Lower":{"routes":["Swamp Mountain Transition Mid"]},"Crater Descent":{"routes":["Lava Lake Bridge","Rodoroc","Molten Heights Portal"]},"Jofash Docks":{"routes":["Regular Island","Dead Island North East","Jofash Tunnel"]},"Bandit Camp Exit":{"routes":["Canyon Valley South","Canyon Path North Mid"]},"Ragni Main Entrance":{"routes":["Ragni East Suburbs","Emerald Trail","Ragni"]},"Canyon Fortress":{"routes":["Canyon Waterfall Mid North","Valley of the Lost"]},"Llevigar Farm":{"routes":["Loamsprout Camp","Goblin Plains West","Quartz Mines North West","Goblin Plains East","Pre-Light Forest Transition","Quartz Mines North East"]},"Detlas Suburbs":{"routes":["Detlas Close Suburbs","Detlas Far Suburbs","Nether Plains Upper","Detlas Trail East Plains"]},"Corkus Sea Cove":{"routes":["Road To Mine","Fallen Factory","Corkus City Mine","Corkus Sea Port"]},"Iron Road":{"routes":["Meteor Crater","Goblin Plains West","Swamp Lower","Forgotten Path"]},"Thesead Suburbs":{"routes":["Ranol's Farm","Chained House","Entrance to Rodoroc","Thesead"]},"Burning Farm":{"routes":["Ghostly Path","Burning Airship"]},"Desert Mid-Upper":{"routes":["Desert Mid-Lower","Desert Upper","Desert East Mid","Almuj City"]},"Forgotten Town":{"routes":["Grey Ruins","Forest of Eyes"]},"Nemract Quarry":{"routes":["Nemract Road","Plains Coast","Nemract Plains West"]},"Nether Plains Upper":{"routes":["Nether Gate","Plains Lake","Detlas Close Suburbs","Corrupted Road","Detlas Far Suburbs","Detlas Suburbs"]},"Desert East Upper":{"routes":["Desert East Mid"]},"Savannah East Upper":{"routes":["Savannah East Lower","Almuj City","Savannah West Upper"]},"Sunspark Camp":{"routes":["Swamp Mountain Base","Llevigar Plains East Upper","Meteor Crater","Swamp East Lower","Orc Lake"]},"Icy Island":{"routes":["Dujgon Nation","Santa's Hideout","Nodguj Nation","Regular Island"]},"Quartz Mines North East":{"routes":["Llevigar Farm","Quartz Mines South East","Quartz Mines North West","Pre-Light Forest Transition"]},"Gert Camp":{"routes":["Gylia Lake North East","Jitak's Farm"]},"Thesead":{"routes":["Thesead Suburbs","Entrance to Thesead South"]},"Military Base Upper":{"routes":["Military Base Lower","Military Base"]},"Volcano Upper":{"routes":["Light Peninsula","Lost Atoll","Pirate Town","Tree Island","Volcano Lower"]},"Entrance to Olux":{"routes":["Swamp Dark Forest Transition Mid","Swamp Plains Basin","Swamp Lower","Swamp Dark Forest Transition Lower","Olux"]},"Otherwordly Monolith":{"routes":["Path to Light","Azure Frontier"]},"Lava Lake Bridge":{"routes":["Crater Descent","Active Volcano","Molten Heights Portal"]},"Aldorei Valley West Entrance":{"routes":["Hobbit River","Aldorei Valley Lower","Mantis Nest"]},"Kandon-Beda":{"routes":["Canyon Of The Lost"]},"Raider's Base Upper":{"routes":["Sky Island Ascent","Raider's Base Lower"]},"Light Forest East Lower":{"routes":["Light Forest West Mid","Hobbit River","Mantis Nest","Light Forest East Mid"]},"Jungle Upper":{"routes":["Jungle Mid"]},"Dead Island South East":{"routes":["Dujgon Nation","Dead Island South West","Regular Island","Dead Island North East"]},"Mesquis Tower":{"routes":["Path to Cinfras","Abandoned Manor","Kander Mines","Cinfras Entrance"]},"Light Forest West Mid":{"routes":["Light Forest East Lower","Light Forest West Upper","Light Forest Entrance","Light Forest West Lower"]},"Path To Military Base":{"routes":["Thanos","Military Base"]},"Light Forest West Upper":{"routes":["Efilim South East Plains","Light Forest North Entrance","Light Forest West Mid","Light Forest East Mid"]},"Mountain Edge":{"routes":["Cliff Side of the Lost"]},"Nivla Woods Exit":{"routes":["Nivla Woods Edge","North Nivla Woods","Nivla Woods","South Nivla Woods"]},"Legendary Island":{"routes":["Zhight Island","Southern Outpost"]},"Abandoned Pass":{"routes":["Mining Base Upper","Ternaves Plains Lower"]},"Nesaak Plains Upper North West":{"routes":["Elkurn","Nesaak Plains North East","Nesaak Plains Lower North West","Nesaak Plains Mid North West","Sanctuary Bridge"]},"Detlas":{"routes":["Detlas Savannah Transition","Detlas Close Suburbs","Detlas Trail East Plains"]},"Chained House":{"routes":["Cherry Blossom Forest","Hive South","Thesead Suburbs","Entrance to Thesead South"]},"Corkus City Mine":{"routes":["Road To Mine","Corkus Statue","Corkus Sea Cove"]},"Mountain Path":{"routes":["Canyon Dropoff"]},"Cinfras":{"routes":["Aldorei's River","Cinfras Entrance","Guild Hall","Cinfras Outskirts"]},"Lexdale":{"routes":["Old Crossroads North","Heart of Decay","Decayed Basin","Viscera Pits East"]},"Corkus City South":{"routes":["Factory Entrance","Corkus City","Fallen Factory","Corkus Forest South","Road To Mine"]},"Zhight Island":{"routes":["Legendary Island","The Bear Zoo","Pirate Town"]},"Toxic Caves":{"routes":["Toxic Drip"]},"Nesaak Plains North East":{"routes":["Bob's Tomb","Nesaak Plains Upper North West","Nesaak Village","Nesaak Transition","Nesaak Plains Lower North West"]},"Desolate Valley":{"routes":["Nesaak Transition","Plains Lake","Nether Plains Lower"]},"Ragni":{"routes":["Ragni North Entrance","Pigmen Ravines Entrance","Ragni Main Entrance"]},"Field of Life":{"routes":["Azure Frontier","Luminous Plateau","Heavenly Ingress","Primal Fen"]},"Nemract Town":{"routes":["Nemract Road","Plains Coast","Rooster Island","Nemract Cathedral"]},"Entrance to Thesead North":{"routes":["Entrance to Thesead South","Cliffside Passage North"]},"Detlas Far Suburbs":{"routes":["Nether Plains Upper","Corrupted Road","Detlas Trail West Plains","Detlas Suburbs","Nivla Woods Edge"]},"Lighthouse Plateau":{"routes":["Corkus Sea Port","Phinas Farm","Southern Outpost"]},"Entrance to Thesead South":{"routes":["Thesead","Entrance to Thesead North","Chained House","Cliffside Valley"]},"Dark Forest Village":{"routes":["Path to Talor","Kander Mines","Cinfras Outskirts","Old Crossroads South"]},"Swamp East Mid":{"routes":["Swamp East Mid-Upper","Swamp Mountain Base","Swamp West Mid","Swamp East Lower"]},"Mummy's Tomb":{"routes":["Desert Upper"]},"Dernel Jungle Upper":{"routes":["Dernel Jungle Mid"]},"Lexdales Prison":{"routes":["Viscera Pits West","Twisted Ridge"]},"Wybel Island":{"routes":["Central Islands","Sky Falls","Ahmsord Outskirts"]},"Avos Temple":{"routes":["Avos Workshop","Bloody Beach"]},"Swamp Dark Forest Transition Mid":{"routes":["Entrance to Olux","Taproot Descent","Swamp Dark Forest Transition Upper","Swamp Dark Forest Transition Lower","Olux"]},"Rymek West Upper":{"routes":["Desert West Lower","Desert Lower","Rymek East Upper","Rymek West Mid"]},"Goblin Plains East":{"routes":["Forgotten Path","Llevigar Farm","Goblin Plains West","Pre-Light Forest Transition"]},"Azure Frontier":{"routes":["Nexus of Light","Otherwordly Monolith","Path to Light","Field of Life"]},"Cinfras County Mid-Upper":{"routes":["Cinfras Thanos Transition","Cinfras County Upper","Cinfras County Mid-Lower"]},"Maltic":{"routes":["Coastal Trail","Maltic Coast","Maltic Plains","Ragni Plains","South Farmers Valley"]},"Abandoned Manor":{"routes":["Entrance to Kander","Lone Farmstead","Mesquis Tower","Kander Mines"]},"Swamp West Upper":{"routes":["Swamp East Upper","Swamp West Mid-Upper","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Mid"]},"Ragni East Suburbs":{"routes":["Maltic Plains","Ragni Main Entrance","Ragni Plains"]},"Plains Lake":{"routes":["Nether Gate","Desolate Valley","Mine Base Plains","Nether Plains Upper"]},"Ternaves Plains Upper":{"routes":["Ternaves","Savannah West Lower","Ternaves Plains Lower","Detlas Savannah Transition"]},"Swamp Dark Forest Transition Lower":{"routes":["Swamp Dark Forest Transition Mid","Entrance to Olux","Forgotten Path","Fortress North","Fortress South","Swamp Lower"]},"Twisted Housing":{"routes":["Efilim Village","Gelibord Corrupted Farm","Lone Farmstead","Mansion of Insanity","Gelibord"]},"Hobbit River":{"routes":["Light Forest East Lower","Aldorei Valley West Entrance","Light Peninsula","Light Forest West Lower"]},"Cinfras Entrance":{"routes":["Cinfras","Light Forest North Exit","Path to Cinfras","Mesquis Tower"]},"Detlas Close Suburbs":{"routes":["Detlas","Detlas Suburbs","Nether Plains Upper","Detlas Trail East Plains"]},"Lost Atoll":{"routes":["Tree Island","Pirate Town","Volcano Upper"]},"Twisted Ridge":{"routes":["Entrance to Kander","Viscera Pits West"]},"Cliffside Valley":{"routes":["Entrance to Thesead North","Bandits Toll","Entrance to Thesead South","Air Temple Lower"]},"Detlas Trail West Plains":{"routes":["Detlas Far Suburbs","Nemract Plains East","Ancient Nemract","Detlas Suburbs"]},"Canyon Survivor":{"routes":["Cliff Side of the Lost","Canyon Lower South East"]},"Aldorei Valley South Entrance":{"routes":["Aldorei's Waterfall","Aldorei's North Exit","Cinfras's Small Farm"]},"Path To Ozoth's Spire Upper":{"routes":["Path To Ozoth's Spire Mid","Bandit Cave Lower","Cinfras Thanos Transition","Path To Thanos"]},"Light Forest West Lower":{"routes":["Hobbit River","Light Forest South Entrance","Light Forest West Mid"]},"Rymek East Mid":{"routes":["Rymek East Lower","Rymek East Upper","Rymek West Mid"]},"Forgotten Path":{"routes":["Iron Road","Swamp Dark Forest Transition Lower","Goblin Plains East"]},"Lusuco":{"routes":["Icy Descent"]},"Ternaves":{"routes":["Ternaves Plains Lower","Savannah East Lower","Ternaves Plains Upper"]},"Swamp Island":{"routes":["Astraulus' Tower","Ahmsord Outskirts","Temple Island"]},"Temple of the Lost East":{"routes":["Krolton's Cave","Valley of the Lost"]},"Gateway to Nothing":{"routes":["Final Step","Void Valley","Toxic Drip"]},"Goblin Plains West":{"routes":["Goblin Plains East","Sablestone Camp","Iron Road","Llevigar Farm"]},"Half Moon Island":{"routes":["Mage Island"]},"Molten Heights Portal":{"routes":["Crater Descent","Lava Lake Bridge","Lava Lake"]},"Jungle Lake":{"routes":["Temple of Legends","Herb Cave","City of Troms","Jungle Mid"]},"Great Bridge Jungle":{"routes":["Jungle Lower","Herb Cave","Great Bridge Nesaak"]},"Canyon Entrance Waterfall":{"routes":["Canyon Path North West","Canyon Path North Mid"]},"Orc Lake":{"routes":["Sablestone Camp","Llevigar Plains East Upper","Sunspark Camp","Llevigar Plains East Lower","Orc Road"]},"Corkus Forest South":{"routes":["Factory Entrance","Corkus City","Corkus Forest North","Corkus City South"]},"Nesaak Plains South West":{"routes":["Nesaak Plains South East","Nesaak Bridge Transition","Icy Descent","Twain Lake","Nesaak Village","Nesaak Plains Lower North West"]},"Nether Gate":{"routes":["Plains Lake","Corrupted Road","Nether Plains Lower","Nether Plains Upper"]},"Aldorei's Arch":{"routes":["Path To The Arch","Canyon Waterfall North"]},"Gelibord Castle":{"routes":["Gelibord Corrupted Farm","Taproot Descent"]},"Llevigar Gate West":{"routes":["Llevigar Farm Plains West","Llevigar Gate East"]},"Cathedral Harbour":{"routes":["Savannah West Upper","Ancient Nemract","Nemract Cathedral","Durum Isles Lower","Durum Isles East"]},"Great Bridge Nesaak":{"routes":["Nesaak Bridge Transition","Great Bridge Jungle"]},"Phinas Farm":{"routes":["Royal Gate","Lighthouse Plateau"]},"Jofash Tunnel":{"routes":["Jofash Docks","Sky Island Ascent"]},"Light Forest North Exit":{"routes":["Cinfras Entrance","Light Forest South Exit","Light Forest Canyon"]},"Sablestone Camp":{"routes":["Meteor Crater","Orc Lake","Loamsprout Camp","Goblin Plains West"]},"Viscera Pits East":{"routes":["Path to Talor","Viscera Pits West","Lexdale"]},"The Broken Road":{"routes":["Worm Tunnel","The Silent Road"]},"Aldorei's Waterfall":{"routes":["Aldorei Valley Upper","Aldorei Valley South Entrance"]},"Gylia Lake North West":{"routes":["Gylia Lake South West","Gylia Lake North East","Fallen Village","Jitak's Farm"]},"Dernel Jungle Lower":{"routes":["Dernel Jungle Mid","Jungle Lower"]},"Gylia Lake South East":{"routes":["Gylia Lake South West","Gylia Lake North East","Thanos","Cinfras County Upper"]},"Mushroom Hill":{"routes":["Heart of Decay","Jitak's Farm","Decayed Basin","Fallen Village"]},"Forest of Eyes":{"routes":["Sinister Forest","Forgotten Town"]},"Void Valley":{"routes":["Gateway to Nothing"]},"Kandon Farm":{"routes":["Kandon Ridge"]},"Meteor Crater":{"routes":["Sablestone Camp","Sunspark Camp","Iron Road"]},"Astraulus' Tower":{"routes":["Dragonling Nests","Swamp Island"]},"Desert East Mid":{"routes":["Desert East Lower","Desert Mid-Upper","Desert East Upper"]},"Efilim South East Plains":{"routes":["Efilim East Plains","Light Forest West Upper","Efilim South Plains","Light Forest East Upper"]},"Taproot Descent":{"routes":["Swamp Dark Forest Transition Mid","Fortress North","Gelibord Corrupted Farm","Gelibord Castle","Swamp Dark Forest Transition Upper"]},"Cinfras County Lower":{"routes":["Aldorei's North Exit","Cinfras County Mid-Lower","Cinfras's Small Farm"]},"Dead Island North West":{"routes":["Dead Island South West","Dead Island North East"]},"Cinfras Outskirts":{"routes":["Dark Forest Cinfras Transition","Cinfras","Fungal Grove","Dark Forest Village","Old Crossroads South"]},"Plains Coast":{"routes":["Nemract Quarry","North Farmers Valley","Nemract Town"]},"Desert East Lower":{"routes":["Desert Mid-Lower","Desert East Mid","Rymek East Upper"]},"Cliff Side of the Lost":{"routes":["Canyon Survivor","Canyon Dropoff","Canyon Of The Lost","Mountain Edge","Valley of the Lost"]},"Llevigar Plains East Upper":{"routes":["Orc Lake","Sunspark Camp","Llevigar Plains East Lower","Llevigar Plains West Upper","Swamp East Lower"]},"Raider's Base Lower":{"routes":["Raider's Base Upper"]},"Time Valley":{"routes":["Little Wood","Abandoned Farm","Elkurn Fields"]},"Swamp Mountain Transition Mid-Upper":{"routes":["Swamp East Upper","Swamp Mountain Transition Mid","Swamp Mountain Transition Upper"]},"Ghostly Path":{"routes":["Burning Farm","Path To The Arch"]},"North Nivla Woods":{"routes":["Plains","Nivla Woods Exit","Nivla Woods Edge"]},"Gylia Lake North East":{"routes":["Gylia Lake North West","Military Base","Gert Camp","Gylia Lake South East"]},"Bandit Cave Lower":{"routes":["Canyon Valley South","Path To Ozoth's Spire Upper"]},"Military Base Lower":{"routes":["Thanos Valley West","Military Base Upper","Path To Ozoth's Spire Lower"]},"Canyon Walk Way":{"routes":["Canyon Mountain East","Path To Ozoth's Spire Mid","Bandits Toll"]},"Mining Base Upper":{"routes":["Mining Base Lower","Ternaves Plains Lower","Abandoned Pass"]},"Volcano Lower":{"routes":["Light Peninsula","Bloody Beach","Llevigar Entrance","Volcano Upper"]},"Hive South":{"routes":["Thanos Exit Upper","Hive","Canyon High Path","Cherry Blossom Forest","Chained House"]},"Road To Mine":{"routes":["Corkus City Mine","Corkus Sea Cove","Corkus City South"]},"Swamp West Lower":{"routes":["Swamp West Mid","Llevigar Plains West Upper","Swamp East Lower"]},"Llevigar":{"routes":["Llevigar Entrance","Quartz Mines South West","Llevigar Gate East"]},"Entrance to Rodoroc":{"routes":["Rodoroc","Thesead Suburbs","Eltom"]},"Light Forest Canyon":{"routes":["Light Forest North Exit","Light Forest East Mid","Mantis Nest"]},"Corkus Castle":{"routes":["Corkus City"]},"Snail Island":{"routes":["Temple Island"]},"Sky Castle":{"routes":["Path to Ahmsord Lower"]},"Lava Lake":{"routes":["Active Volcano","Molten Heights Portal","Volcanic Slope"]},"Canyon Path South East":{"routes":["Canyon Path North West","Canyon Lower South East"]},"Ternaves Plains Lower":{"routes":["Mine Base Plains","Ternaves","Mining Base Upper","Ternaves Plains Upper","Abandoned Pass"]},"The Gate":{"routes":["Bizarre Passage"]},"Fleris Trail":{"routes":["Road To Light Forest"]},"Corkus Forest North":{"routes":["Corkus City","Corkus Mountain","Corkus Forest South","Corkus City South"]},"Sinister Forest":{"routes":["Lutho","Forest of Eyes"]},"Swamp East Upper":{"routes":["Swamp Plains Basin","Swamp East Mid-Upper","Swamp Mountain Transition Mid-Upper","Swamp Mountain Transition Upper","Swamp West Upper"]},"Pigmen Ravines Entrance":{"routes":["Pigmen Ravines","South Pigmen Ravines","Ragni"]},"Corkus Outskirts":{"routes":["Corkus Statue","Bloody Beach","Corkus Countryside"]},"Maltic Coast":{"routes":["Coastal Trail","North Farmers Valley","Maltic","South Farmers Valley"]},"Quartz Mines North West":{"routes":["Quartz Mines North East","Quartz Mines South West","Llevigar Farm","Loamsprout Camp"]},"Guild Hall":{"routes":["Cinfras"]},"Nemract Plains East":{"routes":["Nemract Road","Detlas Trail West Plains"]},"Corkus Sea Port":{"routes":["Lighthouse Plateau","Corkus Sea Cove","Fallen Factory","Ruined Houses"]},"Efilim South Plains":{"routes":["Efilim South East Plains","Light Forest North Entrance","Efilim Village"]},"Path to Talor":{"routes":["Old Crossroads North","Entrance to Kander","Viscera Pits East","Dark Forest Village","Kander Mines","Old Crossroads South"]},"Mansion of Insanity":{"routes":["Twisted Housing","Fortress North","Fortress South"]},"Detlas Trail East Plains":{"routes":["Detlas","Cathedral Harbour","Ancient Nemract","Detlas Close Suburbs","Detlas Suburbs"]},"Efilim East Plains":{"routes":["Efilim Village","Efilim South East Plains"]},"Light Forest Entrance":{"routes":["Road To Light Forest","Light Forest North Entrance","Light Forest South Entrance","Light Forest West Mid"]},"Light Forest East Upper":{"routes":["Efilim South East Plains","Path to Cinfras"]},"Eltom":{"routes":["Entrance to Rodoroc","Ranol's Farm"]},"Molten Reach":{"routes":["Angel Refuge","Molten Heights Portal"]},"Llevigar Farm Plains West":{"routes":["Llevigar Farm Plains East","Llevigar Gate West","Llevigar Plains West Lower"]},"Mantis Nest":{"routes":["Light Forest East Lower","Aldorei Valley West Entrance","Light Forest South Exit","Light Forest Canyon","Aldorei Valley Lower"]},"Quartz Mines South East":{"routes":["Quartz Mines South West","Quartz Mines North East"]},"Dragonling Nests":{"routes":["Snail Island","Astraulus' Tower"]},"Grey Ruins":{"routes":["Worm Tunnel","Forgotten Town"]},"Corkus Mountain":{"routes":["Corkus Docks","Corkus Forest North","Corkus Countryside"]},"Bizarre Passage":{"routes":["Final Step","The Gate"]},"Burning Airship":{"routes":["Cinfras Thanos Transition","Burning Farm","Bandit Cave Upper"]},"Bloody Beach":{"routes":["Pirate Town","Corkus Outskirts","Volcano Lower","Avos Temple"]},"Nivla Woods Edge":{"routes":["Detlas Far Suburbs","Road to Elkurn","North Nivla Woods","Nivla Woods Exit"]},"Nesaak Transition":{"routes":["Elkurn","Desolate Valley","Nether Plains Lower","Nesaak Plains North East"]},"Light Peninsula":{"routes":["Volcano Upper","Hobbit River","Tree Island","Volcano Lower"]},"Road to Time Valley":{"routes":["Nivla Woods","Nivla Woods Entrance","South Nivla Woods"]},"Swamp Mountain Base":{"routes":["Sunspark Camp","Swamp Plains Basin","Swamp Lower","Swamp East Mid"]},"Loamsprout Camp":{"routes":["Llevigar Farm","Sablestone Camp","Orc Road","Quartz Mines North West"]},"Elkurn Fields":{"routes":["Road to Elkurn","Time Valley","South Nivla Woods","Elkurn"]},"Nexus of Light":{"routes":["Azure Frontier"]},"Aldorei Valley Upper":{"routes":["Aldorei Valley Mid","Aldorei's Waterfall"]},"Jitak's Farm":{"routes":["Mushroom Hill","Gert Camp","Gylia Lake North West"]},"Twain Lake":{"routes":["Twain Mansion","Nesaak Plains South West"]},"Herb Cave":{"routes":["Great Bridge Jungle"]},"Durum Isles East":{"routes":["Mage Island","Durum Isles Center"]},"Pre-Light Forest Transition":{"routes":["Leadin Fortress","Quartz Mines North East","Goblin Plains East","Llevigar Farm"]},"Aldorei's River":{"routes":["Aldorei Lowlands","Cinfras"]},"Cliffside Passage North":{"routes":["Entrance to Thesead North","Cliffside Passage"]},"Temple of Legends":{"routes":["Jungle Lake","City of Troms"]},"Lion Lair":{"routes":["Bremminglar"]},"Nesaak Village":{"routes":["Nesaak Plains South East","Bob's Tomb","Nesaak Plains North East","Nesaak Plains South West","Nesaak Plains Lower North West"]},"Swamp Mountain Transition Upper":{"routes":["Swamp East Upper","Olux","Swamp Mountain Transition Mid-Upper"]},"Leadin Fortress":{"routes":["Pre-Light Forest Transition","Road To Light Forest","Orc Battlegrounds"]},"Corrupted Road":{"routes":["Nether Gate","Detlas Far Suburbs","Nether Plains Upper","Elkurn"]},"North Farmers Valley":{"routes":["Maltic Coast","South Farmers Valley"]},"Ruined Houses":{"routes":["Factory Entrance","Fallen Factory","Corkus Sea Port"]},"Emerald Trail":{"routes":["Maltic Plains","Nivla Woods Entrance","Ragni Main Entrance"]},"Heavenly Ingress":{"routes":["Field of Life","Light Forest South Entrance"]},"Sky Island Ascent":{"routes":["Central Islands","Jofash Tunnel","Raider's Base Upper","Sky Falls"]},"Lutho":{"routes":["Paths of Sludge","Sinister Forest"]},"Old Coal Mine":{"routes":["Kandon Ridge"]},"Dead Island South West":{"routes":["Skiens Island","Dead Island South East","Dead Island North West","Dujgon Nation"]},"Jungle Mid":{"routes":["Jungle Lower","Jungle Lake","Jungle Upper"]},"Aldorei's North Exit":{"routes":["Cinfras County Lower","Path To The Arch","Aldorei Valley South Entrance"]},"Light Forest South Entrance":{"routes":["Light Forest West Lower","Heavenly Ingress","Light Forest Entrance"]},"Desert Upper":{"routes":["Desert West Upper","Desert Mid-Upper","Mummy's Tomb"]},"Southern Outpost":{"routes":["Legendary Island","Lighthouse Plateau"]},"Factory Entrance":{"routes":["Fallen Factory","Ruined Houses","Corkus Forest South","Corkus City South"]},"The Bear Zoo":{"routes":["Rooster Island","Zhight Island"]},"Dead Island North East":{"routes":["Jofash Docks","Dead Island South East","Dead Island North West"]},"Cherry Blossom Forest":{"routes":["Ranol's Farm","Chained House","Hive South"]},"Wizard Tower North":{"routes":["Krolton's Cave","Bandits Toll"]},"Canyon Of The Lost":{"routes":["Cliffside Lake","Kandon-Beda","Cliff Side of the Lost","Valley of the Lost"]},"Rymek West Lower":{"routes":["Rymek East Lower","Rymek West Mid"]},"Central Islands":{"routes":["Ahmsord","Sky Island Ascent","Temple Island","Wybel Island","Ahmsord Outskirts"]},"Canyon Path North West":{"routes":["Canyon Path South East","Canyon Entrance Waterfall"]},"Canyon Waterfall Mid North":{"routes":["Canyon Mountain South","Canyon Path North Mid","Canyon Fortress"]},"Military Base":{"routes":["Path To Military Base","Military Base Upper"]},"Icy Descent":{"routes":["Tower of Ascension","Lusuco"]},"Canyon Path South West":{"routes":["Canyon Path North West","Canyon Lower South East"]},"Aldorei Valley Lower":{"routes":["Aldorei Valley Mid","Aldorei Valley West Entrance"]},"South Pigmen Ravines":{"routes":["Little Wood","Pigmen Ravines Entrance"]},"Desert Lower":{"routes":["Desert Mid-Lower","Rymek West Upper","Desert West Lower"]},"Abandoned Farm":{"routes":["Pigmen Ravines","Time Valley"]},"Nether Plains Lower":{"routes":["Elkurn","Nether Gate","Desolate Valley","Nesaak Transition"]},"Olux":{"routes":["Swamp Dark Forest Transition Mid","Swamp Dark Forest Transition Upper","Entrance to Olux","Swamp Mountain Transition Upper"]},"Gelibord":{"routes":["Twisted Housing","Entrance to Kander","Gelibord Corrupted Farm","Lone Farmstead"]},"Mining Base Lower":{"routes":["Mining Base Upper"]},"Ragni North Entrance":{"routes":["Katoa Ranch","Ragni","Ragni North Suburbs"]},"Ranol's Farm":{"routes":["Cherry Blossom Forest","Thesead Suburbs","Eltom"]},"Path To The Arch":{"routes":["Aldorei's Arch","Aldorei's North Exit","Ghostly Path"]},"Light Forest North Entrance":{"routes":["Light Forest West Upper","Light Forest Entrance","Efilim South Plains"]},"Light Forest South Exit":{"routes":["Mantis Nest","Light Forest North Exit"]},"Nivla Woods":{"routes":["Road to Time Valley","Nivla Woods Exit","Nivla Woods Entrance","South Nivla Woods"]},"Luminous Plateau":{"routes":["Field of Life"]},"Rymek East Lower":{"routes":["Rymek East Mid","Rymek West Lower"]},"Llevigar Plains West Upper":{"routes":["Swamp West Lower","Llevigar Plains East Upper","Llevigar Plains West Lower"]},"Desert Mid-Lower":{"routes":["Almuj City","Desert West Lower","Desert Lower","Desert Mid-Upper","Desert East Lower"]},"Coastal Trail":{"routes":["Maltic Coast","Ragni Plains"]},"Thanos Exit Upper":{"routes":["Canyon High Path","Bandits Toll","Thanos Exit","Hive","Hive South"]},"Elkurn":{"routes":["Road to Elkurn","Nesaak Plains Upper North West","Corrupted Road","Elkurn Fields"]},"Bandit Cave Upper":{"routes":["Burning Airship"]},"Light Forest East Mid":{"routes":["Light Forest East Lower","Light Forest West Upper","Light Forest Canyon"]},"Corkus Countryside":{"routes":["Corkus City","Avos Temple","Corkus Mountain","Corkus Outskirts"]},"Kandon Ridge":{"routes":["Old Coal Mine","Kandon Farm","Path to Ahmsord Upper"]},"Jungle Lower":{"routes":["Dernel Jungle Lower","Great Bridge Jungle","Jungle Mid"]},"Cliffside Passage":{"routes":["Cliffside Passage North","Cliffside Lake"]},"Corkus Statue":{"routes":["Corkus City Mine","Corkus Outskirts"]},"Hive":{"routes":["Thanos Exit Upper","Hive South"]},"Dujgon Nation":{"routes":["Nodguj Nation","Dead Island South East","Icy Island","Dead Island South West","Regular Island"]},"Canyon Lower South East":{"routes":["Canyon Path South West","Canyon Path South East","Canyon Survivor","Canyon Upper North West"]},"Sky Falls":{"routes":["Sky Island Ascent","Frozen Fort","Wybel Island"]},"Rodoroc":{"routes":["Crater Descent"]},"Almuj City":{"routes":["Desert West Lower","Desert Mid-Lower","Desert West Upper","Desert Mid-Upper","Savannah East Upper"]},"Bandits Toll":{"routes":["Wizard Tower North","Canyon Walk Way","Thanos Exit Upper","Cliffside Valley"]},"Toxic Drip":{"routes":["Paths of Sludge","Gateway to Nothing","Toxic Caves"]},"Canyon High Path":{"routes":["Cliffside Waterfall","Thanos Exit Upper","Hive South"]},"Rymek East Upper":{"routes":["Rymek West Upper","Rymek East Mid","Desert East Lower"]},"Cinfras Thanos Transition":{"routes":["Burning Airship","Path To Thanos","Cinfras County Mid-Upper"]},"Fortress North":{"routes":["Mansion of Insanity","Taproot Descent","Fortress South"]},"Santa's Hideout":{"routes":["Icy Island","Mage Island"]},"Path To Ozoth's Spire Mid":{"routes":["Canyon Walk Way","Path To Ozoth's Spire Upper"]},"Nivla Woods Entrance":{"routes":["Road to Time Valley","Emerald Trail","Nivla Woods","Plains"]},"Path to Ahmsord Lower":{"routes":["Sky Castle","Ahmsord","Path to Ahmsord Upper"]},"Path to Ahmsord Upper":{"routes":["Path to Ahmsord Lower","Kandon Ridge"]},"Canyon Mountain South":{"routes":["Krolton's Cave","Canyon Waterfall Mid North"]},"Air Temple Lower":{"routes":["Krolton's Cave","Air Temple Upper","Cliffside Valley"]},"Fallen Village":{"routes":["Fungal Grove","Mushroom Hill","Dark Forest Cinfras Transition","Gylia Lake North West"]},"Entrance to Kander":{"routes":["Path to Talor","Gelibord","Viscera Pits West","Abandoned Manor"]},"Thanos Exit":{"routes":["Thanos Exit Upper"]},"Nemract Road":{"routes":["Nemract Quarry","Nemract Plains East","Nemract Town","Ancient Nemract","Nemract Cathedral","Nemract Plains West"]},"Angel Refuge":{"routes":["Molten Reach","Ahmsord Outskirts"]},"Efilim Village":{"routes":["Efilim East Plains","Twisted Housing","Efilim South Plains"]},"Nesaak Plains Mid North West":{"routes":["Nesaak Plains Upper North West","Nesaak Plains Lower North West"]},"Nemract Cathedral":{"routes":["Nemract Town","Ancient Nemract","Cathedral Harbour","Nemract Road"]},"Ragni Plains":{"routes":["Ragni East Suburbs","Coastal Trail","Maltic","Ragni North Suburbs"]},"Old Crossroads South":{"routes":["Old Crossroads North","Path to Talor","Fungal Grove","Dark Forest Village","Cinfras Outskirts"]},"Little Wood":{"routes":["Time Valley","South Pigmen Ravines"]}};

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
    let connLines = {};
    let routesShown = true;

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
        if (map.getZoom() > 5) {
            showRoutes();
        } else {
            hideRoutes();
        }
    })
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
                if (init) {
                    updatePopups();
                    // conns
                    for (let i in terrs) {
                        if (!terrs.hasOwnProperty(i)) continue;
                        for (let j of conns[i].routes) {
                            if (!terrs.hasOwnProperty(j)) continue;
                            // if (i <= j) continue;
                            let sx = (terrs[i].location.startX + terrs[i].location.endX) / 2;
                            let sy = (terrs[i].location.startY + terrs[i].location.endY) / 2;
                            let ex = (terrs[j].location.startX + terrs[j].location.endX) / 2;
                            let ey = (terrs[j].location.startY + terrs[j].location.endY) / 2;
                            let line = L.polyline([[sx, sy], [ex, ey]].map(coordsToLatLng), {
                                color: "white",
                            });
                            setConnLine(i, j, line);
                            line.addTo(map);
                        }
                    }
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

    function setConnLine(t1, t2, line) {
        // if (connLines[t2] && connLines[t2][t1]) {
        //     connLines[t2][t1] = line;
        // } else {
            connLines[t1] = connLines[t1] || {};
            connLines[t1][t2] = line;
        // }
    }

    function getConnLine(t1, t2) {
        return connLines[t1] && connLines[t1][t2];
        // return (connLines[t1] && connLines[t1][t2]) || (connLines[t2] && connLines[t2][t1])
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
}