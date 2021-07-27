import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./Home/Home"
import { HorrorItemCard } from "./horrorItems/horrorItemCard"
import { HorrorItemList } from "./horrorItems/horrorItemList"
import { HorrorItemProvider } from "./horrorItems/horrorItemProvider"

export const ApplicationViews = () => {
    return (

        <>

            <Route exact path="/">
                <Homepage />
            </Route>

            <HorrorItemProvider>
                <Route exact path="/horrorList">
                    <HorrorItemList />
                </Route>

                <Route exact path="/">
                    <HorrorItemCard />
                </Route>
            </HorrorItemProvider>
        </>
    )
}