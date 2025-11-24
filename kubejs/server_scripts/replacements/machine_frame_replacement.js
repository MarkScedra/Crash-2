ServerEvents.recipes(event => {
// This section now partially handled in config/almostunified/unify.json
/*
  event.replaceInput({ input: 'industrialforegoing:machine_frame_pity' }, 'industrialforegoing:machine_frame_pity', 'desolate_planet:machine_frame');
  event.replaceInput({ input: '#industrialforegoing:machine_frame/pity' }, '#industrialforegoing:machine_frame/pity', 'desolate_planet:machine_frame');
  event.replaceInput({ input: 'mekanism:steel_casing' }, 'mekanism:steel_casing', 'desolate_planet:machine_frame');
  event.replaceInput({ input: 'enderio:void_chassis' }, 'enderio:void_chassis', 'desolate_planet:machine_frame');
  event.replaceInput({ input: 'enderio:ensouled_chassis' }, 'enderio:ensouled_chassis', '#desolate_planet:machine_frame');
  event.replaceInput({ input: 'rftoolsbase:machine_frame' }, 'rftoolsbase:machine_frame', '#desolate_planet:machine_frame');
*/
  event.remove({ output: 'thermal:machine_frame' });
  event.remove({ output: 'industrialforegoing:machine_frame_pity' });
  event.remove({ output: 'mekanism:steel_casing' });
  event.remove({ output: 'enderio:void_chassis' });
  event.remove({ output: 'enderio:ensouled_chassis' });
//  event.remove({ output: 'rftoolsbase:machine_frame' });

  event.shaped(
    Item.of('thermal:machine_frame', 1),
    [
      'IGI',
      'GPG',
      'IGI'
    ],
    {
      G: '#forge:glass',
      I: '#forge:ingots/invar',
      P: 'pneumaticcraft:printed_circuit_board'
    }
  )
})