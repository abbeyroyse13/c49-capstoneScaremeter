import React from "react"
import { Link } from "react-router-dom"

export const HorrorItemCard = ({horrorItem}) => {
    return (
        <section className="horrorItemCard">
            <Link to={`/horrorDetail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item" className="horror-image" /></Link>
        </section>
    )
}