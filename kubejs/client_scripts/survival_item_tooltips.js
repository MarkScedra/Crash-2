ItemEvents.tooltip(event => {
    [
        "kubejs:string_helmet",
        "kubejs:string_chestplate",
        "kubejs:string_leggings",
        "kubejs:string_boots"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Light and breathable mesh clothing"));
            text.add(2, Text.gray("Slightly slows how fast you overheat."));
        });
    });
    event.addAdvanced("kubejs:stillsuit", (item, advanced, text) => {
        text.add(1, Text.gray("Significantly insulates you from extreme temperatures."));
        text.add(2, Text.gray("Recycles moisture to reduce your water use."));
    });

});