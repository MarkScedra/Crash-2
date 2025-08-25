ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}'), [
            'minecraft:glass_bottle',
            '#minecraft:dirt'
        ]
    )
	
    event.shapeless(
        Item.of('minecraft:water_bucket', '{Purity:0}'), [
            'minecraft:bucket',
            '#minecraft:dirt',
            '#minecraft:dirt',
            '#minecraft:dirt',
            '#minecraft:dirt'
        ]
    )
})