type SearchBarProps = {
  setSearchingIngredient: (ingredient: string) => void
}

export default function Searchbar({ setSearchingIngredient }: SearchBarProps) {


    return (
      <div className="w-full flex px-4 py-2 items-center shrink-0 rounded-[5px] bg-[#FFF] overflow-auto">

          <input 
            type="text" 
            placeholder="Digit first ingredient ..." 
            onChange={(e) => setSearchingIngredient(e.target.value)}
            className="placeholder:text-black/75" 
          />
      </div>
    );
  }