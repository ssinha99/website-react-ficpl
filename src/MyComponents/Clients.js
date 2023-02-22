import React from 'react'

export default function Clients() {
    let heading = {
        paddingTop: "15px",
        textAlign: "center",
        color: "#393E46"
    }
    let divstyle = {
        display: "flex",
        flexWrap: "wrap",
        margin: "20px 0px",
        alignItems: "center",
        justifyContent: "center"
    }
    let logoStyle ={
        padding: "0px 20px",
        margin: "1% 5% 5% 1%",
        alignItems: "center",
        justifyContent: "center",
    }
    let imgStyle = {
        maxWidth : "110px"
    }
    return (
        <div style={heading}>
            <h1>Our Clients</h1>
            <div style={divstyle}>
                <div style={logoStyle}>
                    <img src='client-logo/L&T-logo.png' style={imgStyle} alt='L&T-logo' ></img>
                </div>
                <div style={logoStyle}>
                    <img src='client-logo/afcons-logo.png' style={imgStyle} alt='afcons-logo'></img>
                </div>
                <div style={logoStyle}>
                    <img src='client-logo/jw-logo.png' style={imgStyle} alt='jw-logo'></img>
                </div>
                <div style={logoStyle}>
                    <img src='client-logo/safelift-logo.png' style={imgStyle} alt='safelift-logo' ></img>
                </div>
                <div style={logoStyle}>
                    <img src='client-logo/tata-logo.png' style={imgStyle} alt='tata-logo'></img>
                </div>
                <div style={logoStyle}>
                    <img src='client-logo/taj-logo.png' style={imgStyle} alt='taj-logo' ></img>
                </div>
                <div style={logoStyle}>
                    <img src='client-logo/kukbo-logo.png' style={imgStyle} alt='kukbo-logo'></img>
                </div>
            </div>
        </div>
    )
}
