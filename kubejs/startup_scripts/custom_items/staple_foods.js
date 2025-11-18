StartupEvents.registry('item', event => {
    event.create('staple_fruits')
        .texture('kubejs:item/staple_fruits')
        .maxStackSize(64)
        .displayName("Staple Fruits")

    event.create('staple_proteins')
        .texture('kubejs:item/staple_proteins')
        .maxStackSize(64)
        .displayName("Staple Proteins")

    event.create('staple_vegetables')
        .texture('kubejs:item/staple_vegetables')
        .maxStackSize(64)
        .displayName("Staple Vegetables")
})