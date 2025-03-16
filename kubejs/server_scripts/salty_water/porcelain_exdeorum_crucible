BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.Tank) return;
    
    let tank = blockEntity.Tank;
    if (tank.FluidName !== "survive:purified_water" || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove a garrafa de vidro da mão do jogador
    event.item.count--;
    
    // Adiciona a poção de água purificada ao inventário do jogador
    player.give(Item.of('kubejs:porcelain_purified_water_bucket'));
    event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.fill', 'master', 1.0, 1.0);
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});

////////////////FILL TANK///////////////////////

BlockEvents.rightClicked(event => {
    let { block } = event;

    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.contains('Tank')) return;

    let tank = blockEntity.get('Tank');
    let fluidName = tank.getString('FluidName');
    let currentAmount = tank.getInt('Amount');

    // Cancela a interação se o tanque tiver mais de 3000mB de survive:purified_water
    if (fluidName == "survive:purified_water" && currentAmount > 3000) {
        event.cancel();
    }
});



BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de água purificada de porcelana
    if (!item.is('kubejs:porcelain_purified_water_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.Tank) return;
    
    let tank = blockEntity.Tank;
    
    // Verifica se o tanque contém água purificada ou está vazio, e se a quantidade é adequada para encher com mais 1000mB
    if (tank.FluidName === "minecraft:empty" || (tank.FluidName === "survive:purified_water" && tank.Amount <= 3000)) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
        
        // Atualiza o tanque do bloco, enchendo com 1000 de água purificada
        tank.FluidName = "survive:purified_water";
        tank.Amount += 1000;
        block.entityData = blockEntity;
        block.update();
    }
});

