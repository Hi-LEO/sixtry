import React from 'react'
import { NavLink } from 'react-router-dom'
function Common(props) {
  return (
    <>
      <div className="main">

        <section id='header' className=''>
          <div className="container-flud nav-bg">
            <div className="row ">
              <div className="col-10 mx-auto ">
                <div className="row ">


                  <div className="col-md-5 pt-md-5  order-1 d-flex flex-column justify-content-center ">
                    <h1>{props.name}<strong className='text-primary'>c&_K</strong></h1>
                    <h4 className='my-3'>We are team of talented developer making website</h4>
                    <div className="mt-3">
                      <NavLink to={props.visit} className='btn btn-primary w-25'>{props.btname}</NavLink>
                    </div>
                  </div>


                  <div className="col gy-3 order-lg-2  " >
                    <img src={props.imgsrc} alt="homeimage" className='homeimage' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Common