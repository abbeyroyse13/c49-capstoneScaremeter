import React, { useState, createContext } from "react"

export const FavoritesContext = createContext()

export const FavoritesProvider = (props) => {
    const [horrorItemFavorites, setHorrorItemFavorites] = useState([])

    const getHorrorItemFavorites = () => {
        return fetch("http://localhost:8088/horrorItemFavorites")
            .then(res => res.json())
            .then(setHorrorItemFavorites)
    }

    const addHorrorItemFavorite = (horrorFaveObj) => {
        return fetch("http://localhost:8088/horrorItemFavorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(horrorFaveObj)
        })
        .then(getHorrorItemFavorites)
    }

    return (
        <FavoritesContext.Provider value={{
            horrorItemFavorites, getHorrorItemFavorites, addHorrorItemFavorite
        }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}