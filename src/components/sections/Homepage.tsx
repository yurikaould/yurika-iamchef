import { useState } from 'react'
import DiscoverRecipeBtn from '../discover-recipes/DiscoverRecipeBtn'
import SearchBar from '../search-bar/Searchbar'
import SelectedList from '../selected-item/SelectedList'
import Titlesubtitle from '../title-subtitle/TitleSubtitle'

function Homepage() {

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
  const handleRemove = (ing: string) => {
    const filtArray = selectedIng.filter(item => item != ing);

    setSelectedIng(filtArray)
  }

  return (
    <>
      <main className="p-6 w-screen h-screen bg-green-700"> 

            <div className="">
              <Titlesubtitle/>
            </div>

            <div className="flex flex-col gap-4">
              <SearchBar handleSuggestClick={handleSuggestClick} />

              <SelectedList ingredients={selectedIng} handleRemove={handleRemove}/>

              <DiscoverRecipeBtn ingredients={selectedIng} />
            </div>

      </main>
    </>
  )
}

export default Homepage
