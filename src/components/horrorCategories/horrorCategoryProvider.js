import React, { useState, createContext } from "react"

export const CategoryContext = createContext()

export const CategoryProvider = (props) => {
    const [categorys, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8088/horrorCategorys")
        .then(res => res.json())
        .then(setCategories)
    }

    return (
        <CategoryContext.Provider value={{
            categorys, getCategories
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}