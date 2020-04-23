$(function () {
    // some globals
    let globalItemDb = {};
    let dropdowns = [
        ['helmet_select', 'helmet'],
        ['chestplate_select', 'chestplate'],
        ['leggings_select', 'leggings'],
        ['boots_select', 'boots'],
        ['ring0_select', 'ring'],
        ['ring1_select', 'ring'],
        ['bracelet_select', 'bracelet'],
        ['necklace_select', 'necklace'],
        ['weapon_select', 'weapon'],
    ];
    // [suffix, id]
    let idMap = {
        damages: {
            spellPercent: ['%', 'Spell Damage'],
            spellRaw: ['', 'Neutral Spell Damage'],
            meleePercent: ['%', 'Main Attack Damage'],
            meleeRaw: ['', 'Main Attack Neutral Damage'],
        },
        regen: {
            healthPercent: ['%', 'Health Regen'],
            healthRaw: ['', 'Health Regen'],
            mana: ['/4s', 'Mana Regen'],
            soulPoint: ['%', 'Soul Pint Regen']
        },
        steal: {
            mana: ['/4s', 'Mana Steal'],
            health: ['/4s', 'Life Steal']
        },
        others: {
            attackSpeedBonus: [' Tier', 'Attack Speed'],
            exploding: ['%', 'Exploding'],
            healthBonus: ['', 'Health'],
            jumpHeight: ['', 'Jump Height'],
            lootBonus: ['%', 'Loot Bonus'],
            lootQuality: ['%', 'Loot Quality'],
            poison: ['/3s', 'Poison'],
            reflection: ['%', 'Reflection'],
            sprint: ['%', 'Sprint'],
            sprintRegen: ['%', 'Sprint Regen'],
            stealing: ['%', 'Stealing'],
            thorns: ['%', 'Thorns'],
            walkSpeed: ['%', 'Walk Speed'],
            xpBonus: ['%', 'XP Bonus']
        }
    };
    // min dmg, max dmg, conversion, +def, -def
    let powderStats = {
        E: [['earth','air'],[3,6,17,2,1],[6,9,21,4,2],[8,14,25,8,3],[11,16,31,14,5],[15,18,38,22,9],[18,22,46,30,13]],
        T: [['thunder','earth'],[1,8,9,3,1],[1,13,11,5,1],[2,18,14,9,2],[3,24,17,14,4],[3,32,22,20,7],[5,40,28,28,10]],
        W: [['water','thunder'],[3,4,13,3,1],[4,7,15,6,1],[6,10,17,11,2],[8,12,21,18,4],[11,14,26,28,7],[13,17,32,40,10]],
        F: [['fire','water'],[2,5,14,3,1],[4,8,16,5,2],[6,10,19,9,3],[9,13,24,16,5],[12,16,30,25,9],[15,19,37,36,13]],
        A: [['air','fire'],[2,6,11,3,1],[4,9,14,6,2],[7,10,17,10,3],[9,13,22,16,5],[13,18,28,24,9],[16,18,35,34,13]]
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
        earth: '✤',
        thunder: '✦',
        water: '❉',
        fire: '✹',
        air: '❋'
    };
    let elemColours = {
        earth: 'dark_green',
        thunder: 'yellow',
        water: 'aqua',
        fire: 'red',
        air: 'white'
    };
    let elementList = ['earth', 'thunder', 'water', 'fire', 'air'];
    let skillList = ['strength', 'dexterity', 'intelligence', 'defense', 'agility'];
    let itemListBox = $('#item_list_box');
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

    console.log('window ready');
    // load item db
    loadItemDb().then(itemDb => {
        itemDb.forEach(item => globalItemDb[item.displayName || item.info.name] = item);
        console.log(globalItemDb);

        // load into dropdown menus
        dropdowns.forEach((dropdown) => {
            let select = $('#' + dropdown[0] + ' > select');
            itemDb.filter(x => (x.info.type || x.accessoryType).toLowerCase() === dropdown[1] || x.category.toLowerCase() === dropdown[1])
                .map(x => x.displayName || x.info.name).sort().forEach(name => {
                    select.append(`<option value="${name}">${name}</option>`);
                });
            select.chosen({width: '100%'}).addClass('col-md-3 col-sm-4');
            select.change((e, o) => {
                let build = dropdowns.map(dropdown => {
                    let select = $('#' + dropdown[0] + ' > select');
                    let name = select.val();
                    return {name};
                });
                let calculatedBuild = calculateBuild(build);
                let realReq = {req: {}};
                let parentId = e.target.parentElement.id;
                let type = parentId.replace('_select', '');
                let index = ['helmet', 'chestplate', 'leggings', 'boots', 'ring0', 'ring1', 'bracelet', 'necklace', 'weapon'].indexOf(type);
                if (type !== 'weapon') {
                    currentReq = findStatReq(calculatedBuild.items);
                    realReq = currentReq;
                } else {
                    // take the skills we have and see what else do we need
                    let weaponItem = globalItemDb[o.selected];
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
                }
                let item = calculatedBuild.items[index];
                let box = $(`#${type}_div`).empty();
                if (item.info.sockets) {
                    box.append(generateItemBox(item, false));
                }
                // $(`#${type}_div`).empty();
                console.log(currentReq);
                renderBuild(calculatedBuild, realReq);
            });
        })
    });

    async function loadItemDb() {
        // load from server lol, maybe cached tho
        return await fetch('/build/itemdb.json').then(data => data.json()).then(json => json.itemDB)
    }

    /**
     * Calculates the build's stats according to the items and skill points allocated.
     * Normally we use the item's base stats as outlined in itemDB, but stats can be overridden,
     * even if the override is outside of the normal range we won't check
     * @param items The items equipped as an array
     * @param skills The skill points allocated
     */
    function calculateBuild(items, skills) {
        // check for the correct types [helm, chest, leggings, boots, ring, ring, bracelet, necklace, wep]
        let correctOrder = ['helmet', 'chestplate', 'leggings', 'boots', 'ring', 'ring', 'bracelet', 'necklace', 'weapon'];
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
                console.warn("Item " + name + " not found");
                continue;
            }
            if ((item.info.type || item.accessoryType).toLowerCase() !== correctOrder[i] && item.category.toLowerCase() !== correctOrder[i]) {
                return null;
            }
            // must clone since we don't want to override the base item
            let realItem = JSON.parse(JSON.stringify(item));
            // this item passed the check, populate it with the real one
            override(realItem.identification, items.override);
            // powders
            if (Array.isArray(items[i].powder)) {
                let powders = items[i].powder.slice(0, realItem.info.sockets);
                realItem.powders = powders;

                for (let j = 0; j < powders.length; j++) {
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
                        let [lower, upper] = originalDamage.split('-').map(x => parseInt(x));
                        // console.log(lower, upper, originalDamage);
                        lower += powder[0];
                        upper += powder[1];
                        realItem.base.damage[elemName] = lower + '-' + upper;
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
        totalBase.health = (totalBase.health || 0) + (totalReq.level || 1) * 5 + 5;
        return {
            identification: totalIdentifications,
            base: totalBase,
            req: totalReq,
            items: realItems,
            conversion: conversion
        };
    }

    function renderBuild(build, realReq) {
        console.log(build, realReq);
        itemListBox.empty();
        build.items.forEach(item => {
            if (item != null) {
                itemListBox.append(generateItemBox(item, true));
            }
        });
        resetPos();
    }

    function generateItemBox(item, floatLeft) {
        let itemBox;
        let newLine = false;
        if (floatLeft) {
            itemBox = $('<div class="item float_left" style="position: absolute; top: 0; left: 0;"></div>');
        } else {
            itemBox = $('<div class="item"></div>');
        }
        // 1. name coloured according to tier
        itemBox.append(`<span class="item_name ${item.info.tier.toLowerCase()}">${item.displayName || item.info.name}</span><br>`);
        // 2. weapon attack speed
        if (item.category === 'weapon') {
            itemBox.append(`<span class="atk_speed">${capitalize(item.base.attackSpeed)} Attack Speed</span><br>`);
        }
        itemBox.append('<br>');
        if (item.category !== 'weapon') {
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
            // 5. weapon damages
            elementList.forEach(elem => {
                let value = item.base.damage[elem];
                if (value !== '0-0') {
                    itemBox.append(`<span class="mctext ${elemColours[elem]}">${elemIcons[elem]} ${capitalize(elem)}</span><span> Damage: ${value}</span><br>`);
                    newLine = true;
                }
            });
        }
        // TODO 6. powder special
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
            itemBox.append('<br>');
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
            itemBox.append('<br>');
            newLine = false;
        }
        // 9. ids
        {
            // damages
            {
                elementList.forEach(elem => {
                    let value = item.identification.damage[elem];
                    if (value) {
                        itemBox.append(`<span class="mctext ${value > 0 ? "green" : "red"}">${nToString(value)}%</span><span> ${capitalize(elem)} Damage</span><br>`);
                        newLine = true;
                    }
                });
                for (let i in idMap.damages) {
                    if (idMap.damages.hasOwnProperty(i)) {
                        let value = item.identification.damage[i];
                        let line = idMap.damages[i];
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
                let ordinals = ['1st', '2nd', '3rd', '4th'];
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
            itemBox.append('<br>');
            newLine = false;
        }
        // 10. powder slots
        {
            let type = item.info.type.toLowerCase();
            let {sockets} = item.info;
            if (type == 'relik' || type == 'wand' || type == 'bow' || type == 'spear' || type == 'dagger') {
                type = 'weapon';
            }
            let powderArray = powderList[type].filter(x => !!x);
            let powderCount = Math.min(powderArray.length, sockets);
            if (sockets) {
                if (!powderCount) {
                    itemBox.append(`<span>[0/${sockets}] Powder Slots</span><br>`);
                } else {
                    let powderString = '';
                    for (let i = 0; i < powderArray.length; i++) {
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
            itemBox.append(`<span class="mctext dark_gray">${item.info.lore} Item</span><br>`);
        }
        return itemBox;
    }

    function capitalize(s) {
        return s.split('_').map(x => x.substr(0, 1).toUpperCase() + x.substr(1).toLowerCase()).join(' ');
    }

    function resetPos() {
        const CONTAINER = '#item_list_box';
        const SELECTOR = '.item.float_left';
        const COLUMN_WIDTH = 250;
        const VERTICAL_MARGIN = 40;
        const HORIZONTAL_MARGIN = 24;

        let container = $(CONTAINER);
        let columns = Math.floor(container.width() / (HORIZONTAL_MARGIN + COLUMN_WIDTH));
        let height_occupied = [];
        let elems = container.children(SELECTOR);
        container.css('position', 'relative');
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
            $elem.css('position', 'absolute').css('top', min).css('left', COLUMN_WIDTH * idx + HORIZONTAL_MARGIN * idx);
            height_occupied[idx] += $elem.height() + VERTICAL_MARGIN;
        }
        let h = Math.max.apply(this, height_occupied);
        container.height(h);
    }

    function nToString(n) {
        return (n > 0 ? '+' : '') + n;
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
            combinations.push(calculateBuild(buildItems, [0, 0, 0, 0, 0]));
        }
        console.log(combinations);
        let currentOrder = [0, 1, 2, 3, 4, 5, 6, 7];
        currentOrder = currentOrder.filter(i => items[i]); // so that we don't consider empty slots
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
        if (currentValidMin) {
            return currentValidMin;
        }
        return currentMin;
    }

    // overrides source with data, overriding an object with a primitive won't work
    function override(source, data) {
        if (data === undefined) {
            return source;
        }
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                let obj = source[i];
                if (typeof obj === 'object') {
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

        })
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
        })
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
        if (typeof right === 'string') {
            return combiner(left, right);
        }
        for (let i in right) {
            if (right.hasOwnProperty(i)) {
                if (typeof left[i] === 'object') {
                    result[i] = combine(left[i], right[i], combiner);
                } else {
                    result[i] = combiner(left[i], right[i]);
                }
            }
        }
        return result;
    }

    function nextPermutation(array) {
        /* The algorithm: find the longest decreasing subsequence from the end, since we don't have a larger permutation
        for such a sequence, then find the smallest number that is larger than the one before the decreasing
        subsequence, and swap the smallest with the one before. That way we increment the whole sequence the least.
        However this way the decreasing subsequence that we've found is still decreasing, so we reverse it to become an
        increasing one, just like 39+1=40, the last digit is reset from the highest possible value to the lowest.
        6 8 7 4 3 [(5) 2 1] -> 6 8 7 4 (5) [3 2 1] -> 6 8 7 4 5 1 2 3
         */
        // The last index of the array, our starting point.
        let i = array.length - 1;
        let last = i;
        // `i--` returns the value before the decrement, so it is one larger than the decremented `i`.
        // So this expands to `while (i--, array[i + 1] < array[i]);`, which continues iff the next item is is smaller
        // than the last item i.e. true if the pair is decreasing.
        // When `i` reaches -1, it's comparing undefined and a number, which gives false.
        // When this completes, `i` is pointing at the index right before the longest decreasing subsequence from the end.
        while (array[i--] < array[i]);
        // if `i` is -1, the whole sequence is decreasing. There's no next permutation.
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