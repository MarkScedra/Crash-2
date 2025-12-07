JEIEvents.hideItems(event => {
    [
        // Vanilla Jetpacks
        'simplyjetpacks:jetpack_vanilla1',
        'simplyjetpacks:jetpack_vanilla2',
        'simplyjetpacks:jetpack_vanilla3',
        'simplyjetpacks:jetpack_vanilla4',
        'simplyjetpacks:jetpack_vanilla1_armored',
        'simplyjetpacks:jetpack_vanilla2_armored',
        'simplyjetpacks:jetpack_vanilla3_armored',
        'simplyjetpacks:jetpack_vanilla4_armored',
        'simplyjetpacks:thruster_vanilla1',
        'simplyjetpacks:thruster_vanilla2',
        'simplyjetpacks:thruster_vanilla3',
        'simplyjetpacks:thruster_vanilla4',

        // Thermal Expansion Jetpacks
        'simplyjetpacks:jetpack_te1',
        'simplyjetpacks:jetpack_te2',
        'simplyjetpacks:jetpack_te3',
        'simplyjetpacks:jetpack_te4',
        'simplyjetpacks:jetpack_te5',
        'simplyjetpacks:jetpack_te1_armored',
        'simplyjetpacks:jetpack_te2_armored',
        'simplyjetpacks:jetpack_te3_armored',
        'simplyjetpacks:jetpack_te4_armored',
        'simplyjetpacks:jetpack_te5_enderium',
        'simplyjetpacks:armorplating_te1',
        'simplyjetpacks:armorplating_te2',
        'simplyjetpacks:armorplating_te3',
        'simplyjetpacks:armorplating_te4',
        'simplyjetpacks:armorplating_te5',
        'simplyjetpacks:armorplating_te5_enderium',
        'simplyjetpacks:thruster_te1',
        'simplyjetpacks:thruster_te2',
        'simplyjetpacks:thruster_te3',
        'simplyjetpacks:thruster_te4',
        'simplyjetpacks:thruster_te5',
        'simplyjetpacks:flux_chestplate',

        // Immersive Engineering Jetpacks
        'simplyjetpacks:jetpack_ie1',
        'simplyjetpacks:jetpack_ie2',
        'simplyjetpacks:jetpack_ie3',
        'simplyjetpacks:jetpack_ie1_armored',
        'simplyjetpacks:jetpack_ie2_armored',
        'simplyjetpacks:jetpack_ie3_armored',
        'simplyjetpacks:armorplating_ie1',
        'simplyjetpacks:armorplating_ie2',
        'simplyjetpacks:armorplating_ie3',
        'simplyjetpacks:thruster_ie1',
        'simplyjetpacks:thruster_ie2',
        'simplyjetpacks:thruster_ie3',

    ].forEach(itemId => {
        event.hide(itemId);
    });
});