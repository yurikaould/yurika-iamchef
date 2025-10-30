import './App.css'
import SearchBar_Btn from './components/search-recipes/SearchBar_Btn'
import Titlesubtitle from './components/title-subtitle/TitleSubtitle'

function App() {

  return (
    <>
      <main className="p-6 w-screen h-screen bg-green-700">
        <Titlesubtitle/>
        <SearchBar_Btn />
      </main>
    </>
  )
}

export default App
