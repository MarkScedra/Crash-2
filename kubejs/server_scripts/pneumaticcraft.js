ServerEvents.recipes(event => {

  // Pressure Chamber Wall (& Glass)
  event.remove({ output: 'pneumaticcraft:pressure_chamber_wall' })
  event.remove({ output: 'pneumaticcraft:pressure_chamber_glass' })
  event.shaped(
    Item.of('pneumaticcraft:pressure_chamber_wall', 2),
    [
      'XXX',
      'X X',
      'XXX'
    ],
    {
      X: '#forge:ingots/compressed_iron'
    }
  )
  event.shaped(
    Item.of('pneumaticcraft:pressure_chamber_wall', 1),
    [
      'XCX'
    ],
    {
      X: '#forge:ingots/compressed_iron',
      C: 'kubejs:crashed_pressure_chamber_wall'
    }
  )
  event.shapeless(
    Item.of('pneumaticcraft:pressure_chamber_glass', 1),
    [
      'pneumaticcraft:pressure_chamber_wall',
      '#forge:glass/colorless'
    ]
  )

  // Pressure Chamber Valve
  event.remove({ output: 'pneumaticcraft:pressure_chamber_valve' })
  event.remove({ id: 'pneumaticcraft:assembly/pressure_chamber_valve' })
  event.shapeless(
    Item.of('pneumaticcraft:pressure_chamber_valve', 1),
    [
      'pneumaticcraft:pressure_chamber_wall',
      'pneumaticcraft:pressure_tube'
    ]
  )
  event.custom({
    type: 'pneumaticcraft:assembly_drill',
    input: {
      item: 'pneumaticcraft:pressure_chamber_wall'
    },
    program: 'drill',
    result: {
      item: 'pneumaticcraft:pressure_chamber_valve',
      count: 1
    }
  })
  
  // Refinery (& Output)
  event.remove({ output: 'pneumaticcraft:refinery' })
  event.remove({ output: 'pneumaticcraft:refinery_output' })
  event.shaped(
    Item.of('pneumaticcraft:refinery', 1),
    [
      'XCX',
      'XTX',
      'XSX'
    ],
    {
      X: '#forge:ingots/compressed_iron',
      C: '#forge:plates/conductive',
      T: 'pneumaticcraft:small_tank',
      S: 'thermal:redstone_servo'
    }
  )
  event.shaped(
    Item.of('pneumaticcraft:refinery', 1),
    [
      ' T ',
      'XCX'
    ],
    {
      X: '#forge:ingots/compressed_iron',
      C: 'kubejs:crashed_refinery',
      T: 'pneumaticcraft:small_tank'
    }
  )
  event.shaped(
    'pneumaticcraft:refinery_output',
    [
      'XXX',
      'GTG',
      'XXX'
    ],
    {
      X: '#forge:ingots/compressed_iron',
      G: '#forge:glass/colorless',
      T: 'pneumaticcraft:small_tank'
    }
  )
  event.shaped(
    'pneumaticcraft:refinery_output',
    [
      ' X ',
      'GCG',
      ' X '
    ],
    {
      X: '#forge:ingots/compressed_iron',
      G: '#forge:glass/colorless',
      C: 'kubejs:crashed_refinery_output'
    }
  )

})