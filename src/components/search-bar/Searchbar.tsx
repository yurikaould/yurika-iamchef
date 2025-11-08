import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ingredients, type IngredientInterface } from "../../types/ingredients";
import SuggestList from "../suggest-item/SuggestList";

// Definisco i tipi delle props che mi arrivano da fuori
type SearchBarProps = {
  handleSuggestClick: (ing: IngredientInterface) => void
}

// Il mio componente SearchBar: gestisce tutto ciò che riguarda la ricerca dell’ingrediente
const SearchBar = ({ handleSuggestClick }: SearchBarProps) => {

  // Stato per capire se l’input è attivo o meno (mi serve per gestire gli effetti grafici)
  const [isFocused, setIsFocused] = useState(false);

  // Stato che contiene il testo scritto dall’utente nella searchbar
  const [searchingIng, setSearchingIng] = useState<string>("");

  // Uso useMemo per filtrare la lista degli ingredienti solo quando il valore digitato cambia
  // In questo modo evito filtraggi inutili su ogni render
  const filteredIngredients = useMemo(() => {
    if (!searchingIng) return [];
    return ingredients.filter((ingredient) =>
      ingredient.name.startsWith(searchingIng)
    );
  }, [searchingIng]);

  // Quando l’utente clicca su un suggerimento:
  // 1. passo il valore cliccato al parent tramite callback
  // 2. svuoto la barra di ricerca per dare feedback visivo immediato
  const handleClick = (ing: IngredientInterface) => {
    handleSuggestClick(ing);
    setSearchingIng("");
  };

  // JSX del componente: barra di ricerca + suggerimenti condizionali
  return (
    <>
      <div className="relative">
        {/* Effetto di focus: un contorno evidenziato con transizione */}
        <div
          className={`absolute -inset-1.5 rounded-xl transition-all duration-300 ${
            isFocused
              ? "border-3 border-white opacity-100"
              : "border-2 border-transparent opacity-0"
          }`}
        />

        {/* Contenitore principale della searchbar */}
        <div
          className={`relative flex gap-3 bg-white rounded-lg px-4 py-3 transition-all duration-300 shadow-sm ${
            isFocused ? "shadow-lg" : ""
          }`}
        >
          {/* Icona lente: cambia colore quando la barra è attiva */}
          <Search
            className={`transition-colors duration-300 ${
              isFocused ? "stroke-green-500" : "stroke-gray-400"
            }`}
            size={20}
          />

          {/* Input vero e proprio: invio informazioni e gestisco focus */}
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="First ingredients ..."
            className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder:text-gray-400"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchingIng}
            onChange={(e) => setSearchingIng(e.target.value)}
          />
        </div>
      </div>

      {/* Se l’utente sta digitando, mostro i suggerimenti filtrati */}
      {searchingIng.length > 0 && (
        <SuggestList
          ingredients={filteredIngredients}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default SearchBar;
