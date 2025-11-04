import { X } from "lucide-react";

type SelectedIngredientProps = {
    key: string,
    ingredient: string,
    handleRemove: (ing: string) => void
}

// componente che prende il nome di un ingrediente e lo stampa a schermo 
const SelectedIngredient = ({ key, ingredient, handleRemove }: SelectedIngredientProps) => {
    return (
        <span
          id={key}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm hover:bg-green-200 transition-colors"
        >
          {ingredient}
          <button
            onClick={() => handleRemove(ingredient)}
            className="hover:bg-green-300 rounded-full p-0.5 transition-colors cursor-pointer"
            aria-label={`Rimuovi ${ingredient}`}
          >
            <X size={14} className="stroke-[2.5]" />
          </button>
        </span>
    );
};

export default SelectedIngredient;
