import React from 'react'
import { Link } from 'react-router-dom'

export const Footer2 = () => {
    return (
        
        <div classNameName="text-center text-md-start text-muted fixed-bottom" style={{ background: 'pink' }}>
            <div classNameName="row">
                <div classNameName="col-md-4 mt-2 font-weight-bold">
                    <h2>Let's Keep In Touch</h2>
                    <p>If you have comments or questions, let us know!</p>
                </div>
                <div classNameName="row">
                    <form action="">
                        <div classNameName="d-flex flex-row">
                            <input classNameName="form-outline form-white" type="email" id="form5Example2" classNameName="form-control" />
                            <label classNameName="form-label" for="form5Example2">Email address</label>
                        </div>
                    </form>
                    <div classNameName="col-auto">
                        <button type="submit" classNameName="btn btn-outline-dark mb-4">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div classNameName="col-md-4 text-center text-success font-weight-bold mt-4">
                    <h3>Growing Hydroponically</h3>
                </div>
                <div classNameName="col-md-3 text-md-right mr-1">
                    <h5 classNameName="text-uppercase font-weight-bold mt-2">About</h5>
                    <ul classNameName="list-unstyled text-dark mb-0">
                        <li classNameName="text-reset">
                            <Link to="/about-hydroponics">Hydroponics</Link>
                        </li>
                        <li cclassNameName="text-reset">
                            <Link to="/about-arduino">Arduino</Link>
                        </li>
                    </ul>
                    <h5 classNameName="text-uppercase font-weight-bold mt-2">Grow</h5>
                    <ul classNameName="list-unstyled text-dark mb-0">
                        <li classNameName="text-reset">
                            <Link to="/seed-library">Seed Library</Link>
                        </li>
                        <li classNameName="text-reset">
                            <Link to="/new-grow">New Grow</Link>
                        </li>
                        <li classNameName="text-reset">
                            <Link to="/grow-history">Grow History</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div classNameName="row">
                <div classNameName="col-md-4">
                    <small>
                        © 2021 Copyright: ZipGrow Project
                    </small>
                </div>
                <div classNameName="col-md-4">
                    <small id="back-to-top">
                        <Link to="#">Back to Top</Link>
                    </small>
                </div>
            </div>
        </div>
    )
}
