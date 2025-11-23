ItemEvents.tooltip(event => {
    Ingredient.of(/^functionalstorage:.*/).itemIds.forEach(id => {
        event.addAdvanced(id, (item, advanced, text) => {
            text.add(1, [Text.yellow("Functional Storage").italic(true), Text.gray(" is deprecated and will eventually be removed.")]);
            text.add(2, [Text.gray("Use "), Text.aqua("Limited Barrels").italic(true), Text.gray(" from Sophisticated Storage instead.")]);
        });
    });
});