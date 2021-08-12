import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link className="navbar-brand" to="/">ZipGrow</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="." id="dropdownId" data-toggle="dropdown">About</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to="/about-hydroponics">Hydroponics</Link>
                                <Link className="dropdown-item" to="/about-arduino">Arduino Setup</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="." id="dropdownId" data-toggle="dropdown">Grow</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to="/seed-library">Seed Library</Link>
                                <Link className="dropdown-item" to="/new-grow">New Grow</Link>
                                {/* <Link className="dropdown-item" to=".">Grow Progress</Link> */}
                                {/* <Link className="dropdown-item" to=".">Grow History</Link> */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}
