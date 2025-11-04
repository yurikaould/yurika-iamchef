import { useState } from 'react'
import './App.css'
import SearchBar from './components/search-bar/Searchbar'
import Titlesubtitle from './components/title-subtitle/TitleSubtitle'
import SelectedList from './components/selected-item/SelectedList'

function App() {

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
        <div className="">
          <Titlesubtitle/>
        </div>

        <div className="mb-4">
          <SearchBar handleSuggestClick={handleSuggestClick} />
        </div>

        <div className="">
          <SelectedList ingredients={selectedIng} handleRemove={handleRemove}/>
        </div>

      </main>
    </>
  )
}

export default App
