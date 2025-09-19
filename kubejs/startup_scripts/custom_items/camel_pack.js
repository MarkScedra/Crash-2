const ThirstCapabilities = Java.loadClass('dev.ghen.thirst.foundation.common.capability.ModCapabilities')
const CuriosCapabilities = Java.loadClass('com.prunoideae.powerfuljs.capabilities.forge.mods.curios.CapabilitiesCurios')

const capacity = 4000

StartupEvents.registry('item', (event) => {

    event.create('camel_pack')
        .displayName('Camel Pack')
        .maxStackSize(1)
        .attachCapability(
            CapabilityBuilder.FLUID.itemStack(capacity)
        )
        .tag('curios:belt')
        .attachCapability(
            CuriosCapabilities.CURIOS.itemStack()
                .curioTick(function (stack, slotContext) {
                    // run on server for player
                    var entity = slotContext.entity()
                    if (!entity || entity.level.isClientSide() || !entity.isPlayer()) return
                    var player = entity

                    // cooldown
                    var cdKey = 'kjsCamelPackCD'
                    var data = player.persistentData
                    var cd = data.getInt(cdKey)
                    if (cd > 0) {
                        data.putInt(cdKey, cd - 1)
                        return
                    }

                    // thirst cap
                    var thirstCap = player.getCapability(ThirstCapabilities.PLAYER_THIRST, null).orElse(null)
                    if (!thirstCap) return

                    // read fluid NBT
                    if (!stack || !stack.nbt || !stack.nbt.contains('Fluid')) return
                    var fluidTag = stack.nbt.get('Fluid')
                    if (!fluidTag || !fluidTag.contains) return

                    var fluidType = null
                    if (fluidTag.contains('FluidName')) fluidType = fluidTag.getString('FluidName')

                    var amount = fluidTag.contains('Amount') ? fluidTag.getInt('Amount') : 0
                    if (!fluidType || amount < 100) return

                    switch (fluidType) {
                        case 'minecraft:water':
                            // if thirst is greater than 18, do not drink
                            if (thirstCap && thirstCap.getThirst() > 18) break

                            // decrease fluid by 100
                            fluidTag.putInt('Amount', amount - 100)

                            // increase thirst by 2, quenchness by 3
                            thirstCap.drink(player, 2, 3)

                            // set 20 tick cooldown
                            data.putInt(cdKey, 20)
                            break


                        default:
                            break
                    }
                })
        )
})
