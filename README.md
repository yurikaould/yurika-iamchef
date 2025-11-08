## TODO:

- Creare **Header.tsx** con:
  - organizzazione header (logo, subtitle, searchbar, badge, bottone) ✔️
  - gestione logica header (se sono in home occupa una parte consistente, sennò è in alto)

- Creare **Layout.tsx** con:
  - organizzazione layout (header, main, footer, ecc...) ✔️
  - logica di state globali ✔️

- Creare **DiscoverRecipes.tsx** con:
  - Elenco di **RecipeCard**
  - bottoni per swipare avanti e indietro con relative logiche

- Creare **RecipeCard.tsx** con:
  - Card per il dettaglio delle ricette, inizialmente statico

- Creare **RecipeDetails.tsx** con:
   - Dettagli ricetta basandosi su ID della card selezionata

### Flusso attuale
1. Viene mostrata DiscoverRipes
  - Manda a schermo RecipeCard, a cui passa una recipe, che è presa dall'array recipes, in posizione currentIndex

2. RecipeCard ha dentro 

## REFACTOR
* Mantenere codice pulito, organizzato e manutenibile