import React from 'react'
import Cart from './Cart'
import Sdata from './Sdata'
function Service() {
  return (
    <>

      <div className="container-fluid mb-5  ">
        <h1 className='text-center'>Our Serice</h1>
        <div className="row mx-auto ">
          <div className="col-10 mx-auto">
            <div className="row g-3 ">
              {
                Sdata.map((val, ind) => {
                  return (
                    <Cart

                      Img={val.imgsrc}
                      title={val.title}
                      key={ind}
                    />
                  )
                })
              }


            </div>
          </div>

        </div >

      </div >
    </>
  )
}

export default Service