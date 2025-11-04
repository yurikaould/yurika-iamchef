import { ArrowRight } from "lucide-react"

type DiscoverRecipeBtnProps = {
    ingredients: string[]
}

const DiscoverRecipeBtn = ({ ingredients }: DiscoverRecipeBtnProps) => {

    if (!ingredients || ingredients.length == 0) {
        return null
    }


  return (
    <button className="flex justify-center gap-2 flex-nowrap bg-white hover:bg-green-100 text-green-600 py-2 rounded-lg font-bold cursor-pointer transition-all duration-300">
        Discover Recipe <ArrowRight />
    </button>
  )
}

export default DiscoverRecipeBtn