ServerEvents.recipes(event => {
    [
        'thermal:carrot_block',
        'thermal:potato_block',
        'thermal:beetroot_block'
    ].forEach(itemId => {
        event.remove({output: itemId});
    });
});