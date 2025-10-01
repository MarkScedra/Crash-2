StartupEvents.registry('item', function (event) {
    event.create('stillsuit')
        .displayName('Stillsuit')
        .maxStackSize(1)
        .tag('curios:back')
})

ItemEvents.armorTierRegistry(event => {
    event.add('stillsuit', tier => {
        tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 10
        tier.equipSound = 'minecraft:item.armor.equip_generic'
        tier.repairIngredient = 'thermal:cured_rubber'
        tier.toughness = 1.0
        tier.knockbackResistance = 0.0
    })
});
/*
StartupEvents.registry("item", (event) => {
    event
        .create("stillsuit_helmet", "helmet")
        .tier("stillsuit")
    event
        .create("stillsuit_chestplate", "chestplate")
        .tier("stillsuit")
    event
        .create("stillsuit_leggings", "leggings")
        .tier("stillsuit")
    event
        .create("stillsuit_boots", "boots")
        .tier("stillsuit")
});*/