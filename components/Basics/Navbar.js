import React from 'react'

const Navbar = () => {
  return (
    <>

            <div className="container">

                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    defaultChecked="on"/>
                <label className="btn btn-outline-success" htmlFor="btnradio1"> Home </label>

                <input

                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                    
                />
                <label id='rid'  className="btn btn-outline-success" htmlFor="btnradio3"> Resource </label>
                </div>
            </div>

    </>
  )
}

export default Navbar