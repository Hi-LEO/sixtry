import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Img from './images/home_second.svg'
import Common from './Common'
function Home() {
  return (
    <>
      <Common
        name='Grow your business with'
        imgsrc={Img}
        visit="/service"
        btname="Get Start" />
    </>
  )
}

export default Home