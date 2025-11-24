import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Key, ChefHat } from 'lucide-react'

const ApiKeyPage = () => {
  const [apiKey, setApiKey] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Se la API key è già salvata, vai direttamente alla pagina ingredienti
    const savedKey = localStorage.getItem('SPOONACULAR_API_KEY')
    if (savedKey) {
      navigate('/ingredients')
    }
  }, [navigate])

  const handleMockup = () => {
    // Rimuovi eventuale API key esistente per forzare l'uso delle ricette mock
    localStorage.removeItem('SPOONACULAR_API_KEY')
    navigate('/ingredients')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Validazione campo vuoto
    if (!apiKey.trim()) {
      setError('La API Key è obbligatoria')
      return
    }

    setIsLoading(true)
    
    try {
      // Test della API key con una chiamata semplice
      const testResponse = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?query=tomato&number=1&apiKey=${apiKey.trim()}`
      )
      
      if (!testResponse.ok) {
        if (testResponse.status === 401) {
          throw new Error('API Key non valida')
        } else if (testResponse.status === 402) {
          throw new Error('API Key scaduta o quota esaurita')
        } else {
          throw new Error('Errore nella validazione della API Key')
        }
      }

      // Se arriva qui, la API key è valida
      localStorage.setItem('SPOONACULAR_API_KEY', apiKey.trim())
      navigate('/ingredients')
      
    } catch (err) {
      setError(err.message || 'Errore nella validazione della API Key')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="api-key-page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="logo">
            <ChefHat className="logo-icon" />
            <h1>I AM CHEF</h1>
          </div>
        </div>

        {/* Contenuto principale */}
        <div className="main-content">
          <div className="intro-section">
            <h2>Benvenuto in I AM Chef!</h2>
            <p>Per iniziare a cercare ingredienti e ricette, inserisci la tua API Key di Spoonacular</p>
          </div>

          {/* Form API Key */}
          <div className="api-key-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="apiKey" className="form-label">
                  <Key className="label-icon" />
                  API Key Spoonacular
                </label>
                <input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value)
                    setError('') // Pulisci errore quando l'utente digita
                  }}
                  placeholder="Inserisci la tua API Key..."
                  className={`form-input ${error ? 'error' : ''}`}
                  disabled={isLoading}
                />
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}
              </div>

              <div className="buttons-container">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Validazione...
                    </>
                  ) : (
                    'Accedi'
                  )}
                </button>
                
                <button 
                  type="button" 
                  className="mockup-btn"
                  onClick={handleMockup}
                  disabled={isLoading}
                >
                  Mockup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiKeyPage