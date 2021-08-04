import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [userItems, setUserItems] = useState([]) 

    const getUserItems = () => {
        return fetch("http://localhost:8088/userItems")
        .then(res => res.json())
        .then(setUserItems)
    }

    return (
        <UserContext.Provider value={{
            userItems, getUserItems
        }}>
            {props.children}
        </UserContext.Provider>
    )
}