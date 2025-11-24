import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Search, ChefHat, ArrowLeft, Plus, X, ArrowRight, AlertCircle } from 'lucide-react'
import '../search-results.css'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q')
  
  const [results, setResults] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false)
  const [error, setError] = useState('')
  const [recipesError, setRecipesError] = useState('')
  const [showRecipes, setShowRecipes] = useState(false)

  useEffect(() => {
    if (query) {
      searchIngredients(query)
    }
  }, [query])

  const searchIngredients = async (searchTerm) => {
    const apiKey = localStorage.getItem('SPOONACULAR_API_KEY')
    if (!apiKey) {
      navigate('/')
      return
    }

    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?query=${encodeURIComponent(searchTerm)}&apiKey=${apiKey}&number=20&metaInformation=false`
      )
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('API Key non valida. Controlla la tua chiave.')
        } else if (response.status === 402) {
          throw new Error('Quota API esaurita. Prova domani o aggiorna il tuo piano.')
        } else {
          throw new Error(`Errore API: ${response.status}`)
        }
      }

      const data = await response.json()
      setResults(data.results || [])
      
    } catch (err) {
      setError(err.message || 'Errore durante la ricerca')
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.find(item => item.id === ingredient.id)) {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const removeIngredient = (ingredientId) => {
    setSelectedIngredients(selectedIngredients.filter(item => item.id !== ingredientId))
  }

  const searchRecipes = async () => {
    if (selectedIngredients.length === 0) {
      setRecipesError('Seleziona almeno un ingrediente per cercare ricette')
      return
    }

    setIsLoadingRecipes(true)
    setRecipesError('')
    
    const apiKey = localStorage.getItem('SPOONACULAR_API_KEY')
    const ingredientNames = selectedIngredients.map(ing => ing.name).join(',')
    
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredientNames)}&number=12&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${apiKey}`
      )
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('API Key non valida')
        } else if (response.status === 402) {
          throw new Error('Quota API esaurita')
        }
        throw new Error(`Errore API: ${response.status}`)
      }

      const data = await response.json()
      setRecipes(data)
      setShowRecipes(true)
      
    } catch (err) {
      setRecipesError(err.message || 'Errore durante la ricerca ricette')
    } finally {
      setIsLoadingRecipes(false)
    }
  }

  const viewRecipeDetails = (recipeId) => {
    navigate(`/recipe/${recipeId}`)
  }

  const goBack = () => {
    navigate('/ingredients')
  }

  const getImageUrl = (ingredient) => {
    if (ingredient.image) {
      return `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
    }
    return null
  }

  return (
    <div className="search-results-page">
      <div className="container">
        {/* Header */}
        <div className="results-header">
          <button onClick={goBack} className="back-btn">
            <ArrowLeft size={20} />
            Nuova ricerca
          </button>
          <div className="logo-small">
            <ChefHat size={24} />
            <span>I AM CHEF</span>
          </div>
        </div>

        {/* Query corrente */}
        <div className="current-search">
          <h1>Risultati per: "{query}"</h1>
          {!isLoading && (
            <p className="results-count">
              {results.length > 0 ? `${results.length} ingredienti trovati` : 'Nessun ingrediente trovato'}
            </p>
          )}
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="loading-section">
            <div className="spinner-large"></div>
            <p>Cercando ingredienti...</p>
          </div>
        )}

        {/* Errore */}
        {error && !isLoading && (
          <div className="error-section">
            <AlertCircle size={48} color="#E53E3E" />
            <h3>Errore nella ricerca</h3>
            <p>{error}</p>
            <button onClick={goBack} className="retry-btn">
              Torna alla ricerca
            </button>
          </div>
        )}

        {/* Risultati ingredienti */}
        {!isLoading && !error && results.length > 0 && (
          <div className="ingredients-results">
            <h2>Ingredienti disponibili</h2>
            <div className="ingredients-grid">
              {results.map((ingredient) => (
                <div key={ingredient.id} className="ingredient-result-card">
                  <div className="ingredient-image">
                    {getImageUrl(ingredient) ? (
                      <img 
                        src={getImageUrl(ingredient)} 
                        alt={ingredient.name}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className="image-placeholder" style={{ display: getImageUrl(ingredient) ? 'none' : 'flex' }}>
                      🥬
                    </div>
                  </div>
                  <div className="ingredient-info">
                    <h4>{ingredient.name}</h4>
                    {ingredient.aisle && (
                      <p className="ingredient-aisle">{ingredient.aisle}</p>
                    )}
                  </div>
                  <button 
                    className="add-ingredient-btn"
                    onClick={() => addIngredient(ingredient)}
                    disabled={selectedIngredients.find(item => item.id === ingredient.id)}
                  >
                    <Plus size={16} />
                    {selectedIngredients.find(item => item.id === ingredient.id) ? 'Aggiunto' : 'Aggiungi'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {!isLoading && !error && results.length === 0 && query && (
          <div className="no-results-section">
            <div className="no-results-icon">🔍</div>
            <h3>Nessun ingrediente trovato per "{query}"</h3>
            <p>Prova con un termine diverso o più generico</p>
            <div className="search-suggestions">
              <h4>Suggerimenti:</h4>
              <ul>
                <li>Usa termini più semplici (es. "pomodoro" invece di "pomodoro san marzano")</li>
                <li>Prova in inglese (es. "tomato" invece di "pomodoro")</li>
                <li>Controlla l'ortografia</li>
              </ul>
            </div>
            <button onClick={goBack} className="new-search-btn">
              <Search size={18} />
              Nuova ricerca
            </button>
          </div>
        )}

        {/* Ingredienti selezionati */}
        {selectedIngredients.length > 0 && (
          <div className="selected-ingredients-section">
            <h2>I tuoi ingredienti ({selectedIngredients.length})</h2>
            <div className="selected-ingredients-list">
              {selectedIngredients.map((ingredient) => (
                <div key={ingredient.id} className="selected-ingredient-tag">
                  <span>{ingredient.name}</span>
                  <button 
                    onClick={() => removeIngredient(ingredient.id)}
                    className="remove-ingredient-btn"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <button 
              className="find-recipes-btn"
              onClick={searchRecipes}
              disabled={isLoadingRecipes}
            >
              {isLoadingRecipes ? (
                <>
                  <div className="spinner"></div>
                  Cercando ricette...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Trova ricette con questi ingredienti
                  <ArrowRight size={18} />
                </>
              )}
            </button>
            
            {recipesError && (
              <div className="recipes-error">
                <AlertCircle size={16} />
                {recipesError}
              </div>
            )}
          </div>
        )}

        {/* Ricette trovate */}
        {showRecipes && recipes.length > 0 && (
          <div className="recipes-results-section">
            <h2>Ricette trovate ({recipes.length})</h2>
            <div className="recipes-results-grid">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-result-card">
                  <div className="recipe-result-image">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/312x231?text=Recipe'
                      }}
                    />
                  </div>
                  <div className="recipe-result-content">
                    <h4>{recipe.title}</h4>
                    <div className="recipe-result-stats">
                      <span className="used-ingredients-count">
                        ✅ {recipe.usedIngredientCount} ingredienti che hai
                      </span>
                      <span className="missing-ingredients-count">
                        ➕ {recipe.missedIngredientCount} ingredienti mancanti
                      </span>
                    </div>
                    <button 
                      className="view-recipe-details-btn"
                      onClick={() => viewRecipeDetails(recipe.id)}
                    >
                      Vedi dettagli ricetta
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No recipes found */}
        {showRecipes && recipes.length === 0 && !isLoadingRecipes && (
          <div className="no-recipes-section">
            <div className="no-recipes-icon">🍽️</div>
            <h3>Nessuna ricetta trovata</h3>
            <p>Prova ad aggiungere più ingredienti o ingredienti diversi</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults