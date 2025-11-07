import type { Pages } from "../../types/pages"
import DiscoverRecipeBtn from "../discover-recipes/DiscoverRecipeBtn"
import SearchBar from "../search-bar/Searchbar"
import SelectedList from "../selected-item/SelectedList"
import Titlesubtitle from "../title-subtitle/TitleSubtitle"

//TODO: Passare props setActualPage a DiscoverBtn
//TODO: Configurare differenti layout della header in base alla variabile actualPage 
    //TODO: Quando pagina è != da Homepage mettere header in alto  in piccolo con: no subtitle, logo piccolo, searchbar più piccola. Assicurarsi bottone in absolute
 

type HeaderProps = {
    actualPage: Pages,
    setActualPage: (page: Pages) => void,
    selectedIng: string[],
    onSuggestClick: (ing: string) => void,
    onBadgeRemove: (ing: string) => void
}

const Header = ({
    actualPage, 
    setActualPage, 
    selectedIng, 
    onSuggestClick, 
    onBadgeRemove
}: HeaderProps) => {

    // logica per gestire i differenti layout dell'header in base alla pagina attuale
    if (actualPage.page != "homepage") {
        return null
    }

    return (
        <div>

            <div className="">
                <Titlesubtitle/>
            </div>

            <div className="flex flex-col gap-4">
                <SearchBar handleSuggestClick={onSuggestClick} />

                <SelectedList ingredients={selectedIng} handleRemove={onBadgeRemove}/>

                <DiscoverRecipeBtn ingredients={selectedIng} setActualPage={setActualPage} />
            </div>

        </div>
    )
}

export default Header