type SuggestItemProps ={
    ingredient: string,
    handleClick: (ing: string) => void
}

const SuggestItem = ({ ingredient, handleClick }: SuggestItemProps) => {
  return (
    <div
      onClick={() => handleClick(ingredient)} 
      className="bg-white rounded-lg p-2 cursor-pointer">
        <h1>{ingredient}</h1>
    </div>
  )
}

export default SuggestItem