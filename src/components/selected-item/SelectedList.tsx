import type { IngredientInterface } from "../../types/ingredients"
import type { Pages } from "../../types/pages"
import SelectedItem from "./SelectedItem"

type SelectedListProps = {
    ingredients: IngredientInterface[],
    handleRemove: (ing: IngredientInterface) => void,
    actualPage: Pages
}

const SelectedList = ({ ingredients, handleRemove, actualPage }: SelectedListProps) => {
  return (
    <div className={`max-h-40 flex ${actualPage.page == 'homepage' ? "flex-wrap gap-4" : "flex-nowrap gap-2"}  overflow-y-auto rounded-lg`}>
    {ingredients.map((ingredient, index) => (
        <SelectedItem 
            key={index.toString()}
            id={index.toString()} 
            ingredient={ingredient} 
            handleRemove={handleRemove}
            actualPage={actualPage}/>
    ))}
    </div>

  )
}

export default SelectedList