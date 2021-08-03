import React from "react"
import { Route } from "react-router-dom"
// import { Homepage } from "./Home/Home"
import { HorrorItemList } from "./horrorItems/horrorItemList"
import { HorrorItemProvider } from "./horrorItems/horrorItemProvider"
import { HorrorItemDetail } from "./horrorItems/horrorItemDetail"
import { MyPosts } from "../nav/myPosts"
import { HorrorItemForm } from "./horrorItems/horrorItemForm"
import { CategoryProvider } from "./horrorCategories/horrorCategoryProvider"
import { FavoritesProvider } from "./horrorFavorites/horrorFavoritesProvider"
import { MyList } from "../nav/myList"

export const ApplicationViews = () => {
    return (

        <>

            <HorrorItemProvider>
                <FavoritesProvider>
                    <Route exact path="/horrorPosts">
                        <MyPosts />
                    </Route>

                    <Route exact path="/horrorItems">
                        {/* <Homepage /> */}
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

                    <Route exact path="/horrorList">
                        <MyList />
                    </Route>
                </FavoritesProvider>
            </HorrorItemProvider>
        </>
    )
}