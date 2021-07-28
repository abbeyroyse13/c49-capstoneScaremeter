import React, { useState, createContext } from "react"

export const HorrorItemContext = createContext()

export const HorrorItemProvider = (props) => {
    const [horrorItems, setHorrorItems] = useState([])

    const getHorrorItems = () => {
        return fetch("http://localhost:8088/horrorItems")
        .then(res => res.json())
        .then(setHorrorItems)
    }

    const addHorrorItem = (horrorItemObj) => {
        return fetch("http://localhost:8088/horrorItems", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(horrorItemObj)
        })
        .then(getHorrorItems)
    }

    const deleteHorrorItem = horrorItemId => {
        return fetch(`http://localhost:8088/horrorItems/${horrorItemId}`, {
            method: "DELETE"
        })
        .then(getHorrorItems)
    }

    const getHorrorItemById = (id) => {
        return fetch(`http://localhost:8088/horrorItems/${id}`)
        .then(res => res.json())
    }

    return (
        <HorrorItemContext.Provider value={{
            horrorItems, getHorrorItems, getHorrorItemById, addHorrorItem, deleteHorrorItem
        }}>
            {props.children}
        </HorrorItemContext.Provider>
    )
}