import React from 'react'
import Common from './Common'
import Img from './images/about2.jpg'
import Second from './Common'

function About() {
  return (
    <>
      <Second
        name='Contect us to grow with '
        imgsrc={Img}
        visit="/contect"
        btname="Contect us" />
    </>

  )
}

export default About