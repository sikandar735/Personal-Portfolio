import React from 'react'
import icon1 from '../assets/icons/icon10.png'
import icon2 from '../assets/icons/icon8.png'
import icon3 from '../assets/icons/icon9.png'
import icon4 from '../assets/icons/icon2.png'
import icon5 from '../assets/icons/icon5.png'
import icon6 from '../assets/icons/icon7.png'

export default function WorkStep6() {
    return (
        <>
            {/* work step */}
            <section className="section white-bg">
                <div className="container">
                    <div className="row justify-content-center sm-m-20px-b m-40px-b">
                        <div className="col-md-12 col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="dark-color">Work Process</h2>
                                <p>My work processes as a frontend developer involve developing efficient, scalable and maintainable code, utilizing modern technologies, and incorporating feedback to deliver high-quality websites with a great user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-2 col-6 m-20px-tb">
                            <div className="feature-box-2">
                                <div className="icon box-shadow">
                                    <span>1</span>
                                    <img src={icon1} alt='' />
                                </div>
                                <h6>DISCUSS</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-6 m-20px-tb">
                            <div className="feature-box-2">
                                <div className="icon box-shadow">
                                    <span>2</span>
                                    <img src={icon2} alt='' />
                                </div>
                                <h6>IDEA</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-6 m-20px-tb">
                            <div className="feature-box-2">
                                <div className="icon box-shadow">
                                    <span>3</span>
                                    <img src={icon3} alt='' />
                                </div>
                                <h6>DESIGN</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-6 m-20px-tb">
                            <div className="feature-box-2">
                                <div className="icon box-shadow">
                                    <span>4</span>
                                    <img src={icon4} alt='' />
                                </div>
                                <h6>DEVELOP</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-6 m-20px-tb">
                            <div className="feature-box-2">
                                <div className="icon box-shadow">
                                    <span>5</span>
                                    <img src={icon5} alt='' />
                                </div>
                                <h6>TEST</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-6 m-20px-tb">
                            <div className="feature-box-2">
                                <div className="icon box-shadow">
                                    <span>6</span>
                                    <img src={icon6} alt='' />
                                </div>
                                <h6>LAUNCH</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end work step */}
        </>

    )
}
