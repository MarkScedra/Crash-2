ServerEvents.recipes(event => {
  // removes all recipes of the following types
  event.remove({ type: 'create_mechanical_extruder:extruding' });
  event.remove({ type: 'thermal:rock_gen' });



  function extrude(result, adjacent, isLiquid, catalyst, inventoryFluid) {
    // Create Mechanical Extruder recipe
    var extruder = {
      type: 'create_mechanical_extruder:extruding',
      ingredients: [
        { amount: 1000, fluid: 'minecraft:lava', nbt: {} }
      ],
      result: { item: result }
    };
    if (isLiquid) {
      extruder.ingredients.push({ amount: 1000, fluid: (inventoryFluid || adjacent), nbt: {} });
    } else {
      extruder.ingredients.push({ item: adjacent });
    }
    if (catalyst) {
      extruder.catalyst = { item: catalyst };
    }
    event.custom(extruder)
      .id('crash_landing:extruder/' + result.split(':')[1] + '_' + (inventoryFluid || adjacent).split(':')[1]);

    // Thermal Extruder recipe
    var rockGen = {
      type: 'thermal:rock_gen',
      adjacent: adjacent,
      result: { item: result }
    };
    if (catalyst) {
      rockGen.below = catalyst;
    }
    event.custom(rockGen)
      .id('crash_landing:rock_gen/' + result.split(':')[1] + '_' + adjacent.split(':')[1]);
  }

  // Define extruding recipes
  extrude('minecraft:cobblestone', 'minecraft:water', true);
  extrude('minecraft:stone', 'minecraft:water', true, 'minecraft:magma_block');
  extrude('minecraft:basalt', 'minecraft:blue_ice', false, 'minecraft:soul_soil');
  extrude('minecraft:blackstone', 'minecraft:blue_ice', false);
  extrude('minecraft:cobbled_deepslate', 'minecraft:packed_ice', false);
  extrude('minecraft:deepslate', 'minecraft:packed_ice', false, 'minecraft:magma_block');
  //extrude('minecraft:netherrack', 'exdeorum:witch_water', true);
  extrude('minecraft:netherrack', 'thermal:redstone_fluid', true, null, 'thermal:redstone');
  extrude('minecraft:end_stone', 'thermal:ender_fluid', true, null, 'thermal:ender');
  extrude('create:limestone', 'create:honey', true);
  extrude('create:scoria', 'create:chocolate', true);
});