type SuggestItemProps ={
    ingredient: string
}

const SuggestItem = ({ ingredient }: SuggestItemProps) => {
  return (
    <div className="bg-white rounded-lg p-2">
        <h1>{ingredient}</h1>
    </div>
  )
}

export default SuggestItem