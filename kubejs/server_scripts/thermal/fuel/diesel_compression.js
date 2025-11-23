ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('createaddition:bioethanol').energy(100000);
    event.recipes.thermal.compression_fuel('industrialforegoing:biofuel').energy(100000);
    event.recipes.thermal.compression_fuel('pneumaticcraft:diesel').energy(200000);
    event.recipes.thermal.compression_fuel('pneumaticcraft:kerosene').energy(300000);
    event.recipes.thermal.compression_fuel('pneumaticcraft:gasoline').energy(400000);
    event.recipes.thermal.compression_fuel('pneumaticcraft:lpg').energy(500000);
})