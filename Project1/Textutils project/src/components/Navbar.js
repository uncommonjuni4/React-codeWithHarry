import React from 'react'
import PropTypes from "prop-types"
// import { a } from 'react-router-dom'
// import { a } from 'react-router-dom'

export default function Navbar({ title, about, mode, changeMode,Custombtn,Textform }) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode.color === "dark" ? "dark" : "light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: mode.color === "dark" ? "white" : "black" }}>{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" href="#" style={{ color: mode.color === "dark" ? "white" : "black" }}>{Textform}</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#" style={{ color: mode.color === "dark" ? "white" : "black" }}>{about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#" style={{ color: mode.color === "dark" ? "white" : "black" }}>{Custombtn}</a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={changeMode} role="switch" id="switchCheckDefault" />
          <label className="form-check-label" htmlFor="switchCheckDefault"  style={{ color: mode.color === "dark" ? "white" : "black" }}>
            {mode.text}
          </label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  mode: PropTypes.object,
  changeMode: PropTypes.func
}

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About"
}