ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/shovel', 'kubejs:dust_pile')

    event.add('minecraft:mineable/pickaxe', 'kubejs:metal_crate')
    event.add('minecraft:mineable/pickaxe', 'kubejs:white_ship_chair')
})