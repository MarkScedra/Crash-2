ServerEvents.recipes(event => {
    // Removed because they already exist in other ways
    [
        'farmersdelight:cooking/salt',
        'farmersdelight:mixing/dough_from_eggs',
        'farmersdelight:mixing/wheat_dough_from_eggs',
    ].forEach(id => {
        event.remove({ id: id });
    });

    // Specific recipe changes
    event.remove({ id: 'culturaldelights:cooking/raw_pasta' });
    event.remove({ id: 'farmersdelight:pie_crust' });
    event.shaped(
        Item.of('farmersdelight:pie_crust', 1),
        [
            'SMS',
            'www'
        ],
        {
            M: '#forge:milk',
            S: '#forge:sugar',
            w: 'minecraft:wheat'
        }
    ).id('desolate_planet:pie_crust');

    // Rope
    event.shaped(
        Item.of('farmersdelight:rope', 3),
        [
            'SS',
            'SS',
            'SS'
        ],
        {
            S: '#forge:string'
        }
    ).id('desolate_planet:rope_from_string');

    // Canvas
    event.shaped(
        Item.of('farmersdelight:canvas', 1),
        [
            'PS',
            'SP'
        ],
        {
            P: 'minecraft:paper',
            S: '#forge:string'
        }
    ).id('desolate_planet:rope_from_string');

    // Compost changes
    event.remove({ output: 'farmersdelight:organic_compost' });
    event.shapeless(
        Item.of('farmersdelight:organic_compost'), [
            'minecraft:dirt',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
            ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
            ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw']
        ]
    ).id('desolate_planet:organic_compost_from_rotten_flesh');
    event.shapeless(
        Item.of('farmersdelight:organic_compost'), [
            'minecraft:dirt',
            '#forge:vegetables',
            '#forge:vegetables',
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
            ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
            ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw']
        ]
    ).id('desolate_planet:organic_compost_from_vegetables');
});

ServerEvents.tags('item', event => {
    //Tweaks to make certain foods more nutritional
    event.add('diet:grains',
        'kubejs:enderios',
        'kubejs:nutrient_brick',
        'legumedelight:beans_and_rice',
        'legumedelight:chili',
        'legumedelight:trail_mix'
    )
    event.add('diet:proteins',
        'kubejs:bug_broth',
        'kubejs:nutrient_brick',
        'legumedelight:baked_beans',
        'legumedelight:beans_and_rice',
        'legumedelight:chili',
        'legumedelight:peanut_bar', // overrides so peanut bar includes only protein and no sugar
        'legumedelight:trail_mix'
    )
    event.add('diet:vegetables',
        'kubejs:bug_broth',
        'kubejs:enderios',
        'kubejs:nutrient_brick',
        'legumedelight:baked_beans',
        'legumedelight:beans_and_rice',
        'legumedelight:chili'
    )
    event.add('diet:fruits',
        'kubejs:enderios',
        'kubejs:nutrient_brick'
    )
    event.add('diet:sugars',
        'legumedelight:baked_beans'
    )

    // Removed until player unlocks spawn eggs
    event.add('desolate_planet:animal_sourced',
        '#forge:cooked_beef',
        '#forge:cooked_chicken',
        '#forge:cooked_mutton',
        '#forge:cooked_pork',
        '#forge:foods/meat/cooked',
        '#forge:foods/meat/raw',
        '#forge:raw_beef',
        '#forge:raw_chicken',
        '#forge:raw_mutton',
        '#forge:raw_pork',
        // 'culturaldelights:beef_burrito',
        // 'culturaldelights:chicken_roll_slice',
        // 'culturaldelights:chicken_roll',
        // 'culturaldelights:chicken_taco',
        // 'culturaldelights:egg_roll',
        // 'culturaldelights:exotic_roll_medley',
        // 'culturaldelights:mutton_sandwich',
        // 'culturaldelights:pork_wrap',
        // 'culturaldelights:spicy_curry',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:barbecue_stick',
        'farmersdelight:beef_stew',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:chicken_soup',
        'farmersdelight:cod_roll',
        'farmersdelight:dog_food',
        'farmersdelight:fried_egg',
        'farmersdelight:ham',
        'farmersdelight:hamburger',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:horse_feed',
        'farmersdelight:mutton_chops',
        'farmersdelight:mutton_wrap',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:roast_chicken',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roasted_mutton_chops_block',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:shepherds_pie',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:smoked_ham',
        'farmersdelight:steak_and_potatoes',
        'minecraft:rabbit_stew',
        // 'moredelight:chicken_salad',
        // 'moredelight:chicken_sandwich_with_egg_and_tomato',
        // 'moredelight:cooked_rice_with_beef',
        // 'moredelight:cooked_rice_with_chicken_cuts',
        // 'moredelight:cooked_rice_with_porkchop',
        // 'moredelight:creamy_pasta_with_chicken_cuts',
        // 'moredelight:creamy_pasta_with_ham',
        // 'moredelight:diced_potatoes_with_beef',
        // 'moredelight:diced_potatoes_with_chicken_cuts',
        // 'moredelight:diced_potatoes_with_porkchop',
        // 'moredelight:egg_sandwich',
        // 'moredelight:egg_with_bacon_sandwich',
        // 'moredelight:hamburger_with_egg',
        // 'moredelight:loaded_hamburger',
        // 'moredelight:omelette',
        // 'moredelight:porkchop_sandwich',
        // 'moredelight:simple_hamburger',
        // 'moredelight:steak_sandwich',
        // 'moredelight:toast_with_egg',
    )

    // Removed because fish don't exist in the desert
    event.add('desolate_planet:fish_sourced',
        '#forge:cooked_fishes',
        '#forge:raw_fishes',
        // 'culturaldelights:cooked_calamari',
        // 'culturaldelights:cooked_squid',
        // 'culturaldelights:exotic_roll_medley',
        // 'culturaldelights:fish_taco',
        // 'culturaldelights:glow_squid',
        // 'culturaldelights:pufferfish_roll',
        // 'culturaldelights:raw_calamari',
        // 'culturaldelights:rice_ball',
        // 'culturaldelights:squid',
        // 'culturaldelights:tropical_roll',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:fish_stew',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:rice_roll_medley',
        'farmersdelight:salmon_roll',
        'farmersdelight:grilled_salmon',
    )
});

/*
    .setRenderItemName(false)           // defaults to false
    .setHideTooltip(true)               // defaults to true
    .setCanPickedUp(false)              // defaults to false
    .setCanBeEquipped(false)            // defaults to false
    .setCanBeStoredInInventory(false)   // defaults to false
    .setCanAttack(false)                // defaults to false
    .setHideInJEI(true)                 // defaults to true
    .setCanBePlaced(false)              // defaults to false
    .setCanItemBeLeftClicked(false)     // defaults to false
    .setCanItemBeRightClicked(false)    // defaults to false
    .setCanInteractWithBlock(true)      // defaults to true
    .setCanBeStoredInContainers(false)  // defaults to false
*/

AStages.addRestrictionForTag('desolate_planet:egg_sourced', 'eggs', 'desolate_planet:egg_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:milk_sourced', 'milk', 'desolate_planet:milk_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:animal_sourced', 'animals', 'desolate_planet:animal_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:fish_sourced', 'fish', 'desolate_planet:fish_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)
