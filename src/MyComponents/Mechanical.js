import React from 'react'

const Mechanical = () => {
  let bannerStyle = {
    margin: "0px 0px",
    textAlign: "center"
  }
  let mechStyle = {
    display: "flex",
    // flexWrap: "wrap",
    // textAlign: "center",
    margin: "50px 50px",
    // background: "green",
    fontSize: "20px"
  }
  let innerDiv = {
    padding: "10px 40px"
  }
  let img_id = {
    maxWidth: "100%"
  }
  return (
    <>
      <div style={bannerStyle}>
        <video autoPlay style={img_id}>
            <source src="mechanical-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div style={mechStyle}>
        {/* <div style={innerDiv}> 
          <img src='mechImage.jpg' alt='cranes' style={{maxWidth: "100%"}}/>
        </div> */}
        <div style={innerDiv}>
          <p>
            We provide Sales and Services of Cranes, Chain Hoists, Installation of Spare Parts and 
            other related services with out best professional team.
          </p>
          <p>
            We are also authorized representative with Safe life (Cranes and Components) in Northern region
            for the sales ans services of CMCO products in India.
          </p>
        </div>
      </div>
    </>
  )
}

export default Mechanical
