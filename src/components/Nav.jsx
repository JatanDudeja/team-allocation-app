import React from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/GroupedTeamMember">Teams</Link>
                </li>
            </ul>
        </nav>
    )
}