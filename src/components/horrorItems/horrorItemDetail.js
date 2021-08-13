import React, { useContext, useEffect, useState } from "react"
import { HorrorItemContext } from "./horrorItemProvider"
import { useHistory, useParams } from "react-router-dom"
import "./horrorItem.css"
import { UserContext } from "../userData/userDataProvider"

export const HorrorItemDetail = () => {
    const { getHorrorItemById, deleteHorrorItem } = useContext(HorrorItemContext)
    const { userItems, getUserItems } = useContext(UserContext)

    const [horrorItem, setHorrorItem] = useState({})
    const [userItem, setUserItem] = useState({})
    const [value, setValue] = useState()
    const history = useHistory()

    const { horrorItemId } = useParams()

    useEffect(() => {
        console.log("useEffect", horrorItemId)
        getHorrorItemById(horrorItemId)
            .then((response) => {
                setHorrorItem(response)
            })
    }, [])

    const handleDelete = () => {
        deleteHorrorItem(horrorItem.id)
            .then(() => {
                history.push("/horrorItems")
            })
    }

    useEffect(() => {
        console.log("useEffect", userItem)
        getUserItems().then(() => { 
            const UserRate = userItems.find(userItem => userItem.horrorItemId === horrorItem.id)
            setUserItem(UserRate) 
            console.log(userItem)
        })
    }, [horrorItem])

    // found an alternate way to do this (see progress bar component)
    const handleClick = (e) => {
        e.preventDefault()

        const currentValue = parseInt(e.target.now)
        let updatedValue = 0
        if (currentValue < 100) {
            updatedValue = currentValue + 25
        } else {
            updatedValue = 0
        }
        setValue(updatedValue)
    }

    return (
        <>
            <section className="horrorDetail">
                <h3 className="horrortitle"> {horrorItem.title} </h3>
                <div className="releaseDate"> {horrorItem.releaseDate} </div>
                <div className="description"> {horrorItem.description} </div>
                <div className="horrorCategory"> {horrorItem.category} </div>
                <img src={horrorItem.img} className="horrorImg" />
                <button className="delete-btn" onClick={() => { handleDelete() }}>Delete</button>
            </section>
        </>
    )
}