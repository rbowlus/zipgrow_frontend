import React from 'react'
import Arduino from '../imageMinify/Arduino.jpg'
import Code from '../imageMinify/Arduino_Sensor_Code.png'

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
                        <h4>The Hardware</h4>
                        <p>This is a simple setup to monitor water level, temperature and humidity. The Arduino Uno Wifi Rev 2 board is used to read in the sensor outputs, and then the data is sent to the application database via an open-source IoT communication protocol. The current hardware configuration is a prototype that can be expanded upon in the future with many additional types of sensors, as desired or needed.</p>
                    </div>


                </div>
                <div className="row mb-5">
                    <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 align-self-center">
                        <h4>The Code</h4>
                        <p>This is a snippet of the code used to log the water level, temperature and humidity. It is designed to take a reading from each sensor at predefined intervals, and then store them in variables on the Arduino, where they are then sent to a cloud database to be analyzed and displayed here. The Arduino platform makes adding additional sensors to the system very simple, and typically takes no more than a few minutes of coding to start reading new data.</p>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={Code}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
