JEIEvents.hideItems(event => {
    [
        'kubejs:staple_grains',
        'kubejs:staple_proteins',
        'kubejs:staple_vegetables',
        'kubejs:staple_fruits'
    ].forEach(itemId => {
        event.hide(itemId);
    });
});