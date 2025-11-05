import { useState } from 'react'
import './App.css'
import SearchBar from './components/search-bar/Searchbar'
import Titlesubtitle from './components/title-subtitle/TitleSubtitle'
import SelectedList from './components/selected-item/SelectedList'
import DiscoverRecipeBtn from './components/discover-recipes/DiscoverRecipeBtn'

function App() {

  // variabile di stato fondamentale per capire a che punto dell'applicazione sono
  const [isHomePage, setIsHomePage] = useState<boolean>(true)

  const [selectedIng, setSelectedIng] = useState<string[]>([])

  // funzione per gestire la selezione da un elemento suggerito
  const handleSuggestClick = (ing: string) => {
    setSelectedIng(prev => [...prev, ing])
  }

  // funzione per gestire la rimozione di un elemento selezionato
  const handleRemove = (ing: string) => {
    const filtArray = selectedIng.filter(item => item != ing);

    setSelectedIng(filtArray)
  }

  return (
    <>
      <main className="p-6 w-screen h-screen bg-green-700"> 

        {isHomePage && (
          <>
            <div className="">
              <Titlesubtitle/>
            </div>

            <div className="flex flex-col gap-4">
              <SearchBar handleSuggestClick={handleSuggestClick} />

              <SelectedList ingredients={selectedIng} handleRemove={handleRemove}/>

              <DiscoverRecipeBtn ingredients={selectedIng} />
            </div>
          </>
        )}

      </main>
    </>
  )
}

export default App
