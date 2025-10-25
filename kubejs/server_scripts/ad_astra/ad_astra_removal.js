ServerEvents.recipes(event => {
    // Removes all Ad Astra recipes. When this line is removed, remove the "ad_astra:*+" line from AlmostUnified's duplicates.json
    // event.remove({ mod: 'ad_astra' });

    // removes all recipes of the following types
    event.remove({ type: 'ad_astra:compressing' });

    // remove all recipes with the following items in the output only
    // hidden from JEI as well
    [
        'ad_astra:coal_generator',
        'ad_astra:compressor',
        'ad_astra:etrionic_blast_furnace',
        // 'ad_astra:fuel_refinery',
        'ad_astra:solar_panel',
        'ad_astra:water_pump', // provides infinite water, very important to remove
    ].forEach(itemId => {
        event.remove({ output: itemId });
    });

    event.remove({ output: 'ad_astra:wheel' });
    event.shaped(
        Item.of('ad_astra:wheel', 1),
        [
            'RRR',
            'RGR',
            'RRR'
        ],
        {
            G: '#forge:gears/steel',
            R: 'thermal:cured_rubber'
        }
    )

    event.remove({ output: 'ad_astra:radio' });
    event.shaped(
        Item.of('ad_astra:radio', 1),
        [
            'W  ',
            'SPS',
            'SSS'
        ],
        {
            P: 'pneumaticcraft:printed_circuit_board',
            S: '#forge:plates/steel',
            W: '#forge:wires/all_metal'
        }
    )

    event.remove({ output: 'ad_astra:tier_1_rover' });
    event.shaped(
        Item.of('ad_astra:tier_1_rover', 1),
        [
            'B P',
            'GRE',
            'WSW'
        ],
        {
            B: ['#forge:storage_blocks/desh', '#forge:storage_blocks/bronze'],
            E: ['ad_astra:desh_engine', 'thermal:dynamo_compression'],
            G: ['ad_astra:large_gas_tank', 'mekanism:basic_fluid_tank'],
            P: 'pneumaticcraft:printed_circuit_board',
            R: 'ad_astra:radio',
            S: ['#forge:plates/desh', '#forge:plates/bronze'],
            W: 'ad_astra:wheel'
        }
    )

    event.remove({ output: 'ad_astra:nasa_workbench' });
    event.shaped(
        Item.of('ad_astra:nasa_workbench', 1),
        [
            "|E|",
            "SCS",
            "#B#"
        ],
        {
            '#': '#ad_astra:steel_plates',
            B: '#ad_astra:steel_blocks',
            C: 'thermal:machine_crafter',
            E: 'ad_astra:etrionic_core',
            S: '#forge:gears/signalum',
            '|': '#ad_astra:steel_rods'
        }
    )

    event.remove({ output: 'ad_astra:oxygen_loader' });
    event.shaped(
        Item.of('ad_astra:oxygen_loader', 1),
        [
            "F|F",
            "GMG",
            "#S#"
        ],
        {
            '#': '#ad_astra:steel_plates',
            F: 'ad_astra:fan',
            G: 'ad_astra:gas_tank',
            M: '#desolate_planet:machine_frame',
            S: '#forge:storage_blocks/signalum',
            '|': 'mekanism:electrolytic_core'
        }
    )

    event.remove({ output: 'ad_astra:energizer' });
    event.shaped(
        Item.of('ad_astra:energizer', 1),
        [
            "#E#",
            "DMD",
            "BEB"
        ],
        {
            '#': '#ad_astra:ostrum_plates',
            B: '#ad_astra:ostrum_blocks',
            D: '#forge:gears/diamond',
            E: 'ad_astra:etrionic_capacitor',
            M: '#desolate_planet:machine_frame'
        }
    );

    event.remove({ output: 'ad_astra:cryo_freezer' });
    event.shaped(
        Item.of('ad_astra:cryo_freezer', 1),
        [
            "#G#",
            "IMI",
            "###"
        ],
        {
            '#': '#ad_astra:ostrum_plates',
            G: 'ad_astra:large_gas_tank',
            I: 'minecraft:blue_ice',
            M: 'thermal:machine_chiller'
        }
    );

    event.remove({ output: 'ad_astra:engine_frame' });
    event.shaped(
        Item.of('ad_astra:engine_frame', 1),
        [
            "|#|",
            "#M#",
            "|#|"
        ],
        {
            '#': '#ad_astra:steel_plates',
            '|': 'ad_astra:steel_rod',
            M: '#desolate_planet:machine_frame'
        }
    );

    event.remove({ output: 'ad_astra:etrionic_core' });
    event.shaped(
        Item.of('ad_astra:etrionic_core', 1),
        [
            "#D#",
            "|C|",
            "#D#"
        ],
        {
            '#': '#ad_astra:steel_plates',
            '|': 'ad_astra:steel_rod',
            C: 'thermal:upgrade_augment_3',
            D: '#forge:gems/diamond'
        }
    );

    event.remove({ output: 'ad_astra:etrionic_capacitor' });
    event.shaped(
        Item.of('ad_astra:etrionic_capacitor', 1),
        [
            "R#R",
            "#E#",
            "###"
        ],
        {
            '#': '#ad_astra:steel_plates',
            E: 'ad_astra:etrionic_core',
            R: '#forge:dusts/redstone'
        }
    );
});