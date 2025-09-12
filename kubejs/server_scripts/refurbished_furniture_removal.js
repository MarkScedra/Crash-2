ServerEvents.recipes(event => {
    // removes all recipes of the following types
    [
        'refurbished_furniture:freezer_solidifying',
    ].forEach(type => {
        event.remove({ type: type });
    });

    // remove all recipes with the following items in the input or output
    [
        'refurbished_furniture:recycle_bin',
        'refurbished_furniture:television',
    ].forEach(itemId => {
        event.remove({ input: itemId });
        event.remove({ output: itemId });
    });
});