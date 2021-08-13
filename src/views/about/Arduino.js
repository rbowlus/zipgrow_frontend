import React from 'react'
import ArduinoInWater from '../imageMinify/ArduinoInWater.jpg'
import Arduino from '../imageMinify/Arduino.jpg'

export const AboutArduino = () => {
    return (
        <div>
            <div className="font-weight-bold">
                <h4>Arduino Setup</h4>
                <hr />
            </div>
            <div>
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={Arduino}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-8 col-md-12 mb-4 mb-lg-0 align-self-center">
                        <h4>The Machinery</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>


                </div>
                <div className="row mb-5">
                    <div className="col-lg-8 col-md-12 mb-4 mb-lg-0">
                        <h4>The Code</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="https://via.placeholder.com/150"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
