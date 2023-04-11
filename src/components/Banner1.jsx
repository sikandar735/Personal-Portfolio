import React from 'react'
import mypic from '../assets/img/01.jpg'
import myresume from '../assets/pdf/sakandar-ahayat-frontend-developer.pdf'
// sakandar-ahayat-frontend-developer.pdf

export default function Banner1() {
  return (
    <>
      {/* Home Banner */}
      <section
        id="home"
        className="home-banner-01 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mypic})` }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-9">
              <div className="ht-box">
                <div className="ht-text p-25px-t">
                  <h1 className="white-color m-10px-b">Sakandar Hayat</h1>
                  <h2 className="white-color m-0px">
                    I Am a Passionate Developer
                  </h2>
                  <div className="p-30px-t">
                    {/* <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
                      <Button className={classes.navLink}>My Example Doc</Button>
                    </a> */}
                    <a className="m-btn m-btn-radius m-btn-t-white" href={myresume} ownload="sakandar-ahayat-frontend-developer" target='_blank'>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Banner */}
    </>
  );
}
