ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance, mesh_tier, multip){
        event.custom({
            "type": "exdeorum:compressed_sieve",
            "ingredient": {
                "item": input
            },
            "mesh": mesh_tier,
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 3.0,
                "p": chance * multip
            }
        });
    };

    // ========= dust =========

    const dirt_results = {
        'exdeorum:stone_pebble': 3.66,
        'pamhc2crops:riceseeditem':0.07,
        'exdeorum:grass_seeds':0.07,
        'pamhc2crops:grapeseeditem':0.03,
        'pamhc2foodcore:sunflowerseedsitem':0.03,
        'minecraft:sugar_cane':0.03,
        'pamhc2crops:tomatoseeditem':0.02,
        'pamhc2crops:peanutseeditem':0.02,
        'pamhc2crops:soybeanseeditem':0.01,
        'minecraft:birch_sapling':0.01,
        'minecraft:oak_sapling':0.02,
        'minecraft:spruce_sapling':0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(dirt_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
        add_sieve('exdeorum:compressed_dirt', output, chance, mesh_tier, multip);
        }
    }
    
});