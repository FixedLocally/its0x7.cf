"use strict";
$(function () {
    // some globals
    let globalItemDb = {};
    let dropdowns = [
        ["helmet_select", "helmet"],
        ["chestplate_select", "chestplate"],
        ["leggings_select", "leggings"],
        ["boots_select", "boots"],
        ["ring0_select", "ring"],
        ["ring1_select", "ring"],
        ["bracelet_select", "bracelet"],
        ["necklace_select", "necklace"],
        ["weapon_select", "weapon"]
    ];
    let correctOrder = ["helmet", "chestplate", "leggings", "boots", "ring", "ring", "bracelet", "necklace", "weapon"];
    // [suffix, id]
    let idMap = {
        damage: {
            spellPercent: ["%", "Spell Damage"],
            spellRaw: ["", "Neutral Spell Damage"],
            meleePercent: ["%", "Main Attack Damage"],
            meleeRaw: ["", "Main Attack Neutral Damage"],
            earth: ["%", "Earth Damage"],
            thunder: ["%", "Thunder Damage"],
            water: ["%", "Water Damage"],
            fire: ["%", "Fire Damage"],
            air: ["%", "Air Damage"],
        },
        regen: {
            healthPercent: ["%", "Health Regen"],
            healthRaw: ["", "Health Regen"],
            mana: ["/4s", "Mana Regen"],
            soulPoint: ["%", "Soul Pint Regen"]
        },
        steal: {
            mana: ["/4s", "Mana Steal"],
            health: ["/4s", "Life Steal"]
        },
        others: {
            attackSpeedBonus: [" Tier", "Attack Speed"],
            exploding: ["%", "Exploding"],
            healthBonus: ["", "Health"],
            jumpHeight: ["", "Jump Height"],
            lootBonus: ["%", "Loot Bonus"],
            lootQuality: ["%", "Loot Quality"],
            poison: ["/3s", "Poison"],
            reflection: ["%", "Reflection"],
            sprint: ["%", "Sprint"],
            sprintRegen: ["%", "Sprint Regen"],
            stealing: ["%", "Stealing"],
            thorns: ["%", "Thorns"],
            walkSpeed: ["%", "Walk Speed"],
            xpBonus: ["%", "XP Bonus"]
        }
    };
    // min dmg, max dmg, conversion, +def, -def
    let powderStats = {
        E: [["earth","air"],[3,6,17,2,1],[6,9,21,4,2],[8,14,25,8,3],[11,16,31,14,5],[15,18,38,22,9],[18,22,46,30,13]],
        T: [["thunder","earth"],[1,8,9,3,1],[1,13,11,5,1],[2,18,14,9,2],[3,24,17,14,4],[3,32,22,20,7],[5,40,28,28,10]],
        W: [["water","thunder"],[3,4,13,3,1],[4,7,15,6,1],[6,10,17,11,2],[8,12,21,18,4],[11,14,26,28,7],[13,17,32,40,10]],
        F: [["fire","water"],[2,5,14,3,1],[4,8,16,5,2],[6,10,19,9,3],[9,13,24,16,5],[12,16,30,25,9],[15,19,37,36,13]],
        A: [["air","fire"],[2,6,11,3,1],[4,9,14,6,2],[7,10,17,10,3],[9,13,22,16,5],[13,18,28,24,9],[16,18,35,34,13]]
    };
    let skillBounsPct = [
         0.0, 1.0, 2.0, 2.9, 3.9, 4.9, 5.8, 6.7, 7.7, 8.6,
         9.5,10.4,11.3,12.2,13.1,13.9,14.8,15.7,16.5,17.3,
        18.2,19.0,19.8,20.6,21.4,22.2,23.0,23.8,24.6,25.3,
        26.1,26.8,27.6,28.3,29.0,29.8,30.5,31.2,31.9,32.6,
        33.3,34.0,34.6,35.3,36.0,36.6,37.3,37.9,38.6,39.2,
        39.9,40.5,41.1,41.7,42.3,42.9,43.5,44.1,44.7,45.3,
        45.8,46.4,47.0,47.5,48.1,48.6,49.2,49.7,50.3,50.8,
        51.3,51.8,52.3,52.8,53.4,53.9,54.3,54.8,55.3,55.8,
        56.3,56.8,57.2,57.7,58.1,58.6,59.1,59.5,59.9,60.4,
        60.8,61.3,61.7,62.1,62.5,62.9,63.3,63.8,64.2,64.6,
        65.0,65.4,65.7,66.1,66.5,66.9,67.3,67.6,68.0,68.4,
        68.7,69.1,69.4,69.8,70.1,70.5,70.8,71.2,71.5,71.8,
        72.2,72.5,72.8,73.1,73.5,73.8,74.1,74.4,74.7,75.0,
        75.3,75.6,75.9,76.2,76.5,76.8,77.1,77.3,77.6,77.9,
        78.2,78.4,78.7,79.0,79.2,79.5,79.8,80.0,80.3,80.5,80.8];
    let elemIcons = {
        earth: "✤",
        thunder: "✦",
        water: "❉",
        fire: "✹",
        air: "❋"
    };
    let elemColours = {
        earth: "dark_green",
        thunder: "yellow",
        water: "aqua",
        fire: "red",
        air: "white"
    };
    let elementList = ["earth", "thunder", "water", "fire", "air"];
    let skillList = ["strength", "dexterity", "intelligence", "defense", "agility"];
    let itemListBox = $("#item_list_box");
    let currentReq = {
        req: {
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            defense: 0,
            agility: 0
        },
        bonus: {
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            defense: 0,
            agility: 0
        },
        order: []
    }; // for the wearables
    let realReq = {
        req: {
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            defense: 0,
            agility: 0
        },
        bonus: {
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            defense: 0,
            agility: 0
        },
        order: []
    }; // for the wearables+wep
    let powderList = {helmet: [], chestplate: [], leggings: [], boots: [], weapon: []};

    console.log("window ready");
    // load item db
    loadItemDb().then(itemDb => {
        itemDb.forEach(item => globalItemDb[item.displayName || item.info.name] = item);
        // console.log(globalItemDb);

        // load into dropdown menus
        dropdowns.forEach((dropdown) => {
            let select = $("#" + dropdown[0] + " > select");
            itemDb.filter((x) => (x.info.type || x.accessoryType).toLowerCase() === dropdown[1] || x.category.toLowerCase() === dropdown[1])
                .map((x) => x.displayName || x.info.name).sort().forEach(name => {
                select.append(`<option value="${name}">${name}</option>`);
            });
            select.chosen({width: "100%"}).addClass("col-md-3 col-sm-4");
            select.change((e, o) => {
                let build = dropdowns.map(dropdown => {
                    let select = $("#" + dropdown[0] + " > select");
                    let name = select.val();
                    return {name, powder: powderList[dropdown[1]]};
                });
                let calculatedBuild = calculateBuild(build);
                let parentId = e.target.parentElement.id;
                let type = parentId.replace("_select", "");
                let index = correctOrder.indexOf(type.replace(/\d/, ""));
                if (type !== "weapon") {
                    currentReq = findStatReq(calculatedBuild.items);
                    realReq = JSON.parse(JSON.stringify(currentReq));
                }
                if (calculatedBuild.items[8]) {
                    // take the skills we have and see what else do we need
                    let weaponItem = calculatedBuild.items[8];
                    skillList.forEach(skill => {
                        let ownedPoints = currentReq.req[skill] + currentReq.bonus[skill];
                        let diff;
                        if (!weaponItem.req[skill]) {
                            diff = 0;
                        } else if (weaponItem.req[skill] > ownedPoints) {
                            diff = weaponItem.req[skill] - ownedPoints;
                        } else {
                            diff = 0;
                        }
                        realReq.req[skill] = currentReq.req[skill] + diff;
                    });
                    let bonus = {};
                    skillList.forEach(skill => {
                        bonus[skill] = currentReq.bonus[skill] + weaponItem.base.skill[skill];
                    });
                    realReq.bonus = bonus;
                    realReq.order = currentReq.order;
                }
                let item = calculatedBuild.items[index];
                let box = $(`#${type}_div`).empty();
                let powderBox = $(`#${type}_powders`);
                if (item && item.info.sockets) {
                    box.append(generateItemBox(item, false));
                    powderBox.show();
                    powderBox.find("div > p.large").text(item.displayName || item.info.name).attr("class", "large item_name " + item.info.tier.toLowerCase());
                    let powderListBox = powderBox.find("div > div.powder_list");
                    renderSockets(powderListBox, type, realReq);
                } else {
                    powderBox.hide();
                    renderBuild(calculatedBuild, realReq);
                }
                // $(`#${type}_div`).empty();
            });
        });
        // add powder button handlers
        $("span.powder").click(e => {
            let type = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id.replace("_powders", "");
            let powder = e.target.classList[1].substr(7).toUpperCase();
            let item = globalItemDb[$(`#${type}_select > select`).val()];
            let sockets = item.info.sockets;
            let powderArray = powderList[type];
            for (let i = 0; i < sockets; i++) {
                if (powderArray.length <= i) {
                    powderArray.push(powder);
                    break;
                }
                if (!powderArray[i]) {
                    powderArray[i] = powder;
                    break;
                }
            }
            let powderBox = $(`#${type}_powders`);
            let powderListBox = powderBox.find("div > div.powder_list");
            renderSockets(powderListBox, type, realReq);
        });
        $('.sp_input').change(() => {
            let build = dropdowns.map(dropdown => {
                let select = $("#" + dropdown[0] + " > select");
                let name = select.val();
                return {name, powder: powderList[dropdown[1]]};
            });
            let total = $('.sp_input').map((i, v) => 1*v.value).toArray().reduce((a, b) => a + b);
            $('#sp_remaining').html(`Assign Skill Points (${200 - total} remaining):`);
            renderBuild(calculateBuild(build), realReq);
        });
    });

    function spellDamage(build, totalSkills, spellMultiplier, elemMultiplier) {
        let weaponDamage = JSON.parse(JSON.stringify(build.base.damage));
        for (let i in weaponDamage) {
            weaponDamage[i] = weaponDamage[i].split("-").map(x => 1*x);
        }
        // consider wep powders, move elemMultiplier.neutral to the respective elem
        powderList.weapon.forEach(powder => {
            if (!powder || !elemMultiplier.neutral) {
                return;
            }
            let stat = powderStats[powder[0]][powder[1]];
            let conversion = stat[2];
            if (elemMultiplier.neutral > conversion) {
                elemMultiplier.neutral -= conversion;
                elemMultiplier[powderStats[powder[0]][0][0]] += conversion;
            } else {
                elemMultiplier[powderStats[powder[0]][0][0]] += elemMultiplier.neutral;
                elemMultiplier.neutral = 0;
            }
        });
        // base damage is `neutral * multiplier + elemDamageOnWep` then multiply by attack speed multiplier, then spell multiplier
        let base = {};
        let attackSpeedMultiplier = {SUPER_SLOW: 0.51, VERY_SLOW: 0.83, SLOW: 1.5, NORMAL: 2.05, FAST: 2.5, VERY_FAST: 3.1, SUPER_FAST: 4.3}[build.base.attackSpeed];
        base.neutral = weaponDamage.neutral.map(x => x * elemMultiplier.neutral / 100 * attackSpeedMultiplier * spellMultiplier / 100);
        elementList.forEach(elem => {
            base[elem] = [0, 1].map(i => (weaponDamage.neutral[i] * elemMultiplier[elem]) / 100 + weaponDamage[elem][i])
                .map(x => x * attackSpeedMultiplier * spellMultiplier / 100);
        });
        // console.log(base);
        // multiply by (1 + spellDamage + strengthPercentage + elemSkillPercentage + elemDamagePercentage)
        let normal = {};
        normal.neutral = base.neutral.map(x => (x * (100 + build.identification.damage.spellPercent + skillBounsPct[totalSkills[0]]) + build.identification.damage.spellRaw * spellMultiplier) / 100).map(Math.floor);
        normal.total = [normal.neutral[0], normal.neutral[1]];
        elementList.forEach((elem, i) => {
            normal[elem] = base[elem].map(x => x * (100 + build.identification.damage.spellPercent + skillBounsPct[totalSkills[0]] + skillBounsPct[totalSkills[i]] + build.identification.damage[elem]) / 100).map(Math.floor);
            normal.total = sum(normal.total, normal[elem]);
        });
        // for crit hits change the 1 to 2
        let critical = {};
        critical.neutral = base.neutral.map(x => (x * (200 + build.identification.damage.spellPercent + skillBounsPct[totalSkills[0]]) + build.identification.damage.spellRaw * spellMultiplier) / 100).map(Math.floor);
        critical.total = [critical.neutral[0], critical.neutral[1]];
        elementList.forEach((elem, i) => {
            critical[elem] = base[elem].map(x => x * (200 + build.identification.damage.spellPercent + skillBounsPct[totalSkills[0]] + skillBounsPct[totalSkills[i]] + build.identification.damage[elem]) / 100).map(Math.floor);
            critical.total = sum(critical.total, critical[elem]);
        });
        let args = [build.identification.damage.spellPercent, elementList.map(elem => build.identification.damage[elem]), skillBounsPct[totalSkills[0]], totalSkills.map(x => skillBounsPct[x])];
        return {normal, critical, args};
    }

    function renderSockets(powderListBox, type, realReq) {
        let box = $(`#${type}_div`).empty();
        let powderBox = $(`#${type}_powders`);
        let index = correctOrder.indexOf(type);

        let build = dropdowns.map(dropdown => {
            let select = $("#" + dropdown[0] + " > select");
            let name = select.val();
            return {name, powder: powderList[dropdown[1]]};
        });
        let calculatedBuild = calculateBuild(build);
        let item = calculatedBuild.items[index];
        let sockets = item.info.sockets;
        if (sockets) {
            box.append(generateItemBox(item, false));
            powderBox.show();
            powderBox.find("div > p.large").text(item.displayName || item.info.name).attr("class", "large item_name " + item.info.tier.toLowerCase());
            let powderListBox = powderBox.find("div > div.powder_list");
            powderListBox.empty();
            for (let i = 0; i < sockets; i++) {
                let powderBox;
                if (powderList[type].length <= i || !powderList[type][i]) {
                    powderBox = $(`<div class="powder powder_empty" data-index="${i}" data-slot="${type}"></div>`);
                } else {
                    powderBox = $(`<div class="powder powder_${powderList[type][i].toLowerCase()}" data-index="${i}" data-slot="${type}"></div>`);
                    powderBox.click(() => {
                        powderList[type][i] = undefined;
                        renderSockets(powderListBox, type, realReq);
                    });
                }
                powderListBox.append(powderBox);
            }
        } else {
            powderBox.hide();
        }
        renderBuild(calculatedBuild, realReq);
    }

    async function loadItemDb() {
        // load from server lol, maybe cached tho
        return await fetch("/build/itemdb.json").then(data => data.json()).then(json => json.itemDB)
    }

    /**
     * Calculates the build"s stats according to the items and skill points allocated.
     * Normally we use the item"s base stats as outlined in itemDB, but stats can be overridden,
     * even if the override is outside of the normal range we won"t check
     * @param items The items equipped as an array
     */
    function calculateBuild(items) {
        // check for the correct types [helm, chest, leggings, boots, ring, ring, bracelet, necklace, wep]
        let totalIdentifications = {};
        let totalBase = {};
        let totalReq = {quest: []};
        let realItems = [];
        let conversion = {neutral: 100, earth: 0, thunder: 0, water: 0, fire: 0, air: 0};
        for (let i = 0; i < 9; i++) {
            if (!items[i]) {
                realItems.push(null);
                continue;
            }
            let name = items[i].name;
            let item = globalItemDb[name];
            if (!item) {
                realItems.push(null);
                if (name.length) {
                    console.warn("Item " + name + " not found");
                }
                continue;
            }
            if ((item.info.type || item.accessoryType).toLowerCase() !== correctOrder[i] && item.category.toLowerCase() !== correctOrder[i]) {
                return null;
            }
            // must clone since we don"t want to override the base item
            let realItem = JSON.parse(JSON.stringify(item));
            // this item passed the check, populate it with the real one
            override(realItem.identification, items.override);
            // powders
            if (Array.isArray(items[i].powder)) {
                let powders = items[i].powder.slice(0, realItem.info.sockets);
                realItem.powders = powders;

                for (let j = 0; j < powders.length; j++) {
                    if (!powders[j]) {
                        continue;
                    }
                    let elem = powders[j][0];
                    let tier = powders[j][1];
                    let elemName = powderStats[elem][0][0];
                    let weakElemName = powderStats[elem][0][1];
                    let powder = powderStats[elem][tier];
                    let conversionPct = Math.min(conversion.neutral, powder[2]);
                    if (i === 8) {
                        // weapon, modify conversion and damage
                        conversion.neutral -= conversionPct;
                        conversion[elemName] += conversionPct;
                        let originalDamage = realItem.base.damage[elemName] || "0-0";
                        let [lower, upper] = originalDamage.split("-").map(x => parseInt(x));
                        // console.log(lower, upper, originalDamage);
                        lower += powder[0];
                        upper += powder[1];
                        realItem.base.damage[elemName] = lower + "-" + upper;
                        switch (realItem.info.type) {
                            case "Relik":
                                realItem.req.class = "Shaman";
                                break;
                            case "Wand":
                                realItem.req.class = "Mage";
                                break;
                            case "Spear":
                                realItem.req.class = "Warrior";
                                break;
                            case "Bow":
                                realItem.req.class = "Archer";
                                break;
                            case "Dagger":
                                realItem.req.class = "Assassin";
                                break;
                        }
                    } else {
                        // non weapon, modify defense
                        realItem.base.defense[elemName] += powder[3];
                        realItem.base.defense[weakElemName] -= powder[4];
                    }
                }
            }
            // this goes after all the modifications
            totalIdentifications = sum(totalIdentifications, realItem.identification);
            totalBase = sum(totalBase, realItem.base);
            totalReq = max(totalReq, realItem.req);

            realItems.push(realItem);
        }
        // adjust health according to lvl req
        totalBase.health = (totalBase.health || 0) + Math.max((totalReq.level || 1), 101) * 5 + 5;

        if (realItems[8]) {
            let totalConverted = [0, 0];
            let displayDamage = JSON.parse(JSON.stringify(totalBase.damage));
            for (let i in displayDamage) {
                displayDamage[i] = displayDamage[i].split("-").map(x => 1*x);
            }
            elementList.forEach(elem => {
                if (conversion[elem]) {
                    let converted = totalBase.damage.neutral.split("-").map(x => Math.round(x * conversion[elem] / 100));
                    [0, 1].forEach(i => {
                        if (converted[i] + totalConverted[i] > displayDamage.neutral[i]) {
                            converted[i] = displayDamage.neutral[i] - totalConverted[i];
                        }
                    });
                    displayDamage[elem] = sum(displayDamage[elem], converted);
                    totalConverted[0] += converted[0];
                    totalConverted[1] += converted[1];
                }
            });
            displayDamage.neutral[0] -= totalConverted[0];
            displayDamage.neutral[1] -= totalConverted[1];
            realItems[8].displayDamage = displayDamage;
            return {
                identification: totalIdentifications,
                base: totalBase,
                req: totalReq,
                items: realItems,
                conversion,
                displayDamage
            };
        }
        return {
            identification: totalIdentifications,
            base: totalBase,
            req: totalReq,
            items: realItems,
            conversion
        };
    }

    function renderBuild(build, realReq) {
        if (!build.items.filter(x => x).length) {
            // empty build
            return;
        }
        itemListBox.empty();
        build.items.forEach(item => {
            if (item !== null) {
                itemListBox.append(generateItemBox(item, true));
            }
        });
        resetPos();
        // requirements
        let req = build.req;
        let reqBox = $("#build_req > .build_content");
        reqBox.empty();
        if (req.quest.length) {
            for (let i = 0; i < req.quest.length; i++) {
                reqBox.append(`<span class="mctext green">✓ </span><span>Quest Req: ${req.quest[i]}</span><br>`);
            }
        }
        if (req.class) {
            reqBox.append(`<span class="mctext green">✓ </span><span>Class Req: ${req.class}</span><br>`);
        }
        if (req.level) {
            reqBox.append(`<span class="mctext green">✓ </span><span>Combat Lv. Min: ${req.level}</span><br>`);
        }
        skillList.forEach(skill => {
            let value = req[skill];
            if (value) {
                reqBox.append(`<span class="mctext green">✓ </span><span>${capitalize(skill)} Min: ${value}</span><br>`);
            }
        });
        // how to wear
        let howToWearBox = $("#build_howto > .build_content");
        howToWearBox.empty();
        howToWearBox.append("<p>Assign the follow Skill Points:</p>");
        skillList.forEach(skill => {
            howToWearBox.append(`<span>${capitalize(skill)}: ${realReq.req[skill]}</span><br>`);
        });
        howToWearBox.append("<br><span>Then wear your items in the following order:</span><br>");
        realReq.order.forEach((index, i) => {
            howToWearBox.append(`<span>${i + 1}. ${capitalize(correctOrder[index])}</span><br>`);
        });
        if (build.items[8]) {
            howToWearBox.append(`<span>${realReq.order.length + 1}. Weapon</span><br>`);
        }
        let {others, damage, regen, steal} = build.identification;
        let {healthRaw, healthPercent} = regen;
        // defenses
        let defensesBox = $("#build_defs > .build_content");
        defensesBox.empty();
        defensesBox.empty();
        defensesBox.append("<table></table>");
        defensesBox = defensesBox.children("table");
        defensesBox.append(`<tr><td><span class="mctext dark_red">❤ Health:</span></td><td>${build.base.health}</td></tr>`);
        defensesBox.append(`<tr><td><span class="mctext dark_red">❤ Health Regen:</span></td><td>${healthRaw}</td><td><span class="mctext ${healthPercent >= 0 ? "green" : "red"}">${nToString(healthPercent)}%</span></td><td>=</td><td>${Math.round(healthRaw + Math.abs(healthRaw) * healthPercent / 100)}</td></tr>`);
        defensesBox.append("<tr><td>&nbsp;</td></tr>");
        elementList.forEach(elem => {
            let raw = build.base.defense[elem] || 0;
            let percent = build.identification.defense[elem] || 0;
            let final = Math.round(raw + Math.abs(raw) * percent / 100);
            defensesBox.append(`<tr><td><span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${capitalize(elem)}</span> Defense:</td><td>${raw}</td><td><span class="mctext ${percent >= 0 ? "green" : "red"}">${nToString(percent)}%</span></td><td>=</td><td><span class="mctext ${final >= 0 ? "green" : "red"}">${final}</span></td></tr>`);
        });
        // other ids
        let othersBox = $("#build_ids > .build_content");
        othersBox.empty();
        othersBox.append("<table></table>");
        othersBox = othersBox.children("table");
        skillList.forEach(skill => {
            if (realReq.bonus[skill]) {
                let value = realReq.bonus[skill];
                othersBox.append(`<tr><td>${capitalize(skill)}</td><td><span class="mctext ${value >= 0 ? "green" : "red"}">${nToString(value)}</span></td></tr>`);
            }
        });
        for (let i in damage) {
            if (damage.hasOwnProperty(i)) {
                let value = damage[i];
                if (value) {
                    othersBox.append(`<tr><td>${idMap.damage[i][1]}</td><td><span class="mctext ${value >= 0 ? "green" : "red"}">${nToString(value)}${idMap.damage[i][0]}</span></td></tr>`);
                }
            }
        }
        for (let i in regen) {
            if (regen.hasOwnProperty(i)) {
                if (i.startsWith('health')) {
                    continue;
                }
                let value = regen[i];
                if (value) {
                    othersBox.append(`<tr><td>${idMap.regen[i][1]}</td><td><span class="mctext ${value >= 0 ? "green" : "red"}">${nToString(value)}${idMap.regen[i][0]}</span></td></tr>`);
                }
            }
        }
        for (let i in steal) {
            if (steal.hasOwnProperty(i)) {
                let value = steal[i];
                if (value) {
                    othersBox.append(`<tr><td>${idMap.steal[i][1]}</td><td><span class="mctext ${value >= 0 ? "green" : "red"}">${nToString(value)}${idMap.steal[i][0]}</span></td></tr>`);
                }
            }
        }
        let ordinals = ["1st", "2nd", "3rd", "4th"];
        let spellCostPct = build.identification.spellCost.percent;
        let spellCostRaw = build.identification.spellCost.raw;
        for (let i = 0; i < 4; i++) {
            if (spellCostRaw[i]) {
                othersBox.append(`<tr><td>${ordinals[i]} Spell Cost: </td><td><span class="mctext ${spellCostRaw[i] < 0 ? "green" : "red"}">${nToString(spellCostRaw[i])}</span></td></tr>`);
            }
            if (spellCostPct[i]) {
                othersBox.append(`<tr><td>${ordinals[i]} Spell Cost: </td><td><span class="mctext ${spellCostPct[i] < 0 ? "green" : "red"}">${nToString(spellCostPct[i])}%</span></td></tr>`);
            }
        }
        for (let i in others) {
            if (others.hasOwnProperty(i)) {
                let value = others[i];
                if (value) {
                    othersBox.append(`<tr><td>${idMap.others[i][1]}</td><td><span class="mctext ${value >= 0 ? "green" : "red"}">${nToString(value)}${idMap.others[i][0]}</span></td></tr>`);
                }
            }
        }
        // get skills
        let skills = $('input.sp_input').map((i, v) => 1*v.value).toArray();
        skillList.forEach((v, i) => {
            skills[i] += realReq.bonus[v] || 0;
            skills[i] = Math.max(0, Math.min(skills[i], 150));
        });
        let damagesBox = $('#build_dmg > .build_content');
        damagesBox.empty();
        if (build.items[8]) {
            // calculate damages
            // melee
            let weaponDamage = JSON.parse(JSON.stringify(build.displayDamage));
            let {damage} = build.identification;
            let meleeDamage = {normal: {}, critical: {}};
            for (let i in weaponDamage) {
                if (!weaponDamage.hasOwnProperty(i)) continue;
                meleeDamage.normal.neutral = build.displayDamage.neutral.map(x => x * (100 + skillBounsPct[skills[0]] + damage.meleePercent) / 100 + damage.meleeRaw).map(Math.floor);
                meleeDamage.critical.neutral = build.displayDamage.neutral.map(x => x * (200 + skillBounsPct[skills[0]] + damage.meleePercent) / 100 + damage.meleeRaw).map(Math.floor);
                meleeDamage.normal.total = [meleeDamage.normal.neutral[0], meleeDamage.normal.neutral[1]];
                meleeDamage.critical.total = [meleeDamage.critical.neutral[0], meleeDamage.critical.neutral[1]];
                elementList.forEach((elem, i) => {
                    meleeDamage.normal[elem] = build.displayDamage[elem].map(x => x * (100 + skillBounsPct[skills[0]] + skillBounsPct[skills[i]] + damage.meleePercent + damage[elem]) / 100).map(Math.floor);
                    meleeDamage.critical[elem] = build.displayDamage[elem].map(x => x * (200 + skillBounsPct[skills[0]] + skillBounsPct[skills[i]] + damage.meleePercent + damage[elem]) / 100).map(Math.floor);
                    meleeDamage.normal.total = sum(meleeDamage.normal.total, meleeDamage.normal[elem]);
                    meleeDamage.critical.total = sum(meleeDamage.critical.total, meleeDamage.critical[elem]);
                });
            }

            // spell
            let spells = [];
            switch (build.items[8].info.type.toLowerCase()) {
                case "spear":
                    // warrior
                    // bash
                    spells.push({spell: "Bash", subtitle: "First Explosion", damage: spellDamage(build, skills, 130, {neutral: 60, earth: 40, thunder: 0, water: 0, fire: 0, air: 0})});
                    spells.push({spell: "Bash", subtitle: "Second Explosion", damage: spellDamage(build, skills, 130, {neutral: 100, earth: 0, thunder: 0, water: 0, fire: 0, air: 0})});
                    spells.push({spell: "Bash", subtitle: "Total Damage", primary: true, damage: sum(spells[0].damage, spells[1].damage)});
                    // charge
                    spells.push({spell: "Charge", subtitle: "", primary: true, damage: spellDamage(build, skills, 150, {neutral: 60, earth: 0, thunder: 0, water: 0, fire: 40, air: 0})});
                    // uppercut
                    spells.push({spell: "Uppercut", subtitle: "First Damage", damage: spellDamage(build, skills, 300, {neutral: 85, earth: 15, thunder: 0, water: 0, fire: 40, air: 0})});
                    spells.push({spell: "Uppercut", subtitle: "Fireworks Damage", damage: spellDamage(build, skills, 50, {neutral: 85, earth: 0, thunder: 15, water: 0, fire: 40, air: 0})});
                    spells.push({spell: "Uppercut", subtitle: "Comet Damage", damage: spellDamage(build, skills, 50, {neutral: 100, earth: 0, thunder: 0, water: 0, fire: 40, air: 0})});
                    spells.push({spell: "Uppercut", subtitle: "Total Damage", primary: true, damage: sum(sum(spells[4].damage, spells[5].damage), spells[6].damage)});
                    // war scream
                    spells.push({spell: "War Scream", subtitle: "Per Hit", primary: true, damage: spellDamage(build, skills, 50, {neutral: 0, earth: 0, thunder: 0, water: 0, fire: 75, air: 25})});
                    break;
                case "bow":
                    // archer
                    // arrow storm
                    spells.push({spell: "Arrow Storm", subtitle: "Per Arrow", damage: spellDamage(build, skills, 10, {neutral: 60, earth: 0, thunder: 25, water: 0, fire: 15, air: 0})});
                    spells.push({spell: "Arrow Storm", subtitle: "Per 60 Arrows", primary: true, damage: multiply(spells[0].damage, 60)});
                    // escape
                    spells.push({spell: "Escape", subtitle: "", primary: true, damage: spellDamage(build, skills, 100, {neutral: 50, earth: 0, thunder: 0, water: 0, fire: 0, air: 50})});
                    // bomb
                    spells.push({spell: "Bomb", subtitle: "", primary: true, damage: spellDamage(build, skills, 250, {neutral: 60, earth: 25, thunder: 0, water: 0, fire: 15, air: 0})});
                    // arrow shield
                    spells.push({spell: "Arrow Shield", subtitle: "", primary: true, damage: spellDamage(build, skills, 100, {neutral: 70, earth: 0, thunder: 0, water: 30, fire: 0, air: 0})});
                    spells.push({spell: "Arrow Shield", subtitle: "Arrow Rain Damage", damage: spellDamage(build, skills, 250, {neutral: 70, earth: 0, thunder: 0, water: 0, fire: 0, air: 30})});
                    break;
                case "wand":
                    // mage
                    // heal
                    spells.push({spell: "Heal", subtitle: "", primary: true, heal: [heal(build, 0.12), heal(build, 0.06), heal(build, 0.06)]});
                    // teleport
                    spells.push({spell: "Teleport", subtitle: "", primary: true, damage: spellDamage(build, skills, 100, {neutral: 60, earth: 0, thunder: 40, water: 0, fire: 0, air: 0})});
                    // meteor
                    spells.push({spell: "Meteor", subtitle: "Explosion Damage", primary: true, damage: spellDamage(build, skills, 500, {neutral: 40, earth: 30, thunder: 0, water: 0, fire: 30, air: 0})});
                    spells.push({spell: "Meteor", subtitle: "Burning Damage", damage: spellDamage(build, skills, 125, {neutral: 100, earth: 0, thunder: 0, water: 0, fire: 0, air: 0})});
                    // ice snake
                    spells.push({spell: "Ice Snake", subtitle: "", primary: true, damage: spellDamage(build, skills, 70, {neutral: 50, earth: 0, thunder: 0, water: 50, fire: 0, air: 0})});
                    break;
                case "dagger":
                    // assassin
                    // spin attack
                    spells.push({spell: "Spin Attack", subtitle: "", primary: true, damage: spellDamage(build, skills, 150, {neutral: 70, earth: 0, thunder: 30, water: 0, fire: 0, air: 0})});
                    // multihit
                    spells.push({spell: "Multihit", subtitle: "First 10 Hits", damage: spellDamage(build, skills, 30, {neutral: 70, earth: 0, thunder: 30, water: 0, fire: 0, air: 0})});
                    spells.push({spell: "Multihit", subtitle: "Last Hit", damage: spellDamage(build, skills, 30, {neutral: 40, earth: 0, thunder: 30, water: 30, fire: 0, air: 0})});
                    spells.push({spell: "Multihit", subtitle: "Total Damage", primary: true, damage: sum(multiply(spells[1].damage, 10), spells[2].damage)});
                    // smoke bomb
                    spells.push({spell: "Smoke Bomb", subtitle: "Total Damage", primary: true, damage: spellDamage(build, skills, 60, {neutral: 50, earth: 25, thunder: 0, water: 0, fire: 0, air: 25})});
                    spells.push({spell: "Smoke Bomb", subtitle: "Per Second", damage: multiply(spells[4].damage, 5)});
                    break;
                case "relik":
                    // shaman
                    // totem
                    spells.push({spell: "Totem", subtitle: "Damage Per Second", primary: true, damage: spellDamage(build, skills, 20, {neutral: 60, earth: 0, thunder: 0, water: 0, fire: 20, air: 20})});
                    spells.push({spell: "Totem", subtitle: "Heal Per Second", primary: true, heal: [heal(build, 0.04)]});
                    spells.push({spell: "Totem", subtitle: "Landing Damage", damage: spellDamage(build, skills, 100, {neutral: 100, earth: 0, thunder: 0, water: 0, fire: 0, air: 0})});
                    // haul
                    spells.push({spell: "Haul", subtitle: "", primary: true, damage: spellDamage(build, skills, 100, {neutral: 100, earth: 0, thunder: 0, water: 0, fire: 0, air: 0})});
                    // explosive blender
                    spells.push({spell: "Aura", subtitle: "Center Damage", primary: true, damage: spellDamage(build, skills, 200, {neutral: 70, earth: 0, thunder: 0, water: 30, fire: 0, air: 0})});
                    // uproot
                    spells.push({spell: "Uproot", subtitle: "", primary: true, damage: spellDamage(build, skills, 50, {neutral: 70, earth: 30, thunder: 0, water: 0, fire: 0, air: 0})});
            }
            // spells.sort((a,b) => (b.primary||0)-(a.primary||0));
            let div = $('<div class="spell_damage"></div>');
            div.append(`<h4 class="item_name center ${build.items[8].info.tier.toLowerCase()}">Melee Damage</h4>`);
            let {normal, critical} = meleeDamage;
            let normalAvg = (normal.total[0] + normal.total[1]) / 2;
            let criticalAvg = (critical.total[0] + critical.total[1]) / 2;
            let critChance = skillBounsPct[skills[1]];
            let avg = Math.round(normalAvg * (1 - critChance / 100) + criticalAvg * critChance / 100);
            let attackSpeeds = ['SUPER_SLOW', 'VERY_SLOW', 'SLOW', 'NORMAL', 'FAST', 'VERY_FAST', 'SUPER_FAST'];
            let hitsPerSec = [0.51, 0.83, 1.5, 2.05, 2.5, 3.4, 4.3];
            let speedTier = Math.min(6, Math.max(0, attackSpeeds.indexOf(build.items[8].base.attackSpeed) + build.identification.others.attackSpeedBonus));
            div.append(`<span class="center block">${capitalize(attackSpeeds[speedTier])} Attack Speed</span>`);
            div.append(`<span class="center block">DPS: ${Math.floor(avg * hitsPerSec[speedTier] + build.identification.others.poison * skillBounsPct[skills[0]] / 3)}</span>`);
            div.append(`<span class="dps">Average Damage: ${avg}</span>`);
            let leftDamageBox = $(`<div class="damage_left">Normal Damage<br>Total: ${normal.total[0]} - ${normal.total[1]} (${Math.round(normalAvg)})<br><span class="mctext gold">✤ ${normal.neutral[0]} - ${normal.neutral[1]}</span><br></div>`);
            let rightDamageBox = $(`<div class="damage_right">Critical Damage<br>Total: ${critical.total[0]} - ${critical.total[1]} (${Math.round(criticalAvg)})<br><span class="mctext gold">✤ ${critical.neutral[0]} - ${critical.neutral[1]}</span><br></div>`);
            elementList.forEach(elem => {
                if (normal[elem][1]) {
                    leftDamageBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${normal[elem][0]} - ${normal[elem][1]}</span><br>`);
                    rightDamageBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${critical[elem][0]} - ${critical[elem][1]}</span><br>`);
                }
            });
            div.append(leftDamageBox);
            div.append(rightDamageBox);
            damagesBox.append(div);
            spells.forEach(spell => {
                if (spell.damage) {
                    let div = $('<div class="spell_damage"></div>');
                    div.append(`<h4 class="item_name center ${build.items[8].info.tier.toLowerCase()}">${spell.spell}</h4>`);
                    let {normal, critical} = spell.damage;
                    let normalAvg = (normal.total[0] + normal.total[1]) / 2;
                    let criticalAvg = (critical.total[0] + critical.total[1]) / 2;
                    let critChance = skillBounsPct[skills[1]];
                    let avg = Math.round(normalAvg * (1 - critChance / 100) + criticalAvg * critChance / 100);
                    if (spell.subtitle.length) {
                        div.append(`<span class="center subtitle">${spell.subtitle}</span>`);
                    }
                    div.append(`<span class="dps">Average Damage: ${avg}</span>`);
                    let leftDamageBox = $(`<div class="damage_left">Normal Damage<br>Total: ${normal.total[0]} - ${normal.total[1]} (${Math.round(normalAvg)})<br><span class="mctext gold">✤ ${normal.neutral[0]} - ${normal.neutral[1]}</span><br></div>`);
                    let rightDamageBox = $(`<div class="damage_right">Critical Damage<br>Total: ${critical.total[0]} - ${critical.total[1]} (${Math.round(criticalAvg)})<br><span class="mctext gold">✤ ${critical.neutral[0]} - ${critical.neutral[1]}</span><br></div>`);
                    elementList.forEach(elem => {
                        if (normal[elem][1]) {
                            leftDamageBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${normal[elem][0]} - ${normal[elem][1]}</span><br>`);
                            rightDamageBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${critical[elem][0]} - ${critical[elem][1]}</span><br>`);
                        }
                    });
                    div.append(leftDamageBox);
                    div.append(rightDamageBox);
                    damagesBox.append(div);
                }
                if (spell.heal) {
                    let div = $('<div class="spell_damage"></div>');
                    let {heal} = spell;
                    div.append(`<h4 class="item_name center ${build.items[8].info.tier.toLowerCase()}">${spell.spell}</h4>`);
                    if (spell.subtitle.length) {
                        div.append(`<span class="center subtitle">${spell.subtitle}</span>`);
                    }
                    switch (spell.spell) {
                        case "Heal":
                            div.append(`<span class="center block">Total Heal: ${heal[0] + heal[1] + heal[2]}</span>`);
                            for (let i = 0; i < 3; i++) {
                                div.append(`<span class="center block">${['1st', '2nd', '3rd'][i]} Pulse: ${heal[i]}</span>`);
                            }
                        case "Totem":
                            div.append(`<span class="center block">Heal: ${heal[0]}</span>`);
                            break;
                    }
                    damagesBox.append(div);
                }
            });
        } else {
            // no weapon to calculate damages
            damagesBox.html('No weapon to selected.');
        }
    }

    function heal(build, ratio) {
        return Math.floor(build.base.health * ratio * (1 + build.identification.damage.water / 200));
    }

    function generateItemBox(item, floatLeft) {
        let itemBox;
        let newLine = false;
        if (floatLeft) {
            itemBox = $(`<div class="item float_left" style="position: absolute; top: 0; left: 0;"></div>`);
        } else {
            itemBox = $(`<div class="item"></div>`);
        }
        // 1. name coloured according to tier
        itemBox.append(`<span class="item_name ${item.info.tier.toLowerCase()}">${item.displayName || item.info.name}</span><br>`);
        // 2. weapon attack speed
        if (item.category === "weapon") {
            itemBox.append(`<span class="atk_speed">${capitalize(item.base.attackSpeed)} Attack Speed</span><br>`);
        }
        itemBox.append("<br>");
        if (item.category !== "weapon") {
            // 3. armour health
            if (item.base.health) {
                itemBox.append(`<span class="armour_stats"><span class="mctext dark_red">❤ Health: ${nToString(item.base.health)}</span><br>`);
                newLine = true;
            }
            // 4. armour defenses
            elementList.forEach(elem => {
                let value = item.base.defense[elem];
                if (value) {
                    itemBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${capitalize(elem)}</span><span> Defense: ${nToString(value)}</span><br>`);
                    newLine = true;
                }
            });
        } else {
            // 5. weapon damage
            if (item.displayDamage.neutral[1] !== 0) {
                itemBox.append(`<span class="mctext gold">${elemIcons.earth} Neutral Damage: ${item.displayDamage.neutral[0]}-${item.displayDamage.neutral[1]}</span><br>`);
            }
            elementList.forEach(elem => {
                let value = item.displayDamage[elem];
                if (value[1] !== 0) {
                    itemBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${capitalize(elem)}</span><span> Damage: ${value[0]}-${value[1]}</span><br>`);
                    newLine = true;
                }
            });
        }
        // 6. powder special
        if (item.category !== "accessory"){
            let powders;
            if (item.category === "weapon") {
                powders = powderList.weapon;
            } else {
                powders = powderList[item.info.type.toLowerCase()];
            }
            let count = {E: 0, T: 0, W: 0, F: 0, A: 0};
            let sum = {E: 0, T: 0, W: 0, F: 0, A: 0};
            let specialElem;
            let specialTier = 0;
            for (const powder of powders) {
                if (!powder) {
                    continue;
                }
                let elem = powder[0];
                let tier = powder[1];
                if (tier < 4) {
                    continue;
                }
                ++count[elem];
                sum[elem] += 1*tier;
                if (count[elem] == 2) {
                    specialElem = elem;
                    specialTier = sum[elem];
                    break;
                }
            }
            if (specialTier) {
                if (item.category === "weapon") {
                    // weapon specials
                    switch (specialElem) {
                        case 'E':
                            itemBox.append(`<span class="mctext dark_green">&nbsp;&nbsp;Quake</span><br>`);
                            itemBox.append(`<span class="mctext dark_green">&nbsp;&nbsp;-</span> Radius: ${specialTier / 2 + 1} blocks<br>`);
                            itemBox.append(`<span class="mctext dark_green">&nbsp;&nbsp;-</span> Damage: ${specialTier * 65 - 365}% ${elemIcons.earth}<br>`);
                            break;
                        case 'T':
                            itemBox.append(`<span class="mctext yellow">&nbsp;&nbsp;Chained Lightning</span><br>`);
                            itemBox.append(`<span class="mctext yellow">&nbsp;&nbsp;-</span> Chains: ${specialTier - 3}<br>`);
                            itemBox.append(`<span class="mctext yellow">&nbsp;&nbsp;-</span> Damage: ${specialTier * 40 - 240}% ${elemIcons.thunder}<br>`);
                            break;
                        case 'W':
                            itemBox.append(`<span class="mctext aqua">&nbsp;&nbsp;Curse</span><br>`);
                            itemBox.append(`<span class="mctext aqua">&nbsp;&nbsp;-</span> Duration: ${specialTier - 3} seconds<br>`);
                            itemBox.append(`<span class="mctext aqua">&nbsp;&nbsp;-</span> Damage Boost: +${specialTier * 30 - 150}%<br>`);
                            break;
                        case 'F':
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;Courage</span><br>`);
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;-</span> Duration: ${specialTier / 2 + 2} seconds<br>`);
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;-</span> Damage: ${specialTier * 12.5 - 25}% ${elemIcons.fire}<br>`);
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;-</span> Damage Boost: +${specialTier * 20 - 90}%<br>`);
                            break;
                        case 'A':
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;Wind Prison</span><br>`);
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;-</span> Duration: ${specialTier / 2 - 1} seconds<br>`);
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;-</span> Damage Boost: +${specialTier * 100 - 600}%<br>`);
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;-</span> Knockback: ${specialTier * 4 - 24} blocks<br>`);
                            break;
                    }
                } else {
                    // armour specials
                    switch (specialElem) {
                        case 'E':
                            itemBox.append(`<span class="mctext dark_green">&nbsp;&nbsp;Rage [% ❤ Missing]</span><br>`);
                            itemBox.append(`<span class="mctext dark_green">&nbsp;&nbsp;-</span> Damage: +${(specialTier - 4 + (specialTier == 12 ? 2 : 0)) / 10}% ${elemIcons.earth}<br>`);
                            break;
                        case 'T':
                            itemBox.append(`<span class="mctext yellow">&nbsp;&nbsp;Kill Streak [Mob Killed]</span><br>`);
                            itemBox.append(`<span class="mctext yellow">&nbsp;&nbsp;-</span> Damage: +${specialTier * 1.5 - 9}% ${elemIcons.thunder}<br>`);
                            itemBox.append(`<span class="mctext yellow">&nbsp;&nbsp;-</span> Duration: 5 seconds<br>`);
                            break;
                        case 'W':
                            itemBox.append(`<span class="mctext aqua">&nbsp;&nbsp;Concentration [Mana Used]</span><br>`);
                            itemBox.append(`<span class="mctext aqua">&nbsp;&nbsp;-</span> Damage: ${specialTier - 7}% ${elemIcons.water} / Mana<br>`);
                            itemBox.append(`<span class="mctext aqua">&nbsp;&nbsp;-</span> Duration: 1 Sec. / Mana<br>`);
                            break;
                        case 'F':
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;Endurance [Hit Taken]</span><br>`);
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;-</span> Damage: ${specialTier - 6}% ${elemIcons.fire}<br>`);
                            itemBox.append(`<span class="mctext red">&nbsp;&nbsp;-</span> Duration: 8 seconds<br>`);
                            break;
                        case 'A':
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;Dodge [Near Mobs]</span><br>`);
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;-</span> Damage: ${specialTier - 6}% ${elemIcons.air}<br>`);
                            itemBox.append(`<span class="mctext white">&nbsp;&nbsp;-</span> Duration: 6 seconds<br>`);
                            break;
                    }
                }
            }
        }
        if (newLine) {
            itemBox.append("<br>");
            newLine = false;
        }
        // 7. requirements
        // 7.1 quest req
        if (item.req.quest) {
            itemBox.append(`<span class="mctext green">✓ </span><span>Quest Req: ${item.req.quest}</span><br>`);
            newLine = true;
        }
        // 7.2 class req
        if (item.req.class) {
            itemBox.append(`<span class="mctext green">✓ </span><span>Class Req: ${item.req.class}</span><br>`);
            newLine = true;
        }
        // 7.3 combat lvl req
        if (item.req.level) {
            itemBox.append(`<span class="mctext green">✓ </span><span>Combat Lv. Min: ${item.req.level}</span><br>`);
            newLine = true;
        }
        // 7.4 skill req
        skillList.forEach(skill => {
            let value = item.req[skill];
            if (value) {
                itemBox.append(`<span class="mctext green">✓ </span><span>${capitalize(skill)} Min: ${value}</span><br>`);
                newLine = true;
            }
        });
        if (newLine) {
            itemBox.append("<br>");
            newLine = false;
        }
        // 8. bonus skills
        skillList.forEach(skill => {
            let value = item.base.skill[skill];
            if (value) {
                itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}</span><span> ${capitalize(skill)}</span><br>`);
                newLine = true;
            }
        });
        if (newLine) {
            itemBox.append("<br>");
            newLine = false;
        }
        // 9. ids
        {
            // damage
            {
                elementList.forEach(elem => {
                    let value = item.identification.damage[elem];
                    if (value) {
                        itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}%</span><span> ${capitalize(elem)} Damage</span><br>`);
                        newLine = true;
                    }
                });
                for (let i in idMap.damage) {
                    if (idMap.damage.hasOwnProperty(i)) {
                        let value = item.identification.damage[i];
                        let line = idMap.damage[i];
                        if (value) {
                            itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}${line[0]}</span><span> ${line[1]}</span><br>`);
                        }
                    }
                }
            }
            // defenses
            {
                elementList.forEach(elem => {
                    let value = item.identification.defense[elem];
                    if (value) {
                        itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}%</span><span> ${capitalize(elem)} Defense</span><br>`);
                        newLine = true;
                    }
                });
            }
            // regen
            {
                for (let i in idMap.regen) {
                    if (idMap.regen.hasOwnProperty(i)) {
                        let value = item.identification.regen[i];
                        let line = idMap.regen[i];
                        if (value) {
                            itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}${line[0]}</span><span> ${line[1]}</span><br>`);
                        }
                    }
                }
            }
            // spell cost
            {
                let ordinals = ["1st", "2nd", "3rd", "4th"];
                let spellCostPct = item.identification.spellCost.percent;
                let spellCostRaw = item.identification.spellCost.raw;
                for (let i = 0; i < 4; i++) {
                    if (spellCostRaw[i]) {
                        itemBox.append(`<span class="mctext ${spellCostRaw[i] < 0 ? "green" : "red"}">${nToString(spellCostRaw[i])}</span><span> ${ordinals[i]} Spell Cost</span><br>`);
                        newLine = true;
                    }
                    if (spellCostPct[i]) {
                        itemBox.append(`<span class="mctext ${spellCostPct[i] < 0 ? "green" : "red"}">${nToString(spellCostPct[i])}%</span><span> ${ordinals[i]} Spell Cost</span><br>`);
                        newLine = true;
                    }
                }
            }
            // steal
            {
                for (let i in idMap.steal) {
                    if (idMap.steal.hasOwnProperty(i)) {
                        let value = item.identification.steal[i];
                        let line = idMap.steal[i];
                        if (value) {
                            itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}${line[0]}</span><span> ${line[1]}</span><br>`);
                            newLine = true;
                        }
                    }
                }
            }
            // others
            {
                for (let i in idMap.others) {
                    if (idMap.others.hasOwnProperty(i)) {
                        let value = item.identification.others[i];
                        let line = idMap.others[i];
                        if (value) {
                            itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}${line[0]}</span><span> ${line[1]}</span><br>`);
                            newLine = true;
                        }
                    }
                }
            }
        }
        if (newLine) {
            itemBox.append("<br>");
            newLine = false;
        }
        // 10. powder slots
        {
            let type = (item.info.type || item.accessoryType).toLowerCase();
            let {sockets} = item.info;
            if (type == "relik" || type == "wand" || type == "bow" || type == "spear" || type == "dagger") {
                type = "weapon";
            }
            let powderArray = (powderList[type] || []).filter(x => !!x);
            let powderCount = Math.min(powderArray.length, sockets || 0);
            if (sockets) {
                if (!powderCount) {
                    itemBox.append(`<span>[0/${sockets}] Powder Slots</span><br>`);
                } else {
                    let powderString = "";
                    let count = Math.min(powderArray.length, item.info.sockets);
                    for (let i = 0; i < count; i++) {
                        let elem = powderStats[powderArray[i][0].toUpperCase()][0][0];
                        powderString += `<span class="mctext ${elemColours[elem]}">${elemIcons[elem]}</span>`;
                    }
                    itemBox.append(`<span>[${powderCount}/${sockets}] Powder Slots [${powderString}]</span><br>`);
                }
            }
        }
        // 11. tier
        itemBox.append(`<span class="item_name ${item.info.tier.toLowerCase()}">${item.info.tier} Item</span><br>`);
        // 12. restrictions
        if (item.restrictions) {
            itemBox.append(`<span class="mctext red">${item.restrictions} Item</span><br>`);
        }
        // 13. lore
        if (item.info.lore) {
            itemBox.append(`<span class="mctext dark_gray">${item.info.lore}</span><br>`);
        }
        return itemBox;
    }

    function capitalize(s) {
        return s.split("_").map(x => x.substr(0, 1).toUpperCase() + x.substr(1).toLowerCase()).join(" ");
    }

    function resetPos() {
        const CONTAINER = "#item_list_box";
        const SELECTOR = ".item.float_left";
        const COLUMN_WIDTH = 250;
        const VERTICAL_MARGIN = 40;
        const HORIZONTAL_MARGIN = 24;

        let container = $(CONTAINER);
        let columns = Math.floor(container.width() / (HORIZONTAL_MARGIN + COLUMN_WIDTH));
        let height_occupied = [];
        let elems = container.children(SELECTOR);
        container.css("position", "relative");
        for (let i = 0; i < columns; i++) {
            height_occupied.push(0);
        }
        for (let i = 0; i < elems.length; i++) {
            // find the col with least occupied height
            let idx = 0;
            let min = height_occupied[0];
            for (let j = 1; j < columns; j++) {
                if (height_occupied[j] < min) {
                    min = height_occupied[j];
                    idx = j;
                }
            }
            let $elem = $(elems[i]);
            $elem.css("position", "absolute").css("top", min).css("left", COLUMN_WIDTH * idx + HORIZONTAL_MARGIN * idx);
            height_occupied[idx] += $elem.height() + VERTICAL_MARGIN;
        }
        let h = Math.max.apply(this, height_occupied);
        container.height(h);
    }

    function nToString(n) {
        return (n >= 0 ? "+" : "") + n;
    }

    function findStatReq(items) {
        items = items.slice(0, 8); // remove weapon since it always come last
        let combinations = [];
        for (let i = 0; i < 256; i++) {
            let buildItems = [null, null, null, null, null, null, null, null, null];
            for (let j = 0; j < 8; j++) {
                if (items[j] && (i & (1 << j))) {
                    buildItems[j] = {name: items[j].displayName || items[j].info.name};
                }
            }
            combinations.push(calculateBuild(buildItems));
        }
        let currentOrder = [0, 1, 2, 3, 4, 5, 6, 7];
        currentOrder = currentOrder.filter(i => items[i]); // so that we don"t consider empty slots
        // Absolute minimum, even if it means that you need to allocate 200 points in one skill
        let currentMin;
        let currentMinSum = 694201337;
        // The minimum that is actually valid (<=200 in total, <=100 in any skill)
        let currentValidMin;
        let currentValidMinSum = 694201337;
        do {
            let bitSet = 0;
            let currentReq = {
                req: {
                    strength: 0,
                    dexterity: 0,
                    intelligence: 0,
                    defense: 0,
                    agility: 0
                },
                bonus: {
                    strength: 0,
                    dexterity: 0,
                    intelligence: 0,
                    defense: 0,
                    agility: 0
                }
            };
            let sum = 0;
            let valid = true;
            for (let i = 0; i < 8; i++) {
                bitSet |= 1 << currentOrder[i];
                let build = combinations[bitSet];
                let stageReq = build.req;
                skillList.forEach(skill => {
                    let ownedPoints = currentReq.req[skill] + currentReq.bonus[skill];
                    let diff;
                    if (!stageReq[skill]) {
                        diff = 0;
                    } else if (stageReq[skill] > ownedPoints) {
                        diff = stageReq[skill] - ownedPoints;
                    } else {
                        diff = 0;
                    }
                    currentReq.req[skill] += diff;
                    currentReq.bonus[skill] = build.base.skill[skill];
                    sum += diff;
                    valid = sum <= 200 && currentReq[skill] <= 100;
                });
            }
            if (sum < currentMinSum) {
                currentReq.order = currentOrder.slice(0);
                currentMinSum = sum;
                currentMin = currentReq;
                if (valid) {
                    currentValidMinSum = sum;
                    currentValidMin = currentReq;
                }
            }
        } while (nextPermutation(currentOrder));
        let result = currentValidMin || currentMin;
        skillList.forEach((skill, i) => {
            let spInput = $(`.sp_input[data-slot=${i}]`);
            spInput.attr("min", result.req[skill]);
            let val = spInput.val();
            if (val < result.req[skill]) {
                spInput.val(result.req[skill]);
            }
        });
        return result;
    }

    // overrides source with data, overriding an object with a primitive won"t work
    function override(source, data) {
        if (data === undefined) {
            return source;
        }
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                let obj = source[i];
                if (typeof obj === "object") {
                    override(obj, data[i]);
                } else {
                    if (data[i] !== undefined) {
                        source[i] = data[i];
                    }
                }
            }
        }
    }

    // similar to override(), but adds instead of assigns, and clones the source
    function sum(left, right) {
        return combine(left, right, (x, y) => {
            if (Array.isArray(x)) {
                return x.concat(y);
            }
            if (x !== undefined) {
                return x + y;
            }
            return y;

        });
    }

    function multiply(obj, val) {
        let result = {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                if ("object" !== typeof obj[i]) {
                    result[i] = val * obj[i];
                } else {
                    result[i] = multiply(obj[i], val);
                }
            }
        }
        return result;
    }

    function max(left, right) {
        return combine(left, right, (x, y) => {
            if (Array.isArray(x)) {
                return x.concat(y);
            }
            if (x !== undefined) {
                return Math.max(x, y);
            } else {
                return y;
            }
        });
    }

    // similar to override(), but adds instead of assigns, and clones the source
    function combine(left, right, combiner) {
        if (right === undefined || right === null) {
            return left;
        }
        if (left === undefined || left === null) {
            return right;
        }
        let result = JSON.parse(JSON.stringify(left));
        if (typeof right === "string") {
            return combiner(left, right);
        }
        for (let i in right) {
            if (right.hasOwnProperty(i)) {
                if (typeof left[i] === "object") {
                    result[i] = combine(left[i], right[i], combiner);
                } else {
                    result[i] = combiner(left[i], right[i]);
                }
            }
        }
        return result;
    }

    function nextPermutation(array) {
        /* The algorithm: find the longest decreasing subsequence from the end, since we don"t have a larger permutation
        for such a sequence, then find the smallest number that is larger than the one before the decreasing
        subsequence, and swap the smallest with the one before. That way we increment the whole sequence the least.
        However this way the decreasing subsequence that we"ve found is still decreasing, so we reverse it to become an
        increasing one, just like 39+1=40, the last digit is reset from the highest possible value to the lowest.
        6 8 7 4 3 [(5) 2 1] -> 6 8 7 4 (5) [3 2 1] -> 6 8 7 4 5 1 2 3
         */
        // The last index of the array, our starting point.
        let i = array.length - 1;
        let last = i;
        // `i--` returns the value before the decrement, so it is one larger than the decremented `i`.
        // So this expands to `while (i--, array[i + 1] < array[i]);`, which continues iff the next item is is smaller
        // than the last item i.e. true if the pair is decreasing.
        // When `i` reaches -1, it"s comparing undefined and a number, which gives false.
        // When this completes, `i` is pointing at the index right before the longest decreasing subsequence from the end.
        while (array[i--] < array[i]);
        // if `i` is -1, the whole sequence is decreasing. There"s no next permutation.
        if (!(i+1)) return false;
        // This is the number to be swapped out, 3 in the example. We are going to find a number in the subsequence that
        // is slightly larger than this.
        let n = array[i];
        // This is the starting point of our search for the slightly larger number.
        let m = array[i+1];
        let mi = i+1;
        for (let j = last; j > i; j--) {
            let k = array[j];
            // This statements checks if the current item is larger than the number to be swapped out and smaller than
            // the existing candidate because we want it to be as small as possible for minimum increment.
            if (k > n && k < m) {
                m = k;
                mi = j;
            }
        }
        // Usual swapping.
        array[mi] = array[i];
        array[i] = m;
        // Recall that `i` is pointing at the index right before the longest decreasing subsequence from the end. Plus
        // one and it's the start of the decreasing sequence. Remove the subsequence from the array by using .splice(),
        // reverse it and push it back to the array.
        // [6 8 7 4 5 3 2 1] -> [6 8 7 4 5] [3 2 1] -> [6 8 7 4 5] [1 2 3] -> [6 8 7 4 5 1 2 3]
        array.push(...array.splice(i+1).reverse());
        return true;
    }

    window.calculateBuild = calculateBuild;
    window.findStatReq = findStatReq;
});