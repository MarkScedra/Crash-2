if (Platform.isClientEnvironment()) {
  (function () {
    // transformation definitions
    global.camelPackTransforms = {
      STANDING: {
        rotate:    { x: 180, y: 180, z: 0 },      // flip upright + face toward the back
        translate: { x: 0.0, y: -5/16, z: 2.5/16 }, // 5px down, 2.5px off the back
        scale:     { x: 1.0, y: 1.0, z: 1.0 }
      },
      SNEAKING: {
        rotate:    { x: 210, y: 180, z: 0 },
        translate: { x: 0.0, y: -5.25/16, z: 2.1/16 }, // tweak separately if you want a different crouch pose
        scale:     { x: 1.0, y: 1.0, z: 1.0 }
      }
    }

    // Function to apply camel pack transformations
    global.camelPackTransform = function (matrixStack, wearer) {
      var t = (wearer && wearer.isCrouching())
        ? global.camelPackTransforms.SNEAKING
        : global.camelPackTransforms.STANDING

      // 1. rotate
      if (t.rotate.x) matrixStack.mulPose(RotationAxis.XP.deg(t.rotate.x))
      if (t.rotate.y) matrixStack.mulPose(RotationAxis.YP.deg(t.rotate.y))
      if (t.rotate.z) matrixStack.mulPose(RotationAxis.ZP.deg(t.rotate.z))

      // 2. translate
      matrixStack.translate(t.translate.x, t.translate.y, t.translate.z)

      // 3. scale
      // matrixStack.scale(t.scale.x, t.scale.y, t.scale.z)
    }

    // load classes
    var CuriosRendererRegistry = Java.loadClass('top.theillusivec4.curios.api.client.CuriosRendererRegistry')
    var RendererCurios         = Java.loadClass('com.prunoideae.powerfuljs.capabilities.forge.mods.curios.RendererCurios')
    var OverlayTexture         = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture')

    // register the Curios renderer
    StartupEvents.postInit(function () {
      CuriosRendererRegistry.register('kubejs:camel_pack', function () {
        return new RendererCurios(function (ctx) {
          var matrixStack   = ctx.matrixStack
          var wearer        = ctx.slotContext.entity()
          var stack         = ctx.stack || Item.of('kubejs:camel_pack')

          matrixStack.pushPose()

          CuriosRenderer.translateIfSneaking(matrixStack, wearer)

          global.camelPackTransform(matrixStack, wearer)

          Client.itemRenderer.render(
            stack,
            'none',
            false,
            matrixStack,
            ctx.renderTypeBuffer,
            ctx.light,
            OverlayTexture.NO_OVERLAY,
            Client.itemRenderer.getModel(stack, null, null, 0)
          )

          matrixStack.popPose()
        })
      })
    })
  })()
}
