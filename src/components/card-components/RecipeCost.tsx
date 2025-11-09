import type { ReactElement } from "react"
import { IconBadge } from "./IconBadge"

export const getCost = (pricePerServing: number | undefined): ReactElement | undefined | false | 0 => {
    return pricePerServing && pricePerServing >= 3 && 
        <IconBadge icon={"💸"} text={"bg-yellow-100 text-yellow-800"} />
}