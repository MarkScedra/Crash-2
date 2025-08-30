ServerEvents.recipes(event => {
    event.replaceInput({ input: 'mekanism:pellet_plutonium' }, 'mekanism:pellet_plutonium', 'biggerreactors:blutonium_ingot');
    event.replaceInput({ input: 'mekanism:pellet_polonium' }, 'mekanism:pellet_polonium', '#forge:ingots/uranium');
});