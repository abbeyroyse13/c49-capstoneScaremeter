import React from "react"
import { Link } from "react-router-dom"

export const HorrorItemCard = ({horrorItem}) => {

    return (
        <section className="horrorItemCard">
            <Link to={`/horrorItems/detail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item" className="horror-image" /></Link>
            <button type="button" className="save-btn">Save</button>
        </section>
    )
}