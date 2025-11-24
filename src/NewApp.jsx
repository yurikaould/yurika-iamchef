import { Routes, Route } from 'react-router-dom'
import ApiKeyPage from './pages/ApiKeyPage.jsx'
import IngredientSearch from './pages/IngredientSearch.jsx'
import SearchResults from './pages/SearchResults.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import './styles-clean.css'

function NewApp() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ApiKeyPage />} />
        <Route path="/ingredients" element={<IngredientSearch />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default NewApp