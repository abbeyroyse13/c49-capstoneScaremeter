import React from "react" 
import { Route } from "react-router-dom"
import { Homepage } from "./Home/Home"

export const ApplicationViews = () => {
    return (

        <>

            <Route exact path="/">
                <Homepage />
            </Route>
        </>
    )
}