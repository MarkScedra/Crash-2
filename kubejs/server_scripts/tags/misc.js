ServerEvents.tags('item', event => {
    event.add('forge:storage_blocks/electrum',
        'createaddition:electrum_block'
    )

    event.add('crash_landing:reactor_terminals',
        'biggerreactors:reactor_terminal',
        'kubejs:crashed_reactor_controller'
    )

    event.add('crash_landing:experience_buckets',
        'pneumaticcraft:memory_essence_bucket',
        'industrialforegoing:essence_bucket',
        'enderio:xp_juice_bucket',
        'mob_grinding_utils:fluid_xp_bucket'
    )

    event.add('crash_landing:fluid_conduits',
        'enderio:fluid_conduit',
        'enderio:pressurized_fluid_conduit',
        'enderio:ender_fluid_conduit'
    )
});
