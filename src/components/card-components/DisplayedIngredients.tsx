import type { IngredientInterface } from "../../types/ingredients";

type DisplayedIngredientsProps = {
  displayedIngredients: IngredientInterface[];
};

const DisplayedIngredients = ({ displayedIngredients }: DisplayedIngredientsProps) => {
  if (!displayedIngredients || displayedIngredients.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 shrink-0">
      <h3 className="text-base font-bold text-green-900">Ingredienti principali</h3>
      <div className="grid grid-cols-1 gap-2">
        {displayedIngredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
          >
            {ingredient.image && (
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <span className="text-sm font-medium text-green-900 capitalize">
                {ingredient.name}
              </span>
              {ingredient.amount && ingredient.unit && (
                <span className="text-xs text-green-700 ml-2">
                  ({ingredient.amount} {ingredient.unit})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayedIngredients;