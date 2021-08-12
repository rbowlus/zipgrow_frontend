import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarNew = () => {
    return (
        <div>
            <nav expand="md" fixed="top" class="navbar navbar-expand-sm fixed-top py-3" id="navbar">
                <div class="container">
                    <Link to="/" class="navbar-brand text-uppercase font-weight-bold text-reset">ZipGrow Project</Link>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                    <div id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a className="nav-link nav-link text-uppercase font-weight-bold text-reset" href="." id="dropdownId" data-toggle="dropdown">About</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <Link className="dropdown-item text-reset" to="/about-hydroponics">Hydroponics Setup</Link>
                                    <Link className="dropdown-item text-reset" to="/about-arduino">Arduino Setup</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link text-uppercase font-weight-bold text-reset" href="." id="dropdownId" data-toggle="dropdown">Grow</a>
                                <div className="dropdown-menu text-reset" aria-labelledby="dropdownId">
                                    <Link className="dropdown-item" to="/seed-library">Seed Library</Link>
                                    <Link className="dropdown-item" to="/new-grow">New Grow</Link>
                                    <Link className="dropdown-item" to=".">Grow History</Link>
                                    {/* <Link className="dropdown-item" to=".">Grow Progress</Link> */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase font-weight-bold text-reset" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}
