import React from 'react'

const Construction = () => {
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
            <source src='Construction-video.mp4'></source>
          </video>
        </div>
        <div style={mechStyle}>
          <p> We provide Sales and Services of Cranes, Chain Hoists, Installation of Spare Parts and 
              other related services with out best professional team.
          </p>
          <p>
            We are also authorized representative with Safe life (Cranes and Components) in Northern region
            for the sales ans services of CMCO products in India.
          </p>
        </div>
      </>
    )
}

export default Construction