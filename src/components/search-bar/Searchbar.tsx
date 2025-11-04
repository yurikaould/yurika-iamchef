import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ingredients } from "../../types/ingredients";
import SuggestList from "../suggest-item/SuggestList";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchingIng, setSearchingIng] = useState<string>("");

  const filteredIngredients = useMemo(() => {
    if (!searchingIng) return [];
    return ingredients.filter((ingredient) =>
      ingredient.startsWith(searchingIng)
    );
  }, [searchingIng]);

  return (
    <>
      <div className="relative">
        <div
          className={`absolute -inset-1.5 rounded-xl transition-all duration-300 ${
            isFocused
              ? "border-3 border-white opacity-100"
              : "border-2 border-transparent opacity-0"
          }`}
        />

        <div
          className={`relative flex gap-3 bg-white rounded-lg px-4 py-3 transition-all duration-300 shadow-sm ${
            isFocused ? "shadow-lg" : ""
          }`}
        >
          <Search
            className={`transition-colors duration-300 ${
              isFocused ? "stroke-green-500" : "stroke-gray-400"
            }`}
            size={20}
          />
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
    
      {searchingIng.length > 0 && (
        <SuggestList ingredients={filteredIngredients} />
      )}

    </>
  );
};

export default SearchBar;