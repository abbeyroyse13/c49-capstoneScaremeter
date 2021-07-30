import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <nav className="navbar">
            <ul className="scareLogo">
                <li className="navLogo">
                    <Link className="navButton" to="/horrorItems">Home</Link>
                </li>
                <li className="navLink">
                    <Link className="navButton" to="/Login">Logout</Link>
                </li>
                <li className="navLink">
                    <Link className="navButton" to="/horrorPosts">My Posts</Link>
                </li>
                <li className="navLink">
                    <Link className="navButton" to="/horrorList">My List</Link>
                </li>
            </ul>
        </nav>
    )
}