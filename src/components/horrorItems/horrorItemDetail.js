import React, { useContext, useEffect, useState } from "react"
import { HorrorItemContext } from "./horrorItemProvider"
import { useHistory, useParams } from "react-router-dom"
import "./horrorItem.css"
import ProgressBar from "react-bootstrap/ProgressBar"

export const HorrorItemDetail = () => {
    const { getHorrorItemById, deleteHorrorItem } = useContext(HorrorItemContext)

    const [horrorItem, setHorrorItem] = useState({})
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

    // class ProgressBar extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             width: 0,
    //             score: 0
    //         };

    //         handleClick = (e) => {
    //             this.setState(state => {
    //                 if (state.width + 10 === 100) {
    //                     return { width: 0, score: state.score + 1 };
    //                 }
    //                 return { width: state.width + 10 };
    //             });
    //         }

            return (
                <section className="horrorDetail">
                    <h3 className="horrortitle"> {horrorItem.title} </h3>
                    <div className="releaseDate"> {horrorItem.releaseDate} </div>
                    <div className="description"> {horrorItem.description} </div>
                    <div className="horrorCategory"> {horrorItem.category} </div>
                    <img src={horrorItem.img} className="horrorImg" />
                    <ProgressBar min={25} max={100} now={50} animated variant="success" />
                    {/* <button onClick={(e) => { handleClick(e) }} type="btn" >SCAREME!</button> */}
                    <button className="delete-btn" onClick={handleDelete}>Delete</button>
                </section>
            )
        }
//     }
// }