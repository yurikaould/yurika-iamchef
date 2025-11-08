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
    <div className="max-w-full h-full max-h-4/5 bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-4 flex flex-col gap-3">
      <img
        src={data.image || "https://via.placeholder.com/400x140?text=No+Image"}
        alt={data.title || "Titolo non disponibile"}
        className="w-full h-40 object-cover rounded-xl mb-2"
      />
      <h2 className="text-green-700 text-xl font-bold tracking-tight mb-1">
        {data.title || "Ricetta sconosciuta"}
      </h2>
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="bg-green-200 text-green-800 rounded-full px-3 py-1 text-xs font-semibold">
          {data.readyInMinutes ? `${data.readyInMinutes} min` : "Tempo n/d"}
        </span>
        <span className="bg-green-200 text-green-800 rounded-full px-3 py-1 text-xs font-semibold">
          {data.servings ? `${data.servings} porzioni` : "Porzioni n/d"}
        </span>
        <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium border border-green-200">
          {data.dishTypes && data.dishTypes.length > 0 ? data.dishTypes[0] : "Pasto"}
        </span>
        <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium border border-green-200">
          Facile
        </span>
      </div>
      <div>
        <h3 className="text-green-600 text-base font-semibold mb-1">Ingredienti:</h3>
        <ul className="list-disc pl-5 text-green-900 text-sm space-y-1">
          {data.extendedIngredients && data.extendedIngredients.length > 0 ? (
            data.extendedIngredients.slice(0, 4).map((ing: IngredientInterface, i: number) => (
              <li key={ing.id} className="overflow-hidden text-ellipsis">
                {data.extendedIngredients.length > 2
                  ? trimIngredient(ing.name || "Ingrediente", 20)
                  : (ing.name || "Ingrediente")
                }
                <span className="text-green-700 font-semibold ml-2">
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
        onClick={() => onClickDetails({page: "recipe-details"})}
        className="w-full bg-green-700 text-white rounded-xl py-2 text-base font-bold transition duration-150 ease-in hover:bg-green-800 mt-2"
      >
        Dettagli ricetta
      </button>
    </div>
  );
};
