ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:leather', type: 'yaam:drying_recipe' });
    event.remove({ output: 'exdeorum:end_cake' });
    event.remove({ output: 'thermal:dynamo_magmatic' });
    event.remove({ output: 'industrialforegoing:mycelial_magma' });
    event.remove({ type: 'exdeorum:compressed_sieve' });
    event.remove({ mod: 'simplyjetpacks' });
    event.remove({ mod: 'ad_astra' });
    event.remove({ id: 'tconstruct:molten_pewter' });
    event.remove({ output: 'minecraft:potion', type: 'tconstruct:casting_table' });
    event.remove({ type: 'tconstruct:casting_table_potion' });
    event.remove({ type: 'exdeorum:water_crucible' });
    event.remove({ type: 'create:potions' });
    event.remove({ output: 'mekanism:basic_control_circuit', type: 'mekanism:metallurgic_infusing' });
    event.remove({ output: 'minecraft:coarse_dirt', type: 'minecraft:crafting_shaped' });
    event.remove({ mod: 'cgm' });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:invar_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:lumium_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:enderium_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:electrum_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:constantan_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:bronze_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ mod: 'thermal', input: 'minecraft:fire_charge', output: 'thermal:signalum_ingot', type: "minecraft:crafting_shapeless" });
    event.remove({ id: 'tconstruct:smeltery/casting/scorched/brick_composite' });
    event.remove({ id: 'tconstruct:smeltery/casting/scorched/stone_from_magma' });
    event.remove({ output: 'cookingforblockheads:sink' });
    event.remove({ output: 'mekanism:ingot_refined_obsidian', type: "tconstruct:casting_table" });
    event.remove({ mod: 'mob_grinding_utils' });
    /*event.remove({ type: "tconstruct:ore_melting" });*/
    event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/ore_sparse' });
    event.remove({ output: 'minecraft:soul_sand', type: 'create:haunting' });
    event.remove({ id: 'tconstruct:smeltery/casting/seared/brick_composite' });
    event.remove({ id: 'tconstruct:smeltery/casting/seared/stone/block_from_seared' });
    
    
    exdeorum.removeDefaultSieveRecipes(event);
});



