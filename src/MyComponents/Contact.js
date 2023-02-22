import React from 'react'

const Contact = () => {
  let divStyle = {
    textAlign: "center",
    color: "#393E46",
    margin: "50px"
  }
  return (
    <>
      <div style={divStyle}>
        <h2>Contact Team Frutonic</h2>
        <p>We appreciate your interest in Frutonic. Please select from the options below.</p>
        <h3>General Inquiries</h3>
        <p>(+91) 80761 06153</p>
        <p><span style={{color:"#212529"}}>Mail:</span> infodesk@frutonic.com</p>
        <p>
          Frutonic Infra Construction Pvt. Ltd.

          Regd. Office: G-5, A-1529. Green Field, Faridabad
          Haryana - 121003
        </p>
      </div>
    </>
  )
}

export default Contact
