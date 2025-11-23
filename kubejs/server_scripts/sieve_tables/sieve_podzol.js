ServerEvents.recipes(event => {

    const add_sieve = function (input, output, chance, mesh_tier, multip) {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": input
            },
            "mesh": mesh_tier,
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": chance * multip
            }
        });
    };

    const podzol_results = {
        'minecraft:slime_ball': 0.2,
        'tconstruct:sky_slime_ball': 0.10,
        'tconstruct:earth_slime_sapling': 0.05,
        'tconstruct:sky_slime_sapling': 0.03,

        'minecraft:spruce_sapling': 0.2,
        'minecraft:oak_sapling': 0.08,
        'minecraft:dark_oak_sapling': 0.05,
        'minecraft:jungle_sapling': 0.03,
        'minecraft:mangrove_propagule': 0.02,
        'minecraft:cherry_sapling': 0.02,
        'minecraft:acacia_sapling': 0.02,
        'minecraft:birch_sapling': 0.02,

        'exdeorum:grass_seeds': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(podzol_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
            add_sieve('minecraft:podzol', output, chance, mesh_tier, multip);
        }
    }

});
