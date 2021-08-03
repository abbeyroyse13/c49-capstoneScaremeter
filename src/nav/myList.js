import React, { useContext, useEffect, useState } from "react"
import { HorrorItemCard } from "../components/horrorItems/horrorItemCard"
import { FavoritesContext } from "../components/horrorFavorites/horrorFavoritesProvider"
// import "./horrorItem.css"

export const MyList = () => {
    const { horrorItemFavorites, getHorrorItemFavorites, addHorrorItemFavorites } = useContext(FavoritesContext)

    useEffect(() => {
        console.log("HorrorItemFaves: useEffect - getHorrorItemFavorites")
        getHorrorItemFavorites()
    }, [])

    return (
        <>
    <div className="horrorItemFaves">
                {console.log("HorrorItemFaves: Render", horrorItemFavorites)}
                <h2>Horror Item Faves</h2>
                {
                    horrorItemFavorites?.map(horrorItemFavorite => {
                        { console.log("horrorItemFave", horrorItemFavorite) }
                        return <HorrorItemCard key={horrorItemFavorite.id} horrorItemFavorite={horrorItemFavorite} />
                    })
                }
            </div>
        </>
    )
}