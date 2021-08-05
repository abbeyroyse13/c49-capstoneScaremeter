import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { FavoritesContext } from "../horrorFavorites/horrorFavoritesProvider"
import { HorrorItemContext } from "../horrorItems/horrorItemProvider"
// import "./horrorItem.css"

export const HorrorFavoritesCard = ({horrorItemFavorite}) => {
    const { horrorItems } = useContext(HorrorItemContext)
    const { removeHorrorFavorite } = useContext(FavoritesContext)

    const history = useHistory()
    // const horrorItem = horrorItems.find(horrorItem => horrorItem.id === horrorItemFavorite.horrorItemId)
    // console.log(horrorItemFavorite.horrorItemId)

    const handleDelete = () => {
        removeHorrorFavorite(horrorItemFavorite.id)
        .then(() => {
            history.push("/horrorFavorites")
        })
    }

    return (
        <section className="horrorFaveCard">
             <Link to={`/horrorItems/detail/${horrorItemFavorite.horrorItem.id}`}><img src={horrorItemFavorite.horrorItem.img} alt="horror item" className="horror-image" /></Link>
             <button type="button" className="remove-btn" onClick={() => { handleDelete() }} >Remove</button>
        </section>
    )
}