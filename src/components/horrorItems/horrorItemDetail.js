import React, { useContext, useEffect, useState } from "react"
import { HorrorItemContext } from "./horrorItemProvider"
import { useParams } from "react-router-dom"
import "./horrorItem.css"
import ProgressBar from "react-bootstrap/ProgressBar"

export const HorrorItemDetail = () => {
    const { getHorrorItemById } = useContext(HorrorItemContext)

    const [horrorItem, setHorrorItem] = useState({})

    const {horrorItemId} = useParams()

    useEffect(() => {
        console.log("useEffect", horrorItemId)
        getHorrorItemById(horrorItemId)
        .then((response) => {
            setHorrorItem(response)
        })
    }, [])

    return (
        <section className="horrorDetail">
            <h3 className="horrortitle"> {horrorItem.title} </h3>
            <div className="releaseDate"> {horrorItem.releaseDate} </div>
            <div className="description"> {horrorItem.description} </div>
            <div className="horrorCategory"> {horrorItem.category} </div>
            <img src={horrorItem.img} className="horrorImg" />
            <ProgressBar min={25} max={100} now={50} animated variant="success"/>
            <button onClick={null} type="btn" >SCAREME!</button>
        </section>
    )
}