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
                continue;
            }
            let name = items[i].name;
            let item = globalItemDb[name];
            if (!item) {
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

    function renderBuild(build) {
        console.log(build);
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
                ['strength', 'dexterity', 'intelligence', 'defense', 'agility'].forEach(skill => {
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