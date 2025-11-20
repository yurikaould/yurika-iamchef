import { useState } from 'react'
import Layout from "./components/layout/Layout"
import Home from './components/Home'
import Feed from './components/Feed'
import { RecipeDetails } from './components/recipe-details/RecipeDetails'
import SplashScreen from './components/SplashScreen'
import type { currentPage } from './types/current-page'

function App() {
  const [currentPage, setCurrentPage] = useState<currentPage>({ currentPage: { page: 'homepage' } })
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashEnd = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onSplashEnd={handleSplashEnd} />
  }

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage.currentPage.page === 'homepage' && (
        <Home setCurrentPage={setCurrentPage} />
      )}

      {currentPage.currentPage.page === 'feed' && (
        <Feed setCurrentPage={setCurrentPage} />
      )}

      {currentPage.currentPage.page === 'discover-recipes' && (
        <Feed setCurrentPage={setCurrentPage} />
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
