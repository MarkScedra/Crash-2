# LevelEvents.afterExplosion

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: [After](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/level/After.java)

```
Invoked right after an explosion happens.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getAffectedBlocks |  |  | List<BlockContainerJS> | ✘ |
| removeKnockback |  |  | void | ✘ |
| getAffectedEntities |  |  | EntityArrayList | ✘ |
| removeAllAffectedEntities |  |  | void | ✘ |
| removeAffectedEntity | Entity |  | void | ✘ |
| removeAllAffectedBlocks |  |  | void | ✘ |
| removeAffectedBlock | BlockContainerJS |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getX |  |  | double | ✘ |
| getExploder |  |  | LivingEntity | ✘ |
| getZ |  |  | double | ✘ |
| getPosition |  |  | Vec3 | ✘ |
| getBlock |  |  | BlockContainerJS | ✘ |
| getY |  |  | double | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `List<BlockContainerJS> getAffectedBlocks()`
```
Gets a list of all blocks affected by the explosion.
```

- `void removeKnockback()`
```
Remove all knockback from all affected *players*.
```

- `EntityArrayList getAffectedEntities()`
```
Gets a list of all entities affected by the explosion.
```

- `void removeAllAffectedEntities()`
```
Remove all entities from the list of affected entities.
```

- `void removeAffectedEntity(Entity var0)`

  Parameters:
  - var0: Entity

```
Remove an entity from the list of affected entities.
```

- `void removeAllAffectedBlocks()`
```
Remove all blocks from the list of affected blocks.
```

- `void removeAffectedBlock(BlockContainerJS var0)`

  Parameters:
  - var0: BlockContainerJS

```
Remove a block from the list of affected blocks.
```

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
LevelEvents.afterExplosion((event) => {
	// This space (un)intentionally left blank
});
```
