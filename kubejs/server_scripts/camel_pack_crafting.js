ServerEvents.recipes(function (event) {
    event.shaped(
        Item.of('kubejs:filter', 1),
        [
            'PGP',
            'PCP',
            ' P '
        ],
        {
            C: 'minecraft:charcoal',
            G: '#forge:gravel',
            P: 'minecraft:paper'
        }
    )
    event.shaped(
        Item.of('kubejs:camel_pack', 1),
        [
            'SLS',
            'LFL',
            'LBL'
        ],
        {
            B: 'minecraft:bucket',
            F: 'kubejs:filter',
            L: '#forge:leather',
            S: '#forge:string'
        }
    )
})
