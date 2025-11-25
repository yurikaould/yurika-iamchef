# 🎯 Modalità Mockup - Guida Implementazione

## 📋 Panoramica

È stata implementata la modalità **Mockup** che permette di utilizzare l'applicazione con ricette statiche locali, senza necessità di una API key di Spoonacular.

---

## 🏗️ Struttura Implementazione

### 1. **File di Dati Mock** (`src/data/mockRecipes.js`)
- **8 ricette italiane complete** con tutti i dettagli necessari
- Ogni ricetta include:
  - Titolo, immagine, tempo di preparazione, porzioni
  - Ingredienti estesi con quantità
  - Istruzioni dettagliate passo-passo
  - Informazioni nutrizionali
  - Cucine e tipi di piatto
- **Funzione di filtro**: `filterRecipesByIngredients()`
  - Comportamento: trova ricette che contengono **ALMENO UNO** degli ingredienti cercati
  - Confronto case-insensitive e parziale (es. "pollo" trova "petto di pollo")

### 2. **Gestione Modalità** (localStorage)
- Chiave: `APP_MODE`
- Valori: `'api'` (modalità normale) o `'mock'` (modalità demo)
- Impostato automaticamente quando si clicca "Accedi" (api) o "Mockup" (mock)

---

## 🎮 Come Usare

### **Modalità Mockup**
1. Aprire l'applicazione alla pagina iniziale
2. Cliccare il pulsante **"Mockup"** (sotto il pulsante "Accedi")
3. Verrai reindirizzato alla home con badge **"MODALITÀ DEMO"** 🟠
4. Cerca ingredienti normalmente (es. "pollo", "pasta", "funghi")
5. Seleziona ingredienti e clicca "Cerca Ricette"
6. Visualizza le ricette filtrate dalle 8 ricette mock
7. Clicca su una ricetta per vedere i dettagli completi

### **Modalità API**
1. Inserire API Key di Spoonacular
2. Cliccare "Accedi"
3. Comportamento normale con API reale

---

## ✅ Test Manuali

### Test 1: Accesso Modalità Mockup
- [ ] Cliccare "Mockup" nella pagina iniziale
- [ ] Verificare che appaia il badge "MODALITÀ DEMO" arancione
- [ ] Verificare che il pulsante dica "Torna alla Home" invece di "Cambia API Key"

### Test 2: Ricerca Ingredienti Mock
- [ ] Cercare "pollo" → Dovrebbero apparire ingredienti correlati
- [ ] Cercare "pasta" → Dovrebbero apparire ingredienti correlati
- [ ] Cercare "xyz123" → Nessun risultato (comportamento corretto)

### Test 3: Selezione e Ricerca Ricette
- [ ] Selezionare "pollo" dalla lista ingredienti
- [ ] Cliccare "Cerca Ricette"
- [ ] Dovrebbero apparire 2 ricette: "Pollo al Curry" e "Insalata Caesar"

### Test 4: Dettagli Ricetta Mock
- [ ] Cliccare su una ricetta dai risultati
- [ ] Verificare che tutti i dettagli siano visibili:
  - Immagine, titolo, tempo, porzioni
  - Lista ingredienti completa
  - Istruzioni passo-passo
  - Informazioni nutrizionali
- [ ] Verificare badge "DEMO" nell'header

### Test 5: Ricette per Ingrediente Specifico
| Ingrediente Cercato | Ricette Attese |
|---------------------|----------------|
| `pollo` | Pollo al Curry, Insalata Caesar |
| `pasta` | Spaghetti Carbonara, Pasta al Pesto, Lasagne |
| `riso` | Risotto ai Funghi, Pollo al Curry |
| `funghi` | Risotto ai Funghi |
| `salmone` | Salmone al Forno |
| `uova` | Carbonara, Lasagne, Tiramisù |

### Test 6: Cambio Modalità
- [ ] Dalla modalità mock, cliccare "Torna alla Home"
- [ ] Verificare di essere tornati alla pagina iniziale
- [ ] Inserire API Key → Verificare cambio a modalità API
- [ ] Verificare che il badge "MODALITÀ DEMO" scompaia

### Test 7: Persistenza Modalità
- [ ] Attivare modalità mock
- [ ] Ricaricare la pagina (F5)
- [ ] Verificare che si rimanga nella modalità mock

---

## 🎨 Indicatori Visuali

### Badge Modalità Demo
- **Colore**: Gradiente arancione (#f59e0b → #d97706)
- **Posizione**: Accanto al logo "I AM CHEF" in tutte le pagine
- **Testo**: "MODALITÀ DEMO" (IngredientSearch) o "DEMO" (altre pagine)
- **Animazione**: Pulsazione leggera per attirare l'attenzione

---

## 📦 Ricette Mock Disponibili

1. **Spaghetti alla Carbonara** 🍝
   - Ingredienti chiave: spaghetti, guanciale, uova, pecorino
   - 20 minuti, 4 porzioni

2. **Risotto ai Funghi Porcini** 🍄
   - Ingredienti chiave: riso, funghi porcini, parmigiano
   - 35 minuti, 4 porzioni, vegetariano

3. **Pollo al Curry con Riso** 🍛
   - Ingredienti chiave: pollo, curry, latte di cocco, riso
   - 40 minuti, 4 porzioni, gluten-free

4. **Insalata Caesar con Pollo** 🥗
   - Ingredienti chiave: lattuga, pollo, parmigiano, crostini
   - 25 minuti, 2 porzioni

5. **Lasagne alla Bolognese** 🧀
   - Ingredienti chiave: pasta, carne macinata, besciamella
   - 120 minuti, 8 porzioni

6. **Salmone al Forno con Verdure** 🐟
   - Ingredienti chiave: salmone, zucchine, peperoni
   - 30 minuti, 4 porzioni, pescatarian

7. **Tiramisù Classico** 🍰
   - Ingredienti chiave: mascarpone, savoiardi, caffè
   - 240 minuti (+ riposo), 8 porzioni, vegetariano

8. **Pasta al Pesto Genovese** 🌿
   - Ingredienti chiave: pasta, basilico, pinoli, parmigiano
   - 15 minuti, 4 porzioni, vegetariano

---

## 🔧 Dettagli Tecnici

### Modifiche ai Componenti

#### **ApiKeyPage.jsx**
- Pulsante "Mockup" imposta `localStorage.setItem('APP_MODE', 'mock')`
- Naviga a `/ingredients`

#### **IngredientSearch.jsx**
- Verifica `APP_MODE` all'avvio
- Mostra badge appropriato
- Cambia testo pulsante header

#### **SearchResults.jsx**
- Nuova funzione `searchIngredientsMock()` per ingredienti locali
- Nuova logica in `searchRecipes()` per filtrare ricette mock
- Mostra badge "DEMO" nell'header

#### **RecipeDetails.jsx**
- Cerca ricetta in `mockRecipes` se `APP_MODE === 'mock'`
- Simula delay per UX coerente
- Mostra badge "DEMO" nell'header

### Funzione di Filtro
```javascript
filterRecipesByIngredients(recipes, searchedIngredients)
```
- **Input**: array di ricette, array di ingredienti cercati
- **Output**: ricette che contengono ALMENO UNO degli ingredienti
- **Algoritmo**: 
  1. Normalizza ingredienti cercati (lowercase, trim)
  2. Per ogni ricetta, estrae nomi ingredienti
  3. Verifica match parziale (includes) in entrambe le direzioni
  4. Restituisce ricette con almeno un match

---

## 🐛 Known Issues / Limitazioni

1. **Immagini mock**: Usano placeholder da Unsplash, potrebbero non caricare offline
2. **Ingredienti mock limitati**: Solo gli ingredienti presenti nelle 8 ricette sono cercabili
3. **Nessun salvataggio preferiti**: La modalità mock non supporta funzionalità avanzate
4. **Ricette statiche**: Non si aggiornano, sempre le stesse 8

---

## 📝 Note di Sviluppo

- **Compatibilità**: Modalità API e Mock sono completamente separate
- **Persistenza**: Usa solo localStorage, nessun database
- **Performance**: Ricerca istantanea (mock) vs API call (reale)
- **Scalabilità**: Facile aggiungere nuove ricette a `mockRecipes.js`

---

## ✨ Prossimi Passi (Opzionali)

1. Aggiungere più ricette mock (20-30 per varietà)
2. Implementare filtri avanzati (diete, cucine, tempo)
3. Aggiungere ricerca full-text nel titolo ricette
4. Salvare ricette preferite in localStorage anche in modalità mock
5. Esportare/importare ricette custom

---

**Ultima modifica**: 25 Novembre 2025  
**Versione**: 1.0.0
