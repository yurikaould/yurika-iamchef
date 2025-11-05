import { useState } from 'react'
import Header from '../header/Header'

const Layout = () => {

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
        <main>
            <header className="p-6 w-screen h-screen bg-green-700">
                <Header selectedIng={selectedIng} onSuggestClick={handleSuggestClick} onBadgeRemove={handleSuggestRemove} />
            </header>

            <section></section>

            <footer></footer>
        </main>
    )
}

export default Layout