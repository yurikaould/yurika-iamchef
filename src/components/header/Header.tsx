import type { IngredientInterface } from "../../types/ingredients"
import type { Pages } from "../../types/pages"
import DiscoverRecipeBtn from "../discover-recipes/DiscoverRecipeBtn"
import SearchBar from "../search-bar/Searchbar"
import SelectedList from "../selected-item/SelectedList"
import Titlesubtitle from "../title-subtitle/TitleSubtitle"
 

type HeaderProps = {
    actualPage: Pages,
    setActualPage: (page: Pages) => void,
    selectedIng: IngredientInterface[],
    onSuggestClick: (ing: IngredientInterface) => void,
    onBadgeRemove: (ing: IngredientInterface) => void
}

const Header = ({
    actualPage, 
    setActualPage, 
    selectedIng, 
    onSuggestClick, 
    onBadgeRemove
}: HeaderProps) => {

    return (
        <div>

            <div className="">
                <Titlesubtitle actualPage={actualPage}/>
            </div>

            <div className="flex flex-col gap-4">
                <SearchBar handleSuggestClick={onSuggestClick} />

                <SelectedList 
                    ingredients={selectedIng} 
                    handleRemove={onBadgeRemove}
                    actualPage={actualPage}/>

                <DiscoverRecipeBtn ingredients={selectedIng} setActualPage={setActualPage} />
            </div>

        </div>
    )
}

export default Header