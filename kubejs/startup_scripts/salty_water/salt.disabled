ItemEvents.modification(event => {
  event.modify("pamhc2foodcore:saltitem", item => {
    item.setFoodProperties(food => {
      food.alwaysEdible()
      food.effect("survive:thirst", 200, 1, 1)
    })
  })
})