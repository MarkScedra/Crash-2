ItemEvents.armorTierRegistry(event => {
    event.add('string', tier => {
        tier.durabilityMultiplier = 8 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [1, 2, 2, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 5
        tier.equipSound = 'minecraft:item.armor.equip_generic'
        tier.repairIngredient = '#forge:string'
        tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    })
});

StartupEvents.registry("item", (event) => {
    event
        .create("string_helmet", "helmet")
        .tier("string")
    event
        .create("string_chestplate", "chestplate")
        .tier("string")
    event
        .create("string_leggings", "leggings")
        .tier("string")
    event
        .create("string_boots", "boots")
        .tier("string")
});