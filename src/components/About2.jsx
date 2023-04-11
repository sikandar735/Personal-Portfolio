import React from 'react'
import mainpic from '../assets/img/sakandar-hayat.jpg'
import aboutpic from '../assets/img/02.jpg'

export default function About2() {
    return (
        <>
            {/* about us */}
            <section id="about" className="section white-bg">
                <div className="container">
                    <div className="row justify-content-center sm-m-40px-b m-60px-b">
                        <div className="col-md-12 col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="dark-color">About Me</h2>
                                <p>
                                    Passionate About Frontend Development and Delivering Exceptional Results
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="dark-bg p-40px sm-p-20px rounded box-shadow-lg">
                                <div className="row">
                                    <div className="col-md-4 col-lg-3 sm-m-15px-tb">
                                        <img src={aboutpic} title="" alt="" />
                                    </div>
                                    <div className="col-md-8 col-lg-9 sm-m-15px-tb">
                                        <p className="white-color-light lead">
                                            I'm Sakandar Hayat, I'm a <span className="theme-color">UI, UX, &amp; and Front-End Web Developer</span> based in Pakistan.
                                        </p>
                                        <p className="white-color-light lead m-0px">
                                            Experienced frontend developer with 2 years of experience creating engaging and user-friendly interfaces. Proficient in the latest frontend development technologies, I specialize in designing seamless and responsive websites that exceed my clients' expectations. Let's work together to create something amazing for your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about us */}
        </>

    )
}
