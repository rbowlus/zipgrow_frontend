import React from 'react'

export const NewGrow = () => {
    return (
        <div>
            <div className="font-weight-bold">
                <h4>Create a New Grow</h4>
                <hr />
            </div>
            <form>
                <div className="row">
                    <div className="col-auto">
                        <label>Type</label>
                        <select className="custom-select">
                            <option selected>Choose One</option>
                            <option value="1">Kale</option>
                            <option value="2">Kale</option>
                            <option value="2">Spinach</option>
                            <option value="2">Bok Choy</option>
                        </select>
                    
                    </div>
                </div>
            </form>
        </div>
    )
}
