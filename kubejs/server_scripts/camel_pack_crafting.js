ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:filter', 1),
        [
            'PGP',
            'PCP',
            ' P '
        ],
        {
            C: 'minecraft:charcoal',
            G: '#forge:gravel',
            P: 'minecraft:paper'
        }
    ).id('kubejs:filter');
    event.shaped(
        Item.of('kubejs:camel_pack', 1),
        [
            'SLS',
            'LFL',
            'LBL'
        ],
        {
            B: 'minecraft:bucket',
            F: 'kubejs:filter',
            L: '#forge:leather',
            S: '#forge:string'
        }
    ).id('kubejs:camel_pack');

    const FluidUtil = Java.loadClass('net.minecraftforge.fluids.FluidUtil');
    const ForgeRegs = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

    const camelPackFillRecipe = (input_item, fluid_id, fill_amount, leftovers) => {
        event.recipes.kubejs
            .shapeless(
                Item.of('kubejs:camel_pack', `{Fluid:{Amount:${fill_amount},FluidName:"${fluid_id}"}}`),
                [
                    input_item,
                    Item.of('kubejs:camel_pack').weakNBT()
                ]
            )
            .replaceIngredient(input_item, leftovers)
            .modifyResult((grid, result) => {
                const camel_pack_input = grid.find(Ingredient.of('kubejs:camel_pack'));
                const fluid_container_input = grid.find(input_item);
                if (!camel_pack_input || !fluid_container_input) return;

                // If fluid ID is not set, attempt to read it from the input container
                if (!fluid_id) {
                    const fluid_contained = FluidUtil.getFluidContained(fluid_container_input);
                    if (!fluid_contained.isPresent()) return;

                    fluid_id = ForgeRegs.FLUIDS.getKey(fluid_contained.get().getFluid()).toString();
                }

                // Get NBT of input container
                const nbtTag = fluid_container_input.nbt || {};
                // If purity is present, ensure it is 2 or above
                if (nbtTag.Purity && nbtTag.Purity < 2) return;
                // If potion data is present, ensure it is the same as the inserted fluid
                if (nbtTag.Potion && nbtTag.Potion !== fluid_id) return;

                // Read current camel pack fluid state
                const current_camel_pack_fluid = camel_pack_input.nbt?.Fluid?.FluidName || null;
                const current_camel_pack_amount = camel_pack_input.nbt?.Fluid?.Amount || 0;

                // Ensure the camel pack does not contain a different fluid
                if (current_camel_pack_fluid !== fluid_id && current_camel_pack_amount > 0) return;

                const new_amount = current_camel_pack_amount + fill_amount;
                if (new_amount > 4000) return;

                return Item.of('kubejs:camel_pack', `{Fluid:{Amount:${new_amount},FluidName:"${fluid_id}"}}`).strongNBT();
            })
            .id(`kubejs:camel_pack_fill${fluid_id ? '/' + fluid_id.split(':').pop() : ''}/${(typeof input_item === 'string' ? Item.of(input_item).weakNBT().itemIds[0] : input_item.itemIds[0]).split(':').pop()}`);
    };

    // Recipe definitions
    camelPackFillRecipe('minecraft:water_bucket', 'minecraft:water', 1000, 'minecraft:bucket');
    camelPackFillRecipe('minecraft:lava_bucket', 'minecraft:lava', 1000, 'minecraft:bucket');
    camelPackFillRecipe('minecraft:milk_bucket', 'minecraft:milk', 1000, 'minecraft:bucket');
    camelPackFillRecipe('create:chocolate_bucket', 'create:chocolate', 1000, 'minecraft:bucket');
    camelPackFillRecipe('create:honey_bucket', 'create:honey', 1000, 'minecraft:bucket');
    camelPackFillRecipe('#crash_landing:experience_buckets', 'industrialforegoing:essence', 1000, 'minecraft:bucket');

    camelPackFillRecipe(Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(), 'minecraft:water', 250, 'minecraft:glass_bottle');

    camelPackFillRecipe('minecraft:experience_bottle', 'industrialforegoing:essence', 250, 'minecraft:glass_bottle');
    camelPackFillRecipe('minecraft:honey_bottle', 'create:honey', 250, 'minecraft:glass_bottle');
    camelPackFillRecipe('minecraft:honey_block', 'create:honey', 1000, '');
    camelPackFillRecipe('create:bar_of_chocolate', 'create:chocolate', 250, '');
});