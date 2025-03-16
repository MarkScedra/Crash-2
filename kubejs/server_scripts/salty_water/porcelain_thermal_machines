BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando uma garrafa de vidro
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    // Verifica se o bloco clicado é a máquina centrífuga do Thermal Expansion
    // if (!block.id.equals('thermal:machine_centrifuge')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.TankInv) return;
    
    let tank = blockEntity.TankInv.find(t => t.FluidName === "survive:purified_water");
    if (!tank || tank.Amount < 1000) return; // Garante que há fluido suficiente
    
    event.item.count--;
    player.give(Item.of('kubejs:porcelain_purified_water_bucket'));
    // player.level.playSound(player, block.pos, "item.bucket.fill", 1.0, 1.0);
    event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.fill', 'master', 1.0, 1.0);
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
    // Cancela a interação padrão para impedir a abertura do GUI
    event.cancel();
});

////////////////FILL TANK///////////////////////

/* BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de água purificada de porcelana
    if (!item.is('kubejs:porcelain_purified_water_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.contains('TankInv')) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
        
        // Adiciona 1000 de 'survive:purified_water' ao tanque
        blockEntity.put('TankInv', [{
            FluidName: "survive:purified_water",
            Amount: 1000
        }]);
        
        // Atualiza o bloco
        block.entityData = blockEntity;
        block.update();
        
        event.cancel();
        return;
    } 
   

    let tankData = blockEntity.get('TankInv');
    if (tankData.size() == 0) {
        // Remove o balde de água purificada da mão do jogador
        event.item.count--;
        
        // Adiciona um balde vazio ao inventário do jogador
        player.give(Item.of('exdeorum:porcelain_bucket'));
        
        // Adiciona 1000 de 'survive:purified_water' ao tanque
        blockEntity.put('TankInv', [{
            FluidName: "survive:purified_water",
            Amount: 1000
        }]);
        
        // Atualiza o bloco
        block.entityData = blockEntity;
        block.update();
        
        event.cancel();
    } else {
        let storedData = tankData.get(0);
        let fluidName = storedData.getString('FluidName');
        let currentAmount = storedData.getInt('Amount');
        
        if (fluidName == "survive:purified_water") {
            // Remove o balde de água purificada da mão do jogador
            event.item.count--;
            
            // Adiciona um balde vazio ao inventário do jogador
            player.give(Item.of('exdeorum:porcelain_bucket'));
            event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
            
            // Adiciona 1000 de 'survive:purified_water' ao tanque
            storedData.put('FluidName', "survive:purified_water");
            storedData.put('Amount', currentAmount + 1000);
            
            // Atualiza o bloco
            block.entityData = blockEntity;
            block.update();
            
            event.cancel();
        }
    }
    // Cancela a interação padrão para impedir a abertura do GUI
    event.cancel();
}); */

BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Pula se não estiver segurando o item correto ou não estiver usando a mão principal
    if (!item.is('kubejs:porcelain_purified_water_bucket') || hand != 'main_hand') return;
    
    // Obtém os dados da entidade do bloco
    let blockEntity = block.getEntityData();
    
    if (blockEntity) {
        // Verifica se é um bloco do Thermal que pode conter fluidos
        if (blockEntity.id && blockEntity.id.startsWith("thermal:")) {
            let fluidName = null;
            let amount = 0;
            let maxAmount = 20000; // Valor padrão para capacidade máxima dos tanques Thermal
            let canAddFluid = false;
            
            // Verifica se o bloco tem FluidName e Amount
            if (blockEntity.FluidName !== undefined) {
                fluidName = blockEntity.FluidName;
                amount = blockEntity.Amount || 0;
                canAddFluid = true;
            } 
            // Dispositivos específicos do Thermal podem ter estruturas diferentes
            else if (blockEntity.Tank !== undefined) {
                fluidName = blockEntity.Tank.FluidName;
                amount = blockEntity.Tank.Amount || 0;
                canAddFluid = true;
            }
            // Para Fluid Cells do Thermal
            else if (blockEntity.AmountIn !== undefined) {
                // Células de fluido podem armazenar o tipo de fluido em outro campo
                // Tentamos encontrar o campo do tipo de fluido
                if (blockEntity.FluidIn !== undefined) {
                    fluidName = blockEntity.FluidIn;
                }
                amount = blockEntity.AmountIn || 0;
                canAddFluid = true;
            }
            
            // Se podemos adicionar fluido e o tanque está vazio ou já contém água purificada
            if (canAddFluid && (fluidName === null || fluidName === "" || fluidName === "survive:purified_water")) {
                // Verifica se há espaço suficiente no tanque
                if (amount + 1000 <= maxAmount) {
                    // Reduz a contagem do balde
                    item.count--;
                    
                    // Adiciona um balde vazio ao inventário
                    player.give('exdeorum:porcelain_bucket');
                    
                    // Reproduz o som
                    event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
                    
                    // Atualiza o fluido no tanque
                    if (blockEntity.FluidName !== undefined) {
                        blockEntity.FluidName = "survive:purified_water";
                        blockEntity.Amount = amount + 1000;
                    } 
                    else if (blockEntity.Tank !== undefined) {
                        blockEntity.Tank.FluidName = "survive:purified_water";
                        blockEntity.Tank.Amount = amount + 1000;
                    }
                    else if (blockEntity.AmountIn !== undefined) {
                        if (blockEntity.FluidIn !== undefined) {
                            blockEntity.FluidIn = "survive:purified_water";
                        }
                        blockEntity.AmountIn = amount + 1000;
                    }
                    
                    // Atualiza o bloco
                    block.setEntityData(blockEntity);
                    
                    // Cancela o evento para evitar o comportamento padrão
                    event.cancel();
                    
                    // Log para debug
                    console.log("Adicionando água purificada ao tanque: " + amount + " -> " + (amount + 1000));
                }
            }
        } 
        // Suporte para tanques de outros mods com formato TankInv
        else if (blockEntity.TankInv !== undefined) {
            let tankInv = blockEntity.TankInv;
            let canAddWater = false;
            let currentAmount = 0;
            
            // Verifica se o tanque está vazio ou contém água purificada
            if (!tankInv || tankInv.length === 0) {
                canAddWater = true;
            } else if (tankInv[0] && tankInv[0].FluidName === "survive:purified_water") {
                currentAmount = tankInv[0].Amount || 0;
                canAddWater = true;
            }
            
            if (canAddWater) {
                // Reduz a contagem do balde
                item.count--;
                
                // Adiciona um balde vazio ao inventário
                player.give('exdeorum:porcelain_bucket');
                
                // Reproduz o som
                event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.bucket.empty', 'master', 1.0, 1.0);
                
                // Atualiza os dados do tanque
                if (!tankInv || tankInv.length === 0) {
                    blockEntity.TankInv = [{
                        FluidName: "survive:purified_water",
                        Amount: 1000
                    }];
                } else {
                    tankInv[0].FluidName = "survive:purified_water";
                    tankInv[0].Amount = currentAmount + 1000;
                }
                
                // Atualiza o bloco
                block.setEntityData(blockEntity);
                
                // Cancela o evento para evitar o comportamento padrão
                event.cancel();
                
                // Log para debug
                console.log("Adicionando água purificada ao tanque TankInv: " + currentAmount + " -> " + (currentAmount + 1000));
            }
        }
    }
});

/*--------------------------------------------------------------*/

BlockEvents.rightClicked(event => {
    let { player, item, block } = event;
    
    // Verifica se o jogador está segurando um balde vazio de porcelana
    if (!item.is('exdeorum:porcelain_bucket')) return;

    // Verifica se o bloco tem uma entidade de bloco e se contém o tanque
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.contains('TankInv')) return;

    let tankData = blockEntity.get('TankInv');
    if (tankData.size() == 0) return;

    let storedData = tankData.get(0);
    let fluidName = storedData.getString('FluidName');

    // Verifica se o tanque contém 'survive:purified_water'
    if (fluidName == "survive:purified_water") {
        // Cancela a interação padrão para impedir a abertura do GUI
        event.cancel();
    }
});

