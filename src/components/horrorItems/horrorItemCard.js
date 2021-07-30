import React, { useContext } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { FavoritesContext } from "../horrorFavorites/horrorFavoritesProvider"

export const HorrorItemCard = ({ horrorItem }) => {
    const { addHorrorItemFavorite } = useContext(FavoritesContext)
    const {horrorItemId} = useParams() 
    // console.log(horrorItem)

    const history = useHistory()

    const createNewHorrorFavorite = () => {
        const favoritedHorrorItem = {
            horrorId: horrorItem.id,
            userId: parseInt(sessionStorage.getItem("scaremeter_user"))
        }

        addHorrorItemFavorite(favoritedHorrorItem)
        .then(() => history.push("/horrorList"))
    }
    return (
        <section className="horrorItemCard">
            <Link to={`/horrorItems/detail/${horrorItemId}`}></Link>
                {/* <img src={horrorItem.img} alt="horror item" className="horror-image" /> */}
            <button type="button" className="save-btn" onClick={() => { createNewHorrorFavorite() }} >Save</button>
        </section>
    )
}