type RecipeImageProps = {
    image: string,
    title: string
}

const RecipeImage = ({image, title}: RecipeImageProps) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md w-full h-40 bg-gray-100 flex items-center justify-center shrink-0">
        <img
        src={image || "https://via.placeholder.com/600x250?text=No+Image"}
        alt={title || "Titolo non disponibile"}
        className="w-full h-full object-cover transition duration-300"
        />
    </div>
  )
}

export default RecipeImage