type SelectedIngredientBadgeListProps = {
    selectedIngredients: string[]
}

const SelectedIngredientBadgeList = ({ selectedIngredients }: SelectedIngredientBadgeListProps) => {
  return (
    <div>
        {selectedIngredients.map((ingredient) => 
            <p className="text-white">{ingredient}</p>
        )}
    </div>
  )
}

export default SelectedIngredientBadgeList