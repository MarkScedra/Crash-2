const $LayerBlock = Java.loadClass('com.ordana.immersive_weathering.blocks.LayerBlock')
const $BarrelBlock = Java.loadClass('net.minecraft.world.level.block.BarrelBlock')
const $ChairBlock = Java.loadClass('com.mrcrayfish.furniture.refurbished.block.ChairBlock')
const $SofaBlock = Java.loadClass('com.mrcrayfish.furniture.refurbished.block.SofaBlock')
const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')
const $WoodType = Java.loadClass('net.minecraft.world.level.block.state.properties.WoodType')
const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor')

let dustLayer
let trashLayer
let metalCrate
let whiteShipChair

StartupEvents.registry('block', event => {
    dustLayer = event.createCustom('dust_pile', () => new $LayerBlock($Properties.copy(Blocks.SAND)))
    trashLayer = event.createCustom('trash_pile', () => new $LayerBlock($Properties.copy(Blocks.GLASS).sound($SoundType.SUSPICIOUS_GRAVEL)))
    metalCrate = event.createCustom('metal_crate', () => new $BarrelBlock($Properties.copy(Blocks.IRON_BLOCK)))

    //whiteShipChair = event.createCustom('white_ship_chair', () => new $ChairBlock($WoodType.OAK, $Properties.copy(Blocks.IRON_BLOCK)))
    whiteShipChair = event.createCustom('white_ship_chair', () => new $SofaBlock($DyeColor.WHITE, $Properties.copy(Blocks.IRON_BLOCK)))
})

StartupEvents.registry('item', event => {
    event.createCustom('dust_pile', () => new $BlockItem(dustLayer.get(), new $IProperties()))
    event.createCustom('trash_pile', () => new $BlockItem(trashLayer.get(), new $IProperties()))
    event.createCustom('metal_crate', () => new $BlockItem(metalCrate.get(), new $IProperties()))

    event.createCustom('white_ship_chair', () => new $BlockItem(whiteShipChair.get(), new $IProperties()))
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