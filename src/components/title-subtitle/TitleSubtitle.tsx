import type { currentPage } from "../../types/actual-page";

type TitleSubtitleProps = {
  currentPage: currentPage
}

export default function Titlesubtitle({ currentPage }: TitleSubtitleProps) {

  if (currentPage.currentPage.page != 'homepage') {
    return null
  }

  return (
    <div className="flex flex-col gap-4 items-center w-full pb-6">
      <div className="w-1/4">
        <img src="/icons/iAmChef_Logo.svg" alt="logo app" className="rounded-lg" />
      </div>
      
      <p className="text-white font-jainiPurva text-lg font-normal leading-[1.2em]">
        Dimmi gli ingredienti e ti dirò una ricetta{" "}
      </p>
    </div>
  );
}