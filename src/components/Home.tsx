import React, { useState } from 'react'
import type { currentPage } from '../types/current-page'
import type { IngredientInterface } from '../types/ingredients'
import SearchBar from './header/components/search-bar/Searchbar'
import SelectedList from './header/components/selected-item/SelectedList'
import './Home.css'

interface HomeProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<currentPage>>
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<IngredientInterface[]>([])

  const handleSearchClick = () => {
    if (selectedIngredients.length > 0) {
      setCurrentPage({ currentPage: { page: 'feed' } })
    }
  }

  const handleSuggestClick = (ingredient: IngredientInterface) => {
    if (!selectedIngredients.some(ing => ing.id === ingredient.id)) {
      setSelectedIngredients(prev => [...prev, ingredient])
    }
  }

  const handleRemoveIngredient = (ingredient: IngredientInterface) => {
    setSelectedIngredients(prev => prev.filter(ing => ing.id !== ingredient.id))
  }

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-title">Incominciamo a cucinare?</h1>
        <p className="welcome-subtitle">
          Trova ricette deliziose con gli ingredienti che hai in casa
        </p>
        
        {/* Category Icons */}
        <div className="category-icons">
          <div className="category-icon">🔍</div>
          <div className="category-icon">🥗</div>
          <div className="category-icon">🍝</div>
          <div className="category-icon">🍰</div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-card">
          <div className="search-header">
            <span className="search-icon">🔍</span>
            <h2>Cerca per ingredienti</h2>
          </div>
          <p className="search-description">
            Aggiungi quello che hai in frigo e trova ricette perfette
          </p>
          <div className="search-input-container">
            <SearchBar handleSuggestClick={handleSuggestClick} />
            
            {selectedIngredients.length > 0 && (
              <div className="selected-ingredients-wrapper">
                <SelectedList 
                  ingredients={selectedIngredients}
                  handleRemove={handleRemoveIngredient}
                  currentPage={{ currentPage: { page: 'homepage' } }}
                />
              </div>
            )}
          </div>
          <button 
            className={`search-button ${selectedIngredients.length === 0 ? 'disabled' : ''}`}
            onClick={handleSearchClick}
            disabled={selectedIngredients.length === 0}
          >
            <span className="search-icon-main">🔍</span>
            <span className="button-text">Cerca ricette</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home