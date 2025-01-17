# JEIAddedEvents.registerAdvanced

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: RegisterAdvancedEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| data | IAdvancedRegistration | ✘ |
| customRecipeTypes | Map<ResourceLocation, RecipeType<CustomJSRecipe>> | ✔ |
| overriddenRecipeTypes | Map<ResourceLocation, RecipeType> | ✔ |
| JEI_HELPERS | IJeiHelpers | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| categoryDecorator | CustomRecipeCategoryDecorator.DrawDecorator<T> |  | CustomRecipeCategoryDecorator<T> | ✘ |
| categoryDecorator | CustomRecipeCategoryDecorator.DrawDecorator<T>, CustomRecipeCategoryDecorator.TooltipDecorator<T> |  | CustomRecipeCategoryDecorator<T> | ✘ |
| clearCustomRecipeTypes |  |  | void | ✔ |
| getOverriddenRecipeType | ResourceLocation |  | RecipeType<?> | ✔ |
| clearOverriddenRecipeTypes |  |  | void | ✔ |
| removeCustomRecipeType | ResourceLocation |  | void | ✔ |
| getOrCreateCustomRecipeType | ResourceLocation |  | RecipeType<CustomJSRecipe> | ✔ |
| getCustomRecipeType | ResourceLocation |  | RecipeType<CustomJSRecipe> | ✔ |
| removeOverriddenRecipeType | ResourceLocation |  | void | ✔ |
| getOrCreateCustomOverriddenRecipeType | ResourceLocation, RecipeType<T> |  | RecipeType<T> | ✔ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
JEIAddedEvents.registerAdvanced((event) => {
	// This space (un)intentionally left blank
});
```

