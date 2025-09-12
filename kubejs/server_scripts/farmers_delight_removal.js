ServerEvents.recipes(event => {
    // Removed for being too generous with food substitutes
    [
        'vegandelight:campfire_cooking/cooked_smoked_tofish_from_campfire_cooking',
        'vegandelight:campfire_cooking/leather_from_substitute_from_campfire_cooking',
        'vegandelight:compacting/agave_from_compacting',
        'vegandelight:compacting/blaze_cake_base_from_applesauce',
        'vegandelight:compacting/cake_from_applesauce',
        'vegandelight:cooking/agave',
        'vegandelight:cooking/ink_sac',
        'vegandelight:cooking/leather_substitute',
        'vegandelight:cooking/pasta_with_tofuballs',
        'vegandelight:crafting_shapeless/honey_glazed_tofu_block',
        'vegandelight:crafting_shapeless/roasted_tofu_chops',
        'vegandelight:crafting_shapeless/smoked_tofish',
        'vegandelight:crafting_shapeless/smoked_tofish_roll',
        'vegandelight:crafting_shapeless/tofish',
        'vegandelight:crafting_shapeless/tofish_roll',
        'vegandelight:crafting_shapeless/tofu_sandwich',
        'vegandelight:crafting_shapeless/vegan_hamburger',
        'vegandelight:crafting_shapeless/vegan_rice_roll_medley_block',
        'vegandelight:cutting/feather',
        'vegandelight:smelting/cooked_smoked_tofish',
        'vegandelight:smelting/cooked_tofish',
        'vegandelight:smelting/leather_from_substitute',
        'vegandelight:smoking/smoked_tofish_from_smoking'
    ].forEach(id => {
        event.remove({ id: id });
    });

    // Removed because they already exist in other ways
    [
        'farmersdelight:cooking/salt',
        'farmersdelight:mixing/dough_from_eggs',
        'farmersdelight:mixing/wheat_dough_from_eggs',
    ].forEach(id => {
        event.remove({ id: id });
    });
});



ServerEvents.tags('item', event => {
    event.remove('forge:egg', 'vegandelight:applesauce')
    event.remove('forge:eggs', 'vegandelight:applesauce')

    event.remove('forge:raw_chicken', 'vegandelight:tofu_slices')
    event.remove('forge:raw_mutton', 'vegandelight:tofu_slices')
    event.remove('forge:cooked_chicken', 'vegandelight:cooked_tofu_slices')
    event.remove('forge:cooked_mutton', 'vegandelight:cooked_tofu_slices')
    event.remove('forge:raw_pork', 'vegandelight:smoked_tofu_slices')
    event.remove('forge:cooked_pork', 'vegandelight:cooked_smoked_tofu_slices')
    event.remove('forge:raw_beef', 'vegandelight:minced_tofu')
    event.remove('forge:cooked_beef', 'vegandelight:tofu_patty')
    event.remove('forge:raw_fishes/cod', 'vegandelight:tofish')
    event.remove('forge:raw_fishes', 'vegandelight:tofish')
    event.remove('forge:cooked_fishes/cod', 'vegandelight:cooked_tofish')
    event.remove('forge:cooked_fishes', 'vegandelight:cooked_tofish')
    event.remove('forge:raw_fishes/salmon', 'vegandelight:smoked_tofish')
    event.remove('forge:raw_fishes', 'vegandelight:smoked_tofish')
    event.remove('forge:cooked_fishes/salmon', 'vegandelight:cooked_smoked_tofish')
    event.remove('forge:cooked_fishes', 'vegandelight:cooked_smoked_tofish')
});
