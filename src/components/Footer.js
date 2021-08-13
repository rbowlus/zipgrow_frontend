import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="text-center text-md-start bg-light text-muted">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!-- Section: Form --> */}
                <section className="">
                    <form action="">
                        {/* <!--Grid row--> */}
                        <div className="row d-flex justify-content-center">
                            {/* <!--Grid column--> */}
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up to learn more!</strong>
                                </p>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-md-5 col-12">
                                {/* <!-- Email input --> */}
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" className="form-control" />
                                    <label className="form-label" for="form5Example2">Email address</label>
                                </div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-auto">
                                {/* <!-- Submit button --> */}
                                <button type="submit" className="btn btn-outline-dark mb-4">
                                    Subscribe
                                </button>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </form>
                </section>
                {/* <!-- Section: Form --> */}

                {/* <!-- Section: Links --> */}
                <section className="">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-md-3 col-lg-3 col-xl-3 offset-3 text-justify">
                            <h5 className="text-uppercase">About</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="/about-hydroponics" className="text-grey">About Hydroponics</Link>
                                </li>
                                <li>
                                    <Link to="/about-arduino" className="text-grey">About Arduino</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column-->  */}

                        {/* <!--Grid column--> */}
                        <div className="col-md-3 col-lg-3 col-xl-3 offset-3 text-justify">
                            <h5 className="text-uppercase">Grow</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="/seed-library" className="text-grey">Seed Library</Link>
                                </li>
                                <li>
                                    <Link to="/seed-library" className="text-grey">New Grow</Link>
                                </li>

                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{ background: 'white' }}>
                © 2021 Copyright:
                <a className="text-success" href="https://mdbootstrap.com/"> ZipGrow Project</a>
            </div>
            {/* <!-- Copyright --> */}
        </div>
    )
}
