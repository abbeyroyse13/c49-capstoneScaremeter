import React, { useState, createContext } from "react"

export const HorrorItemContext = createContext()

export const HorrorItemProvider = (props) => {
    const [horrorItems, setHorrorItems] = useState([])

    const getHorrorItems = () => {
        return fetch("http://localhost:8088/horrorItems")
        .then(res => res.json())
        .then(setHorrorItems)
    }

    return (
        <HorrorItemContext.Provider value={{
            horrorItems, getHorrorItems
        }}>
            {props.children}
        </HorrorItemContext.Provider>
    )
}