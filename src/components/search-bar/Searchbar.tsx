import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      {/* Bordo esterno animato */}
      <div
        className={`absolute -inset-1.5 rounded-xl transition-all duration-300 ${
          isFocused
            ? "border-3 border-white opacity-100"
            : "border-2 border-transparent opacity-0"
        }`}
      />
      
      {/* Input container */}
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
        />
      </div>
    </div>
  );
};

export default SearchBar;