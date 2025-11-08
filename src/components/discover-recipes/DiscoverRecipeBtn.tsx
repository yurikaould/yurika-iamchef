import { ArrowRight } from "lucide-react"
import type { Pages } from "../../types/pages"
import type { IngredientInterface } from "../../types/ingredients"

type DiscoverRecipeBtnProps = {
    ingredients: IngredientInterface[],
    setActualPage: (page: Pages) => void
}

const DiscoverRecipeBtn = ({ ingredients, setActualPage }: DiscoverRecipeBtnProps) => {

    if (!ingredients || ingredients.length == 0) {
        return null
    }


  return (
    <button 
      className="flex justify-center gap-2 flex-nowrap bg-white hover:bg-green-100 text-green-600 py-2 rounded-lg font-bold cursor-pointer transition-all duration-300"
      onClick={() => setActualPage({page: "discover-recipes"})}
    >
        Discover Recipe <ArrowRight />
    </button>
  )
}

export default DiscoverRecipeBtn