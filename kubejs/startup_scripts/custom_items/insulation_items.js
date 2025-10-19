StartupEvents.registry('item', function (event) {
    event.create('leather_insulation')
        .displayName('Leather Insulation')
        .maxStackSize(1)
        .tag('curios:insulation')
        
    event.create('wool_insulation')
        .displayName('Wool Insulation')
        .maxStackSize(1)
        .tag('curios:insulation')
})