const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const $ModifiableItem = Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem");
const $ToolDefinition = Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition");

StartupEvents.registry("item", (event) => {
  event.createCustom(
    "desolate_planet:crook",
    () => new $ModifiableItem(new $ItemProperties().stacksTo(1), $ToolDefinition.create("desolate_planet:crook"))
  );
});