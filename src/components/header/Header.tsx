import type { currentPage } from "../../types/actual-page"
import type { IngredientInterface } from "../../types/ingredients"
import DiscoverRecipeBtn from "./components/discover-recipes-btn/DiscoverRecipeBtn"
import SearchBar from "./components/search-bar/Searchbar"
import SelectedList from "./components/selected-item/SelectedList"
import Titlesubtitle from "./components/title-subtitle/TitleSubtitle"
 

type HeaderProps = {
    currentPage: currentPage,
    setCurrentPage: (currentPage: currentPage) => void,
    selectedIng: IngredientInterface[],
    onSuggestClick: (ing: IngredientInterface) => void,
    onBadgeRemove: (ing: IngredientInterface) => void
}

const Header = ({
    currentPage, 
    setCurrentPage, 
    selectedIng, 
    onSuggestClick, 
    onBadgeRemove
}: HeaderProps) => {

    return (
        <div>

            <div className="">
                <Titlesubtitle currentPage={currentPage}/>
            </div>

            <div className="flex flex-col gap-4">
                <SearchBar handleSuggestClick={onSuggestClick} />

                <SelectedList 
                    ingredients={selectedIng} 
                    handleRemove={onBadgeRemove}
                    currentPage={currentPage}/>

                <DiscoverRecipeBtn ingredients={selectedIng} setCurrentPage={setCurrentPage} />
            </div>

        </div>
    )
}

export default Header