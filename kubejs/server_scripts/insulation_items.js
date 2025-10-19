ColdSweatEvents.registries(event => {
    event.addInsulator(insulator => {
        insulator.items('kubejs:stillsuit')
            .slot('curio')
            .insulation(50, 50)
            //.adaptiveInsulation(20, 0.1)
    })
    
    event.addInsulator(insulator => {
        insulator.items('kubejs:leather_insulation')
            .slot('curio')
            .insulation(4, 4)
    })
    
    event.addInsulator(insulator => {
        insulator.items('kubejs:wool_insulation')
            .slot('curio')
            .insulation(12, 0)
    })
})