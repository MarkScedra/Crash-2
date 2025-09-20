const ThirstCapabilities = Java.loadClass('dev.ghen.thirst.foundation.common.capability.ModCapabilities')
const CuriosCapabilities = Java.loadClass('com.prunoideae.powerfuljs.capabilities.forge.mods.curios.CapabilitiesCurios')

const capacity = 4000

StartupEvents.registry('item', (event) => {

    event.create('filter')
        .displayName('Water Filter')
        .maxDamage(16)

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

                        case 'minecraft:milk':
                            // if thirst is greater than 18, do not drink
                            if (thirstCap && thirstCap.getThirst() > 18) break

                            // decrease fluid by 100
                            fluidTag.putInt('Amount', amount - 100)

                            // increase thirst by 1, quenchness by 2
                            thirstCap.drink(player, 1, 2)

                            // increase food by 1, saturation by 1
                            var food = player.getFoodData()
                            food.setFoodLevel(Math.min(food.getFoodLevel() + 1, 20))
                            food.setSaturation(Math.min(food.getSaturationLevel() + 1.0, food.getFoodLevel() * 1.0))

                            // set 20 tick cooldown
                            data.putInt(cdKey, 20)
                            break

                        case 'minecraft:lava':
                            // decrease fluid by 100
                            fluidTag.putInt('Amount', amount - 100)

                            // deal 2 fire damage, light player on fire for 2 seconds
                            player.attack(player.level.damageSources().onFire(), 2.0)
                            player.setSecondsOnFire(2)

                            // set 20 tick cooldown
                            data.putInt(cdKey, 20)
                            break

                        default:
                            break
                    }
                })
        )
        // durability bar based on tank amount
        .barWidth(function (stack) {
            var amount = 0
            if (stack && stack.nbt && stack.nbt.contains('Fluid')) {
                amount = stack.nbt.get('Fluid').getInt('Amount')
            }

            if (amount <= 0) return 14 // hide bar if empty
            // if (amount >= capacity) return 14 // hide bar if full
            return Math.round((amount / capacity) * 13)
        })
        .barColor(function (stack) {
            // read fluid NBT
            var fluidType = null
            if (stack && stack.nbt && stack.nbt.contains('Fluid')) {
                var fluidTag = stack.nbt.get('Fluid')
                fluidType = fluidTag.getString('FluidName')
            }

            // switch color based on fluid type
            switch (fluidType) {
                // blue
                case 'minecraft:water': return Color.BLUE
                case 'mekanism:heavy_water': return Color.BLUE

                // orange
                case 'minecraft:lava': return Color.ORANGE_DYE
                case 'thermal:syrup': return Color.ORANGE_DYE
                case 'thermal:sap': return Color.ORANGE_DYE
                case 'thermal:light_oil': return Color.ORANGE_DYE
                case 'tconstruct:magma': return Color.ORANGE_DYE
                case 'tconstruct:ichor': return Color.ORANGE_DYE
                case 'tconstruct:blazing_blood': return Color.ORANGE_DYE
                case 'pneumaticcraft:diesel': return Color.ORANGE_DYE
                case 'create:tea': return Color.ORANGE_DYE

                // white
                case 'minecraft:milk': return Color.WHITE
                case 'thermal:latex': return Color.WHITE
                case 'tconstruct:venom': return Color.WHITE
                case 'tconstruct:powdered_snow': return Color.WHITE
                case 'pneumaticcraft:yeast_culture': return Color.WHITE
                case 'pneumaticcraft:plastic': return Color.WHITE
                case 'pneumaticcraft:ethanol': return Color.WHITE
                case 'industrialforegoing:latex': return Color.WHITE
                case 'industrialforegoing:ether_gas': return Color.WHITE
                case 'biggerreactors:steam': return Color.WHITE
                case 'ad_astra:oxygen': return Color.WHITE

                // lime
                case 'sophisticatedcore:xp_still': return Color.LIME_DYE
                case 'pneumaticcraft:memory_essence': return Color.LIME_DYE
                case 'mob_grinding_utils:fluid_xp': return Color.LIME_DYE
                case 'industrialforegoing:essence': return Color.LIME_DYE
                case 'enderio:xp_juice': return Color.LIME_DYE
                case 'cofh_core:experience': return Color.LIME_DYE

                // purple
                case 'tconstruct:ender_slime': return Color.PURPLE_DYE
                case 'industrialforegoing:sludge': return Color.PURPLE_DYE
                case 'industrialforegoing:biofuel': return Color.PURPLE_DYE
                case 'exdeorum:witch_water': return Color.PURPLE_DYE

                // brown
                case 'thermal:tree_oil': return Color.BROWN_DYE
                case 'tconstruct:rabbit_stew': return Color.BROWN_DYE
                case 'tconstruct:mushroom_stew': return Color.BROWN_DYE
                case 'tconstruct:meat_soup': return Color.BROWN_DYE
                case 'tconstruct:liquid_soul': return Color.BROWN_DYE
                case 'industrialforegoing:sewage': return Color.BROWN_DYE
                case 'industrialforegoing:meat': return Color.BROWN_DYE
                case 'create:chocolate': return Color.BROWN_DYE

                // yellow/gold
                case 'thermal:resin': return Color.GOLD
                case 'thermal:refined_fuel': return Color.GOLD
                case 'thermal:glowstone': return Color.GOLD
                case 'tconstruct:honey': return Color.GOLD
                case 'pneumaticcraft:vegetable_oil': return Color.GOLD
                case 'pneumaticcraft:lubricant': return Color.GOLD
                case 'pneumaticcraft:lpg': return Color.GOLD
                case 'pneumaticcraft:gasoline': return Color.GOLD
                case 'pneumaticcraft:biodiesel': return Color.GOLD
                case 'mekanism:chlorine': return Color.GOLD
                case 'mekanism:brine': return Color.GOLD
                case 'createaddition:bioethanol': return Color.GOLD
                case 'create:honey': return Color.GOLD
                case 'cofh_core:honey': return Color.GOLD

                // red
                case 'thermal:redstone': return Color.DARK_RED
                case 'thermal:heavy_oil': return Color.RED
                case 'tconstruct:beetroot_soup': return Color.DARK_RED
                case 'ad_astra:fuel': return Color.RED

                // teal/dark aqua
                case 'thermal:ender': return Color.DARK_AQUA
                case 'tconstruct:molten_ender': return Color.DARK_AQUA

                // cyan/aqua
                case 'tconstruct:sky_slime': return Color.AQUA
                case 'pneumaticcraft:kerosene': return Color.AQUA
                case 'ad_astra:hydrogen': return Color.AQUA
                case 'ad_astra:cryo_fuel': return Color.AQUA

                // green
                case 'tconstruct:earth_slime': return Color.GREEN
                case 'pneumaticcraft:etching_acid': return Color.GREEN
                case 'biggerreactors:liquid_uranium': return Color.GREEN

                // pink
                case 'industrialforegoing:pink_slime': return Color.PINK_DYE

                // black/gray (default)
                case 'thermal:crude_oil': return Color.GRAY
                case 'thermal:creosote': return Color.GRAY
                case 'tconstruct:seared_stone': return Color.GRAY
                case 'tconstruct:scorched_stone': return Color.GRAY
                case 'pneumaticcraft:oil': return Color.GRAY
                case 'biggerreactors:liquid_obsidian': return Color.GRAY
                case 'ad_astra:oil': return Color.GRAY

                default: return Color.GRAY
            }
        })
})


ItemEvents.modelProperties((e) => {
    const capacity = 4000

    e.register('kubejs:camel_pack',
        new ResourceLocation('stored'),
        /** @type {Internal.ClampedItemPropertyFunction} */
        (stack) => {
            // read fluid NBT
            if (!stack || !stack.nbt || !stack.nbt.contains('Fluid')) return 0
            var fluidTag = stack.nbt.get('Fluid')
            if (!fluidTag || !fluidTag.contains) return 0

            var amount = fluidTag.contains('Amount') ? fluidTag.getInt('Amount') : 0

            return Math.max(0, Math.min(1, amount / capacity))

        }
    )

    e.register('kubejs:camel_pack',
        new ResourceLocation('fluid'),
        /** @type {Internal.ClampedItemPropertyFunction} */
        (stack) => {
            // read fluid NBT
            if (!stack || !stack.nbt || !stack.nbt.contains('Fluid')) return 0
            var fluidTag = stack.nbt.get('Fluid')
            if (!fluidTag || !fluidTag.contains) return 0

            var fluidType = null
            if (fluidTag.contains('FluidName')) fluidType = fluidTag.getString('FluidName')

            if (!fluidType) return 0

            // switch color based on fluid type
            switch (fluidType) {
                // 0.01: blue
                case 'minecraft:water': return 0.01 // functions
                case 'mekanism:heavy_water': return 0.01

                // 0.02: orange
                case 'minecraft:lava': return 0.02 // functions
                case 'thermal:syrup': return 0.02
                case 'thermal:sap': return 0.02
                case 'thermal:light_oil': return 0.02
                case 'tconstruct:magma': return 0.02
                case 'tconstruct:ichor': return 0.02
                case 'tconstruct:blazing_blood': return 0.02
                case 'pneumaticcraft:diesel': return 0.02
                case 'create:tea': return 0.02

                // 0.03: white
                case 'minecraft:milk': return 0.03 // functions
                case 'thermal:latex': return 0.03
                case 'tconstruct:venom': return 0.03
                case 'tconstruct:powdered_snow': return 0.03
                case 'pneumaticcraft:yeast_culture': return 0.03
                case 'pneumaticcraft:plastic': return 0.03
                case 'pneumaticcraft:ethanol': return 0.03
                case 'industrialforegoing:latex': return 0.03
                case 'industrialforegoing:ether_gas': return 0.03
                case 'biggerreactors:steam': return 0.03
                case 'ad_astra:oxygen': return 0.03

                // 0.04: lime
                case 'tconstruct:earth_slime': return 0.04 // change to green
                case 'sophisticatedcore:xp_still': return 0.04
                case 'pneumaticcraft:memory_essence': return 0.04
                case 'pneumaticcraft:etching_acid': return 0.04 // change to green
                case 'mob_grinding_utils:fluid_xp': return 0.04
                case 'industrialforegoing:essence': return 0.04
                case 'enderio:xp_juice': return 0.04
                case 'cofh_core:experience': return 0.04
                case 'biggerreactors:liquid_uranium': return 0.04 // change to green

                // 0.05: purple
                case 'tconstruct:ender_slime': return 0.05
                case 'industrialforegoing:sludge': return 0.05
                case 'industrialforegoing:pink_slime': return 0.05 // change to pink
                case 'industrialforegoing:biofuel': return 0.05
                case 'exdeorum:witch_water': return 0.05

                // 0.06: brown
                case 'thermal:tree_oil': return 0.06
                case 'tconstruct:rabbit_stew': return 0.06
                case 'tconstruct:mushroom_stew': return 0.06
                case 'tconstruct:meat_soup': return 0.06
                case 'tconstruct:liquid_soul': return 0.06
                case 'industrialforegoing:sewage': return 0.06
                case 'industrialforegoing:meat': return 0.06
                case 'create:chocolate': return 0.06

                // 0.07: yellow
                case 'thermal:resin': return 0.07
                case 'thermal:refined_fuel': return 0.07
                case 'thermal:glowstone': return 0.07
                case 'tconstruct:honey': return 0.07
                case 'pneumaticcraft:vegetable_oil': return 0.07
                case 'pneumaticcraft:lubricant': return 0.07
                case 'pneumaticcraft:lpg': return 0.07
                case 'pneumaticcraft:gasoline': return 0.07
                case 'pneumaticcraft:biodiesel': return 0.07
                case 'mekanism:chlorine': return 0.07
                case 'mekanism:brine': return 0.07
                case 'createaddition:bioethanol': return 0.07
                case 'create:honey': return 0.07
                case 'cofh_core:honey': return 0.07

                // 0.08: red
                case 'thermal:redstone': return 0.08
                case 'thermal:heavy_oil': return 0.08
                case 'tconstruct:beetroot_soup': return 0.08
                case 'ad_astra:fuel': return 0.08

                // 0.09: teal
                case 'thermal:ender': return 0.09
                case 'tconstruct:molten_ender': return 0.09

                // 0.10: cyan
                case 'tconstruct:sky_slime': return 0.10
                case 'pneumaticcraft:kerosene': return 0.10
                case 'ad_astra:hydrogen': return 0.10
                case 'ad_astra:cryo_fuel': return 0.10

                // 0.00: black/gray (default)
                case 'thermal:crude_oil': return 0.00
                case 'thermal:creosote': return 0.00
                case 'tconstruct:seared_stone': return 0.00
                case 'tconstruct:scorched_stone': return 0.00
                case 'pneumaticcraft:oil': return 0.00
                case 'biggerreactors:liquid_obsidian': return 0.00
                case 'ad_astra:oil': return 0.00

                default: return 0.00
            }
        }
    )
})