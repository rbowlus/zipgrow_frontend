import React from 'react'

export const NewGrow = () => {
    return (
        <div>
            <div className="font-weight-bold">
                <h4>Create a New Grow</h4>
                <hr />
            </div>
            <div className="container">
                <form onSubmit="">
                    <div className="row">
                        <label className="h6">Name Your New Grow</label>
                        <input type="text" className="form-control" name="growName" placeholder="ie Kale(3/7)" />
                    </div>
                    <div className="row mt-3 mb-3">
                        <label className="mr-3">Which tower did you plant? </label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="1" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">East</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="2" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">West</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Plug #1</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">Bok Choy</option>
                                <option value="2">Kale</option>
                                <option value="3">Spinach</option>
                            </select>
                        </div>
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Variety</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">Green Shanghai</option>
                                <option value="2">Dwarf Blue Curled Vates</option>
                                <option value="3">Lacinato</option>
                                <option value="4">Palco Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Plug #2</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">Bok Choy</option>
                                <option value="2">Kale</option>
                                <option value="3">Spinach</option>
                            </select>
                        </div>
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Variety</label>
                            <select className="custom-select form">
                            <option selected>Choose One</option>
                            <option value="1">Green Shanghai</option>
                                <option value="2">Dwarf Blue Curled Vates</option>
                                <option value="3">Lacinato</option>
                                <option value="4">Palco Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Plug #3</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">Bok Choy</option>
                                <option value="2">Kale</option>
                                <option value="3">Spinach</option>
                            </select>
                        </div>
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Variety</label>
                            <select className="custom-select form">
                            <option selected>Choose One</option>
                                <option value="1">Green Shanghai</option>
                                <option value="2">Dwarf Blue Curled Vates</option>
                                <option value="3">Lacinato</option>
                                <option value="14">Palco Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Plug #4</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">Bok Choy</option>
                                <option value="2">Kale</option>
                                <option value="3">Spinach</option>
                            </select>
                        </div>
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Variety</label>
                            <select className="custom-select form">
                                <option value="1">Green Shanghai</option>
                                <option value="2">Dwarf Blue Curled Vates</option>
                                <option value="3">Lacinato</option>
                                <option value="4">Palco Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Plug #5</label>
                            <select className="custom-select form">
                                <option selected>Choose One</option>
                                <option value="1">Bok Choy</option>
                                <option value="2">Kale</option>
                                <option value="3">Spinach</option>
                            </select>
                        </div>
                        <div className="col-md-3 form-inline mb-3">
                            <label className="mr-3">Variety</label>
                            <select className="custom-select form">
                            <option selected>Choose One</option>
                                <option value="1">Green Shanghai</option>
                                <option value="2">Dwarf Blue Curled Vates</option>
                                <option value="3">Lacinato</option>
                                <option value="4">Palco Hybrid</option>
                            </select>
                        </div>
                    </div>



                    <div className="col-12 form-group mx-auto mb-5">
                        <input type="submit" className="btn btn-info" value="Submit" />
                    </div>

                </form>
            </div>

        </div >
    )
}
