import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
      let footerStyle = {
        position: "absolute",
        width: "100%",
        border: "1px"
      }
      let flexdiv = {
        display: "flex",
        flexWrap: "wrap",
      }
      let flexdivdiv = {
        width: "50%",
        padding: "10px"
      }
      let LinkStyle = {
        textDecoration: "None", color: "#6D9886"
      }
      let paraStyle={
        fontSize: "14px"
      }
      const span_id =  {
        color: "red"
      }
      return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>

          <div style={flexdiv} className='text-center'>
            <div style={flexdivdiv}>
            <Link to='/About' style={LinkStyle}><h4>About Us</h4></Link> <hr/>
              <p style={paraStyle}>
                <br/>
                <p>Frutonic Infra Construction Pvt. Ltd.</p>
                
                Regd. Office: G-5, A-1529. Green Field, Faridabad
                <br/>
                Haryana - 121003
              </p>
            </div>
            <div style={flexdivdiv}>
              <Link to="/Contact" style={LinkStyle}><h4>Contact Us</h4></Link> <hr/>
              <p style={paraStyle}> CIN: U74999 HR2018 PTC076136 <br/>
                  Tel: +91 22 67525656  <br/>
                  Fax: +91 22 67525858  <br/></p>
              <p> Send us a mail:       <br/>
              <Link to="#" style={LinkStyle}>infodesk@ frutonic.com</Link></p>
            </div>
          </div>

          <div>
            <p className='text-center'> &copy;
              Copyright {new Date().getFullYear()} | All rights reserved.<br/> 
              <span style={span_id}> Frutonic Infra Construction Pvt. Ltd.</span> 
              
            </p>
          </div>
        </footer>
    )
}
