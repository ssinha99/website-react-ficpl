import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  let titleStyle = {
    margin: "0px -10px"
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{background: "#F2E7D5"}}>
        <div className="container-fluid">
        <Link to="/" title='Home'>
            <img src="logo192.png" alt='logo' style={{maxWidth: "80px"}}></img>
        </Link>
        <div style={titleStyle}>
          <Link to="/" title='Home'>
          <img src='logo-text.png' style={{maxWidth: "220px"}} alt="logo"></img>
          </Link>
        </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Contact'>Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Mechanical">Mechanical</Link></li>
                  <li><Link className="dropdown-item" to="/Electrical">Electrical</Link></li>
                  <li><Link className="dropdown-item" to="/Construction">Construction</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OurClients">Our Clients</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/About'>About us</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </>
  )
}
