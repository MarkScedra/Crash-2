/* ServerEvents.tick(event => {
    const player = event.player.persistenData; // Lista todos os jogadores no servidor

    player(player => {
        // Verifica se os dados de temperatura existem antes de acessá-los
        const temperatureLevel = player.nbt.ForgeData.survive.PlayerData.TemperatureStats.temperatureLevel;

        // Certifica-se de que o valor de temperatureLevel foi obtido
        if (temperatureLevel > 37) {
            // Aplica o efeito de lentidão (Slowness 1) ao jogador por 100 ticks (5 segundos)
            player.potionEffects.add("minecraft:slowness", 100, 0);
        }
    });
}); */


PlayerEvents.tick(player => {

    // Verifica se os dados de temperatura existem antes de acessá-los
    const surviveData = event.player.nbt.ForgeData['survive:PlayerData'];
    const temperatureLevel = surviveData.TemperatureStats.temperatureLevel

    // Certifica-se de que o valor de temperatureLevel foi obtido
    if (temperatureLevel >= 38) {
        // Aplica o efeito de lentidão (Slowness 1) ao jogador por 100 ticks (5 segundos)
        event.server.runCommandSilent('effect give @p minecraft:slowness 100 0');
        return
    }

});

/* ServerEvents.tick(event => {

        // Verifica se os dados do jogador existem antes de acessá-los
        const surviveData = event.player.nbt['survive:PlayerData'];

        if (surviveData && surviveData.TemperatureStats) {
            const temperatureLevel = surviveData.TemperatureStats.temperatureLevel;

            // Verifica se a temperatura está acima de 38
            if (temperatureLevel > 38) {
                // Aplica o efeito de lentidão (Slowness 1) ao jogador por 100 ticks (5 segundos)
                event.server.runCommandSilent('effect give @p minecraft:slowness 100 0');
            }
        }
    }); */

