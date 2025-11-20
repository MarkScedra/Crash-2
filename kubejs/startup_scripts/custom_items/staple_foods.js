StartupEvents.registry('item', event => {
    event.create('staple_grains')
        .texture('kubejs:item/staple_grains')
        .maxStackSize(64)
        .displayName("Staple Grains")

    event.create('staple_proteins')
        .texture('kubejs:item/staple_proteins')
        .maxStackSize(64)
        .displayName("Staple Proteins")

    event.create('staple_vegetables')
        .texture('kubejs:item/staple_vegetables')
        .maxStackSize(64)
        .displayName("Staple Vegetables")

    event.create('staple_fruits')
        .texture('kubejs:item/staple_fruits')
        .maxStackSize(64)
        .displayName("Staple Fruits")
})