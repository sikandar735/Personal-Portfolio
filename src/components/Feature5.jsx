import React from 'react'
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'
import icon4 from '../assets/icons/icon4.png'
import icon5 from '../assets/icons/icon5.png'
import icon6 from '../assets/icons/icon6.png'

export default function Feature5() {
    return (
        <>
            {/* Feature Box */}
            <section id="services" className="section gray-bg">
                <div className="container">
                    <div className="row justify-content-center sm-m-25px-b m-45px-b">
                        <div className="col-md-12 col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="dark-color">My Services</h2>
                                <p className='text-align-justify m-0px'>Proficient in developing responsive and user-friendly websites using modern frontend technologies as a frontend developer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 m-15px-tb">
                            <div className="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                                <div className="f-icon theme-color m-10px-b">
                                    <img src={icon1} alt='' />
                                </div>
                                <div className="feature-content">
                                    <h6 className="dark-color font-w-700 m-15px-b">
                                        Search Optimization
                                    </h6>
                                    <p className="text-align-justify m-0px">
                                        Proficient in optimizing websites for search engines to attract organic traffic as a frontend developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 m-15px-tb">
                            <div className="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                                <div className="f-icon theme-color m-10px-b">
                                    <img src={icon2} alt='' />
                                </div>
                                <div className="feature-content">
                                    <h6 className="dark-color font-w-700 m-15px-b">
                                        Debugging
                                    </h6>
                                    <p className="text-align-justify m-0px">
                                        Proficient in debugging and optimizing website speed to enhance user experience as a frontend developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 m-15px-tb">
                            <div className="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                                <div className="f-icon theme-color m-10px-b">
                                    <img src={icon3} alt='' />
                                </div>
                                <div className="feature-content">
                                    <h6 className="dark-color font-w-700 m-15px-b">
                                        Clean and Refactor Code
                                    </h6>
                                    <p className="text-align-justify m-0px">
                                        Skilled in cleaning and refactoring code to improve maintainability and scalability as a frontend developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 m-15px-tb">
                            <div className="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                                <div className="f-icon theme-color m-10px-b">
                                    <img src={icon4} alt='' />
                                </div>
                                <div className="feature-content">
                                    <h6 className="dark-color font-w-700 m-15px-b">
                                        Fully Responsive
                                    </h6>
                                    <p className="text-align-justify m-0px">
                                        Experienced in creating fully responsive and visually appealing websites that work seamlessly on all devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 m-15px-tb">
                            <div className="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                                <div className="f-icon theme-color m-10px-b">
                                    <img src={icon5} alt='' />
                                </div>
                                <div className="feature-content">
                                    <h6 className="dark-color font-w-700 m-15px-b">
                                        Advanced Options
                                    </h6>
                                    <p className="text-align-justify m-0px">
                                        Proficient in utilizing advanced frontend frameworks and libraries for highly functional web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 m-15px-tb">
                            <div className="feature-box-1 text-center p-40px-tb p-20px-lr hover-top transition box-shadow-hover">
                                <div className="f-icon theme-color m-10px-b">
                                    <img src={icon6} alt='' />
                                </div>
                                <div className="feature-content">
                                    <h6 className="dark-color font-w-700 m-15px-b">
                                        End Result
                                    </h6>
                                    <p className="text-align-justify m-0px">
                                        Committed to high coding standards and delivering fruitful end results as a frontend developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Feature Box */}
        </>

    )
}
