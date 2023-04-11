import React from 'react'
import skilloic from '../assets/img/skill.jpeg'

export default function Skill4() {
    return (
        <>
            {/* Skill */}
            <section className="section white-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 md-p-15px-r p-40px-r">
                            <h2 className="dark-color font-w-700 m-0px p-20px-b sm-p-15px-b">
                                Professional skills
                            </h2>
                            <p>
                                Skilled in the below languages with practical experience in developing web applications and sites.
                            </p>
                            {/* skill */}
                            <div className="skill-lt p-25 px-t">
                                <h6 className="dark-color">HTML5</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "90%" }}
                                    > <span>90%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-lt">
                                <h6 className="dark-color">CSS</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "80%" }}
                                    >
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                            {/* end skill */}
                            {/* skill */}
                            <div className="skill-lt">
                                <h6 className="dark-color">Bootstrap</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "80%" }}
                                    >
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                            {/* end skill */}
                            {/* skill */}
                            <div className="skill-lt">
                                <h6 className="dark-color">OctoberCMS</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={70}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "70%" }}
                                    >
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                            {/* end skill */}
                            {/* skill */}
                            <div className="skill-lt">
                                <h6 className="dark-color">Javascript</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "60%" }}
                                    >
                                        <span>40%</span>
                                    </div>
                                </div>
                            </div>
                            {/* /skill */}
                            {/* end skill */}
                            {/* skill */}
                            <div className="skill-lt">
                                <h6 className="dark-color">React</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "50%" }}
                                    >
                                        <span>35%</span>
                                    </div>
                                </div>
                            </div>
                            {/* end skill */}
                            {/* skill */}
                            <div className="skill-lt">
                                <h6 className="dark-color">Angular</h6>
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-in theme-bg"
                                        role="progressbar"
                                        aria-valuenow={30}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "30%" }}
                                    >
                                        <span>30%</span>
                                    </div>
                                </div>
                            </div>
                            {/* end skill */}
                        </div>
                        <div className="col-lg-6 md-m-40px-t">
                            {/* <img src="./assets/img/skill-box.png" title="" alt="" /> */}
                            <img src={skilloic} title="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Skill */}
        </>

    )
}
