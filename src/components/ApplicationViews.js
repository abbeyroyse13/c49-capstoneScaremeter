import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./Home/Home"
import { HorrorItemList } from "./horrorItems/horrorItemList"
import { HorrorItemProvider } from "./horrorItems/horrorItemProvider"

export const ApplicationViews = () => {
    return (

        <>

            <Route exact path="/">
                <Homepage />
            </Route>

            <HorrorItemProvider>
                <Route exact path="/">
                    <HorrorItemList />
                </Route>
            </HorrorItemProvider>
        </>
    )
}