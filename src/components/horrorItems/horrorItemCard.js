import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { FavoritesContext } from "../horrorFavorites/horrorFavoritesProvider"
import { HorrorItemContext } from "../horrorItems/horrorItemProvider"
import "./horrorItem.css"

export const HorrorItemCard = ({horrorItem}) => {
    const { horrorItems } = useContext(HorrorItemContext)
    const { addHorrorItemFavorite } = useContext(FavoritesContext)

    const history = useHistory()

    const createNewHorrorFavorite = () => {
        const favoritedHorrorItem = {
            horrorItemId: horrorItem.id,
            userId: parseInt(localStorage.getItem("scaremeter_user"))
        }

        addHorrorItemFavorite(favoritedHorrorItem)
        .then(() => history.push("/horrorFavorites"))
    }
// console.log(horrorItem.id)
    return (
        <section className="horrorItemCard">
            <Link to={`/horrorItems/detail/${horrorItem.id}`}><img src={horrorItem.img} alt="horror item" className="horror-image" /></Link>
                {/* <img src={horrorItem.img} alt="horror item" className="horror-image" /> */}
            <button type="button" className="save-btn" onClick={() => { createNewHorrorFavorite() }} >Save</button>
        </section>
    )
}