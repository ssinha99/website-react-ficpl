import React from 'react'

export default function carousel() {
    let captionStyle = {
        color: "#F2E7D5",
        fontWeight: "500"
    }
    let img_id = {
        maxHeight: "600px"
    }
return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="banner-1.png" className="d-block w-100" style={img_id} alt="First"/>
            </div>
            <div className="carousel-item">
                <img src="corosel-img1.jpg" className="d-block w-100" style={img_id} alt="Second"/>
                <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                    <h3>Construction Services</h3>
                    <p>Industrial Heavy Infrastruction, Residential & Commercial buildings.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="banner-2.png" className="d-block w-100" style={img_id} alt="Thrid"/>
                <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                    <h3>Electrical Services</h3>
                    <p>Industrial Heavy Infrastruction, Residential & Commercial buildings.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}
