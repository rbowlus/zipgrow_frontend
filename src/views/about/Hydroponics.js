import React from 'react'
import ReactYoutube from './ReactYoutube'
import Pump from '../imageMinify/Pump.jpg'
import DripNozzle from '../imageMinify//DripNozzle.jpg'
import GrowMedium from '../image/GrowMedium.jpg'

export const AboutHydroponics = () => {
    return (
        <div>
            <div className="font-weight-bold">
                <h4>The ZipGrow System</h4>
                <hr />
            </div>
            <div className="mb-5">
                <center><ReactYoutube videoId='9fK2uhDEnP0' /></center>
            </div>
            <div className="row mb-5">
                
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 align-self-center">
                    <img
                        src={Pump}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                    <div className="text-center" >
                        <h5>Water Pump</h5>
                        <p>Pumps water up hose</p>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={DripNozzle}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                    <div className="text-center" >
                        <h5>Drip Nozzle</h5>
                        <p>Water is gravity fed through nozzles</p>
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={GrowMedium}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    />
                    <div className="text-center" >
                        <h5>Grow Medium</h5>
                        <p>Grow medium holds the seed pods in place</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
