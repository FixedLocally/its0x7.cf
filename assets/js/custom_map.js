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

let terrData = {"AirTempleUpper":{"routes":["AirTempleLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MaroPeaks":{"routes":["SkiensIsland","TreeIsland"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Plains":{"routes":["MalticPlains","NorthNivlaWoods","SouthFarmersValley","NivlaWoodsEntrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"PathToThanos":{"routes":["CinfrasThanosTransition","Thanos"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"SavannahWestLower":{"routes":["TernavesPlainsUpper","SavannahEastLower","SavannahWestUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DurumIslesUpper":{"routes":["Selchar","MageIsland","DurumIslesCenter","NodgujNation"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Selchar":{"routes":["SkiensIsland","DurumIslesUpper","RoosterIsland","DurumIslesCenter","DurumIslesLower"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":3600,"crops":0}},"LlevigarPlainsWestLower":{"routes":["LlevigarFarmPlainsWest","LlevigarPlainsEastLower","LlevigarGateWest","LlevigarPlainsWestUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NesaakPlainsSouthEast":{"routes":["NesaakVillage","Bob'sTomb","NesaakPlainsSouthWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LlevigarPlainsEastLower":{"routes":["LlevigarPlainsEastUpper","LlevigarPlainsWestLower","OrcLake","LlevigarFarmPlainsEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"KanderMines":{"routes":["PathtoTalor","MesquisTower","DarkForestVillage","AbandonedManor"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampDarkForestTransitionUpper":{"routes":["Olux","SwampDarkForestTransitionMid","TaprootDescent"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MineBasePlains":{"routes":["PlainsLake","TheSilentRoad","MiningBaseLower","MiningBaseUpper","TernavesPlainsLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DetlasSavannahTransition":{"routes":["Detlas","TernavesPlainsUpper","SavannahWestLower","MineBasePlains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"FortressSouth":{"routes":["FortressNorth","MansionofInsanity","SwampDarkForestTransitionLower","OrcBattlegrounds"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"AldoreiLowlands":{"routes":["Aldorei'sRiver","Cinfras'sSmallFarm","Aldorei'sWaterfall"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LlevigarGateEast":{"routes":["LlevigarGateWest","OrcRoad","LlevigarFarmPlainsEast","Llevigar"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"VisceraPitsWest":{"routes":["EntrancetoKander","LexdalesPrison","VisceraPitsEast","TwistedRidge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SanctuaryBridge":{"routes":["NesaakPlainsUpperNorthWest","TimeValley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"DesertWestUpper":{"routes":["DesertUpper","AlmujCity"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"MalticPlains":{"routes":["RagniEastSuburbs","Plains","EmeraldTrail","Maltic"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SavannahWestUpper":{"routes":["CathedralHarbour","SavannahWestLower","SavannahEastUpper","Bremminglar"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"MageIsland":{"routes":["HalfMoonIsland","Santa'sHideout","DurumIslesUpper","DurumIslesEast"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Ahmsord":{"routes":["PathtoAhmsordLower","SkyIslandAscent","TempleIsland","PathtoAhmsordUpper"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampMountainTransitionMid":{"routes":["SwampMountainTransitionLower","SwampMountainTransitionMid-Upper","SwampWestUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"Bob'sTomb":{"routes":["NesaakPlainsSouthEast","NesaakPlainsNorthEast","NesaakVillage"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"FallenFactory":{"routes":["FactoryEntrance","RuinedHouses","CorkusCitySouth","CorkusSeaPort"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CanyonValleySouth":{"routes":["CanyonMountainEast","BanditCaveLower","BanditCampExit"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"SwampEastLower":{"routes":["SwampWestLower","SunsparkCamp","LlevigarPlainsEastUpper","SwampEastMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"PathtoLight":{"routes":["AzureFrontier","OtherwordlyMonolith"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CorkusCity":{"routes":["CorkusCastle","CorkusForestNorth","CorkusForestSouth","CorkusCountryside","CorkusCitySouth"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CanyonPathNorthMid":{"routes":["CanyonPathSouthWest","BanditCampExit","CanyonWaterfallMidNorth","CanyonEntranceWaterfall"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"TheSilentRoad":{"routes":["TheBrokenRoad","MineBasePlains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CityofTroms":{"routes":["TempleofLegends","JungleLake","SouthPigmenRavines"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crops":0}},"GyliaLakeSouthWest":{"routes":["DarkForestCinfrasTransition","GyliaLakeNorthWest","GyliaLakeSouthEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"PrimalFen":{"routes":["FieldofLife"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CanyonMountainEast":{"routes":["CanyonWalkWay","CanyonValleySouth"],"production":{"emerald":9000,"wood":0,"ore":7200,"fish":0,"crops":0}},"DarkForestCinfrasTransition":{"routes":["GyliaLakeSouthWest","FallenVillage","CinfrasOutskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CliffsideLake":{"routes":["CliffsidePassage","CanyonOfTheLost"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"NemractPlainsWest":{"routes":["NivlaWoodsEdge","NemractRoad","NemractQuarry","ArachnidRoute"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"TwainMansion":{"routes":["TwainLake"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"SavannahEastLower":{"routes":["SavannahWestLower","Ternaves","SavannahEastUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampLower":{"routes":["SwampMountainBase","SwampDarkForestTransitionLower","IronRoad","EntrancetoOlux"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Bremminglar":{"routes":["LionLair","SavannahWestUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RoadToLightForest":{"routes":["FlerisTrail","LeadinFortress","LightForestEntrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampEastMid-Upper":{"routes":["SwampWestMid-Upper","SwampPlainsBasin","SwampEastUpper","SwampEastMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"ThanosValleyWest":{"routes":["MilitaryBaseLower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LlevigarEntrance":{"routes":["VolcanoLower","Llevigar"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"VolcanicSlope":{"routes":["ActiveVolcano","LavaLake"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"DurumIslesCenter":{"routes":["DurumIslesUpper","Selchar","DurumIslesLower","DurumIslesEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CanyonWaterfallNorth":{"routes":["CanyonUpperNorthWest"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"GelibordCorruptedFarm":{"routes":["TwistedHousing","Gelibord","GelibordCastle","TaprootDescent"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"PirateTown":{"routes":["BloodyBeach","LostAtoll","ZhightIsland"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"FungalGrove":{"routes":["OldCrossroadsNorth","DecayedBasin","FallenVillage","CinfrasOutskirts","OldCrossroadsSouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"OrcRoad":{"routes":["OrcLake","LoamsproutCamp","LlevigarFarmPlainsEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LlevigarFarmPlainsEast":{"routes":["LlevigarFarmPlainsWest","LlevigarGateEast","LlevigarPlainsEastLower","OrcRoad"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"OldCrossroadsNorth":{"routes":["OldCrossroadsSouth","FungalGrove","Lexdale","PathtoTalor"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CorkusDocks":{"routes":["CorkusMountain"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CanyonUpperNorthWest":{"routes":["CanyonWaterfallNorth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"AhmsordOutskirts":{"routes":["CentralIslands","AngelRefuge","WybelIsland","SwampIsland"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DesertWestLower":{"routes":["AlmujCity","DesertLower","DesertMid-Lower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SwampWestMid":{"routes":["SwampWestLower","SwampWestMid-Upper","SwampEastMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Krolton'sCave":{"routes":["AirTempleLower","WizardTowerNorth","TempleoftheLostEast","CanyonMountainSouth"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"RoyalGate":{"routes":["PhinasFarm"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":7200,"crops":0}},"PathsofSludge":{"routes":["Lutho","ToxicDrip"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"NesaakPlainsLowerNorthWest":{"routes":["NesaakVillage","NesaakPlainsUpperNorthWest","NesaakPlainsMidNorthWest","NesaakPlainsSouthWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LoneFarmstead":{"routes":["TwistedHousing","AbandonedManor","Gelibord"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"RoadtoElkurn":{"routes":["Elkurn","ElkurnFields","SouthNivlaWoods"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"RoosterIsland":{"routes":["Selchar","TheBearZoo","NemractTown","DurumIslesLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"DernelJungleMid":{"routes":["DernelJungleUpper","DernelJungleLower","JungleUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SwampPlainsBasin":{"routes":["SwampEastMid-Upper","SwampEastUpper","SwampMountainBase","EntrancetoOlux"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"FinalStep":{"routes":["GatewaytoNothing","BizarrePassage"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"TreeIsland":{"routes":["LightPeninsula","LostAtoll","VolcanoUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CanyonDropoff":{"routes":["MountainPath","CliffSideoftheLost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"AncientNemract":{"routes":["CathedralHarbour","NemractRoad","NemractCathedral","DetlasTrailEastPlains","DetlasTrailWestPlains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"AldoreiValleyMid":{"routes":["AldoreiValleyUpper","AldoreiValleyLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CinfrasCountyUpper":{"routes":["GyliaLakeSouthEast","CinfrasCountyMid-Upper","PathToThanos"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SouthFarmersValley":{"routes":["MalticPlains","MalticCoast","Plains","NorthFarmersValley","Maltic"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"KatoaRanch":{"routes":["RagniNorthSuburbs","RagniNorthEntrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":7200}},"DecayedBasin":{"routes":["HeartofDecay","MushroomHill","FungalGrove","Lexdale"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"RagniNorthSuburbs":{"routes":["RagniNorthEntrance","RagniPlains","KatoaRanch"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DurumIslesLower":{"routes":["DurumIslesCenter","Selchar","RoosterIsland"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"OrcBattlegrounds":{"routes":["LeadinFortress","FortressSouth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Thanos":{"routes":["PathToThanos","PathToMilitaryBase","GyliaLakeSouthEast","PathToOzoth'sSpireLower"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crops":0}},"PathToOzoth'sSpireLower":{"routes":["MilitaryBaseLower","Thanos"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"WormTunnel":{"routes":["TheBrokenRoad","GreyRuins"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CinfrasCountyMid-Lower":{"routes":["CinfrasCountyLower","Cinfras'sSmallFarm","CinfrasCountyMid-Upper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"TowerofAscension":{"routes":["IcyDescent"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"SkiensIsland":{"routes":["NodgujNation","Selchar","DeadIslandSouthWest","MaroPeaks"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"ActiveVolcano":{"routes":["LavaLakeBridge","LavaLake","VolcanicSlope"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CliffsideWaterfall":{"routes":["CanyonHighPath"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"ValleyoftheLost":{"routes":["CanyonOfTheLost","TempleoftheLostEast","CanyonFortress"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"FrozenFort":{"routes":["SkyFalls"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"PathtoCinfras":{"routes":["CinfrasEntrance","LightForestEastUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"TempleIsland":{"routes":["KandonRidge","CentralIslands","SwampIsland","Ahmsord","SnailIsland"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NodgujNation":{"routes":["DujgonNation","Santa'sHideout","IcyIsland","SkiensIsland","MageIsland"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"ArachnidRoute":{"routes":["Plains","NorthNivlaWoods","NemractPlainsWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NesaakBridgeTransition":{"routes":["NesaakPlainsSouthWest","GreatBridgeNesaak"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Cinfras'sSmallFarm":{"routes":["CinfrasCountyLower","AldoreiLowlands","CinfrasCountyMid-Lower","AldoreiValleySouthEntrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SouthNivlaWoods":{"routes":["RoadtoElkurn","NivlaWoods","RoadtoTimeValley","NivlaWoodsExit","ElkurnFields"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"HeartofDecay":{"routes":["DecayedBasin","MushroomHill","Lexdale"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"RegularIsland":{"routes":["JofashDocks","IcyIsland","DujgonNation"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"QuartzMinesSouthWest":{"routes":["QuartzMinesSouthEast","QuartzMinesNorthWest","Llevigar"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"PigmenRavines":{"routes":["AbandonedFarm","PigmenRavinesEntrance"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"SwampWestMid-Upper":{"routes":["SwampEastMid-Upper","SwampWestUpper","SwampWestMid"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"RymekWestMid":{"routes":["RymekWestUpper","RymekEastMid","RymekWestLower"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"AvosWorkshop":{"routes":["AvosTemple"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampMountainTransitionLower":{"routes":["SwampMountainTransitionMid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CraterDescent":{"routes":["LavaLakeBridge","Rodoroc","MoltenHeightsPortal"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"JofashDocks":{"routes":["RegularIsland","DeadIslandNorthEast","JofashTunnel"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"BanditCampExit":{"routes":["CanyonValleySouth","CanyonPathNorthMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RagniMainEntrance":{"routes":["RagniEastSuburbs","EmeraldTrail","Ragni"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CanyonFortress":{"routes":["CanyonWaterfallMidNorth","ValleyoftheLost"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"LlevigarFarm":{"routes":["LoamsproutCamp","GoblinPlainsWest","QuartzMinesNorthWest","GoblinPlainsEast","Pre-LightForestTransition","QuartzMinesNorthEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DetlasSuburbs":{"routes":["DetlasCloseSuburbs","DetlasFarSuburbs","NetherPlainsUpper","DetlasTrailEastPlains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CorkusSeaCove":{"routes":["RoadToMine","FallenFactory","CorkusCityMine","CorkusSeaPort"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"IronRoad":{"routes":["MeteorCrater","GoblinPlainsWest","SwampLower","ForgottenPath"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"TheseadSuburbs":{"routes":["Ranol'sFarm","ChainedHouse","EntrancetoRodoroc","Thesead"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"BurningFarm":{"routes":["GhostlyPath","BurningAirship"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"DesertMid-Upper":{"routes":["DesertMid-Lower","DesertUpper","DesertEastMid","AlmujCity"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"ForgottenTown":{"routes":["GreyRuins","ForestofEyes"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"NemractQuarry":{"routes":["NemractRoad","PlainsCoast","NemractPlainsWest"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NetherPlainsUpper":{"routes":["NetherGate","PlainsLake","DetlasCloseSuburbs","CorruptedRoad","DetlasFarSuburbs","DetlasSuburbs"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DesertEastUpper":{"routes":["DesertEastMid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SavannahEastUpper":{"routes":["SavannahEastLower","AlmujCity","SavannahWestUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SunsparkCamp":{"routes":["SwampMountainBase","LlevigarPlainsEastUpper","MeteorCrater","SwampEastLower","OrcLake"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"IcyIsland":{"routes":["DujgonNation","Santa'sHideout","NodgujNation","RegularIsland"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"QuartzMinesNorthEast":{"routes":["LlevigarFarm","QuartzMinesSouthEast","QuartzMinesNorthWest","Pre-LightForestTransition"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"GertCamp":{"routes":["GyliaLakeNorthEast","Jitak'sFarm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Thesead":{"routes":["TheseadSuburbs","EntrancetoTheseadSouth"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MilitaryBaseUpper":{"routes":["MilitaryBaseLower","MilitaryBase"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"VolcanoUpper":{"routes":["LightPeninsula","LostAtoll","PirateTown","TreeIsland","VolcanoLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"EntrancetoOlux":{"routes":["SwampDarkForestTransitionMid","SwampPlainsBasin","SwampLower","SwampDarkForestTransitionLower","Olux"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"OtherwordlyMonolith":{"routes":["PathtoLight","AzureFrontier"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"LavaLakeBridge":{"routes":["CraterDescent","ActiveVolcano","MoltenHeightsPortal"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"AldoreiValleyWestEntrance":{"routes":["HobbitRiver","AldoreiValleyLower","MantisNest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Kandon-Beda":{"routes":["CanyonOfTheLost"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Raider'sBaseUpper":{"routes":["SkyIslandAscent","Raider'sBaseLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LightForestEastLower":{"routes":["LightForestWestMid","HobbitRiver","MantisNest","LightForestEastMid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"JungleUpper":{"routes":["JungleMid"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"DeadIslandSouthEast":{"routes":["DujgonNation","DeadIslandSouthWest","RegularIsland","DeadIslandNorthEast"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"MesquisTower":{"routes":["PathtoCinfras","AbandonedManor","KanderMines","CinfrasEntrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LightForestWestMid":{"routes":["LightForestEastLower","LightForestWestUpper","LightForestEntrance","LightForestWestLower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PathToMilitaryBase":{"routes":["Thanos","MilitaryBase"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LightForestWestUpper":{"routes":["EfilimSouthEastPlains","LightForestNorthEntrance","LightForestWestMid","LightForestEastMid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"MountainEdge":{"routes":["CliffSideoftheLost"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NivlaWoodsExit":{"routes":["NivlaWoodsEdge","NorthNivlaWoods","NivlaWoods","SouthNivlaWoods"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LegendaryIsland":{"routes":["ZhightIsland","SouthernOutpost"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"AbandonedPass":{"routes":["MiningBaseUpper","TernavesPlainsLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NesaakPlainsUpperNorthWest":{"routes":["Elkurn","NesaakPlainsNorthEast","NesaakPlainsLowerNorthWest","NesaakPlainsMidNorthWest","SanctuaryBridge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Detlas":{"routes":["DetlasSavannahTransition","DetlasCloseSuburbs","DetlasTrailEastPlains"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crops":3600}},"ChainedHouse":{"routes":["CherryBlossomForest","HiveSouth","TheseadSuburbs","EntrancetoTheseadSouth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CorkusCityMine":{"routes":["RoadToMine","CorkusStatue","CorkusSeaCove"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MountainPath":{"routes":["CanyonDropoff"],"production":{"emerald":9000,"wood":0,"ore":7200,"fish":0,"crops":0}},"Cinfras":{"routes":["Aldorei'sRiver","CinfrasEntrance","GuildHall","CinfrasOutskirts"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Lexdale":{"routes":["OldCrossroadsNorth","HeartofDecay","DecayedBasin","VisceraPitsEast"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CorkusCitySouth":{"routes":["FactoryEntrance","CorkusCity","FallenFactory","CorkusForestSouth","RoadToMine"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"ZhightIsland":{"routes":["LegendaryIsland","TheBearZoo","PirateTown"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"ToxicCaves":{"routes":["ToxicDrip"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"NesaakPlainsNorthEast":{"routes":["Bob'sTomb","NesaakPlainsUpperNorthWest","NesaakVillage","NesaakTransition","NesaakPlainsLowerNorthWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DesolateValley":{"routes":["NesaakTransition","PlainsLake","NetherPlainsLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Ragni":{"routes":["RagniNorthEntrance","PigmenRavinesEntrance","RagniMainEntrance"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crops":3600}},"FieldofLife":{"routes":["AzureFrontier","LuminousPlateau","HeavenlyIngress","PrimalFen"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NemractTown":{"routes":["NemractRoad","PlainsCoast","RoosterIsland","NemractCathedral"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crops":3600}},"EntrancetoTheseadNorth":{"routes":["EntrancetoTheseadSouth","CliffsidePassageNorth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DetlasFarSuburbs":{"routes":["NetherPlainsUpper","CorruptedRoad","DetlasTrailWestPlains","DetlasSuburbs","NivlaWoodsEdge"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"LighthousePlateau":{"routes":["CorkusSeaPort","PhinasFarm","SouthernOutpost"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"EntrancetoTheseadSouth":{"routes":["Thesead","EntrancetoTheseadNorth","ChainedHouse","CliffsideValley"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"DarkForestVillage":{"routes":["PathtoTalor","KanderMines","CinfrasOutskirts","OldCrossroadsSouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampEastMid":{"routes":["SwampEastMid-Upper","SwampMountainBase","SwampWestMid","SwampEastLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Mummy'sTomb":{"routes":["DesertUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DernelJungleUpper":{"routes":["DernelJungleMid"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crops":0}},"LexdalesPrison":{"routes":["VisceraPitsWest","TwistedRidge"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crops":0}},"WybelIsland":{"routes":["CentralIslands","SkyFalls","AhmsordOutskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"AvosTemple":{"routes":["AvosWorkshop","BloodyBeach"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"SwampDarkForestTransitionMid":{"routes":["EntrancetoOlux","TaprootDescent","SwampDarkForestTransitionUpper","SwampDarkForestTransitionLower","Olux"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RymekWestUpper":{"routes":["DesertWestLower","DesertLower","RymekEastUpper","RymekWestMid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"GoblinPlainsEast":{"routes":["ForgottenPath","LlevigarFarm","GoblinPlainsWest","Pre-LightForestTransition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"AzureFrontier":{"routes":["NexusofLight","OtherwordlyMonolith","PathtoLight","FieldofLife"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CinfrasCountyMid-Upper":{"routes":["CinfrasThanosTransition","CinfrasCountyUpper","CinfrasCountyMid-Lower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Maltic":{"routes":["CoastalTrail","MalticCoast","MalticPlains","RagniPlains","SouthFarmersValley"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"AbandonedManor":{"routes":["EntrancetoKander","LoneFarmstead","MesquisTower","KanderMines"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampWestUpper":{"routes":["SwampEastUpper","SwampWestMid-Upper","SwampMountainTransitionMid-Upper","SwampMountainTransitionMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RagniEastSuburbs":{"routes":["MalticPlains","RagniMainEntrance","RagniPlains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"PlainsLake":{"routes":["NetherGate","DesolateValley","MineBasePlains","NetherPlainsUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"TernavesPlainsUpper":{"routes":["Ternaves","SavannahWestLower","TernavesPlainsLower","DetlasSavannahTransition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SwampDarkForestTransitionLower":{"routes":["SwampDarkForestTransitionMid","EntrancetoOlux","ForgottenPath","FortressNorth","FortressSouth","SwampLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"TwistedHousing":{"routes":["EfilimVillage","GelibordCorruptedFarm","LoneFarmstead","MansionofInsanity","Gelibord"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"HobbitRiver":{"routes":["LightForestEastLower","AldoreiValleyWestEntrance","LightPeninsula","LightForestWestLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CinfrasEntrance":{"routes":["Cinfras","LightForestNorthExit","PathtoCinfras","MesquisTower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DetlasCloseSuburbs":{"routes":["Detlas","DetlasSuburbs","NetherPlainsUpper","DetlasTrailEastPlains"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"LostAtoll":{"routes":["TreeIsland","PirateTown","VolcanoUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":7200,"crops":0}},"TwistedRidge":{"routes":["EntrancetoKander","VisceraPitsWest"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CliffsideValley":{"routes":["EntrancetoTheseadNorth","BanditsToll","EntrancetoTheseadSouth","AirTempleLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"DetlasTrailWestPlains":{"routes":["DetlasFarSuburbs","NemractPlainsEast","AncientNemract","DetlasSuburbs"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CanyonSurvivor":{"routes":["CliffSideoftheLost","CanyonLowerSouthEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"AldoreiValleySouthEntrance":{"routes":["Aldorei'sWaterfall","Aldorei'sNorthExit","Cinfras'sSmallFarm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PathToOzoth'sSpireUpper":{"routes":["PathToOzoth'sSpireMid","BanditCaveLower","CinfrasThanosTransition","PathToThanos"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"LightForestWestLower":{"routes":["HobbitRiver","LightForestSouthEntrance","LightForestWestMid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"RymekEastMid":{"routes":["RymekEastLower","RymekEastUpper","RymekWestMid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"ForgottenPath":{"routes":["IronRoad","SwampDarkForestTransitionLower","GoblinPlainsEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Lusuco":{"routes":["IcyDescent"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Ternaves":{"routes":["TernavesPlainsLower","SavannahEastLower","TernavesPlainsUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SwampIsland":{"routes":["Astraulus'Tower","AhmsordOutskirts","TempleIsland"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"TempleoftheLostEast":{"routes":["Krolton'sCave","ValleyoftheLost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"GatewaytoNothing":{"routes":["FinalStep","VoidValley","ToxicDrip"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"GoblinPlainsWest":{"routes":["GoblinPlainsEast","SablestoneCamp","IronRoad","LlevigarFarm"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"HalfMoonIsland":{"routes":["MageIsland"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":7200}},"MoltenHeightsPortal":{"routes":["CraterDescent","LavaLakeBridge","LavaLake"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"JungleLake":{"routes":["TempleofLegends","HerbCave","CityofTroms","JungleMid"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"GreatBridgeJungle":{"routes":["JungleLower","HerbCave","GreatBridgeNesaak"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CanyonEntranceWaterfall":{"routes":["CanyonPathNorthWest","CanyonPathNorthMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"OrcLake":{"routes":["SablestoneCamp","LlevigarPlainsEastUpper","SunsparkCamp","LlevigarPlainsEastLower","OrcRoad"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CorkusForestSouth":{"routes":["FactoryEntrance","CorkusCity","CorkusForestNorth","CorkusCitySouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NesaakPlainsSouthWest":{"routes":["NesaakPlainsSouthEast","NesaakBridgeTransition","IcyDescent","TwainLake","NesaakVillage","NesaakPlainsLowerNorthWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NetherGate":{"routes":["PlainsLake","CorruptedRoad","NetherPlainsLower","NetherPlainsUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Aldorei'sArch":{"routes":["PathToTheArch","CanyonWaterfallNorth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"GelibordCastle":{"routes":["GelibordCorruptedFarm","TaprootDescent"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LlevigarGateWest":{"routes":["LlevigarFarmPlainsWest","LlevigarGateEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CathedralHarbour":{"routes":["SavannahWestUpper","AncientNemract","NemractCathedral","DurumIslesLower","DurumIslesEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"GreatBridgeNesaak":{"routes":["NesaakBridgeTransition","GreatBridgeJungle"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"PhinasFarm":{"routes":["RoyalGate","LighthousePlateau"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"JofashTunnel":{"routes":["JofashDocks","SkyIslandAscent"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LightForestNorthExit":{"routes":["CinfrasEntrance","LightForestSouthExit","LightForestCanyon"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SablestoneCamp":{"routes":["MeteorCrater","OrcLake","LoamsproutCamp","GoblinPlainsWest"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"VisceraPitsEast":{"routes":["PathtoTalor","VisceraPitsWest","Lexdale"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"TheBrokenRoad":{"routes":["WormTunnel","TheSilentRoad"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Aldorei'sWaterfall":{"routes":["AldoreiValleyUpper","AldoreiValleySouthEntrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"GyliaLakeNorthWest":{"routes":["GyliaLakeSouthWest","GyliaLakeNorthEast","FallenVillage","Jitak'sFarm"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"DernelJungleLower":{"routes":["DernelJungleMid","JungleLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"GyliaLakeSouthEast":{"routes":["GyliaLakeSouthWest","GyliaLakeNorthEast","Thanos","CinfrasCountyUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"MushroomHill":{"routes":["HeartofDecay","Jitak'sFarm","DecayedBasin","FallenVillage"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"ForestofEyes":{"routes":["SinisterForest","ForgottenTown"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"VoidValley":{"routes":["GatewaytoNothing"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"KandonFarm":{"routes":["KandonRidge"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"MeteorCrater":{"routes":["SablestoneCamp","SunsparkCamp","IronRoad"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Astraulus'Tower":{"routes":["DragonlingNests","SwampIsland"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DesertEastMid":{"routes":["DesertEastLower","DesertMid-Upper","DesertEastUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"EfilimSouthEastPlains":{"routes":["EfilimEastPlains","LightForestWestUpper","EfilimSouthPlains","LightForestEastUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"TaprootDescent":{"routes":["SwampDarkForestTransitionMid","FortressNorth","GelibordCorruptedFarm","GelibordCastle","SwampDarkForestTransitionUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CinfrasCountyLower":{"routes":["Aldorei'sNorthExit","CinfrasCountyMid-Lower","Cinfras'sSmallFarm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DeadIslandNorthWest":{"routes":["DeadIslandSouthWest","DeadIslandNorthEast"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"CinfrasOutskirts":{"routes":["DarkForestCinfrasTransition","Cinfras","FungalGrove","DarkForestVillage","OldCrossroadsSouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PlainsCoast":{"routes":["NemractQuarry","NorthFarmersValley","NemractTown"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"DesertEastLower":{"routes":["DesertMid-Lower","DesertEastMid","RymekEastUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CliffSideoftheLost":{"routes":["CanyonSurvivor","CanyonDropoff","CanyonOfTheLost","MountainEdge","ValleyoftheLost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LlevigarPlainsEastUpper":{"routes":["OrcLake","SunsparkCamp","LlevigarPlainsEastLower","LlevigarPlainsWestUpper","SwampEastLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Raider'sBaseLower":{"routes":["Raider'sBaseUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"TimeValley":{"routes":["LittleWood","AbandonedFarm","ElkurnFields"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampMountainTransitionMid-Upper":{"routes":["SwampEastUpper","SwampMountainTransitionMid","SwampMountainTransitionUpper"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"GhostlyPath":{"routes":["BurningFarm","PathToTheArch"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NorthNivlaWoods":{"routes":["Plains","NivlaWoodsExit","NivlaWoodsEdge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"GyliaLakeNorthEast":{"routes":["GyliaLakeNorthWest","MilitaryBase","GertCamp","GyliaLakeSouthEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"BanditCaveLower":{"routes":["CanyonValleySouth","PathToOzoth'sSpireUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MilitaryBaseLower":{"routes":["ThanosValleyWest","MilitaryBaseUpper","PathToOzoth'sSpireLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CanyonWalkWay":{"routes":["CanyonMountainEast","PathToOzoth'sSpireMid","BanditsToll"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"MiningBaseUpper":{"routes":["MiningBaseLower","TernavesPlainsLower","AbandonedPass"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"VolcanoLower":{"routes":["LightPeninsula","BloodyBeach","LlevigarEntrance","VolcanoUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"HiveSouth":{"routes":["ThanosExitUpper","Hive","CanyonHighPath","CherryBlossomForest","ChainedHouse"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RoadToMine":{"routes":["CorkusCityMine","CorkusSeaCove","CorkusCitySouth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"SwampWestLower":{"routes":["SwampWestMid","LlevigarPlainsWestUpper","SwampEastLower"],"production":{"emerald":9000,"wood":0,"ore":7200,"fish":0,"crops":0}},"Llevigar":{"routes":["LlevigarEntrance","QuartzMinesSouthWest","LlevigarGateEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"EntrancetoRodoroc":{"routes":["Rodoroc","TheseadSuburbs","Eltom"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LightForestCanyon":{"routes":["LightForestNorthExit","LightForestEastMid","MantisNest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CorkusCastle":{"routes":["CorkusCity"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"SnailIsland":{"routes":["TempleIsland"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SkyCastle":{"routes":["PathtoAhmsordLower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LavaLake":{"routes":["ActiveVolcano","MoltenHeightsPortal","VolcanicSlope"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CanyonPathSouthEast":{"routes":["CanyonPathNorthWest","CanyonLowerSouthEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"TernavesPlainsLower":{"routes":["MineBasePlains","Ternaves","MiningBaseUpper","TernavesPlainsUpper","AbandonedPass"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"TheGate":{"routes":["BizarrePassage"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":7200}},"FlerisTrail":{"routes":["RoadToLightForest"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crops":0}},"CorkusForestNorth":{"routes":["CorkusCity","CorkusMountain","CorkusForestSouth","CorkusCitySouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SinisterForest":{"routes":["Lutho","ForestofEyes"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampEastUpper":{"routes":["SwampPlainsBasin","SwampEastMid-Upper","SwampMountainTransitionMid-Upper","SwampMountainTransitionUpper","SwampWestUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PigmenRavinesEntrance":{"routes":["PigmenRavines","SouthPigmenRavines","Ragni"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CorkusOutskirts":{"routes":["CorkusStatue","BloodyBeach","CorkusCountryside"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"MalticCoast":{"routes":["CoastalTrail","NorthFarmersValley","Maltic","SouthFarmersValley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"QuartzMinesNorthWest":{"routes":["QuartzMinesNorthEast","QuartzMinesSouthWest","LlevigarFarm","LoamsproutCamp"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"GuildHall":{"routes":["Cinfras"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NemractPlainsEast":{"routes":["NemractRoad","DetlasTrailWestPlains"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CorkusSeaPort":{"routes":["LighthousePlateau","CorkusSeaCove","FallenFactory","RuinedHouses"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"EfilimSouthPlains":{"routes":["EfilimSouthEastPlains","LightForestNorthEntrance","EfilimVillage"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PathtoTalor":{"routes":["OldCrossroadsNorth","EntrancetoKander","VisceraPitsEast","DarkForestVillage","KanderMines","OldCrossroadsSouth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MansionofInsanity":{"routes":["TwistedHousing","FortressNorth","FortressSouth"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"DetlasTrailEastPlains":{"routes":["Detlas","CathedralHarbour","AncientNemract","DetlasCloseSuburbs","DetlasSuburbs"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"EfilimEastPlains":{"routes":["EfilimVillage","EfilimSouthEastPlains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LightForestEntrance":{"routes":["RoadToLightForest","LightForestNorthEntrance","LightForestSouthEntrance","LightForestWestMid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LightForestEastUpper":{"routes":["EfilimSouthEastPlains","PathtoCinfras"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Eltom":{"routes":["EntrancetoRodoroc","Ranol'sFarm"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"MoltenReach":{"routes":["AngelRefuge","MoltenHeightsPortal"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LlevigarFarmPlainsWest":{"routes":["LlevigarFarmPlainsEast","LlevigarGateWest","LlevigarPlainsWestLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"MantisNest":{"routes":["LightForestEastLower","AldoreiValleyWestEntrance","LightForestSouthExit","LightForestCanyon","AldoreiValleyLower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"QuartzMinesSouthEast":{"routes":["QuartzMinesSouthWest","QuartzMinesNorthEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"DragonlingNests":{"routes":["SnailIsland","Astraulus'Tower"],"production":{"emerald":9000,"wood":7200,"ore":0,"fish":0,"crops":0}},"GreyRuins":{"routes":["WormTunnel","ForgottenTown"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CorkusMountain":{"routes":["CorkusDocks","CorkusForestNorth","CorkusCountryside"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"BizarrePassage":{"routes":["FinalStep","TheGate"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"BurningAirship":{"routes":["CinfrasThanosTransition","BurningFarm","BanditCaveUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"BloodyBeach":{"routes":["PirateTown","CorkusOutskirts","VolcanoLower","AvosTemple"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"NivlaWoodsEdge":{"routes":["DetlasFarSuburbs","RoadtoElkurn","NorthNivlaWoods","NivlaWoodsExit"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NesaakTransition":{"routes":["Elkurn","DesolateValley","NetherPlainsLower","NesaakPlainsNorthEast"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"LightPeninsula":{"routes":["VolcanoUpper","HobbitRiver","TreeIsland","VolcanoLower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"RoadtoTimeValley":{"routes":["NivlaWoods","NivlaWoodsEntrance","SouthNivlaWoods"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SwampMountainBase":{"routes":["SunsparkCamp","SwampPlainsBasin","SwampLower","SwampEastMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LoamsproutCamp":{"routes":["LlevigarFarm","SablestoneCamp","OrcRoad","QuartzMinesNorthWest"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"ElkurnFields":{"routes":["RoadtoElkurn","TimeValley","SouthNivlaWoods","Elkurn"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"NexusofLight":{"routes":["AzureFrontier"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"AldoreiValleyUpper":{"routes":["AldoreiValleyMid","Aldorei'sWaterfall"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Jitak'sFarm":{"routes":["MushroomHill","GertCamp","GyliaLakeNorthWest"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"TwainLake":{"routes":["TwainMansion","NesaakPlainsSouthWest"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"HerbCave":{"routes":["GreatBridgeJungle"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DurumIslesEast":{"routes":["MageIsland","DurumIslesCenter"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Pre-LightForestTransition":{"routes":["LeadinFortress","QuartzMinesNorthEast","GoblinPlainsEast","LlevigarFarm"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Aldorei'sRiver":{"routes":["AldoreiLowlands","Cinfras"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CliffsidePassageNorth":{"routes":["EntrancetoTheseadNorth","CliffsidePassage"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"TempleofLegends":{"routes":["JungleLake","CityofTroms"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LionLair":{"routes":["Bremminglar"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NesaakVillage":{"routes":["NesaakPlainsSouthEast","Bob'sTomb","NesaakPlainsNorthEast","NesaakPlainsSouthWest","NesaakPlainsLowerNorthWest"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":3600,"crops":0}},"SwampMountainTransitionUpper":{"routes":["SwampEastUpper","Olux","SwampMountainTransitionMid-Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LeadinFortress":{"routes":["Pre-LightForestTransition","RoadToLightForest","OrcBattlegrounds"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CorruptedRoad":{"routes":["NetherGate","DetlasFarSuburbs","NetherPlainsUpper","Elkurn"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"NorthFarmersValley":{"routes":["MalticCoast","SouthFarmersValley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"RuinedHouses":{"routes":["FactoryEntrance","FallenFactory","CorkusSeaPort"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"EmeraldTrail":{"routes":["MalticPlains","NivlaWoodsEntrance","RagniMainEntrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"HeavenlyIngress":{"routes":["FieldofLife","LightForestSouthEntrance"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"SkyIslandAscent":{"routes":["CentralIslands","JofashTunnel","Raider'sBaseUpper","SkyFalls"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Lutho":{"routes":["PathsofSludge","SinisterForest"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crops":3600}},"OldCoalMine":{"routes":["KandonRidge"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"DeadIslandSouthWest":{"routes":["SkiensIsland","DeadIslandSouthEast","DeadIslandNorthWest","DujgonNation"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"JungleMid":{"routes":["JungleLower","JungleLake","JungleUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Aldorei'sNorthExit":{"routes":["CinfrasCountyLower","PathToTheArch","AldoreiValleySouthEntrance"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"LightForestSouthEntrance":{"routes":["LightForestWestLower","HeavenlyIngress","LightForestEntrance"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"DesertUpper":{"routes":["DesertWestUpper","DesertMid-Upper","Mummy'sTomb"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SouthernOutpost":{"routes":["LegendaryIsland","LighthousePlateau"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"FactoryEntrance":{"routes":["FallenFactory","RuinedHouses","CorkusForestSouth","CorkusCitySouth"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"TheBearZoo":{"routes":["RoosterIsland","ZhightIsland"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"DeadIslandNorthEast":{"routes":["JofashDocks","DeadIslandSouthEast","DeadIslandNorthWest"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CherryBlossomForest":{"routes":["Ranol'sFarm","ChainedHouse","HiveSouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"WizardTowerNorth":{"routes":["Krolton'sCave","BanditsToll"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CanyonOfTheLost":{"routes":["CliffsideLake","Kandon-Beda","CliffSideoftheLost","ValleyoftheLost"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RymekWestLower":{"routes":["RymekEastLower","RymekWestMid"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CentralIslands":{"routes":["Ahmsord","SkyIslandAscent","TempleIsland","WybelIsland","AhmsordOutskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CanyonPathNorthWest":{"routes":["CanyonPathSouthEast","CanyonEntranceWaterfall"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CanyonWaterfallMidNorth":{"routes":["CanyonMountainSouth","CanyonPathNorthMid","CanyonFortress"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"MilitaryBase":{"routes":["PathToMilitaryBase","MilitaryBaseUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"IcyDescent":{"routes":["TowerofAscension","Lusuco"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CanyonPathSouthWest":{"routes":["CanyonPathNorthWest","CanyonLowerSouthEast"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"AldoreiValleyLower":{"routes":["AldoreiValleyMid","AldoreiValleyWestEntrance"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"SouthPigmenRavines":{"routes":["LittleWood","PigmenRavinesEntrance"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"DesertLower":{"routes":["DesertMid-Lower","RymekWestUpper","DesertWestLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"AbandonedFarm":{"routes":["PigmenRavines","TimeValley"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"NetherPlainsLower":{"routes":["Elkurn","NetherGate","DesolateValley","NesaakTransition"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Olux":{"routes":["SwampDarkForestTransitionMid","SwampDarkForestTransitionUpper","EntrancetoOlux","SwampMountainTransitionUpper"],"production":{"emerald":18000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Gelibord":{"routes":["TwistedHousing","EntrancetoKander","GelibordCorruptedFarm","LoneFarmstead"],"production":{"emerald":18000,"wood":3600,"ore":0,"fish":0,"crops":0}},"MiningBaseLower":{"routes":["MiningBaseUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RagniNorthEntrance":{"routes":["KatoaRanch","Ragni","RagniNorthSuburbs"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"Ranol'sFarm":{"routes":["CherryBlossomForest","TheseadSuburbs","Eltom"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"PathToTheArch":{"routes":["Aldorei'sArch","Aldorei'sNorthExit","GhostlyPath"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LightForestNorthEntrance":{"routes":["LightForestWestUpper","LightForestEntrance","EfilimSouthPlains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LightForestSouthExit":{"routes":["MantisNest","LightForestNorthExit"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NivlaWoods":{"routes":["RoadtoTimeValley","NivlaWoodsExit","NivlaWoodsEntrance","SouthNivlaWoods"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LuminousPlateau":{"routes":["FieldofLife"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"RymekEastLower":{"routes":["RymekEastMid","RymekWestLower"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"LlevigarPlainsWestUpper":{"routes":["SwampWestLower","LlevigarPlainsEastUpper","LlevigarPlainsWestLower"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"DesertMid-Lower":{"routes":["AlmujCity","DesertWestLower","DesertLower","DesertMid-Upper","DesertEastLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CoastalTrail":{"routes":["MalticCoast","RagniPlains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"ThanosExitUpper":{"routes":["CanyonHighPath","BanditsToll","ThanosExit","Hive","HiveSouth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Elkurn":{"routes":["RoadtoElkurn","NesaakPlainsUpperNorthWest","CorruptedRoad","ElkurnFields"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"BanditCaveUpper":{"routes":["BurningAirship"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LightForestEastMid":{"routes":["LightForestEastLower","LightForestWestUpper","LightForestCanyon"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CorkusCountryside":{"routes":["CorkusCity","AvosTemple","CorkusMountain","CorkusOutskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"KandonRidge":{"routes":["OldCoalMine","KandonFarm","PathtoAhmsordUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"JungleLower":{"routes":["DernelJungleLower","GreatBridgeJungle","JungleMid"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CliffsidePassage":{"routes":["CliffsidePassageNorth","CliffsideLake"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"CorkusStatue":{"routes":["CorkusCityMine","CorkusOutskirts"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"Hive":{"routes":["ThanosExitUpper","HiveSouth"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"DujgonNation":{"routes":["NodgujNation","DeadIslandSouthEast","IcyIsland","DeadIslandSouthWest","RegularIsland"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"CanyonLowerSouthEast":{"routes":["CanyonPathSouthWest","CanyonPathSouthEast","CanyonSurvivor","CanyonUpperNorthWest"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"SkyFalls":{"routes":["SkyIslandAscent","FrozenFort","WybelIsland"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"Rodoroc":{"routes":["CraterDescent"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"AlmujCity":{"routes":["DesertWestLower","DesertMid-Lower","DesertWestUpper","DesertMid-Upper","SavannahEastUpper"],"production":{"emerald":18000,"wood":0,"ore":0,"fish":0,"crops":3600}},"BanditsToll":{"routes":["WizardTowerNorth","CanyonWalkWay","ThanosExitUpper","CliffsideValley"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"ToxicDrip":{"routes":["PathsofSludge","GatewaytoNothing","ToxicCaves"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CanyonHighPath":{"routes":["CliffsideWaterfall","ThanosExitUpper","HiveSouth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"RymekEastUpper":{"routes":["RymekWestUpper","RymekEastMid","DesertEastLower"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"CinfrasThanosTransition":{"routes":["BurningAirship","PathToThanos","CinfrasCountyMid-Upper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"FortressNorth":{"routes":["MansionofInsanity","TaprootDescent","FortressSouth"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"Santa'sHideout":{"routes":["IcyIsland","MageIsland"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"PathToOzoth'sSpireMid":{"routes":["CanyonWalkWay","PathToOzoth'sSpireUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NivlaWoodsEntrance":{"routes":["RoadtoTimeValley","EmeraldTrail","NivlaWoods","Plains"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PathtoAhmsordLower":{"routes":["SkyCastle","Ahmsord","PathtoAhmsordUpper"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"PathtoAhmsordUpper":{"routes":["PathtoAhmsordLower","KandonRidge"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"CanyonMountainSouth":{"routes":["Krolton'sCave","CanyonWaterfallMidNorth"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"AirTempleLower":{"routes":["Krolton'sCave","AirTempleUpper","CliffsideValley"],"production":{"emerald":1800,"wood":900,"ore":900,"fish":900,"crops":900}},"FallenVillage":{"routes":["FungalGrove","MushroomHill","DarkForestCinfrasTransition","GyliaLakeNorthWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"EntrancetoKander":{"routes":["PathtoTalor","Gelibord","VisceraPitsWest","AbandonedManor"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"ThanosExit":{"routes":["ThanosExitUpper"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NemractRoad":{"routes":["NemractQuarry","NemractPlainsEast","NemractTown","AncientNemract","NemractCathedral","NemractPlainsWest"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"AngelRefuge":{"routes":["MoltenReach","AhmsordOutskirts"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"EfilimVillage":{"routes":["EfilimEastPlains","TwistedHousing","EfilimSouthPlains"],"production":{"emerald":9000,"wood":0,"ore":3600,"fish":0,"crops":0}},"NesaakPlainsMidNorthWest":{"routes":["NesaakPlainsUpperNorthWest","NesaakPlainsLowerNorthWest"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"NemractCathedral":{"routes":["NemractTown","AncientNemract","CathedralHarbour","NemractRoad"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":3600,"crops":0}},"RagniPlains":{"routes":["RagniEastSuburbs","CoastalTrail","Maltic","RagniNorthSuburbs"],"production":{"emerald":9000,"wood":0,"ore":0,"fish":0,"crops":3600}},"OldCrossroadsSouth":{"routes":["OldCrossroadsNorth","PathtoTalor","FungalGrove","DarkForestVillage","CinfrasOutskirts"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}},"LittleWood":{"routes":["TimeValley","SouthPigmenRavines"],"production":{"emerald":9000,"wood":3600,"ore":0,"fish":0,"crops":0}}}

let resSymbols = {
    emerald: "💰",
    crops: "🌾",
    ore: "⛏️",
    wood: "🪓",
    fish: "🐟",
    rainbow: "🌈",
};

function load_map() {
    const showHideAll = "Show/Hide all";
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
        if (map.getZoom() > 5 && routesShown) {
            showRoutes();
        } else {
            hideRoutes();
        }
        if (map.getZoom() > 6) {
            $(".terr-details").css("opacity", "1");
        } else {
            $(".terr-details").css("opacity", "0");
        }
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
        console.log(new Date(), "updating map");
        fetch("https://api.wynncraft.com/public_api.php?action=territoryList")
            .then((r) => r.json())
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
                        localStorage["hiddenGuilds"] =
                            JSON.stringify(hiddenGuilds);
                        localStorage["map_mode"] = mapMode;
                        localStorage["show_routes"] = routesShown ? "1" : "0";
                    });
                    // load from localStorage
                    hiddenGuilds = JSON.parse(
                        localStorage["hiddenGuilds"] || "[]"
                    );
                    $(
                        `input[name=map_mode][value=${localStorage["map_mode"]}]`
                    ).click();
                    if (localStorage["show_routes"] === "0") {
                        $(`input[name=show_routes]`).click();
                    }
                    // conns
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
                                    color: "white",
                                    zIndexOffset: -204,
                                }
                            );
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
                        if (!init)
                            console.log(`${i}: ${terrGuilds[i]} -> ${guild}`);
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
                    appendTerrCountRow(
                        guild,
                        count,
                        guildColours[guild],
                        terrCountDiv
                    );
                }
                appendTerrCountRow(
                    showHideAll,
                    -1,
                    guildColours[showHideAll],
                    terrCountDiv
                );
                $(".terr_row").click(function (e) {
                    let guild = e.target.attributes["data-guild"].value;
                    if (guild.indexOf("/") > -1) {
                        if (trackingMode !== 0 || hiddenGuilds.length) {
                            hiddenGuilds = [];
                            setTrackingMode(0);
                        } else {
                            setTrackingMode(-1);
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
                                hiddenGuilds = hiddenGuilds.filter(
                                    (x) => x !== guild
                                );
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
                            let guilds = $(".terr_row")
                                .map((i, v) => $(v).attr("data-guild"))
                                .toArray();
                            let toRemove = [trackingMode, guild, showHideAll];
                            hiddenGuilds = guilds.filter(
                                (x) => toRemove.indexOf(x) < 0
                            );
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
        let terrRows = $(".terr_row");
        terrRows.map((i, v) => {
            let guild = v.attributes["data-guild"].value;
            if (shouldShowGuild(guild)) {
                $(v)
                    .find("span.dot")
                    .css("background-color", `#${guildColours[guild]}`);
            } else {
                $(v).find("span.dot").css("background-color", "#1f1f1f");
            }
        });
    }

    function appendTerrCountRow(guild, count, colour, div) {
        let html = `<p class="terr_row"><span class="dot" style="background-color: #${colour}; border: 2px solid #${colour}"></span> ${guild}: ${count}</p>`;
        if (count <= 0) {
            html = html.replace(/: [\-0-9]+</, "<");
        }
        let row = $(html);
        row.attr("data-guild", guild);
        if (!shouldShowGuild(guild)) {
            row.find("span.dot").css("background-color", "white");
        }
        row.appendTo(div);
    }

    function shouldShowGuild(guild) {
        if (trackingMode === 0)
            return (
                hiddenGuilds.indexOf(guild) < 0 &&
                (guild !== showHideAll || hiddenGuilds.length === 0)
            );
        if (trackingMode === -1) return false;
        return guild === trackingMode;
    }

    function updatePopups(emergency) {
        for (let name in polygons) {
            let polygon = polygons[name];
            /** Whether a territory was on cooldown */
            let wasCd = cdTerrs[polygon.territory.territory] || false;
            /** The amount of time the territory was held for in milliseconds */
            let heldFor = 1 * new Date() - polygon.acquired;
            /** Whether the territory is currently on cooldown (has been taken in the last 10 minutes by a guild) */
            let isCd = heldFor < 600000;
            /** The territories treasury */
            let treasury = "Very Low";
            /** Territory name **/
            let territory = polygon.territory.territory;
            if (heldFor >= 3600000 && heldFor < 24 * 3600000) {
                treasury = "Low";
            } else if (heldFor >= 24 * 3600000 && heldFor < 72 * 3600000) {
                treasury = "Medium";
            } else if (heldFor >= 72 * 3600000 && heldFor < 240 * 3600000) {
                treasury = "High";
            } else if (heldFor >= 240 * 3600000) {
                treasury = "Very High";
            }
            let guild = polygon.territory.guild;
            cdTerrs[territory] = isCd;
            let popup = `${territory}<br>Controlled by ${guild}<br>For ${formatDuration(
                heldFor
            )}<br>Treasury: ${treasury}`;
            popup += "<br><br>Production:";
            for (let i in terrData[territory].production) {
                if (terrData[territory].production[i] == 0) {
                    continue
                }
                popup += `<br>${terrData[territory].production[i]} ${i}`;
            }
            polygon.bindPopup(popup);
            updateTooltip(
                territory,
                `${getGuildTag(guild)}<br>${getSecondLine(territory)}`
            );
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
        let s = "";
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
        let guild = territory.guild;
        let paths = [];
        paths.push(coordsToLatLng([sx, sy]));
        paths.push(coordsToLatLng([sx, ey]));
        paths.push(coordsToLatLng([ex, ey]));
        paths.push(coordsToLatLng([ex, sy]));
        let acquired = parseAcquiredDate(territory.acquired);
        let heldTime = 1 * new Date() - acquired;
        let colour =
            guildColours[guild] || (guildColours[guild] = generateColor(guild));
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
        polygon.bindTooltip(
            `${getGuildTag(guild)}<br>${getSecondLine(territory.territory)}`,
            {
                direction: "center",
                opacity: map.getZoom() - 6,
                permanent: true,
                interactive: false,
                className: "terr-details",
            }
        );
        polygon.acquired = acquired;
        return polygon;
    }

    function generateColor(guild) {
        let hash = 0,
            i,
            chr;
        if (guild.length === 0) return hash;
        for (i = 0; i < guild.length; i++) {
            chr = guild.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash.toString(16).padStart(9, "0").substr(3);
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

    // function getConnLine(t1, t2) {
    //     return connLines[t1] && connLines[t1][t2];
    // return (connLines[t1] && connLines[t1][t2]) || (connLines[t2] && connLines[t2][t1])
    // }
    /**
     * Hide the resource routes / the territory connection lines.
     */
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

    function cooldown(terr) {
        let heldFor =
            1 * new Date() - parseAcquiredDate(terrResponse[terr].acquired);
        let remaining = Math.max(0, Math.ceil(600 - heldFor / 1000));
        if (remaining <= 0) return "";
        return `${Math.floor(remaining / 60)}:${(remaining % 60)
            .toString()
            .padStart(2, "0")}`;
    }

    function updateTooltip(terr, content) {
        if (tooltipContents[terr] !== content.toString()) {
            tooltipContents[terr] = content.toString();
            let guild = terrResponse[terr].guild;
            polygons[terr].unbindTooltip();
            polygons[terr].bindTooltip(
                `${getGuildTag(guild)}<br>${getSecondLine(terr)}`,
                {
                    direction: "center",
                    opacity: map.getZoom() - 6,
                    permanent: true,
                    interactive: false,
                    className: "terr-details",
                }
            );
        }
    }

    function parseAcquiredDate(acquired) {
        // split by -, space and : for date params, then decrement date due to date specs
        let acquiredDate = new Date(...acquired.split(/[\- :]/).map((x, i) => parseInt(x) - (i === 1)));
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
