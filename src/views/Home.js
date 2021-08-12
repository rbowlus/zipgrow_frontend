import React from 'react'
import { Link } from 'react-router-dom'
import Kale1 from './image/Kale1.jpg'
import Kale2 from './image/Kale2.jpg'
import Kale3 from './image/Kale3.jpg'
import Kale4 from './image/Kale4.jpg'
import Kale5 from './image/Kale5.jpg'
import Kale6 from './image/Kale6.jpg'
import ZipGrow from './image/ZipGrow.jpg'


export const Home = () => {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src={Kale1}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src={Kale2}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={Kale3}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src={Kale4}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={Kale5}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />

                    <img
                        src={Kale6}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>
            </div>            
            <div className="row mb-5">
                <div className="col-lg-7 mb-4 mb-lg-0 text-left align-self-center">
                    <h3>Basics of Hydroponics</h3>
                    <p>A hydroponics system is a way to grow plants using formulated, nutrient-rich water instead of soil. In hydroponics, the plant is suspended with a net pot which allows for the plant to grow above the water, while the roots go down through the netting and into the water solution.</p>
                    <br />
                    <Link to="/about-hydroponics">Learn about our system!</Link>
                </div>
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <img
                        src={ZipGrow}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <img
                        src={"https://via.placeholder.com/150"}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                </div>
                <div className="col-lg-7 mb-4 mb-lg-0 text-right align-self-center">
                    <h3>What is an Arduino?</h3>
                    <p>Arduino is an open-source hardware and software company, project and user community that designs and manufactures single-board microcontrollers and microcontroller kits for building digital devices.</p>
                    <br />
                    <Link to="/about-arduino">Learn about our system!</Link>
                </div>
            </div>
        </div>

    )
}
