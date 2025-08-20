ItemEvents.tooltip(event => {
    // Misc
    event.addAdvanced("minecraft:oak_sapling", (item, advanced, text) => { text.add(1, Text.green("Oak trees have bonus drop chances when using a crook."));});
    event.addAdvanced("exdeorum:crook", (item, advanced, text) => { text.add(1, Text.gray("Can be used to break leaves to increase sapling drops and get silk worms."));});
    event.addAdvanced("exdeorum:bone_crook", (item, advanced, text) => { text.add(1, Text.gray("Can be used to break leaves to increase sapling drops and get silk worms."));});
    event.addAdvanced("thermal:phytogro", (item, advanced, text) => { text.add(1, Text.gold("Can be used like bone meal."));});
    event.addAdvanced("sync:shell_constructor", (item, advanced, text) => { text.add(1, Text.gray("Place next to a power source and right-click to provide a DNA sample."));});
    event.addAdvanced("kubejs:paste", (item, advanced, text) => { text.add(1, Text.gray("Usable as a slimeball substitute in many recipes."));});
    event.addAdvanced("minecraft:netherrack", (item, advanced, text) => { text.add(1, Text.gray("Can be made by placing redstone dust in a barrel of lava."));});
    event.addAdvanced("minecraft:netherrack", (item, advanced, text) => { text.add(2, Text.gray("Can be automated with an extruder by casting water with liquid redstone."));});
    event.addAdvanced("minecraft:end_stone", (item, advanced, text) => { text.add(1, Text.gray("Can be made by placing glowstone dust in a barrel of lava."));});
    event.addAdvanced("minecraft:end_stone", (item, advanced, text) => { text.add(2, Text.gray("Can be automated with an extruder by casting water with liquid ender."));});

    // PCBs
    event.addAdvanced("pneumaticcraft:plastic", (item, advanced, text) => { text.add(1, Text.gray("Made by refining oil or melting plastic scraps from cities."));});
    event.addAdvanced("pneumaticcraft:plastic", (item, advanced, text) => { text.add(2, [Text.gray("Follow the quests in "), Text.white("Under Pressure"), Text.gray(" for plastic refining instructions.")]); });
    event.addAdvanced("pneumaticcraft:printed_circuit_board", (item, advanced, text) => { text.add(1, [Text.gray("Follow the quests in "), Text.white("Under Pressure"), Text.gray(" for crafting instructions.")]); });
    event.addAdvanced("kubejs:pcb_segment", (item, advanced, text) => { text.add(1, [Text.gray("Crafted from a PCB, follow the quests in "), Text.white("Under Pressure"), Text.gray(" for PCB crafting instructions.")]); });
    event.addAdvanced("thermal:machine_frame", (item, advanced, text) => { text.add(1, Text.gray("A unified base material for machine crafting across multiple mods."));});
    event.addAdvanced("thermal:machine_frame", (item, advanced, text) => { text.add(2, [Text.gray("Requires a PCB, follow the quests in "), Text.white("Under Pressure"), Text.gray(" for PCB crafting instructions.")]); });

    // ExDeorum
    event.addAdvanced("exdeorum:silk_worm", (item, advanced, text) => { text.add(1, Text.gray("Right-click leaves to infest. Fully infested leaf blocks drop string, more with a crook."));});
    event.addAdvanced("exdeorum:porcelain_crucible", (item, advanced, text) => { text.add(1, Text.gray("Usable as a mini-smeltery. Can melt down ores."));});

    event.addAdvanced("exdeorum:string_mesh", (item, advanced, text) => { text.add(1, Text.gray("The most basic mesh type. Upgrade with flint for better yields."));});
    event.addAdvanced("exdeorum:flint_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to String Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:iron_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Flint Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:golden_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Iron Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:diamond_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Golden Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:netherite_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Diamond Mesh. Provides the highest yields."));});
    [
        "exdeorum:wooden_hammer",
        "exdeorum:stone_hammer",
        "exdeorum:golden_hammer",
        "exdeorum:iron_hammer",
        "exdeorum:diamond_hammer",
        "exdeorum:netherite_hammer"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Can be used to smash stone into gravel, sand, and then dust."));});
    });
    [
        "exdeorum:compressed_wooden_hammer",
        "exdeorum:compressed_stone_hammer",
        "exdeorum:compressed_golden_hammer",
        "exdeorum:compressed_iron_hammer",
        "exdeorum:compressed_diamond_hammer",
        "exdeorum:compressed_netherite_hammer"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Can be used to smash compressed stone into gravel, sand, and then dust."));});
    });

    // Crashed Blocks
    [
        "kubejs:crashed_reactor_controller",
        "kubejs:crashed_reactor_frame"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, [Text.gray("Found in the reactor room of a "), Text.white("Nuclear Plant")]);
        });
    });
    [
        "kubejs:crashed_turbine_controller",
        "kubejs:crashed_turbine_wall"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, [Text.gray("Found in the turbine room of a "), Text.white("Nuclear Plant")]);
        });
    });

    // Tinkers' Construct
    event.addAdvanced("tconstruct:grout", (item, advanced, text) => { text.add(1, Text.gray("Crafting recipe disabled. Find crumbling seared bricks in the ruins."));});
    event.addAdvanced("tconstruct:nether_grout", (item, advanced, text) => { text.add(1, Text.gray("Crafting recipe disabled. Find crumbling seared bricks in the ruins."));});
    event.addAdvanced("tconstruct:seared_brick", (item, advanced, text) => { text.add(1, Text.gray("Find crumbling seared bricks in the ruins."));});
    [
        "kubejs:crumbling_seared_brick",
        "kubejs:crumbling_seared_brick_2",
        "kubejs:crumbling_seared_brick_3"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Can be crushed into seared bricks with a hammer."));
        });
    });
    event.addAdvanced("tconstruct:blazing_blood_bucket", (item, advanced, text) => { text.add(1, Text.gold("Craft by melting down blaze powder (or the blazes themselves)."));});

    // Food items
    event.addAdvanced("pamhc2foodcore:crackeritem", (item, advanced, text) => { text.add(1, Text.gray("A cheap and surprisingly filling snack."));});
    event.addAdvanced("pamhc2foodextended:beansandriceitem", (item, advanced, text) => { text.add(1, Text.gray("A cheap and very nutritious meal."));});
    event.addAdvanced("pamhc2foodextended:veggiestirfryitem", (item, advanced, text) => { text.add(1, Text.gray("A practical and nutritionally complete meal."));});
    [
        "kubejs:zombie_jerky",
        "kubejs:monster_mash",
        "kubejs:bug_broth"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.red([Text.of("Mostly").italic(true), Text.of(" safe to eat.")]));});
    });

    // Power generation
    event.addAdvanced("industrialforegoing:pitiful_generator", (item, advanced, text) => { text.add(1, Text.gray("A cheap but inefficient power generator."));});
    event.addAdvanced("thermal:dynamo_compression", (item, advanced, text) => { text.add(1, Text.gray("A reliable and efficient power generator."));});
    event.addAdvanced("thermal:dynamo_compression", (item, advanced, text) => { text.add(2, [Text.gray("Follow the quests in "), Text.white("Under Pressure"), Text.gray(" for oil refining instructions.")]); });

});