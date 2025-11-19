ItemEvents.modification(event => {
    event.modify(/^(?!kubejs:.*$|pamhc2foodextended:beansandriceitem$|pamhc2foodextended:veggiestirfryitem$).*/, item => {
        if (item.foodProperties) {
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.5));
            //food.saturationModifier = food.saturationModifier * 0.5;
            //console.log(`Halved food: ${item.id}`);
        }
    });

    /* If needed, certain foods can be three-quartered instead of halved, make sure to also add to the exclusion list above
    event.modify(/^(pamhc2foodextended:beansandriceitem$|pamhc2foodextended:veggiestirfryitem$)/, item => {
        if (item.foodProperties) {
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.75));
            //food.saturationModifier = food.saturationModifier * 0.4;
            //console.log(`Three-quartered food: ${item.id}`);
        }
    });
    */
});