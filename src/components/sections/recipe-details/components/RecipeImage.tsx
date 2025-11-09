type RecipeImageProps = {
    image: string,
    title: string
}

const RecipeImage = ({image, title}: RecipeImageProps) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md w-full h-40 bg-gray-100 flex items-center justify-center shrink-0">
        <img
        src={"https://images.unsplash.com/photo-1547385203-cfe7977b9fd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"} //! RIMETTERE data.image PER AVERE IMMAGINE DELLA RICETTA
        alt={title || "Titolo non disponibile"}
        className="w-full h-full object-cover transition duration-300"
        />
    </div>
  )
}

export default RecipeImage