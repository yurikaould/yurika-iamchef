import DiscoverRecipeBtn from "../discover-recipes/DiscoverRecipeBtn"
import SearchBar from "../search-bar/Searchbar"
import SelectedList from "../selected-item/SelectedList"
import Titlesubtitle from "../title-subtitle/TitleSubtitle"

type HeaderProps = {
    selectedIng: string[],
    onSuggestClick: (ing: string) => void,
    onBadgeRemove: (ing: string) => void
}

const Header = ({selectedIng, onSuggestClick, onBadgeRemove}: HeaderProps) => {

    return (
        <div>

            <div className="">
                <Titlesubtitle/>
            </div>

            <div className="flex flex-col gap-4">
                <SearchBar handleSuggestClick={onSuggestClick} />

                <SelectedList ingredients={selectedIng} handleRemove={onBadgeRemove}/>

                <DiscoverRecipeBtn ingredients={selectedIng} />
            </div>

        </div>
    )
}

export default Header