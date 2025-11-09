import type { ReactElement } from "react";
import { IconBadge } from "../../components/sections/recipe-details/IconBadge";

export const getHealtScore = (healthScore: number | undefined): ReactElement | false | 0 | undefined => {
    return healthScore &&
    IconBadge('💚', `Health Score ${healthScore}`, "bg-blue-100 text-blue-950")
}