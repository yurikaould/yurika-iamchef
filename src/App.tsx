import { useState } from 'react'
import Layout from "./components/layout/Layout"
import DiscoverRecipes from './components/discover-recipes/DiscoverRecipes'
import { RecipeDetails } from './components/recipe-details/RecipeDetails'
import type { currentPage } from './types/current-page'

function App() {
  const [currentPage, setCurrentPage] = useState<currentPage>({ currentPage: { page: 'homepage' } })

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage.currentPage.page === 'discover-recipes' && (
        <DiscoverRecipes setCurrentPage={setCurrentPage} />
      )}

      {currentPage.currentPage.page === 'recipe-details' && (
        <RecipeDetails
          recipeData={currentPage.currentPage.recipeData}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Layout>
  )
}

export default App
