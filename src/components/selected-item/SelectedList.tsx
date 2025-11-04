import SelectedItem from "./SelectedItem"

type SelectedListProps = {
    ingredients: string[],
    handleRemove: (ing: string) => void
}

const SelectedList = ({ ingredients, handleRemove }: SelectedListProps) => {
  return (
    <div className="max-h-40 flex flex-wrap gap-4 overflow-y-auto rounded-lg">
    {ingredients.map((ingredient, key) => (
        <SelectedItem 
            key={key.toString()} 
            ingredient={ingredient} 
            handleRemove={handleRemove}/>
    ))}
    </div>

  )
}

export default SelectedList