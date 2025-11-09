import type { IngredientInterface } from "../../types/ingredients";
import { IconBadge } from "./IconBadge";

type RecipeIngredientsProps = {
    extendedIngredients: IngredientInterface[]
}

export const RecipeIngredients = ({extendedIngredients}: RecipeIngredientsProps) => {
    return extendedIngredients.length <= 5 && 
        <IconBadge icon={"🧂"} text={"Pochi ingredienti"} />
}