import './App.css'
import SearchBar from './components/search-bar/Searchbar'
import Titlesubtitle from './components/title-subtitle/TitleSubtitle'

function App() {

  return (
    <>
      <main className="p-6 w-screen h-screen bg-green-700">
        <Titlesubtitle/>
        <SearchBar />
      </main>
    </>
  )
}

export default App
