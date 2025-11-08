import ScrollBtn from "./ScrollBtn"
import type { Pages } from "../../types/pages"

type ScrollBtnSectionProps = {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  maxIndex: number,
  setActualPage: (page: Pages) => void
}

export function ScrollBtnSection({ currentIndex, setCurrentIndex, maxIndex, setActualPage }: ScrollBtnSectionProps) {

  return (
    <div className="mt-4 flex gap-4 justify-center border border-red-500">

        <ScrollBtn 
          currentIndex={currentIndex}
          isIncrement={false}
          maxIndex={maxIndex}
          onClick={setCurrentIndex}
        />

        <div className="flex w-14 h-14">

          <img src="/icons/iAmChef_Logo.svg" alt="Logo" className="w-full h-full rounded-lg"/>

        </div>

        {/* <button
          className="cursor-pointer"
          onClick={() => setActualPage({page: "recipe-details"})}>
          <img className="w-14 h-14" src="/icons/selectRecipeIcon.svg" />
        </button> */}

        <ScrollBtn 
          currentIndex={currentIndex}
          isIncrement={true}
          maxIndex={maxIndex}
          onClick={setCurrentIndex}
        />

    </div>
  )
}
