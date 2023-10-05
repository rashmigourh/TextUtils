//step1: rfc
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  let myStyle={
    backgroundColor: props.mode==='light'?'dark':'#435B66',
    borderBottom: '2px solid',
    borderColor: props.mode==='dark'?'white':'transparent'
  }
  return (
    <nav style={myStyle} className={`navbar navbar-expand-lg navbar bg-${props.mode==='light'?'dark':'#435B66'}`}>
      <div className="container-fluid">
        <h4 className='text-white m-2'>{props.title}</h4>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=" navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/textEdit">Text Edit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">{props.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">{props.contact}</Link>
            </li>
          </ul>


          <div className="form-check form-switch text-white">
            <input className={`form-check-input bg-${props.mode}`} type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.handleTxt}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

//types of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'set title',
  about: 'set about here',
  contact: 'set contact us'
}