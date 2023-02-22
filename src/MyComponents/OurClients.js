import React from 'react'

const OurClients = () => {
  let logoStyle = {
    display: "flex",
    flexWrap: "wrap",
    // background: "yellow",
    padding: "0px 30px",
    alignItems: "center",
    justifyContent: "center"
  }
  let InnerLogoDiv = {
    // background: "red",
    padding: "30px 10px",
    margin: "1% 5% 5% 1%",
    alignItems: "center",
    justifyContent: "center"
  }
  let mechStyle = {
    width: "auto",
    textAlign: "center",
    margin: "50px 100px" 
  }
  let imgStyle = {
    maxWidth: "160px"
  }
  let headerDiv = {
    textAlign: "center",
    color: "#393E46",
  }
  return (
    <div>
      <div style={mechStyle}>
        <p>
          Since Frutonic Infra Construction’s formation in 2018, we have been working with some of the most prestigious companies, 
          construction facilities, mechanical facilities, and government departments across the globe.
        </p>
        <p>
          We believe in not just providing a service to our clients but also forming a relationship based 
          on understanding our client’s needs and then developing solutions based on those needs.
        </p>
        <p>
          Keeping close communication with our clients ensures that we continue to monitor and address any situations 
          that might arise, strengthening the relationship and the success of all our clients across every industry.
        </p>
      </div>
      <div style={headerDiv}>
        <h2>Trusted and loved by</h2>
      </div>
      <div style={logoStyle}>
        <div style={InnerLogoDiv}>
          <img src='/client-logo/L&T-logo.png' style={imgStyle} alt='taj logo'></img>
        </div>
        <div style={InnerLogoDiv}>
          <img src='/client-logo/afcons-logo.png' style={imgStyle} alt='taj logo'></img>
        </div>
        <div style={InnerLogoDiv}>
          <img src='/client-logo/jw-logo.png' style={imgStyle} alt='taj logo'></img>
        </div>
        <div style={InnerLogoDiv}>
          <img src='/client-logo/safelift-logo.png' style={imgStyle} alt='taj logo'></img>
        </div>
        <div style={InnerLogoDiv}>
          <img src='/client-logo/taj-logo.png' style={imgStyle} alt='taj logo'></img>
        </div>
        <div style={InnerLogoDiv}>
          <img src='/client-logo/kukbo-logo.png' style={imgStyle} alt='taj logo'></img>
        </div>
      </div>
    </div>
  )
}

export default OurClients
