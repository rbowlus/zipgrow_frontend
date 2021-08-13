import React, { useEffect, useState } from 'react'

export default class SeedLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    loadData = async () => {
        const response = await fetch('/api/listall');
        const data = await response.json();
        return data
    }

    componentDidMount() {
        this.loadData()
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    isLoaded: true,
                    error
                });
            })

    }

    render() {
        console.log("in the render");
        console.log(this.state);
        return (
            <div>
                <div className="font-weight-bold">
                    <h4>Check out the Seed Library!</h4>
                    <hr />
                </div>
                <div className="border border-dark rounded">
                    <div className="row mb-5">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 align-self-center">
                            {this.state.items.map((seed) => (
                                <img
                                    // src="https://via.placeholder.com/150"
                                    src={seed.url}
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt=""
                                />
                            ))}
                        </div>
                        <div className="col-lg-8 col-md-12 mb-4 mb-lg-0 align-self-center">
                            <ul className="list-unstyled">
                                {this.state.items.map((seed) => (
                                    <li>
                                        <p>
                                            <strong>Name:</strong> {seed.name}
                                        </p>
                                        <p>
                                            <strong>Variety:</strong> {seed.variety}
                                        </p>
                                        <p>
                                            <strong>Brand:</strong> {seed.brand}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


