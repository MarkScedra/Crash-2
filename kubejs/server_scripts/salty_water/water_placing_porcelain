ItemEvents.rightClicked('kubejs:porcelain_purified_water_bucket', event => {
    if(!event.target || !event.target.block) return
    event.item.count--
    event.target.block.up.set('minecraft:water')
    event.entity.runCommandSilent('playsound minecraft:item.bucket.empty master @p ~ ~ ~');
    event.entity.runCommandSilent('give @p exdeorum:porcelain_bucket');
})

ItemEvents.rightClicked('exdeorum:porcelain_bucket', event => {
    if(!event.target || !event.target.block || event.target.block.id != 'survive:purified_water' || event.target.block.properties.level != 0) return;
    event.item.count--
    event.target.block.set('minecraft:air')
    event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
    event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');
})

ItemEvents.rightClicked('survive:purified_water_bucket', event => {
    if(!event.target || !event.target.block) return
    event.item.count--
    event.target.block.up.set('minecraft:water')
    event.entity.runCommandSilent('playsound minecraft:item.bucket.empty master @p ~ ~ ~');
    event.entity.runCommandSilent('give @p minecraft:bucket');
})

  /*  ItemEvents.rightClicked(event => {
        if (event.item.id == 'suvive:purified_water_bucket') {
          const player = event.player;
          const level = player.level;
          const rayTraceResult = player.rayTrace(5); // 5 block reach distance
          
          if (rayTraceResult.type == 'BLOCK') {
            const pos = rayTraceResult.block.pos;
            const face = rayTraceResult.getFacing();
            const placePos = pos.offset(face.x, face.y, face.z);
            
            if (level.getBlockState(placePos).id == 'minecraft:air') {
              // Place water
              level.setBlock(placePos, 'minecraft:water', false);
              
              // Handle item swap if not in creative
              if (!player.creative) {
                event.item.count--;
                player.give('minecraft:bucket');
              }
              
              // Play sound
              level.playSound(null, placePos.x, placePos.y, placePos.z, 'minecraft:item.bucket.empty', 'blocks', 1.0, 1.0);
            }
          }
        }
      }); */
