ServerEvents.tags('block', event => {
    event.add('desolate_planet:oak_leaves',
        'minecraft:oak_leaves',
        'immersiveweathering:oak_leaf_pile',
        '#chipped:oak_leaves'
    )
    event.add('desolate_planet:spruce_leaves',
        'minecraft:spruce_leaves',
        'immersiveweathering:spruce_leaf_pile',
        '#chipped:spruce_leaves'
    )
    event.add('desolate_planet:birch_leaves',
        'minecraft:birch_leaves',
        'immersiveweathering:birch_leaf_pile',
        '#chipped:birch_leaves'
    )
    event.add('desolate_planet:jungle_leaves',
        'minecraft:jungle_leaves',
        'immersiveweathering:jungle_leaf_pile'
    )
    event.add('desolate_planet:acacia_leaves',
        'minecraft:acacia_leaves',
        'immersiveweathering:acacia_leaf_pile',
        '#chipped:acacia_leaves'
    )
    event.add('desolate_planet:dark_oak_leaves',
        'minecraft:dark_oak_leaves',
        'immersiveweathering:dark_oak_leaf_pile',
        '#chipped:dark_oak_leaves'
    )
    event.add('desolate_planet:mangrove_leaves',
        'minecraft:mangrove_leaves',
        'immersiveweathering:mangrove_leaf_pile',
        '#chipped:mangrove_leaves'
    )
    event.add('desolate_planet:cherry_leaves',
        'minecraft:cherry_leaves',
        'immersiveweathering:cherry_leaf_pile',
        '#chipped:cherry_leaves'
    )
    event.add('desolate_planet:azalea_leaves',
        'minecraft:azalea_leaves',
        'minecraft:flowering_azalea_leaves',
        'immersiveweathering:azalea_leaf_pile',
        'immersiveweathering:flowering_azalea_leaf_pile'
    )
    event.add('desolate_planet:rubberwood_leaves',
        'thermal:rubberwood_leaves',
        'immersiveweathering:rubberwood_leaf_pile'
    )
    event.add('desolate_planet:earth_slime_leaves',
        'tconstruct:earth_slime_leaves',
        'immersiveweathering:earth_slime_leaf_pile'
    )
    event.add('desolate_planet:sky_slime_leaves',
        'tconstruct:sky_slime_leaves',
        'immersiveweathering:sky_slime_leaf_pile'
    )
    event.add('desolate_planet:ender_slime_leaves',
        'tconstruct:ender_slime_leaves',
        'immersiveweathering:ender_slime_leaf_pile'
    )
});

ServerEvents.recipes(event => {
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:oak_leaves" }, "chance": 0.1, "result": "exdeorum:silk_worm" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:oak_leaves" }, "chance": 0.2, "result": "minecraft:oak_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:spruce_leaves" }, "chance": 0.1, "result": "minecraft:spruce_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:birch_leaves" }, "chance": 0.1, "result": "minecraft:birch_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:jungle_leaves" }, "chance": 0.05, "result": "minecraft:jungle_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:acacia_leaves" }, "chance": 0.1, "result": "minecraft:acacia_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:dark_oak_leaves" }, "chance": 0.1, "result": "minecraft:dark_oak_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:mangrove_leaves" }, "chance": 0.1, "result": "minecraft:mangrove_propagule" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:cherry_leaves" }, "chance": 0.1, "result": "minecraft:cherry_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:azalea_leaves" }, "chance": 0.05, "result": "minecraft:azalea" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:rubberwood_leaves" }, "chance": 0.05, "result": "thermal:rubberwood_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:earth_slime_leaves" }, "chance": 0.1, "result": "tconstruct:earth_slime_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:sky_slime_leaves" }, "chance": 0.1, "result": "tconstruct:sky_slime_sapling" })
    event.custom({ "type": "exdeorum:crook", "block_predicate": { "block_tag": "desolate_planet:ender_slime_leaves" }, "chance": 0.1, "result": "tconstruct:ender_slime_sapling" })
});