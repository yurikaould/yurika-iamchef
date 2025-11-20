import type { currentPage } from "../../types/current-page"
import type { IngredientInterface } from "../../types/ingredients"
import DiscoverRecipeBtn from "./components/discover-recipes-btn/DiscoverRecipeBtn"
import SearchBar from "./components/search-bar/Searchbar"
import SelectedList from "./components/selected-item/SelectedList"
 

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
            {/* Testo descrittivo solo nella homepage */}
            {currentPage.currentPage.page === 'homepage' && (
                <div className="text-center mb-6">
                    <p className="text-white font-jainiPurva text-lg font-normal leading-[1.2em]">
                        Dimmi gli ingredienti e ti dirò una ricetta
                    </p>
                </div>
            )}

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