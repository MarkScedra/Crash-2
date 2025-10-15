ServerEvents.recipes(event => {
    /*event.shaped(
        Item.of('kubejs:string_helmet', 1),
        [
            'SSS',
            'S S'
        ],
        {
            S: '#forge:string'
        }
    )
    event.shaped(
        Item.of('kubejs:string_chestplate', 1),
        [
            'S S',
            'SSS',
            'SSS'
        ],
        {
            S: '#forge:string'
        }
    )
    event.shaped(
        Item.of('kubejs:string_leggings', 1),
        [
            'SSS',
            'S S',
            'S S'
        ],
        {
            S: '#forge:string'
        }
    )
    event.shaped(
        Item.of('kubejs:string_boots', 1),
        [
            'S S',
            'S S'
        ],
        {
            S: '#forge:string'
        }
    )*/
    
    event.shaped(
        Item.of('kubejs:desert_cap', 1),
        [
            'LWL',
            'S S'
        ],
        {
            L: '#forge:leather',
            S: '#forge:string',
            W: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('kubejs:desert_tunic', 1),
        [
            'S S',
            'LWL',
            'SSS'
        ],
        {
            L: '#forge:leather',
            S: '#forge:string',
            W: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('kubejs:desert_pants', 1),
        [
            'SWS',
            'L L',
            'L L'
        ],
        {
            L: '#forge:leather',
            S: '#forge:string',
            W: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('kubejs:desert_shoes', 1),
        [
            'L L',
            'P P'
        ],
        {
            L: '#forge:leather',
            P: '#minecraft:planks'
        }
    )
    
    event.shaped(
        Item.of('kubejs:snow_hat', 1),
        [
            'WWW',
            'L L'
        ],
        {
            L: '#forge:leather',
            W: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('kubejs:snow_coat', 1),
        [
            'L L',
            'WLW',
            'WLW'
        ],
        {
            L: '#forge:leather',
            W: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('kubejs:snow_pants', 1),
        [
            'WWW',
            'L L',
            'L L'
        ],
        {
            L: '#forge:leather',
            W: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('kubejs:snow_boots', 1),
        [
            'W W',
            'L L'
        ],
        {
            L: '#forge:leather',
            W: '#minecraft:wool'
        }
    )
});