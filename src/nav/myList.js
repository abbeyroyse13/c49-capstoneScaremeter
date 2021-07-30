import React, { useContext, useHistory } from "react" 
import { FavoritesContext } from "../components/horrorFavorites/horrorFavoritesProvider"
import { HorrorItemCard } from "../components/horrorItems/horrorItemCard"

export const MyList = () => {
    const { getHorrorItemFavorites, addHorrorItemFavorites } = useContext(FavoritesContext)
// unsure how to move forward from here, could use some guidance
   // const history = useHistory()

    return (
        <HorrorItemCard />
    )
}