ServerEvents.recipes(event => {
  event.replaceInput(
    { input: 'minecraft:bucket' }, // Arg 1: the filter
    'minecraft:bucket',            // Arg 2: the item to replace
    '#c:empty_buckets'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

    event.replaceInput(
    { input: 'minecraft:bucket' }, // Arg 1: the filter
    'minecraft:bucket',            // Arg 2: the item to replace
    '#forge:buckets/empty'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

  event.replaceInput(
    { input: 'minecraft:dried_kelp', mod: "create"}, // Arg 1: the filter
    'minecraft:dried_kelp',            // Arg 2: the item to replace
    'thermal:cured_rubber'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

  event.replaceInput(
    { input: 'minecraft:water', type: "thermal:insolator"}, // Arg 1: the filter
    'minecraft:water',            // Arg 2: the item to replace
    '#forge:drinkable_water'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

});


