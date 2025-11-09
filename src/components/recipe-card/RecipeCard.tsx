import type { IngredientInterface } from "../../types/ingredients";
import { fallbackRecipe } from "../../types/fallback-recipe";
import type { RecipeInterface } from "../../types/recipes";
import type { Pages } from "../../types/pages";

type RecipeCardProps = {
  recipe: RecipeInterface;
  onClickDetails: (page: Pages) => void;
};

export const RecipeCard = ({ recipe, onClickDetails }: RecipeCardProps) => {
  const data = recipe || fallbackRecipe;

  // Funzione per tagliare il testo ingrediente
  const trimIngredient = (name: string, max: number) =>
    name.length > max ? name.slice(0, max) + "…" : name;

  return (
    <div className="w-full h-full bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-3 flex flex-col gap-2 overflow-hidden min-h-0">
      <img
        src={data.image || "https://via.placeholder.com/400x140?text=No+Image"}
        alt={data.title || "Titolo non disponibile"}
        className="w-full h-32 object-cover rounded-xl shrink-0"
      />
      <h2 className="text-green-700 text-lg font-bold tracking-tight line-clamp-2 shrink-0">
        {data.title || "Ricetta sconosciuta"}
      </h2>
      <div className="flex flex-wrap gap-1.5 shrink-0">
        <span className="bg-green-200 text-green-800 rounded-full px-2 py-0.5 text-xs font-semibold">
          {data.readyInMinutes ? `${data.readyInMinutes} min` : "Tempo n/d"}
        </span>
        <span className="bg-green-200 text-green-800 rounded-full px-2 py-0.5 text-xs font-semibold">
          {data.servings ? `${data.servings} porzioni` : "Porzioni n/d"}
        </span>
        <span className="bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-wrap text-center text-xs font-medium">
          {data.dishTypes && data.dishTypes.length > 0 ? data.dishTypes[0] : "Pasto"}
        </span>
        <span className="bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-xs font-medium">
          Facile
        </span>
      </div>
      <div className="flex-1 min-h-0 flex flex-col">
        <h3 className="text-green-600 text-sm font-semibold mb-1 shrink-0">Ingredienti:</h3>
        <ul className="list-disc pl-4 text-green-900 text-xs space-y-0.5">
          {data.extendedIngredients && data.extendedIngredients.length > 0 ? (
            data.extendedIngredients.slice(0, 3).map((ing: IngredientInterface, i: number) => (
              <li key={ing.id} className="overflow-hidden text-ellipsis">
                {data.extendedIngredients.length > 2
                  ? trimIngredient(ing.name || "Ingrediente", 18)
                  : (ing.name || "Ingrediente")
                }
                <span className="text-green-700 font-semibold ml-1">
                  {ing.measures?.metric?.amount ?? "-"}
                  {ing.measures?.metric?.unitShort ?? ""}
                </span>
              </li>
            ))
          ) : (
            <li>Ingredienti non disponibili</li>
          )}
        </ul>
      </div>
      
      <button
        onClick={() => onClickDetails({page: "recipe-details", recipeData: data})}
        className="w-full bg-green-700 text-white rounded-xl py-2 text-sm font-bold transition duration-150 ease-in hover:bg-green-800 shrink-0 cursor-pointer"
      >
        Dettagli ricetta
      </button>
    </div>
  );
};
