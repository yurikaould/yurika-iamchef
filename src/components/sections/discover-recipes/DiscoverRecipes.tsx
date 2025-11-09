import { useState } from "react"
import { RecipeCard } from "../../recipe-card/RecipeCard"
import { recipes } from "../../../types/recipes"
import { ScrollBtnSection } from "../../scroll-btn/ScrollBtnSection"
import type { Pages } from "../../../types/pages"

type DiscoverRecipesProps = {
  setActualPage: (page: Pages) => void
}

function DiscoverRecipes({ setActualPage }: DiscoverRecipesProps) {

  // definisco una variabile di stato che serve per scorrere di volta in volta un array di ricette
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  return (
    <main
      id="recipe-card-container"
      className="w-full h-full flex flex-col gap-0 overflow-hidden min-h-0"
    >

      <div className="flex-1 min-h-0 overflow-hidden">
        <RecipeCard recipe={recipes[currentIndex]} onClickDetails={setActualPage} />
      </div>

      <div className="shrink-0">
        <ScrollBtnSection
          currentIndex={currentIndex} 
          maxIndex={recipes.length-1} 
          setCurrentIndex={setCurrentIndex} 
          setActualPage={setActualPage}
        />
      </div>

    </main>
  )
}

export default DiscoverRecipes
