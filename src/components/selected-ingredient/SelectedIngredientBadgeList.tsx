import SelectingredientBadge from "./SelectedIngredientBadge"

type SelectedIngredientBadgeListProps = {
    selectedIngredients: string[],
    handleDeleteIng: () => void
}

const SelectedIngredientBadgeList = ({ selectedIngredients, handleDeleteIng }: SelectedIngredientBadgeListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
        {selectedIngredients.map((ingredient, index) => 
            <SelectingredientBadge key={`${ingredient}-${index}`} index={index} handleDeleteIng={handleDeleteIng} ingredient={ingredient} />
        )}
    </div>
  )
}

export default SelectedIngredientBadgeList