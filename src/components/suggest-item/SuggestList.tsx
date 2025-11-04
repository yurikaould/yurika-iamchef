import SuggestItem from "./SuggestItem"

type SuggestListProps = {
    ingredients: string[]
}

const SuggestList = ({ ingredients }: SuggestListProps) => {
  return (
    <div className="max-h-40 overflow-y-auto rounded-lg bg-white">
    {ingredients.map((ingredient) => (
        <SuggestItem key={ingredient} ingredient={ingredient} />
    ))}
    </div>

  )
}

export default SuggestList