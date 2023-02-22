import React from 'react'
import Carousel from "./Carousel";
import Services from "./Services";
import Clients from "./Clients";

const home = () => {
  return (
    <div>
      {<Carousel/>}
      {<Services/>}
      {<Clients/>}
    </div>
  )
}

export default home
