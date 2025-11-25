import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Search, ChefHat, ArrowLeft, Plus, X, ArrowRight, AlertCircle } from 'lucide-react'
import { mockRecipes, filterRecipesByIngredients } from '../data/mockRecipes'
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
  const [appMode, setAppMode] = useState('api')

  useEffect(() => {
    // Verifica modalità
    const mode = localStorage.getItem('APP_MODE')
    setAppMode(mode || 'api')
    
    if (query) {
      if (mode === 'mock') {
        searchIngredientsMock(query)
      } else {
        searchIngredients(query)
      }
    }
  }, [query])

  const searchIngredientsMock = (searchTerm) => {
    setIsLoading(true)
    setError('')
    
    // Simula un piccolo delay per UX
    setTimeout(() => {
      try {
        // Lista ingredienti predefiniti basati sulle ricette mock
        const mockIngredients = [
          { id: 'spaghetti-1', name: 'spaghetti', displayName: 'Spaghetti', image: 'https://images.unsplash.com/photo-1551892374-ecf8be72a271?w=100&h=100&fit=crop' },
          { id: 'pasta-1', name: 'pasta', displayName: 'Pasta', image: 'https://images.unsplash.com/photo-1551892374-ecf8be72a271?w=100&h=100&fit=crop' },
          { id: 'riso-carnaroli-1', name: 'riso carnaroli', displayName: 'Riso Carnaroli', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop' },
          { id: 'riso-1', name: 'riso', displayName: 'Riso', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop' },
          { id: 'petto-pollo-1', name: 'petto di pollo', displayName: 'Petto di Pollo', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=100&h=100&fit=crop' },
          { id: 'pollo-1', name: 'pollo', displayName: 'Pollo', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=100&h=100&fit=crop' },
          { id: 'funghi-porcini-1', name: 'funghi porcini', displayName: 'Funghi Porcini', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop' },
          { id: 'funghi-1', name: 'funghi', displayName: 'Funghi', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop' },
          { id: 'guanciale-1', name: 'guanciale', displayName: 'Guanciale', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=100&h=100&fit=crop' },
          { id: 'uova-1', name: 'uova', displayName: 'Uova', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=100&h=100&fit=crop' },
          { id: 'pecorino-1', name: 'pecorino romano', displayName: 'Pecorino Romano', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop' },
          { id: 'parmigiano-1', name: 'parmigiano reggiano', displayName: 'Parmigiano Reggiano', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop' },
          { id: 'basilico-1', name: 'basilico fresco', displayName: 'Basilico Fresco', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=100&h=100&fit=crop' },
          { id: 'aglio-1', name: 'aglio', displayName: 'Aglio', image: 'https://images.unsplash.com/photo-1553163147-6e4ff747d506?w=100&h=100&fit=crop' },
          { id: 'cipolla-1', name: 'cipolla', displayName: 'Cipolla', image: 'https://images.unsplash.com/photo-1508313880080-c4bef43d8837?w=100&h=100&fit=crop' },
          { id: 'pomodori-1', name: 'pomodori pelati', displayName: 'Pomodori Pelati', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop' },
          { id: 'lattuga-1', name: 'lattuga romana', displayName: 'Lattuga Romana', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=100&h=100&fit=crop' },
          { id: 'salmone-1', name: 'filetti di salmone', displayName: 'Filetti di Salmone', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=100&h=100&fit=crop' },
          { id: 'zucchine-1', name: 'zucchine', displayName: 'Zucchine', image: 'https://images.unsplash.com/photo-1506426677965-d0b923be1dc5?w=100&h=100&fit=crop' },
          { id: 'mascarpone-1', name: 'mascarpone', displayName: 'Mascarpone', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop' },
          { id: 'caffe-1', name: 'caffè espresso', displayName: 'Caffè Espresso', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop' },
          { id: 'curry-1', name: 'curry in polvere', displayName: 'Curry in Polvere', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&h=100&fit=crop' },
          { id: 'latte-cocco-1', name: 'latte di cocco', displayName: 'Latte di Cocco', image: 'https://images.unsplash.com/photo-1447875569765-2b3db822bec9?w=100&h=100&fit=crop' },
          { id: 'carne-1', name: 'carne macinata', displayName: 'Carne Macinata', image: 'https://images.unsplash.com/photo-1588347818113-0c6de5b73150?w=100&h=100&fit=crop' }
        ]
        
        // Filtra ingredienti che corrispondono alla ricerca
        const searchLower = searchTerm.toLowerCase().trim()
        const matchingIngredients = mockIngredients
          .filter(ing => 
            ing.name.toLowerCase().includes(searchLower) ||
            ing.displayName.toLowerCase().includes(searchLower)
          )
          .map(ing => ({
            id: ing.id,
            name: ing.displayName,
            image: ing.image
          }))
          .slice(0, 15)
        
        console.log(`🔍 Mock search for "${searchTerm}" found ${matchingIngredients.length} ingredients`)
        setResults(matchingIngredients)
      } catch (err) {
        console.error('❌ Errore ricerca mock:', err)
        setError('Errore durante la ricerca mock')
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300)
  }

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
    
    // Modalità mock: filtra ricette locali
    if (appMode === 'mock') {
      console.log('🎭 Modalità mock: ricerca ricette')
      setTimeout(() => {
        try {
          const ingredientNames = selectedIngredients.map(ing => ing.name)
          console.log('🥗 Ingredienti selezionati:', ingredientNames)
          
          const filteredRecipes = filterRecipesByIngredients(mockRecipes, ingredientNames)
          console.log('📋 Ricette filtrate:', filteredRecipes.length)
          
          // Converte le ricette mock al formato aspettato dal componente
          const formattedRecipes = filteredRecipes.map(recipe => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            usedIngredientCount: recipe.extendedIngredients.filter(ing =>
              ingredientNames.some(searchIng => 
                ing.name.toLowerCase().includes(searchIng.toLowerCase()) ||
                searchIng.toLowerCase().includes(ing.name.toLowerCase())
              )
            ).length,
            missedIngredientCount: 0
          }))
          
          console.log('✨ Ricette formattate:', formattedRecipes)
          setRecipes(formattedRecipes)
          setShowRecipes(true)
        } catch (err) {
          console.error('❌ Errore ricette mock:', err)
          setRecipesError('Errore durante la ricerca delle ricette mock')
        } finally {
          setIsLoadingRecipes(false)
        }
      }, 500)
      return
    }
    
    // Modalità API: usa Spoonacular
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
            {appMode === 'mock' && (
              <span className="mode-badge mock">DEMO</span>
            )}
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