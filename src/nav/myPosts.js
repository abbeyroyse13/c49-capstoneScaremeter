import React, { useState, useEffect, useContext } from "react"
import { HorrorItemContext } from "../components/horrorItems/horrorItemProvider"
import { HorrorItemCard } from "../components/horrorItems/horrorItemCard";
import { useHistory } from "react-router";

export const MyPosts = () => {
    const { getHorrorPosts } = useContext(HorrorItemContext)
    const [horrorItems, setHorrorItems] = useState([]);
    const getCurrentUser = JSON.parse(localStorage.getItem("scaremeter_user"))

    const history = useHistory();

    const getAllHorrorPosts = () => {
        return getHorrorPosts(getCurrentUser).then(ItemsFromAPI => {
            setHorrorItems(ItemsFromAPI)
        });
    };

    useEffect(() => {
        getAllHorrorPosts();
    }, []);

    return (
        <>
            <div className="horrorPosts">
            <button type="button"
                className="add-btn"
                onClick={() => { history.push("/horrorItems/add") }}>
                +
            </button>
            <h1 className="title">Horror Item Posts</h1>
            <div>
                {horrorItems.map(horrorItemPost => {
                    return <HorrorItemCard key={horrorItemPost.id} horrorItem={horrorItemPost} />
                })}
            </div>
            </div>
        </>
    )
}