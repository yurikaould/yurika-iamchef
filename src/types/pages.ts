import type { RecipeInterface } from "./recipes";

export type Pages = 
    | { page: "homepage" }
    | { page: "discover-recipes" }
    | { page: "recipe-details"; recipeData?: RecipeInterface }