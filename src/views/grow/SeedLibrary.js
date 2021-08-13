import React, { useEffect, useState } from 'react'

export const SeedLibrary = () => { 

    return (
        <div>
            <div className="font-weight-bold">
                <h4>Check out the Seed Library!</h4>
                <hr />
            </div>
            <div className="border border-dark rounded">
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 align-self-center">
                    
                        <img
                            src="https://via.placeholder.com/150"
                            // src={url}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-8 col-md-12 mb-4 mb-lg-0 align-self-center">
                        <ul className="list-unstyled">
                        {/* {seedLibrary.map((seed) => ( */}
                                {/* <li>
                                    <p>
                                        <strong>Name:</strong> {plantName}
                                    </p>
                                    <p>
                                        <strong>Variety:</strong> {variety}
                                    </p>
                                    <p>
                                        <strong>Brand:</strong> {brand}
                                    </p>
                                </li> */}
                            {/* ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
