ItemEvents.tooltip(event => {
    const toolsmod = [
        "minecraft:wooden_sword",
        "minecraft:wooden_pickaxe",
        "minecraft:wooden_shovel",
        "minecraft:wooden_axe",
        "minecraft:wooden_hoe",
    
        "minecraft:stone_sword",
        "minecraft:stone_pickaxe",
        "minecraft:stone_shovel",
        "minecraft:stone_axe",
        "minecraft:stone_hoe",
    
        "minecraft:iron_sword",
        "minecraft:iron_pickaxe",
        "minecraft:iron_shovel",
        "minecraft:iron_axe",
        "minecraft:iron_hoe",
    
        "minecraft:golden_sword",
        "minecraft:golden_pickaxe",
        "minecraft:golden_shovel",
        "minecraft:golden_axe",
        "minecraft:golden_hoe",
    
        "minecraft:diamond_sword",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_shovel",
        "minecraft:diamond_axe",
        "minecraft:diamond_hoe",
    
        "minecraft:diamond_helmet",
        "minecraft:diamond_chestplate",
        "minecraft:diamond_leggings",
        "minecraft:diamond_boots",

        "minecraft:netherite_sword",
        "minecraft:netherite_pickaxe",
        "minecraft:netherite_shovel",
        "minecraft:netherite_axe",
        "minecraft:netherite_hoe",
        "minecraft:netherite_helmet",
        "minecraft:netherite_chestplate",
        "minecraft:netherite_leggings",
        "minecraft:netherite_boots",
    
        "minecraft:trident",
        "minecraft:shield",
    
        "ae2:nether_quartz_sword",
        "ae2:nether_quartz_pickaxe",
        "ae2:nether_quartz_shovel",
        "ae2:nether_quartz_axe",
        "ae2:nether_quartz_hoe",
    
        "ae2:certus_quartz_sword",
        "ae2:certus_quartz_pickaxe",
        "ae2:certus_quartz_shovel",
        "ae2:certus_quartz_axe",
        "ae2:certus_quartz_hoe",
    
        "ae2:fluix_sword",
        "ae2:fluix_pickaxe",
        "ae2:fluix_shovel",
        "ae2:fluix_axe",
        "ae2:fluix_hoe"
    ];

    toolsmod.forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.darkRed("This item is non-functional. Please use Tinkers Construct tools instead."));
        });
    });
});
