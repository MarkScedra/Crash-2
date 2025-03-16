BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de porcelana vazio
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.FluidTanks) return;
    
    let tank = blockEntity.FluidTanks.find(t => t.Tank === 0);
    if (!tank || !tank.stored || tank.stored.FluidName !== "survive:purified_water" || tank.stored.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove o balde vazio da mão do jogador
    event.item.count--;
    
    // Adiciona um balde de água purificada ao inventário do jogador
    player.give(Item.of('kubejs:porcelain_purified_water_bucket'));
    event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.fill', 'master', 1.0, 1.0);
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.stored.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});

////////////////FILL TANK///////////////////////

BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de água purificada de porcelana
    if (!item.is('kubejs:porcelain_purified_water_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.contains('FluidTanks')) return;

    let tankData = blockEntity.get('FluidTanks');
    if (tankData.size() == 0) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
        
        // Adiciona 1000 de 'survive:purified_water' ao tanque
        blockEntity.put('FluidTanks', [{
            stored: {
                FluidName: "survive:purified_water",
                Amount: 1000
            }
        }]);
        
        // Atualiza o bloco
        block.entityData = blockEntity;
        block.update();
        
        event.cancel();
        return;
    }
    
    let storedData = tankData.get(0).getCompound('stored');
    if (!storedData || (!storedData.contains('FluidName') && !storedData.contains('Amount'))) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
        
        // Adiciona 1000 de 'survive:purified_water' ao tanque
        tankData.get(0).put('stored', {
            FluidName: "survive:purified_water",
            Amount: 1000
        });
        
        // Atualiza o bloco
        block.entityData = blockEntity;
        block.update();
        
        event.cancel();
    } else {
        let fluidName = storedData.getString('FluidName');
        let currentAmount = storedData.getInt('Amount');
        
        if (fluidName == "survive:purified_water") {
            // Remove o balde de água purificada da mão do jogador
            event.item.count--;
            
            // Adiciona um balde vazio ao inventário do jogador
            player.give(Item.of('exdeorum:porcelain_bucket'));
            event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
            
            // Adiciona 1000 de 'survive:purified_water' ao tanque
            tankData.get(0).put('stored', {
                FluidName: "survive:purified_water",
                Amount: currentAmount + 1000
            });
            
            // Atualiza o bloco
            block.entityData = blockEntity;
            block.update();
            
            event.cancel();
        }
    }
});



  
  

/* BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de água purificada de porcelana
    if (!item.is('kubejs:porcelain_purified_water_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.FluidTanks) return;
    
    let tank = blockEntity.FluidTanks.find(t => t.Tank === 0);
    if (!tank) return;
    
    // Se o tanque já contém outro fluido, não faz nada
    if (tank.stored && tank.stored.FluidName && tank.stored.FluidName !== "survive:purified_water") return;
    
    // Remove o balde de água purificada da mão do jogador
    event.item.count--;
    
    // Adiciona um balde vazio ao inventário do jogador
    player.give(Item.of('exdeorum:porcelain_bucket'));
    
    // Se o tanque estiver vazio, inicializa o armazenamento
    if (!tank.stored) {
        tank.stored = { FluidName: "survive:purified_water", Amount: 1000 };
    } else {
        // Atualiza o tanque do bloco, adicionando 1000 de água purificada
        tank.stored.Amount += 1000;
    }
    
    block.entityData = blockEntity;
    entity.updateBlock();
}); */

/* BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de porcelana vazio
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.FluidTanks) return;
    
    let tank = blockEntity.FluidTanks.find(t => t.Tank === 0);
    if (!tank || !tank.stored || tank.stored.FluidName !== "minecraft:water" || tank.stored.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove o balde vazio da mão do jogador
    event.item.count--;
    
    // Adiciona um balde de água purificada ao inventário do jogador
    player.give(Item.of('exdeorum:porcelain_water_bucket'));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.stored.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
}); */
