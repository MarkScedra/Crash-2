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
        'create:crafting/logistics/package_frogport',
        'createaddition:crafting/large_connector_electrum',
        'createaddition:crafting/large_connector_gold',
        'createaddition:crafting/small_connector_copper',
        'pneumaticcraft:pressure_chamber/capacitor', // not working, using datapack instead
        'sophisticatedstorage:packing_tape',
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
    ).id('desolate_planet:dough_base_shapeless');

    event.shapeless(
        Item.of('kubejs:paste', 3), [
        '#forge:flour',
        '#forge:water',
        '#forge:water'
    ]
    ).id('desolate_planet:paste_base_shapeless');

    event.shapeless(
        Item.of('create:dough', 2), [
        '#forge:paste',
        '#forge:flour'
    ]
    ).id('desolate_planet:dough_from_paste_shapeless');

    event.shapeless(
        Item.of('kubejs:paste', 2), [
        '#forge:dough',
        '#forge:water'
    ]
    ).id('desolate_planet:paste_from_dough_shapeless');

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
    }).id('desolate_planet:dough_splashing');

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
    }).id('desolate_planet:dough_base_mixing');

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
    }).id('desolate_planet:paste_base_mixing');

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
    }).id('desolate_planet:paste_from_dough_mixing');
});