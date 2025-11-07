import { useState } from 'react'
import Header from '../header/Header'
import type { Pages } from '../../types/pages'

const Layout = () => {

    // variabile di stato globale per gestire la pagina in cui sono
    const [actualPage, setActualPage] = useState<Pages>({page: "homepage"})

    const [selectedIng, setSelectedIng] = useState<string[]>([])

    // funzione per gestire la selezione da un elemento suggerito
    const handleSuggestClick = (ing: string) => {
  
      // verifico se l'ingrediente è già stato cliccato
      if (selectedIng.includes(ing)) { 
        return null 
      }
  
      setSelectedIng(prev => [...prev, ing])
    }
  
    // funzione per gestire la rimozione di un elemento selezionato
    const handleSuggestRemove = (ing: string) => {
      const filtArray = selectedIng.filter(item => item != ing);
  
      setSelectedIng(filtArray)
    }

    return (
        <main className='w-screen max-w-96 mx-auto'>
            <header className="p-6 h-screen bg-green-700">
                <Header 
                  actualPage={actualPage} 
                  setActualPage={setActualPage} 
                  selectedIng={selectedIng} 
                  onSuggestClick={handleSuggestClick} 
                  onBadgeRemove={handleSuggestRemove} 
                />
            </header>

            <section></section>

            <footer></footer>
        </main>
    )
}

export default Layout