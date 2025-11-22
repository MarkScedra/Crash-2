StartupEvents.registry("block", (event) => {
  event.create("crashed_applied_controller") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Computer Controller") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/ae2_controller_crash')
})

StartupEvents.registry("block", (event) => {
  event.create("crashed_reactor_controller") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Reactor Controller") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/reactor_controller_crash')
})

StartupEvents.registry("block", (event) => {
  event.create("crashed_turbine_controller") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Turbine Controller") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/turbine_controller_crash')
})

StartupEvents.registry("block", (event) => {
  event.create("crashed_turbine_wall") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Turbine Wall") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/turbine_wall_crash')
})

StartupEvents.registry("block", (event) => {
  event.create("crashed_reactor_frame") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Reactor Frame") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/reactor_frame_crash')
})

StartupEvents.registry("block", (event) => {
  event.create("crashed_chamber_wall") // Create a new block with ID "kubejs:example_block"
    .displayName("Crashed Chamber Wall") // Set a custom name
    .mapColor("heavy_metal") // Set a material (affects the sounds and some properties)
    .soundType("copper")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/chamber_wall_crash')
})

StartupEvents.registry("block", (event) => {
  event.create("crumbling_seared_bricks") // Create a new block with ID "kubejs:example_block"
    .displayName("Crumbling Seared Bricks") // Set a custom name
    .soundType("stone")
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
})