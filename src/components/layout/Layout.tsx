import { useState } from 'react'
import Header from '../header/Header'
import type { IngredientInterface } from '../../types/ingredients'
import type { currentPage } from '../../types/current-page'
import type { Dispatch, SetStateAction, ReactNode } from 'react'

type LayoutProps = {
  currentPage: currentPage
  setCurrentPage: Dispatch<SetStateAction<currentPage>>
  children?: ReactNode
}

const Layout = ({ currentPage, setCurrentPage, children }: LayoutProps) => {

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
                  currentPage.currentPage.page != 'recipe-details' && (
                    <header className="mb-6 shrink-0">
                      <Header 
                        currentPage={currentPage} 
                        setCurrentPage={setCurrentPage} 
                        selectedIng={selectedIng} 
                        onSuggestClick={handleSuggestClick} 
                        onBadgeRemove={handleSuggestRemove} 
                      />
                    </header>
                  )
                }
            

            <section className={`w-full flex-1 flex justify-center min-h-0 ${ currentPage.currentPage.page != 'recipe-details' ? "mb-6" : ""} overflow-hidden`}>

              {children}

            </section>

            <footer></footer>
        </main>
    )
}

export default Layout