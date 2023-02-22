import React from 'react'
import {Link} from 'react-router-dom'
export default function Services() {
    let ServicesStyle = {
            display: "flex",
            flexWrap: "wrap",
            margin: "40px",
            alignItems: "center",
            justifyContent: "center"
    }
    let cardsStyle = {
        margin: "20px",
        height: "23rem"
    }
    
    return (
        <div style={ServicesStyle}>
            <div className="card" style={cardsStyle}>
                <img src="Electrical.jpg" className="card-img-top" alt="Electrical"/>
                <div className="card-body">
                    <h5 className="card-title">Electrical</h5>
                    <p className="card-text">Electrical and Wiring <br/>services</p>
                    <Link to="/Electrical" className="btn btn-info">Read More</Link>
                </div>
            </div>
            <div className="card" style={cardsStyle}>
                <img src="Construction.jpg" className="card-img-top" alt="Construction"/>
                <div className="card-body">
                    <h5 className="card-title">Construction</h5>
                    <p className="card-text"> Construction and Maintenance<br/> Services.</p>
                    <Link to="/Construction" className="btn btn-info">Read More</Link>
                </div>
            </div>
            <div className="card" style={cardsStyle}>
                <img src="mechanical.jpg" className="card-img-top" alt="Mechanical"/>
                <div className="card-body">
                    <h5 className="card-title">Mechanical</h5>
                    <p className="card-text"> Mechanical and Maintenance<br/> Services. </p>
                    <Link to="/Mechanical" className="btn btn-info">Read More</Link>
                </div>
            </div>
            <div className="card" style={cardsStyle}>
                <img src="hoist.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Hoist and Spare parts</h5>
                    <p className="card-text">Hoist and Spare parts <br/>services </p>
                    <Link to="/Hoist&Services" className="btn btn-info">Read More</Link>
                </div>
            </div>
        </div>
    )
}
