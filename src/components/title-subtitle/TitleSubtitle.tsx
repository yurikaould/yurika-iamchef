import type { Pages } from "../../types/pages";

type TitleSubtitleProps = {
  actualPage: Pages
}

export default function Titlesubtitle({ actualPage }: TitleSubtitleProps) {

  if (actualPage.page != 'homepage') {
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