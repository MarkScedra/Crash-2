ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:insulated_hydraulic_fabric', 2),
        [
            'SRS',
            'RPR',
            'SRS'
        ],
        {
            P: '#forge:plastic',
            R: 'thermal:cured_rubber',
            S: '#forge:string'
        }
    ).id('kubejs:insulated_hydraulic_fabric');

    event.shaped(
        Item.of('kubejs:filtration_pocket', 1),
        [
            'ICI',
            'IFI',
            'III'
        ],
        {
            C: '#desolate_planet:fluid_conduits',
            I: 'kubejs:insulated_hydraulic_fabric',
            F: 'kubejs:filter'
        }
    ).id('kubejs:filtration_pocket');

    event.shaped(
        Item.of('kubejs:stillsuit', 1),
        [
            'FCF',
            'PWP',
            'FPF'
        ],
        {
            C: '#desolate_planet:fluid_conduits',
            F: 'kubejs:insulated_hydraulic_fabric',
            P: 'kubejs:filtration_pocket',
            W: 'kubejs:camel_pack'
        }
    ).id('kubejs:stillsuit');

    event.shaped(
        Item.of('kubejs:leather_insulation', 1),
        [
            'LSL',
            'LLL',
            'LLL'
        ],
        {
            L: '#forge:leather',
            S: '#forge:string'
        }
    ).id('kubejs:leather_insulation');
});