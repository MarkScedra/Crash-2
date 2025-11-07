const $LayerBlock = Java.loadClass('com.ordana.immersive_weathering.blocks.LayerBlock')
const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')

let dustLayer
let trashLayer

StartupEvents.registry('block', event => {
    dustLayer = event.createCustom('dust_pile', () => new $LayerBlock($Properties.copy(Blocks.SAND)))
    trashLayer = event.createCustom('trash_pile', () => new $LayerBlock($Properties.copy(Blocks.GLASS).sound($SoundType.SUSPICIOUS_GRAVEL)))
})

StartupEvents.registry('item', event => {
    event.createCustom('dust_pile', () => new $BlockItem(dustLayer.get(), new $IProperties()))
    event.createCustom('trash_pile', () => new $BlockItem(trashLayer.get(), new $IProperties()))
})

StartupEvents.registry("block", (event) => {
	
  event.create('controller_frame')
    .displayName('Controller Frame')
    .mapColor('heavy_metal')
    .soundType('metal')
    .hardness(4.0)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock('mineable/pickaxe')
    .textureAll('kubejs:block/controller_frame')
	.defaultCutout()

})