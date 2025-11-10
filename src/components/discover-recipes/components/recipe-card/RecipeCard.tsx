import type { currentPage } from "../../../../types/current-page";
import { fallbackRecipe } from "../../../../types/fallback-recipe";
import type { RecipeInterface } from "../../../../types/recipes";
import { getDifficulty } from "../../../../utils/recipe-details-utils/getDifficulty";
import RecipeDishTypes from "../../../card-components/RecipeDishTypes";
import RecipeImage from "../../../card-components/RecipeImage";
import { RecipeIngredients } from "../../../card-components/RecipeIngredients";
import RecipeServings from "../../../card-components/RecipeServings";
import RecipeTime from "../../../card-components/RecipeTime";

type RecipeCardProps = {
  recipe: RecipeInterface;
  onClickDetails: (currentPage: currentPage) => void;
};

export const RecipeCard = ({ recipe, onClickDetails }: RecipeCardProps) => {
  const data = recipe || fallbackRecipe;

  return (
    <div className="w-full h-full bg-linear-to-br from-green-50 to-green-100 rounded-3xl shadow-xl p-4 flex flex-col gap-6 overflow-hidden min-h-0">

      <RecipeImage image={data.image} title={data.title} />

      <h2 className="text-green-800 text-xl font-extrabold tracking-tight underline decoration-green-200 mb-1">
        {data.title || "Ricetta sconosciuta"}
      </h2>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <RecipeTime readyInMinutes={data.readyInMinutes} />
        <span className="text-gray-400">·</span>
        <RecipeServings servings={data.servings} />
        <span className="text-gray-400">·</span>
        <RecipeDishTypes dishTypes={data.dishTypes} />
        <span className="text-gray-400">·</span>
        <span className="flex items-center gap-1 bg-green-200 text-green-800 rounded-full px-2 py-0.5 font-bold">
          <span role="img" aria-label="difficoltà">⭐</span>
          {getDifficulty(data.readyInMinutes)}
        </span>
      </div>

      <RecipeIngredients extendedIngredients={data.extendedIngredients} />

      <button
        onClick={() => onClickDetails({ currentPage: { page: "recipe-details", recipeData: data } })}
        className="mt-auto w-full bg-green-700 text-white rounded-xl py-3 text-base font-extrabold shadow-md transition hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer"
      >
        Dettagli ricetta
      </button>
    </div>
  );
};
