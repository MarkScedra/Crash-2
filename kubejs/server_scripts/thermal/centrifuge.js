
ServerEvents.recipes(event => {
    event.recipes.thermal.centrifuge([
        Item.of('minecraft:stick').withChance(0.5),
        Item.of('mekanism:bio_fuel').withChance(0.1),
        Fluid.of('minecraft:water', 50,  {Purity: 2})
    ], '#minecraft:saplings')

    event.recipes.thermal.centrifuge([
        Item.of('minecraft:stick').withChance(0.1),
        Item.of('mekanism:bio_fuel').withChance(0.1),
        Fluid.of('minecraft:water', 50,  {Purity: 2})
    ], '#minecraft:leaves')

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.3),
        Fluid.of('minecraft:water', 125,  {Purity: 2})
    ], '#forge:fruits')

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.2),
        Fluid.of('minecraft:water', 50,  {Purity: 2})
    ], '#minecraft:flowers')

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.3),
        Fluid.of('minecraft:water', 50,  {Purity: 2})
    ], '#forge:crops')

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.3),
        Fluid.of('minecraft:water', 125,  {Purity: 2})
    ], 'minecraft:cactus')

    event.recipes.thermal.centrifuge([
        Item.of('minecraft:sand').withChance(0.25),
        Fluid.of('minecraft:water', 250,  {Purity: 0})
    ], 'minecraft:cactus')
})