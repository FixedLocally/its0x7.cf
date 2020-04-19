$(function () {
    // load item db
    let globalItemDb = {};

    console.log('window ready');
    loadItemDb().then(itemDb => {
        itemDb.forEach(item => globalItemDb[item.info.name] = item);
        console.log(globalItemDb);

        // load into dropdown menus
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
        dropdowns.forEach((dropdown) => {
            let select = $('#' + dropdown[0] + ' > select');
            itemDb.filter(x => (x.info.type || x.accessoryType).toLowerCase() === dropdown[1] || x.category.toLowerCase() === dropdown[1])
                .map(x => x.info.name).sort().forEach(name => {
                    select.append(`<option value="${name}">${name}</option>`);
                });
            select.chosen({width: '100%'}).addClass('col-md-3 col-sm-4');
            select.change(console.log);
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
     * @param items The items equipped
     * @param skills The skill points allocated
     */
    function calculateBuild(items, skills) {
        // check for the correct types [helm, chest, leggings, boots, ring, ring, bracelet, necklace, wep]
        let correctOrder = ['helmet', 'chestplate', 'leggings', 'boots', 'ring', 'ring', 'bracelet', 'necklace', 'weapon'];
        for (let i = 0; i < 9; i++) {
            let name = items[i].name;
            let item = globalItemDb[name];
            if ((item.info.type || x.accessoryType).toLowerCase() !== correctOrder[i] && x.category.toLowerCase() !== correctOrder[i]) {
                return null;
            }
            // this item passed the check, populate it with the real one
            let realItem = JSON.parse(JSON.stringify(item));
            override(item.identification, items.override);
        }
    }

    // overrides source with data, overriding an object with a primitive won't work
    function override(source, data) {
        if (data === undefined) {
            return source;
        }
        for (let i in source) {
            if (source.hasOwnProperty(i)) {
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
});