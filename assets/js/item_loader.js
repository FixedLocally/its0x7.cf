/**
 * Converts an item from wynn's messy api format to my less messy format
 * @param rawItem The item object from wynn
 * @returns {{identification: {damage: {}, spellCost: {raw: Array, percent: Array}, defense: {}, steal: {}, regen: {}, others: {}}, info: {}, req: {}, base: {damage: {}, defense: {}, skill: {}}}} The less messy version of the same item
 */
function convertItem(rawItem) {
    let item = {
        info: {},
        req: {},
        base: {
            damage: {},
            skill: {},
            defense: {}
        },
        identification: {
            damage: {},
            defense: {},
            regen: {},
            steal: {},
            spellCost: {
                raw: [],
                percent: []
            },
            others: {}
        }
    };
    const {set, addedLore, sockets, name, tier, type,
        strength, dexterity, intelligence, defense, agility, level, quest, classRequirement,
        attackSpeed, health,
        damage, earthDamage, thunderDamage, waterDamage, fireDamage, airDamage,
        strengthPoints, dexterityPoints, intelligencePoints, defensePoints, agilityPoints,
        earthDefense, thunderDefense, waterDefense, fireDefense, airDefense,
        bonusEarthDamage, bonusThunderDamage, bonusWaterDamage, bonusFireDamage, bonusAirDamage,
        damageBonus, damageBonusRaw, spellDamage, spellDamageRaw,
        bonusEarthDefense, bonusThunderDefense, bonusWaterDefense, bonusFireDefense, bonusAirDefense,
        manaRegen, healthRegen, healthRegenRaw, soulPoints,
        manaSteal, lifeSteal,
        spellCostRaw1, spellCostPct1, spellCostRaw2, spellCostPct2, spellCostRaw3, spellCostPct3, spellCostRaw4, spellCostPct4,
        emeraldStealing, exploding, healthBonus, jumpHeight, lootBonus, lootQuality, poison, reflection, speed, xpBonus, thorns, sprint, sprintRegen, attackSpeedBonus} = rawItem;
    item.info.name = name;
    item.info.type = type;
    item.info.tier = tier;
    item.info.set = set;
    item.info.lore = addedLore;
    item.info.sockets = sockets;

    item.req.strength = strength;
    item.req.dexterity = dexterity;
    item.req.intelligence = intelligence;
    item.req.defense = defense;
    item.req.agility = agility;
    item.req.level = level;
    item.req.quest = quest;
    item.req.class = classRequirement;

    item.base.attackSpeed = attackSpeed;
    item.base.health = health;
    item.base.damage.neutral = damage;
    item.base.damage.earth = earthDamage;
    item.base.damage.thunder = thunderDamage;
    item.base.damage.water = waterDamage;
    item.base.damage.fire = fireDamage;
    item.base.damage.air = airDamage;
    item.base.skill.strength = strengthPoints;
    item.base.skill.dexterity = dexterityPoints;
    item.base.skill.intelligence = intelligencePoints;
    item.base.skill.defense = defensePoints;
    item.base.skill.agility = agilityPoints;
    item.base.defense.earth = earthDefense;
    item.base.defense.thunder = thunderDefense;
    item.base.defense.water = waterDefense;
    item.base.defense.fire = fireDefense;
    item.base.defense.air = airDefense;

    item.identification.damage.earth = bonusEarthDamage; // +30% Earth Damage
    item.identification.damage.thunder = bonusThunderDamage; // +30% Thunder Damage
    item.identification.damage.water = bonusWaterDamage; // +30% Water Damage
    item.identification.damage.fire = bonusFireDamage; // +30% Fire Damage
    item.identification.damage.air = bonusAirDamage; // +30% Air Damage
    item.identification.damage.meleeRaw = damageBonusRaw; // +4997 Main Attack Damage
    item.identification.damage.meleePercent = damageBonus; // +65% Main Attack Damage
    item.identification.damage.spellRaw = spellDamageRaw; // +288 Spell Neutral Damage
    item.identification.damage.spellPercent = spellDamage; // +19% Spell Damage
    item.identification.defense.earth = bonusEarthDefense; // +19% Earth Defense
    item.identification.defense.thunder = bonusThunderDefense; // +19% Thunder Defense
    item.identification.defense.water = bonusWaterDefense; // +19% Water Defense
    item.identification.defense.fire = bonusFireDefense; // +19% Fire Defense
    item.identification.defense.air = bonusAirDefense; // +19% Air Defense
    item.identification.regen.mana = manaRegen; // +4/4s Mana Regen
    item.identification.regen.healthRaw = healthRegenRaw; // +131 Health Regen
    item.identification.regen.healthPercent = healthRegen; // +19% Health Regen
    item.identification.regen.soulPoint = soulPoints; // +23% Soul Points Regen
    item.identification.steal.health = lifeSteal; // +819/4s Life Steal
    item.identification.steal.mana = manaSteal; // +6/4s Mana Steal
    item.identification.spellCost.raw = [spellCostRaw1, spellCostRaw2, spellCostRaw3, spellCostRaw4]; // -1 1st Spell Cost
    item.identification.spellCost.percent = [spellCostPct1, spellCostPct2, spellCostPct3, spellCostPct4]; // -37% 1st Spell Cost

    item.identification.others.stealing = emeraldStealing; // +3% Stealing
    item.identification.others.exploding = exploding; // +66% Exploding
    item.identification.others.healthBonus = healthBonus; // +3300 Health
    item.identification.others.jumpHeight = jumpHeight; // +6 Jump Height
    item.identification.others.lootBonus = lootBonus; // +39% Loot Bonus
    item.identification.others.lootQuality = lootQuality; // +9% Loot Quality
    item.identification.others.poison = poison; // +13000/3s Poison
    item.identification.others.reflection = reflection; // +30% Reflection
    item.identification.others.walkSpeed = speed; // +99% Walk Speed
    item.identification.others.xpBonus = xpBonus; // +15% XP Bonus
    item.identification.others.thorns = thorns; // +23% Thorns
    item.identification.others.sprint = sprint;
    item.identification.others.sprintRegen = sprintRegen;
    item.identification.others.attackSpeedBonus = attackSpeedBonus; // -6 Tier Attack Speed

    for (let i in rawItem) {
        if (rawItem.hasOwnProperty(i)) {
            if (["name", "type", "tier", "set", "addedLore", "sockets", "strength", "dexterity", "intelligence", "defense", "agility", "level", "quest", "classRequirement", "attackSpeed", "damage", "earthDamage", "thunderDamage", "waterDamage", "fireDamage", "airDamage", "strengthPoints", "dexterityPoints", "intelligencePoints", "defensePoints", "agilityPoints", "earthDefense", "thunderDefense", "waterDefense", "fireDefense", "airDefense", "bonusEarthDamage", "bonusThunderDamage", "bonusWaterDamage", "bonusFireDamage", "bonusAirDamage", "damageBonus", "damageBonusRaw", "spellDamage", "spellDamageRaw", "bonusEarthDefense", "bonusThunderDefense", "bonusWaterDefense", "bonusFireDefense", "bonusAirDefense", "manaRegen", "healthRegen", "healthRegenRaw", "soulPoints", "manaSteal", "lifeSteal", "spellCostRaw1", "spellCostPct1", "spellCostRaw2", "spellCostPct2", "spellCostRaw3", "spellCostPct3", "spellCostRaw4", "spellCostPct4", "emeraldStealing", "exploding", "healthBonus", "jumpHeight", "lootBonus", "lootQuality", "poison", "reflection", "speed", "xpBonus", "thorns", "sprint", "sprintRegen", "attackSpeedBonus"].indexOf(i) < 0) {
                item[i] = rawItem[i];
            }
        }
    }

    // accessory type
    if (item.accessoryType) {
        item.info.type = item.accessoryType;
    }

    // weapon class req
    switch (item.info.type.toLowerCase()) {
        case "Relik":
            item.req.class = "Shaman";
            break;
        case "Wand":
            item.req.class = "Mage";
            break;
        case "Bow":
            item.req.class = "Archer";
            break;
        case "Spear":
            item.req.class = "Warrior";
            break;
        case "Dagger":
            item.req.class = "Assassin";
            break;
    }

    // replace class req with generic ones
    switch (item.req.class) {
        case "Shaman":
            item.req.class = "Shaman/Skyseer";
            break;
        case "Mage":
            item.req.class = "Mage/Dark Wizard";
            break;
        case "Archer":
            item.req.class = "Archer/Hunter";
            break;
        case "Warrior":
            item.req.class = "Warrior/Knight";
            break;
        case "Assassin":
            item.req.class = "Assassin/Ninja";
            break;
    }

    return item;
}

// this function resolves to the contents of the itemdb
async function loadItemDb() {
    let types = ["helmet", "chestplate", "leggings", "boots", "ring", "bracelet", "necklace", "spear", "dagger", "wand", "bow", "relik"];
    return (await Promise.all(types.map(async (type) => {
        return await fetch(`https://api.wynncraft.com/public_api.php?action=itemDB&category=${type}`)
            .then(resp => resp.json())
            .then(json => json.items.map(convertItem))
    }))).flat();
}

let item = {
    name: "Cryoseism",
    powder: ["W6", "W6", "W6"],
    override: {
        damage: {
            water: 33
        },
        regen: {
            mana: 2
        },
        others: {
            walkSpeed: -8
        }
    }
};