# 🍳 I AM CHEF

Un'applicazione moderna per la ricerca e gestione di ricette utilizzando l'API Spoonacular.

## ✨ Features

- 🔍 **Ricerca Ingredienti**: Cerca ingredienti disponibili e seleziona quelli che hai in casa
- 📱 **Design Responsivo**: Interface moderna con tema beige leggero e accenti verdi
- 🍽️ **Ricette Dettagliate**: Visualizza istruzioni complete, ingredienti e informazioni nutrizionali
- 🎨 **UX Pulita**: Pagine separate per ricerca, risultati e dettagli ricette
- 💾 **Persistenza Dati**: API key salvata localmente per comodità

## 🚀 Tecnologie Utilizzate

- **React 18** - Framework JavaScript moderno
- **TypeScript** - Tipizzazione statica
- **Vite** - Build tool veloce e moderno
- **React Router** - Navigazione SPA
- **Zustand** - State management leggero
- **Lucide React** - Icone moderne
- **Spoonacular API** - Database ricette e ingredienti

## 📦 Installazione

1. Clona il repository:
```bash
git clone https://github.com/yurikaould/yurika-iamchef.git
cd yurika-iamchef
```

2. Installa le dipendenze:
```bash
npm install
# oppure
pnpm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
# oppure
pnpm dev
```

4. Apri il browser su `http://localhost:5173`

## 🔑 Setup API Key

1. Registrati su [Spoonacular](https://spoonacular.com/food-api)
2. Ottieni la tua API key gratuita
3. Inserisci l'API key nella prima schermata dell'app
4. Inizia a cercare ricette!

## 🎯 Come Utilizzare l'App

1. **Inserisci API Key**: Al primo avvio, inserisci la tua chiave API Spoonacular
2. **Cerca Ingredienti**: Digita gli ingredienti che hai in casa
3. **Seleziona**: Scegli gli ingredienti dalla lista dei risultati
4. **Trova Ricette**: Clicca "Trova ricette" per vedere tutte le ricette possibili
5. **Visualizza Dettagli**: Clicca su una ricetta per vedere istruzioni complete

## 📱 Struttura dell'App

- **Home** (`/`) - Inserimento API key
- **Ricerca** (`/ingredients`) - Pagina principale per cercare ingredienti
- **Risultati** (`/search-results`) - Risultati della ricerca ingredienti e ricette
- **Dettagli** (`/recipe/:id`) - Dettagli completi della ricetta selezionata

## 🎨 Design

- Background beige uniforme (`#f7f5f3`)
- Accenti verdi per bottoni e interazioni
- Layout pulito e moderno
- Animazioni fluide
- Completamente responsivo

## 🛠️ Scripts Disponibili

```bash
npm run dev          # Avvia server sviluppo
npm run build        # Build per produzione
npm run preview      # Preview build produzione
npm run lint         # Controlla codice con ESLint
```

## 📂 Struttura del Progetto

```
src/
├── components/        # Componenti React riutilizzabili
├── pages/            # Pagine dell'applicazione
├── hooks/            # Custom hooks
├── services/         # Servizi API e store
├── types/            # Definizioni TypeScript
├── styles/           # File CSS modulari
└── utils/            # Utilità e helper
```

## 🤝 Contribuire

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha il branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## 🙏 Crediti

- **Spoonacular API** per il database ricette
- **Lucide** per le icone
- **React Community** per l'ecosistema fantastico

---

⭐ Se ti piace questo progetto, lascia una stella su GitHub!
