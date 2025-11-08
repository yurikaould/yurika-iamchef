import { X } from "lucide-react";
import type { Pages } from "../../types/pages";
import type { IngredientInterface } from "../../types/ingredients";

type SelectedIngredientProps = {
    key: string,
    ingredient: IngredientInterface,
    handleRemove: (ing: IngredientInterface) => void,
    actualPage: Pages
}

// componente che prende il nome di un ingrediente e lo stampa a schermo 
const SelectedIngredient = ({ key, ingredient, handleRemove, actualPage }: SelectedIngredientProps) => {
    return (
        <span
          id={key}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${ actualPage.page == 'homepage' ? "text-wrap" : "text-nowrap"} rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm hover:bg-green-200 transition-colors`}
        >
          {ingredient.name}

          {
            actualPage.page !== 'discover-recipes' && 

            <button
              onClick={() => handleRemove(ingredient)}
              className="hover:bg-green-300 rounded-full p-0.5 transition-colors cursor-pointer"
              aria-label={`Rimuovi ${ingredient}`}
            >

              <X size={14} className="stroke-[2.5]" />
            </button>
          }
        </span>
    );
};

export default SelectedIngredient;
