ItemEvents.armorTierRegistry(event => {
    /*event.add('string', tier => {
        tier.durabilityMultiplier = 8 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [1, 2, 2, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 5
        tier.equipSound = 'minecraft:item.armor.equip_generic'
        tier.repairIngredient = '#forge:string'
        tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })*/

    event.add('desert', tier => {
        tier.durabilityMultiplier = 12 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [1, 3, 2, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 5
        tier.equipSound = 'minecraft:item.armor.equip_generic'
        tier.repairIngredient = '#forge:leather'
        tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })

    event.add('snow', tier => {
        tier.durabilityMultiplier = 12 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [1, 3, 2, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 5
        tier.equipSound = 'minecraft:item.armor.equip_generic'
        tier.repairIngredient = '#forge:wool'
        tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })
});

StartupEvents.registry("item", (event) => {
    /*event.create("string_helmet", "helmet").tier("string")
    event.create("string_chestplate", "chestplate").tier("string")
    event.create("string_leggings", "leggings").tier("string")
    event.create("string_boots", "boots").tier("string")*/

    event.create("desert_cap", "helmet").tier("desert")
    event.create("desert_tunic", "chestplate").tier("desert")
    event.create("desert_pants", "leggings").tier("desert")
    event.create("desert_shoes", "boots").tier("desert")

    event.create("snow_hat", "helmet").tier("snow")
    event.create("snow_coat", "chestplate").tier("snow")
    event.create("snow_pants", "leggings").tier("snow")
    event.create("snow_boots", "boots").tier("snow")
});