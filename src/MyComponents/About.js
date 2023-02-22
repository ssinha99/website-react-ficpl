import React from 'react'

const About = () => {
    let aboutStyle = {
        width: "auto",
        textAlign: "center",
        margin: "10px 100px" 
    }
    let bannerStyle = {
        textAlign: "center",
        margin: "10px 0px"  
    }
    let img_id = {
        maxWidth: "65%"
      }
    return (
    <>
        <div style={bannerStyle}>
            <img src="about-us.jpg" alt='aboutus-banner' style={img_id}></img>
        </div>
        <div style={aboutStyle}>
            <h1 style={{color:"#393E46"}}>About Us</h1>
            <br/>
            <p>
                Frutonic Infra Construction Private Limited was incorpoated on 29 September 2018 as a 
                non-govt company and is registered at registrar of Companies, Delhi.</p>
            <p>
            Its authorized share capital is Rs 1,000,000 and its paid up capital is Rs. 100,000. Frutonic Infra 
            Construction Private Limited's Annual General Meeting(AGM) was last held on 24 September 2019 and as per
            records from Ministry of Corporate Affairs(MCA), its balance sheet was lsat filed on 31 March 2019.
            </p>
            <p>
            Abhishek Sinha and Abhishikha Sinha are the Directors of Frutonic Infra Construction Private Limited
            and with their inspiring leadership and efficient management- we strongly believe in achieving our
            vision to excel and our mission to provide world-class service.
            </p>
            <p>
            Frutonic Infra Construction Private Limited's Corporate Identification Number is (CIN)
            U74999HR2018PTC076136 and its registration number is 76136.
            </p>
            <br/>
            <br/>
        </div>
        
    </>
  )
}

export default About
