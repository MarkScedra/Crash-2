[
    'minecraft:glass_bottle',
    'minecraft:bowl',
    'cold_sweat:waterskin',
    'thirst:terracotta_bowl'
].forEach(itemId => {
    console.log(`WATERCANCEL: Setting up right click cancel for ${itemId}`);
    ItemEvents.rightClicked(itemId, event => {
        // ensure target and target id exist
        if (!(event.target && event.target.block && event.target.block.id)) {
            return;
        }

        // cancel right click if target block is water
        if (event.target.block.id === 'minecraft:water' || event.target.block.id === 'minecraft:flowing_water') {
            event.cancel();
        }
    });
});