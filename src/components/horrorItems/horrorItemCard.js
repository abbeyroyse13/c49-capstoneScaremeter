import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { FavoritesContext } from "../horrorFavorites/horrorFavoritesProvider"
import { MyList } from "../../nav/myList"
import "./horrorItem.css"

export const HorrorItemCard = ({ horrorItem }) => {
    const { addHorrorItemFavorite, removeHorrorFavorite } = useContext(FavoritesContext)

    const history = useHistory()

    const createNewHorrorFavorite = () => {
        const favoritedHorrorItem = {
            horrorId: horrorItem.id,
            userId: parseInt(localStorage.getItem("scaremeter_user"))
        }

        addHorrorItemFavorite(favoritedHorrorItem)
        .then(() => history.push("/horrorList"))
    }

    const handleDelete = () => {
        removeHorrorFavorite(horrorItem.id)
        .then(() => {
            history.push("/horrorList")
        })
    }

    return (
        <section className="horrorItemCard">
            {/* <Link to={`/horrorItems/detail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item" className="horror-image" /></Link> */}
                {/* <img src={horrorItem.img} alt="horror item" className="horror-image" /> */}
            <button type="button" className="save-btn" onClick={() => { createNewHorrorFavorite() }} >Save</button>
            <button type="button" className="remove-btn" onClick={() => { handleDelete() }} >Remove</button>
        </section>
    )
}