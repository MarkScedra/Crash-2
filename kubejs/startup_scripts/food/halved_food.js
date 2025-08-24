ItemEvents.modification(event => {
    event.modify(/^(?!kubejs:.*$|pamhc2foodcore:stockitem$|pamhc2foodextended:beansandriceitem$|pamhc2foodextended:veggiestirfryitem$).*/, item => {
        if (item.foodProperties) {
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.5));
            //food.saturationModifier = food.saturationModifier * 0.5;
            //console.log(`Halved food: ${item.id}`);
        }
    });

    event.modify('pamhc2foodcore:stockitem', item => {
        if (item.foodProperties) {
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.25));
            //food.saturationModifier = food.saturationModifier * 0.25;
            //console.log(`Quartered food: ${item.id}`);
        }
    });

    event.modify(/^(pamhc2foodextended:beansandriceitem$|pamhc2foodextended:veggiestirfryitem$)/, item => {
        if (item.foodProperties) {
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.75));
            //food.saturationModifier = food.saturationModifier * 0.4;
            //console.log(`Three-quartered food: ${item.id}`);
        }
    });
});