ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:dust_pile', 6),
        [
            'DDD'
        ],
        {
            D: 'exdeorum:dust'
        }
    )
    event.shaped(
        Item.of('exdeorum:dust', 1),
        [
            'DD',
            'DD'
        ],
        {
            D: 'kubejs:dust_pile'
        }
    )
});