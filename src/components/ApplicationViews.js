import React from "react"
import { Route } from "react-router-dom"
// import { Homepage } from "./Home/Home"
import { HorrorItemList } from "./horrorItems/horrorItemList"
import { HorrorItemProvider } from "./horrorItems/horrorItemProvider"
import { HorrorItemDetail } from "./horrorItems/horrorItemDetail"
import { MyPosts } from "../nav/myPosts"
import { HorrorItemForm } from "./horrorItems/horrorItemForm"
import { CategoryProvider } from "./horrorCategories/horrorCategoryProvider"
import { FavoritesProvider } from "../components/horrorFavorites/horrorFavoritesProvider"
import { MyList } from "../components/horrorFavorites/myList"
import { UserProvider } from "./userData/userDataProvider"

export const ApplicationViews = () => {
    return (

        <>
        <UserProvider>
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

                    <Route exact path="/horrorFavorites">
                        <MyList />
                    </Route>
                </FavoritesProvider>
            </HorrorItemProvider>
            </UserProvider>
        </>
    )
}