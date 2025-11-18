ServerEvents.tags('item', event => {
    event.add('desolate_planet:staple_fruits',
        'kubejs:staple_fruits',
        'minecraft:apple',
        'minecraft:sweet_berries',
        'minecraft:melon_slice',
    )

    event.add('desolate_planet:staple_proteins',
        'kubejs:staple_proteins',
        'legumedelight:beans',
        'legumedelight:peanuts'
    )

    event.add('desolate_planet:staple_vegetables',
        'kubejs:staple_vegetables',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:beetroot',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:tomato',
        'farmersdelight:onion'
    )
});
