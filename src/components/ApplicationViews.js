import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from "./Home/Home"
import { HorrorItemList } from "./horrorItems/horrorItemList"
import { HorrorItemProvider } from "./horrorItems/horrorItemProvider"
import { HorrorItemDetail } from "./horrorItems/horrorItemDetail"
import { MyPosts } from "../nav/myPosts"
import { HorrorItemForm } from "./horrorItems/horrorItemForm"
import { CategoryProvider } from "./horrorCategories/horrorCategoryProvider"

export const ApplicationViews = () => {
    return (

        <>

            <Route exact path="/">
                <Homepage />
            </Route>
            
            <HorrorItemProvider>
                <Route exact path="/horrorPosts">
                    <MyPosts />
                </Route>

                <Route exact path="/">
                    <HorrorItemList />
                </Route>

                <Route exact path="/horrorItems/detail/:horrorItemId(\d+)">
                    <HorrorItemDetail />
                </Route>

                <CategoryProvider>
                    <Route exact path="/horrorItems/add">
                        <HorrorItemForm />
                    </Route>
                </CategoryProvider>
            </HorrorItemProvider>
        </>
    )
}