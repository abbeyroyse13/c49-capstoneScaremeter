import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ScareMeter } from "./components/ScareMeter.js"
import reportWebVitals from './reportWebVitals';
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ScareMeter />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
reportWebVitals();