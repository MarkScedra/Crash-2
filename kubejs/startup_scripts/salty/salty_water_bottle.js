StartupEvents.registry('item', event => {


    event.create('salty_water_bottle')
        .maxStackSize(16)
        .displayName('Salty Water Bottle')
        .useAnimation('drink')
        .useDuration(itemstack => 64)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {

            itemstack.shrink(1)

            entity.give('minecraft:glass_bottle')

            let effects = entity.potionEffects;
            effects.add("poison", 200, 10, false, true)
            effects.add("survive:thirst", 600, 0, false, true)


        }
        )
    return
})