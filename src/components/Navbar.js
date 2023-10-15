// basic boiler plate code can be written with the help of  rfc as component function
// We have put this code into Component folder so that App.js is not overloaded with code and we can use this code 
// elsewhere
// To acces this Component we just need to write tag for Component "<Navbar/>"
import React  from 'react'
import PropTypes from 'prop-types'

// props are basically the arguments of a function so that values associated with props can be updated dynamically 
// with syntax of props.associatedValue 
export default function Navbar(props) {
  return (
    // This code is copied from bootstrap's Navbar code snippet
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* In the below line we have used props.title to update value of title dynamically */}
        <a className="navbar-brand" href="/">{props.title}</a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">

              {/* In the below line we have used props.title to update value of title dynamically */}
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form>
          {/* Here we are using default switch checkbox to change the state of application from 
          light to dark and vice versa 
          We have provided with toggeMode property of props with some conditions*/}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Here we are declaring the type ofprops we are using in the above code
// For example: title prop is string type and can't be empty
//              aboutText is string type and can't be empty
// If any other input other than provided type is passed then it will give error 
Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired}

// Here we are declaring default values of props, in case if value is not provided then code will use defaut values
Navbar.defaultProps = {
    title : "Set title here",
    aboutText : "About"
};