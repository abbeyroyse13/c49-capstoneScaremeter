import React, { useContext, useEffect, useState } from "react"
import { HorrorItemContext } from "./horrorItemProvider"
import { CategoryContext } from "../horrorCategories/horrorCategoryProvider"
import "./horrorItem.css"
import { useHistory } from "react-router-dom"

export const HorrorItemForm = () => {
    const { addHorrorItem } = useContext(HorrorItemContext)
    const { categorys, getCategories } = useContext(CategoryContext)

    const [horrorItem, setHorrorItem] = useState({
        title: "",
        releaseDate: "",
        description: "",
        categoryId: 0,
        img: ""
    });

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newHorrorItem = { ...horrorItem }
        newHorrorItem[event.target.id] = event.target.value
        setHorrorItem(newHorrorItem)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleClickSaveHorrorItem = (event) => {
        event.preventDefault()

        const categoryId = parseInt(horrorItem.categoryId)
// window alert?
        const newHorrorItem = {
            title: horrorItem.title,
            releaseDate: horrorItem.releaseDate,
            description: horrorItem.description,
            categoryId: categoryId,
            img: horrorItem.img
        }
        addHorrorItem(newHorrorItem)
            .then(() => history.push("/horrorItems"))
    }

    return (
        <form className="horrorForm">
            <h2 className="horrorForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Horror Title" value={horrorItem.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="releaseDate">Release Year:</label>
                    <input type="text" id="releaseDate" required autoFocus className="form-control" placeholder="Release Year" value={horrorItem.releaseDate} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" required autoFocus className="form-control" placeholder="Horror Description" value={horrorItem.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Select a Category:</label>
                    <select name="categoryId" id="categoryId" className="form-control" value={horrorItem.categoryId} onChange={handleControlledInputChange}>
                        <option value="0">Choose Category</option>
                        {categorys.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" required autoFocus className="form-control" placeholder="Horror Image" value={horrorItem.img} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveHorrorItem}>
                Save
            </button>
        </form>
    )
}