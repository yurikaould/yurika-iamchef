import { useState } from 'react'
import Header from '../header/Header'
import type { IngredientInterface } from '../../types/ingredients'
import DiscoverRecipes from '../sections/discover-recipes/DiscoverRecipes'
import { RecipeDetails } from '../sections/recipe-details/RecipeDetails'
import type { currentPage } from '../../types/actual-page'

const Layout = () => {

    // variabile di stato globale per gestire la pagina in cui sono
    const [currentPage, setCurrentPage] = useState<currentPage>({currentPage: {page: "homepage"}})

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
        <main className={`w-screen max-w-96 h-screen flex flex-col mx-auto bg-green-700 ${ currentPage.currentPage.page != 'recipe-details' ? "p-6 pt-14" : "p-0"} overflow-hidden`}>
              {
                
                currentPage.currentPage.page != 'recipe-details' &&
                
                <header className="mb-6 shrink-0">
                  
                  <Header 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} 
                    selectedIng={selectedIng} 
                    onSuggestClick={handleSuggestClick} 
                    onBadgeRemove={handleSuggestRemove} 
                  />

                </header>

              }
            

            <section className={`w-full flex-1 flex justify-center min-h-0 ${ currentPage.currentPage.page != 'recipe-details' ? "mb-6" : ""} overflow-hidden`}>

              {/* condizione per mostrare la pagina con le varie card */}
              {currentPage.currentPage.page == 'discover-recipes' && <DiscoverRecipes setCurrentPage={setCurrentPage} />}

              {/* condizione per mostrare la pagina con i dettagli della card */}
              {currentPage.currentPage.page == 'recipe-details' && <RecipeDetails recipeData={currentPage.currentPage.recipeData} setCurrentPage={setCurrentPage} />}

            </section>

            <footer></footer>
        </main>
    )
}

export default Layout