JEIEvents.hideItems(event => {
    [
        'kubejs:staple_fruits',
        'kubejs:staple_proteins',
        'kubejs:staple_vegetables'
    ].forEach(itemId => {
        event.hide(itemId);
    });
});