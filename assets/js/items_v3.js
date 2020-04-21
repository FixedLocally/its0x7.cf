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
    // min dmg, max dmg, conversion, +def, -def
    let powderStats = {
        E: [['earth','air'],[3,6,17,2,1],[6,9,21,4,2],[8,14,25,8,3],[11,16,31,14,5],[15,18,38,22,9],[18,22,46,30,13]],
        T: [['thunder','earth'],[1,8,9,3,1],[1,13,11,5,1],[2,18,14,9,2],[3,24,17,14,4],[3,32,22,20,7],[5,40,28,28,10]],
        W: [['water','thunder'],[3,4,13,3,1],[4,7,15,6,1],[6,10,17,11,2],[8,12,21,18,4],[11,14,26,28,7],[13,17,32,40,10]],
        F: [['fire','water'],[2,5,14,3,1],[4,8,16,5,2],[6,10,19,9,3],[9,13,24,16,5],[12,16,30,25,9],[15,19,37,36,13]],
        A: [['air','fire'],[2,6,11,3,1],[4,9,14,6,2],[7,10,17,10,3],[9,13,22,16,5],[13,18,28,24,9],[16,18,35,34,13]]
    };

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
            select.change(() => {
                let build =  dropdowns.map(dropdown => {
                    let select = $('#' + dropdown[0] + ' > select');
                    let name = select.val();
                    return {name};
                });
                renderBuild(calculateBuild(build));
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
                console.warn("Item " + i + " not found");
                continue;
            }
            let name = items[i].name;
            let item = globalItemDb[name];
            if (!item) {
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
                        console.log(lower, upper, originalDamage);
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
        totalBase.health += (totalReq.level || 1) * 5 + 5;
        return {
            identification: totalIdentifications,
            base: totalBase,
            req: totalReq,
            items: realItems,
            conversion: conversion
        };
    }

    function renderBuild(build) {
        console.log(build);
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
        let i = array.length - 1;
        let last = i;
        while (array[i--] < array[i]);
        if (!(i+1)) return false;
        let n = array[i];
        let m = array[i+1];
        let mi = i+1;
        for (let j = last; j > i; j--) {
            let k = array[j];
            if (k > n && k < m) {
                m = k;
                mi = j;
            }
        }
        array[mi] = array[i];
        array[i] = m;
        array.push(...array.splice(i+1).reverse());
        return true;
    }

    window.calculateBuild = calculateBuild;
});