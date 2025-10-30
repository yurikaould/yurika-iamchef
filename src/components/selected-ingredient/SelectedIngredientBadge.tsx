type SelectingredientBadge = {
    index: number,
    ingredient: string,
    handleDeleteIng: () => void
}

export default function SelectingredientBadge({ index, ingredient, handleDeleteIng }: SelectingredientBadge) {
    return (
      <div id={index.toString()} className="flex py-[5px] px-1.5 justify-center items-center gap-[17px] rounded-[5px] bg-[#FFF] shadow-[0010px0rgba(0,0,0,0.25)] relative">
        <div className="flex flex-col items-start gap-2.5 left-1.5 top-[5px]">
          <p className="text-black font-inter text-sm font-bold leading-[1.2em] w-fit">
            {ingredient}
          </p>
        </div>
        <button onClick={handleDeleteIng}>
            <img src="/icons/SelectIngredientCloseIcon.svg" alt="" />
        </button>
      </div>
    );
  }