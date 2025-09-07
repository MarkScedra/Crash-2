ServerEvents.recipes(event => {
    event.custom({
        "type": "exdeorum:barrel_compost",
        "ingredient": {
            tag: 'forge:crops'
        },
        "volume": 125
    })
    event.custom({
        "type": "exdeorum:barrel_compost",
        "ingredient": {
            tag: 'forge:fuels/bio'
        },
        "volume": 50
    })
})