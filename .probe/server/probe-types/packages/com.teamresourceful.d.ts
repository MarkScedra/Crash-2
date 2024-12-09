declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $CodecRecipe<C extends $Container> extends $Recipe<(C)> {

 "id"(): $ResourceLocation
 "jsonCodec"<T extends $CodecRecipe<(C)>>(id: $ResourceLocation$Type): $Codec<(T)>
 "networkCodec"<T extends $CodecRecipe<(C)>>(id: $ResourceLocation$Type): $Codec<(T)>
 "assemble"(container: C, access: $RegistryAccess$Type): $ItemStack
 "getId"(): $ResourceLocation
 "isSpecial"(): boolean
 "getResultItem"(access: $RegistryAccess$Type): $ItemStack
 "canCraftInDimensions"(pWidth: integer, pHeight: integer): boolean
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "isIncomplete"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "getMod"(): string
 "getType"(): $ResourceLocation
 "getOrCreateId"(): $ResourceLocation
 "getGroup"(): string
 "getSchema"(): $RecipeSchema
 "setGroup"(group: string): void
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $CodecRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipe$Type<C> = ($CodecRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipe_<C> = $CodecRecipe$Type<(C)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$CodecRecipe, $CodecRecipe$Type} from "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipe"

export class $CodecRecipeType<T extends $CodecRecipe<(any)>> implements $RecipeType<(T)> {


public "toString"(): string
public static "of"<T extends $CodecRecipe<(any)>>(id: string): $CodecRecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeType$Type<T> = ($CodecRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipeType_<T> = $CodecRecipeType$Type<(T)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CodecRecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor(recipeType: $RecipeType$Type<(R)>, codec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>)
constructor(recipeType: $RecipeType$Type<(R)>, jsonCodec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>, networkCodec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>)

public "type"(): $RecipeType<(R)>
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): R
public "fromNetwork"(id: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): R
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: R): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeSerializer$Type<R> = ($CodecRecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipeSerializer_<R> = $CodecRecipeSerializer$Type<(R)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/registry/$RegistryEntry" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryEntry<T> extends $Supplier<(T)> {

 "get"(): T
 "getId"(): $ResourceLocation
}

export namespace $RegistryEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$Type<T> = ($RegistryEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<T> = $RegistryEntry$Type<(T)>;
}}
