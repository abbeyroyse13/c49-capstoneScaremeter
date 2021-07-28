import React from "react"
import { useHistory } from "react-router-dom"

export const MyPosts = () => {
    const history = useHistory()

    return (
        <button type="button"
            className="add-btn"
            onClick={() => { history.push("/horrorItems/add") }}>
            +
        </button>
    )
}