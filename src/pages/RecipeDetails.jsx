import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Users, ChefHat, Heart, ExternalLink, AlertCircle, Star, Utensils, TrendingUp, Info } from 'lucide-react'
import '../recipe-details.css'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const apiKey = localStorage.getItem('SPOONACULAR_API_KEY')
      if (!apiKey) {
        navigate('/')
        return
      }

      setIsLoading(true)
      setError('')

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`
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
        setRecipe(data)
      } catch (err) {
        setError(err.message || 'Errore durante il caricamento della ricetta')
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchRecipeDetails()
    }
  }, [id, navigate])

  const handleBack = () => {
    navigate('/ingredients')
  }

  if (isLoading) {
    return (
      <div className="recipe-details-page">
        <div className="container">
          <div className="loading-state">
            <div className="spinner-large"></div>
            <p>Caricando dettagli ricetta...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="recipe-details-page">
        <div className="container">
          <div className="error-state">
            <AlertCircle size={48} color="#E53E3E" />
            <h2>Errore</h2>
            <p>{error}</p>
            <button onClick={handleBack} className="back-btn">
              <ArrowLeft size={18} />
              Torna alla ricerca
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="recipe-details-page">
        <div className="container">
          <div className="error-state">
            <h2>Ricetta non trovata</h2>
            <button onClick={handleBack} className="back-btn">
              <ArrowLeft size={18} />
              Torna alla ricerca
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="recipe-details-page">
      <div className="recipe-details-container">
        {/* Header elegante */}
        <div className="recipe-details-header">
          <button onClick={handleBack} className="recipe-back-btn">
            <ArrowLeft size={20} />
            <span>Torna alla ricerca</span>
          </button>
          <div className="recipe-logo">
            <ChefHat size={28} />
            <span>I AM CHEF</span>
          </div>
        </div>

        {/* Hero Section con immagine e titolo */}
        <div className="recipe-hero-section">
          <div className="recipe-hero-image">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Ricetta'
              }}
            />
            <div className="recipe-image-overlay"></div>
          </div>
          <div className="recipe-hero-content">
            <div className="recipe-title-section">
              <h1 className="recipe-main-title">{recipe.title}</h1>
              {recipe.summary && (
                <p className="recipe-subtitle">
                  {recipe.summary.replace(/<[^>]*>/g, '').substring(0, 120)}...
                </p>
              )}
            </div>
            <div className="recipe-quick-stats">
              <div className="quick-stat">
                <Star className="quick-stat-icon" />
                <span>{recipe.spoonacularScore ? Math.round(recipe.spoonacularScore) : 'N/A'}</span>
              </div>
              <div className="quick-stat">
                <Heart className="quick-stat-icon" />
                <span>{recipe.aggregateLikes || 0}</span>
              </div>
              {recipe.vegan && <span className="recipe-badge vegan">Vegano</span>}
              {recipe.vegetarian && <span className="recipe-badge vegetarian">Vegetariano</span>}
              {recipe.glutenFree && <span className="recipe-badge gluten-free">Senza Glutine</span>}
            </div>
          </div>
        </div>

        {/* Statistiche dettagliate */}
        <div className="recipe-main-stats">
          <div className="recipe-stat-card">
            <div className="stat-icon-wrapper prep-time">
              <Clock size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-number">{recipe.readyInMinutes || 'N/A'}</span>
              <span className="stat-unit">minuti</span>
              <span className="stat-description">Tempo totale</span>
            </div>
          </div>
          
          <div className="recipe-stat-card">
            <div className="stat-icon-wrapper servings">
              <Users size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-number">{recipe.servings || 'N/A'}</span>
              <span className="stat-unit">porzioni</span>
              <span className="stat-description">Serve</span>
            </div>
          </div>
          
          {recipe.healthScore && (
            <div className="recipe-stat-card">
              <div className="stat-icon-wrapper health">
                <TrendingUp size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-number">{recipe.healthScore}</span>
                <span className="stat-unit">/100</span>
                <span className="stat-description">Salute</span>
              </div>
            </div>
          )}
          
          <div className="recipe-stat-card">
            <div className="stat-icon-wrapper difficulty">
              <Utensils size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-number">{recipe.readyInMinutes > 60 ? 'Difficile' : recipe.readyInMinutes > 30 ? 'Medio' : 'Facile'}</span>
              <span className="stat-description">Difficoltà</span>
            </div>
          </div>
        </div>

        {/* Ingredienti con design moderno */}
        {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
          <div className="recipe-content-section">
            <div className="section-header">
              <div className="section-title">
                <div className="section-icon-wrapper">
                  <Utensils size={20} />
                </div>
                <h2>Ingredienti</h2>
                <span className="ingredients-count">({recipe.extendedIngredients.length})</span>
              </div>
            </div>
            <div className="modern-ingredients-grid">
              {recipe.extendedIngredients.map((ingredient, index) => (
                <div key={index} className="modern-ingredient-card">
                  <div className="ingredient-checkbox">
                    <input type="checkbox" id={`ingredient-${index}`} />
                    <label htmlFor={`ingredient-${index}`}></label>
                  </div>
                  <div className="ingredient-details">
                    <span className="ingredient-quantity">
                      {ingredient.amount} {ingredient.unit}
                    </span>
                    <span className="ingredient-name-modern">{ingredient.name}</span>
                  </div>
                  {ingredient.image && (
                    <div className="ingredient-image-small">
                      <img 
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        alt={ingredient.name}
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Istruzioni eleganti */}
        {recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 && (
          <div className="recipe-content-section">
            <div className="section-header">
              <div className="section-title">
                <div className="section-icon-wrapper">
                  <ChefHat size={20} />
                </div>
                <h2>Preparazione</h2>
                <span className="steps-count">({recipe.analyzedInstructions[0].steps.length} passi)</span>
              </div>
            </div>
            <div className="modern-instructions">
              {recipe.analyzedInstructions[0].steps.map((step, index) => (
                <div key={index} className="modern-instruction-step">
                  <div className="step-number-modern">
                    <span>{step.number}</span>
                  </div>
                  <div className="step-content-modern">
                    <p>{step.step}</p>
                    {step.ingredients && step.ingredients.length > 0 && (
                      <div className="step-ingredients">
                        <span className="step-ingredients-label">Ingredienti per questo passaggio:</span>
                        <div className="step-ingredients-list">
                          {step.ingredients.map((ingredient, i) => (
                            <span key={i} className="step-ingredient-tag">{ingredient.name}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        
        {/* Descrizione con design migliore */}
        {recipe.summary && (
          <div className="recipe-content-section">
            <div className="section-header">
              <div className="section-title">
                <div className="section-icon-wrapper">
                  <Info size={20} />
                </div>
                <h2>Descrizione</h2>
              </div>
            </div>
            <div className="recipe-description-modern">
              <div 
                className="description-content"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            </div>
          </div>
        )}

        {/* Valori nutrizionali moderni */}
        {recipe.nutrition && recipe.nutrition.nutrients && (
          <div className="recipe-content-section">
            <div className="section-header">
              <div className="section-title">
                <div className="section-icon-wrapper">
                  <TrendingUp size={20} />
                </div>
                <h2>Valori nutrizionali</h2>
                <span className="nutrition-note">(per porzione)</span>
              </div>
            </div>
            <div className="modern-nutrition-grid">
              {recipe.nutrition.nutrients.slice(0, 6).map((nutrient, index) => (
                <div key={index} className="modern-nutrition-card">
                  <div className="nutrient-value-modern">
                    {Math.round(nutrient.amount)}
                    <span className="nutrient-unit">{nutrient.unit}</span>
                  </div>
                  <div className="nutrient-name-modern">{nutrient.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Link alla ricetta originale elegante */}
        {recipe.sourceUrl && (
          <div className="recipe-content-section">
            <div className="source-link-container">
              <a 
                href={recipe.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modern-source-link"
              >
                <div className="source-link-content">
                  <ExternalLink size={24} />
                  <div>
                    <span className="source-link-title">Vedi ricetta originale</span>
                    <span className="source-link-subtitle">Apre in una nuova finestra</span>
                  </div>
                </div>
                <div className="source-link-arrow">
                  →
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeDetails