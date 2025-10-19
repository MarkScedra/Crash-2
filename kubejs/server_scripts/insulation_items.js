ColdSweatEvents.registries(event => {
    event.addInsulator(insulator => {
        insulator.items('kubejs:stillsuit')
            .slot('curio')
            .insulation(50, 50)
            //.adaptiveInsulation(20, 0.1)
    })
})