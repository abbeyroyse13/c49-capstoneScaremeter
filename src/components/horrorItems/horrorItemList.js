import React, { useContext, useEffect } from "react"
import { HorrorItemContext } from "./horrorItemProvider"
import { HorrorItemCard } from "./horrorItemCard"
import "./horrorItem.css"

export const HorrorItemList = () => {
    const { horrorItems, getHorrorItems } = useContext(HorrorItemContext)

    useEffect(() => {
        console.log("HorrorItemList: useEffect - getHorrorItems")
        getHorrorItems()
    }, [])

    return (
        <div className="horrorItems">
            {console.log("HorrorItemList: Render", horrorItems)}
            <h2>Horror Items</h2>
            {
                horrorItems.map(horrorItem => {
                    return <HorrorItemCard key={horrorItem.id} horrorItem={horrorItem} />
                })
            }
        </div>
    )
}