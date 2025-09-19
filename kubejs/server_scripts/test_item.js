const ThirstCapabilities = Java.loadClass('dev.ghen.thirst.foundation.common.capability.ModCapabilities')

ItemEvents.rightClicked('kubejs:test_item', (e) => {
    // run on server for player
    var player = e.player
    if (player.isFake() || e.level.isClientSide()) return

    // drink
    var cap = player.getCapability(ThirstCapabilities.PLAYER_THIRST, null).orElse(null)
    if (cap) cap.drink(player, 2, 3)

    // consume item
    e.item.shrink(1)
})
