import React from 'react'
import { SeedLibrary } from './SeedLibrary'

export const NewGrow = () => {
    return (
        <div>
            <div className="font-weight-bold">
                <h4>Create a New Grow</h4>
                <hr />
            </div>
            
            <div className="container">
                <form onSubmit="">
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <label>Name the new Grow!</label>
                            <input type="text" className="form-control" name="growName" placeholder="ie Kale(3/7)" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                        <label>Which tower did you plant? </label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="1" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">East</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="2" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">West</label>
                            </div>
                        </div>
                        {/* <div className="col-8 form-group mx-auto form">
                        <label>Number of Plugs Planted:</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div> */}
                        <div className="col-8 form-group mx-auto form">
                        <label>Plug #1</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Variety</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Plug #2</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Variety</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Plug #3</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Variety</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>

                        <div className="col-8 form-group mx-auto form">
                        <label>Plug #4</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Variety</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Plug #5</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        <div className="col-8 form-group mx-auto form">
                        <label>Variety</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">1</option>
                                <option value={SeedLibrary.name}>Kale</option>
                            </select>
                        </div>
                        
                        <div className="col-8 form-group mx-auto mb-5">
                            <input type="submit" className="btn btn-info" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

