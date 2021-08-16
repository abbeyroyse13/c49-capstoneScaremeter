import React, { useContext, useEffect, useState } from "react"
import { HorrorItemCard } from "../horrorItems/horrorItemCard"
import { FavoritesContext } from "./horrorFavoritesProvider"
import { useHistory } from "react-router-dom"
import { HorrorFavoritesCard } from "./horrorFavoritesCard"
// import "./horrorItem.css"

export const MyList = () => {
    const { horrorItemFavorites, getHorrorItemFavorites, addHorrorItemFavorites, removeHorrorFavorite } = useContext(FavoritesContext)

    const history = useHistory();

    useEffect(() => {
        console.log("HorrorItemFaves: useEffect - getHorrorItemFavorites")
        getHorrorItemFavorites()
    }, [])

    return (
        <>
        <div className="horrorFaves">
    <div className="horrorItemFaves">
                {console.log("HorrorItemFaves: Render", horrorItemFavorites)}
                <h2 className="title">My Favorites</h2>
                {
                    horrorItemFavorites.map(horrorItemFavorite => {
                        { console.log("horrorItemFave", horrorItemFavorite) }
                        return <HorrorFavoritesCard key={horrorItemFavorite.id} horrorItemFavorite={horrorItemFavorite} />
                    })
                }
            </div>
            </div>
        </>
    )
}