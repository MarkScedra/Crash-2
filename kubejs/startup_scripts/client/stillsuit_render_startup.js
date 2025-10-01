if (Platform.isClientEnvironment()) {
    (function () {
        var CuriosRendererRegistry = Java.loadClass('top.theillusivec4.curios.api.client.CuriosRendererRegistry')
        var RendererCurios = Java.loadClass('com.prunoideae.powerfuljs.capabilities.forge.mods.curios.RendererCurios')
        var OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture')
        var RenderType = Java.loadClass('net.minecraft.client.renderer.RenderType')
        var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

        function makeRenderer() {
            return new RendererCurios(function (ctx) {
                var poseStack = ctx.matrixStack
                var model = ctx.renderLayerParent.getModel()

                var texture = new ResourceLocation('kubejs', 'textures/models/armor/stillsuit_wide.png')
                if (ctx.slotContext.entity().getModelName() === 'slim') {
                    texture = new ResourceLocation('kubejs', 'textures/models/armor/stillsuit_thin.png')
                }

                var renderType = RenderType.entityCutoutNoCullZOffset(texture)
                var bufferName = '' + ctx.renderTypeBuffer.getClass().getName()
                if (
                    bufferName.indexOf('net.minecraft.client.renderer.MultiBufferSource$BufferSource') >= 0 ||
                    bufferName.indexOf('net.minecraft.client.renderer.MultiBufferSource$Immediate') >= 0 ||
                    bufferName.indexOf('net.minecraft.client.renderer.OutlineBufferSource') >= 0
                ) {
                    renderType = RenderType.entityTranslucent(texture)
                }

                poseStack.pushPose()

                model.renderToBuffer(
                    poseStack,
                    ctx.renderTypeBuffer.getBuffer(renderType),
                    ctx.light,
                    OverlayTexture.NO_OVERLAY,
                    1.0, 1.0, 1.0, 1.0 // RGBA color tint
                )

                poseStack.popPose()
            })
        }

        StartupEvents.postInit(function () {
            CuriosRendererRegistry.register('kubejs:stillsuit', function () {
                return makeRenderer()
            })
        })
    })()
}