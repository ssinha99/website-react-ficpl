import React from 'react'

const Electrical = () => {
  let bannerStyle = {
    margin: "0px 0px",
    textAlign: "center"
  }
  let mechStyle = {
    width: "auto",
    textAlign: "center",
    margin: "50px 100px" 
  }
  let img_id = {
    maxWidth: "100%"
  }
  return (
    <>
      <div style={bannerStyle}>
        <video style={img_id} autoPlay>
          <source src='Electrical-video.mp4'></source>
        </video>
      </div>
      <div style={mechStyle}>
        <p> We are engaged in providing Eletrical services at the sites. We provide services in Hospitals,
            Offices, Residential Buildings for wiring, MCB Works, AC Chiller Installation & reparing and
            all other types of related services.
        </p>
        <p>
          We are also authorized representative with Safe life (Cranes and Components) in Northern region
          for the sales ans services of CMCO products in India.
        </p>
      </div>
    </>
  )
}

export default Electrical
