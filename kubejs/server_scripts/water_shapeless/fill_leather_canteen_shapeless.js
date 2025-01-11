ServerEvents.recipes(event => {
  function filling(output, fillInput) {
    event.shapeless(output.strongNBT(), [
      'thirstcanteen:leather_canteen',            
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT()
    ]).replaceIngredient('thirstcanteen:leather_canteen', '4x minecraft:glass_bottle')
  }

  filling(Item.of('thirstcanteen:leather_canteen_full', {Damage:0,Purity:3}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'))
  filling(Item.of('thirstcanteen:leather_canteen_full', {Damage:0,Purity:2}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}'))
  filling(Item.of('thirstcanteen:leather_canteen_full', {Damage:0,Purity:1}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}'))
  filling(Item.of('thirstcanteen:leather_canteen_full', {Damage:0,Purity:0}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}'))

  })