ServerEvents.recipes(event => {

    function crucible_melting(input, output, output_amount, nbt) {
        const fluid = {
            amount: output_amount,
            fluid: output
        }
        if (nbt) {
            fluid.nbt = nbt
        }
        event.custom({
            type: 'exdeorum:lava_crucible',
            fluid: fluid,
            ingredient: Ingredient.of(input).toJson()
        })
    }

    crucible_melting('#minecraft:saplings', 'minecraft:water', 50, '{Purity:2}')
    crucible_melting('#minecraft:leaves', 'minecraft:water', 50, '{Purity:2}')
    crucible_melting('#minecraft:flowers', 'minecraft:water', 50, '{Purity:2}')
    crucible_melting('#forge:crops', 'minecraft:water', 50, '{Purity:2}')
    crucible_melting('#forge:fruits', 'minecraft:water', 100, '{Purity:2}')
    crucible_melting('minecraft:cactus', 'minecraft:water', 125, '{Purity:3}')
})