import React, { useState, createContext } from "react"

export const HorrorItemContext = createContext()

export const HorrorItemProvider = (props) => {
    const [horrorItems, setHorrorItems] = useState([])

    const getHorrorItems = () => {
        return fetch("http://localhost:8088/horrorItems")
        .then(res => res.json())
        .then(setHorrorItems)
    }

    const getHorrorItemById = (id) => {
        return fetch(`http://localhost:8088/horrorItems/${id}`)
        .then(res => res.json())
    }

    return (
        <HorrorItemContext.Provider value={{
            horrorItems, getHorrorItems, getHorrorItemById
        }}>
            {props.children}
        </HorrorItemContext.Provider>
    )
}