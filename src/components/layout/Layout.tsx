import { useState } from 'react'
import Header from '../header/Header'
import type { Pages } from '../../types/pages'
import type { IngredientInterface } from '../../types/ingredients'
import DiscoverRecipes from '../sections/discover-recipes/DiscoverRecipes'
import { RecipeDetails } from '../sections/recipe-details/RecipeDetails'

const Layout = () => {

    // variabile di stato globale per gestire la pagina in cui sono
    const [actualPage, setActualPage] = useState<Pages>({page: "homepage"})

    const [selectedIng, setSelectedIng] = useState<IngredientInterface[]>([])

    // funzione per gestire la selezione da un elemento suggerito
    const handleSuggestClick = (ing: IngredientInterface) => {
  
      // verifico se l'ingrediente è già stato cliccato
      if (selectedIng.includes(ing)) { 
        return null 
      }
  
      setSelectedIng(prev => [...prev, ing])
    }
  
    // funzione per gestire la rimozione di un elemento selezionato
    const handleSuggestRemove = (ing: IngredientInterface) => {
      const filtArray = selectedIng.filter(item => item != ing);
  
      setSelectedIng(filtArray)
    }

    return (
        <main className={`w-screen max-w-96 h-screen flex flex-col mx-auto bg-green-700 ${ actualPage.page != 'recipe-details' ? "p-6 pt-14" : "p-0"} overflow-hidden`}>
              {
                
                actualPage.page != 'recipe-details' &&
                
                <header className="mb-6 shrink-0">
                  
                  <Header 
                    actualPage={actualPage} 
                    setActualPage={setActualPage} 
                    selectedIng={selectedIng} 
                    onSuggestClick={handleSuggestClick} 
                    onBadgeRemove={handleSuggestRemove} 
                  />

                </header>

              }
            

            <section className={`w-full flex-1 flex justify-center min-h-0 ${ actualPage.page != 'recipe-details' ? "mb-6" : ""} overflow-hidden`}>

              {/* condizione per mostrare la pagina con le varie card */}
              {actualPage.page == 'discover-recipes' && <DiscoverRecipes setActualPage={setActualPage} />}

              {/* condizione per mostrare la pagina con i dettagli della card */}
              {actualPage.page == 'recipe-details' && <RecipeDetails recipeData={actualPage.recipeData} setActualPage={setActualPage} />}

            </section>

            <footer></footer>
        </main>
    )
}

export default Layout