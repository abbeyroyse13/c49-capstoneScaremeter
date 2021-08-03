import React, { useContext, useEffect, useState } from "react"
import { HorrorItemContext } from "./horrorItemProvider"
import { HorrorItemCard } from "./horrorItemCard"
import "./horrorItem.css"

export const HorrorItemList = () => {
    const { horrorItems, getHorrorItems } = useContext(HorrorItemContext)
    // const [filterItems, setFilterItems] = useState([]);

    useEffect(() => {
        console.log("HorrorItemList: useEffect - getHorrorItems")
        getHorrorItems()
    }, [])

    // const handleSortClick = (event) => {
    //     event.preventDefault()
    //     setFilterItems(
    //         horrorItems.filter(item => {
    //             if (item.categoryId === parseInt(event.target.id)) {
    //                 return item
    //             }
    //         })
    //     )
    // }

    return (
        <>

            <h1>Welcome to ScareMeter! Select A Category OR Browse All Content Below!</h1>
            <button>Movies</button>
            <button>Shows</button>
            <button>Games</button>
            <button>Books</button>
            <div className="horrorItems">
                {console.log("HorrorItemList: Render", horrorItems)}
                <h2>Horror Items</h2>
                {
                    horrorItems?.map(horrorItem => {
                        { console.log("horrorItem", horrorItem) }
                        return <HorrorItemCard key={horrorItem.id} horrorItem={horrorItem} />
                    })
                }
            </div>
        </>
    )
}

// return (
//     <div className="horrorItems">
//         {console.log("HorrorItemList: Render", horrorItems)}
//         <button onClick={handleSortClick}>Movies</button>
//         <button onClick={handleSortClick}>Shows</button>
//         <button onClick={handleSortClick}>Games</button>
//         <button onClick={handleSortClick}>Books</button>
//         <h2>Horror Items</h2>
//         {
//             filterItems.map(horrorItem => {
//                 return <HorrorItemCard key={horrorItem.id} horrorItem={horrorItem} />
//             })
//         }
//     </div>
// )
// }