ColdSweatEvents.registries(event => {
    event.addInsulator(insulator => {
        insulator.items('kubejs:stillsuit')
            .slot('curio')
            .insulation(30, 30)
            //.adaptiveInsulation(20, 0.1)
    })
})