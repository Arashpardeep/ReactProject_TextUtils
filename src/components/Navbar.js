import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.homeText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className={`me-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleBlueDarkMode} role="switch" id="flexSwitchCheckDefault1" style={{backgroundColor: (props.mode === 'dark' && props.theme === 'primary') ? "black" : "white"}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Dark Mode</label>
          </div>
          <div className={`me-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleGreenDarkMode} role="switch" id="flexSwitchCheckDefault2" style={{backgroundColor: (props.mode === 'dark' && props.theme === 'success') ? "black" : "white"}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Dark Mode</label>
          </div>
          <div className={`me-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleRedDarkMode} role="switch" id="flexSwitchCheckDefault3" style={{backgroundColor: (props.mode === 'dark' && props.theme === 'danger') ? "black" : "white"}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    homeText: 'Homepage text here',
    aboutText: 'About Text here'
}
