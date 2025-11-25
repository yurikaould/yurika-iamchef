import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ChefHat, Settings, AlertCircle } from 'lucide-react'

const IngredientSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [appMode, setAppMode] = useState('api')
  const navigate = useNavigate()

  useEffect(() => {
    // Verifica modalità (API key o mock)
    const mode = localStorage.getItem('APP_MODE')
    const apiKey = localStorage.getItem('SPOONACULAR_API_KEY')
    
    if (mode === 'mock') {
      setAppMode('mock')
    } else if (!apiKey) {
      // Se non c'è né mode né API key, torna alla home
      navigate('/')
    } else {
      setAppMode('api')
    }
  }, [navigate])

  const handleSearch = (e) => {
    e.preventDefault()
    setError('')
    
    if (!searchTerm.trim()) {
      setError('Inserisci un ingrediente da cercare')
      return
    }

    // Naviga alla pagina dei risultati con la query
    navigate(`/search-results?q=${encodeURIComponent(searchTerm.trim())}`)
  }

  const handleChangeApiKey = () => {
    localStorage.removeItem('SPOONACULAR_API_KEY')
    localStorage.removeItem('APP_MODE')
    navigate('/')
  }

  return (
    <div className="ingredient-search-page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="logo">
            <ChefHat className="logo-icon" />
            <h1>I AM CHEF</h1>
            {appMode === 'mock' && (
              <span className="mode-badge mock">MODALITÀ DEMO</span>
            )}
          </div>
          <button onClick={handleChangeApiKey} className="change-api-btn">
            <Settings size={18} />
            {appMode === 'mock' ? 'Torna alla Home' : 'Cambia API Key'}
          </button>
        </div>

        {/* Titolo principale */}
        <div className="page-title">
          <h2>Incominciamo a cucinare?</h2>
          <p>Trova ricette deliziose con gli ingredienti che hai in casa</p>
        </div>

        {/* Icone decorative */}
        <div className="category-icons">
          <div className="icon-item">
            <div className="icon-circle">🔍</div>
          </div>
          <div className="icon-item">
            <div className="icon-circle">🍲</div>
          </div>
          <div className="icon-item">
            <div className="icon-circle">🥗</div>
          </div>
          <div className="icon-item">
            <div className="icon-circle">🍰</div>
          </div>
        </div>

        {/* Sezione ricerca */}
        <div className="search-section">
          <div className="search-container">
            <h3>
              <Search className="search-icon" />
              Cerca per ingredienti
            </h3>
            <p className="search-subtitle">
              Aggiungi quello che hai in frigo e trova ricette perfette
            </p>
            
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-container">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setError('')
                  }}
                  placeholder="es. pomodoro, basilico, mozzarella..."
                  className={`search-input ${error ? 'error' : ''}`}
                />
              </div>
              
              <button 
                type="submit" 
                className="search-btn"
              >
                <Search size={18} />
                Cerca ingredienti
              </button>
            </form>

            {error && (
              <div className="error-message">
                <AlertCircle size={16} />
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientSearch