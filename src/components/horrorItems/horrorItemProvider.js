import React, { useState, createContext } from "react"

export const horrorItemContext = createContext()

export const horrorItemProvider = (props) => {
    const [horrorItems, setHorrorItems] = useState([])

    const getHorrorItems = () => {
        return fetch("http://localhost:8088/horrorItems")
        .then(res => res.json())
        .then(setHorrorItems)
    }

    return (
        <horrorItemContext.Provider value={{
            horrorItems, getHorrorItems
        }}>
            {props.children}
        </horrorItemContext.Provider>
    )
}