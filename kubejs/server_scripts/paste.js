// Tags
ServerEvents.tags('item', event => {
    event.add('forge:adhesive', 'kubejs:paste')
    event.add('forge:adhesive', '#forge:slimeballs')
    event.add('forge:paste', 'kubejs:paste')
    event.add('forge:glue', 'kubejs:paste')
})

// Recipes
ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:sticky_piston' });

    [
        'create:crafting/kinetics/super_glue',
        'create:crafting/kinetics/sticker',
        'create:crafting/kinetics/sticky_mechanical_piston',
        'createaddition:crafting/large_connector_electrum',
        'createaddition:crafting/large_connector_gold',
        'createaddition:crafting/small_connector_copper',
        'pneumaticcraft:pressure_chamber/capacitor', // not working, using datapack instead
        'tconstruct:common/slime/sticky_piston',
        'tconstruct:tables/book_substitute'
    ].forEach(recipeid => {
        event.replaceInput({ id: recipeid }, '#forge:slimeballs', '#forge:adhesive');
    });



    event.remove({ output: '#forge:dough' });
    event.remove({ output: 'create:crafting/appliances/slime_ball' });

    event.shapeless(
        Item.of('create:dough', 3), [
        '#forge:flour',
        '#forge:flour',
        '#forge:water'
    ]
    ).id('crash_landing:dough_base_shapeless');

    event.shapeless(
        Item.of('kubejs:paste', 3), [
        '#forge:flour',
        '#forge:water',
        '#forge:water'
    ]
    ).id('crash_landing:paste_base_shapeless');

    event.shapeless(
        Item.of('create:dough', 2), [
        '#forge:paste',
        '#forge:flour'
    ]
    ).id('crash_landing:dough_from_paste_shapeless');

    event.shapeless(
        Item.of('kubejs:paste', 2), [
        '#forge:dough',
        '#forge:water'
    ]
    ).id('crash_landing:paste_from_dough_shapeless');

    event.custom({
        type: 'create:splashing',
        ingredients: [
            {
                tag: 'forge:flour/wheat'
            }
        ],
        results: [
            {
                item: 'create:dough'
            }
        ]
    }).id('crash_landing:dough_splashing');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'forge:flour/wheat'
            },
            {
                tag: 'forge:flour/wheat'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                item: 'create:dough',
                count: 3
            }
        ]
    }).id('crash_landing:dough_base_mixing');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'forge:flour/wheat'
            },
            {
                amount: 2000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                item: 'create:paste',
                count: 3
            }
        ]
    }).id('crash_landing:paste_base_mixing');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'forge:dough'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                item: 'create:paste',
                count: 2
            }
        ]
    }).id('crash_landing:paste_from_dough_mixing');
});