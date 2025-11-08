import { useState } from 'react'
import Header from '../header/Header'
import type { Pages } from '../../types/pages'
import type { IngredientInterface } from '../../types/ingredients'
import DiscoverRecipes from '../sections/DiscoverRecipes'

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
        <main className='w-screen max-w-96 h-screen flex flex-col mx-auto bg-green-700 p-6 pt-14'>
            <header className="mb-6">
                <Header 
                  actualPage={actualPage} 
                  setActualPage={setActualPage} 
                  selectedIng={selectedIng} 
                  onSuggestClick={handleSuggestClick} 
                  onBadgeRemove={handleSuggestRemove} 
                />
            </header>

            <section className='w-full h-full max-h-full mb-6 flex justify-center'>

              {actualPage.page == 'discover-recipes' && <DiscoverRecipes setActualPage={setActualPage} />}

            </section>

            <footer></footer>
        </main>
    )
}

export default Layout