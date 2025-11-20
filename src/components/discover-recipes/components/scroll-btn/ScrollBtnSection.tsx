import type { currentPage } from "../../../../types/current-page"
import ScrollBtn from "./ScrollBtn"

type ScrollBtnSectionProps = {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  maxIndex: number,
  setCurrentPage: (currentPage: currentPage) => void
}

export function ScrollBtnSection({ currentIndex, setCurrentIndex, maxIndex, setCurrentPage }: ScrollBtnSectionProps) {

  return (
    <div className="py-2 flex gap-3 justify-center items-center">

          <ScrollBtn 
            currentIndex={currentIndex}
            isIncrement={false}
            maxIndex={maxIndex}
            onClick={setCurrentIndex}
            cursor={currentIndex == 0 ? "cursor-default" : "cursor-pointer"}
            opacity={currentIndex == 0 ? "opacity-50" : "opacity-100"}
          />

        <div 
          className="flex w-12 h-12 cursor-pointer shrink-0 items-center justify-center bg-white rounded-lg shadow-md"
          onClick={() => setCurrentPage({currentPage: {page: "homepage"}})}
        >

          <span className="text-2xl">👨‍🍳</span>

        </div>

        {/* <button
          className="cursor-pointer"
          onClick={() => setCurrentPage({page: "recipe-details"})}>
          <img className="w-14 h-14" src="/icons/selectRecipeIcon.svg" />
        </button> */}
        
        <ScrollBtn 
          currentIndex={currentIndex}
          isIncrement={true}
          maxIndex={maxIndex}
          onClick={setCurrentIndex}
          cursor={currentIndex == maxIndex ? "cursor-default" : "cursor-pointer"}
          opacity={currentIndex == maxIndex ? "opacity-50" : "opacity-100"}
        />
        
    </div>
  )
}
