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
      .id('desolate_planet:extruder/' + result.split(':')[1] + '_' + (inventoryFluid || adjacent).split(':')[1]);

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
      .id('desolate_planet:rock_gen/' + result.split(':')[1] + '_' + adjacent.split(':')[1]);
  }

  // Define extruding recipes
  extrude('minecraft:cobblestone', 'minecraft:water', true);
  extrude('minecraft:stone', 'minecraft:water', true, 'minecraft:magma_block');

  extrude('minecraft:cobbled_deepslate', 'minecraft:packed_ice', false);                          // metamorphic
  extrude('minecraft:deepslate', 'minecraft:packed_ice', false, 'minecraft:magma_block');         // metamorphic
  extrude('create:scoria', 'minecraft:packed_ice', false, 'minecraft:soul_soil');                 // igneous

  extrude('minecraft:blackstone', 'minecraft:blue_ice', false);                                   // likely igneous
  // to continue with the pattern, a smooth blackstone recipe would go here and use magma blocks  // likely igneous
  extrude('minecraft:basalt', 'minecraft:blue_ice', false, 'minecraft:soul_soil');                // igneous



  extrude('minecraft:netherrack', 'thermal:redstone_fluid', true, null, 'thermal:redstone');
  extrude('minecraft:end_stone', 'thermal:ender_fluid', true, null, 'thermal:ender');
});