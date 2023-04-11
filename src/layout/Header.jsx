import React, { useState } from 'react'
import mainpic from '../assets/img/sakandar-hayat.jpg'

export default function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <>
            <header className="header-nav-left fixed-header toogle-icon-on-small-devices">
                <div className="scroll-in d-flex flex-column">
                    {/* Header logo */}
                    <div className="header-logo">
                        <div className="logo">
                            <a className="logo-text" href="#">
                                <img src={mainpic} title="" alt="" />
                                <span className="label">Sakandar Hayat</span>
                            </a>
                        </div>
                        <button
                            type="button"
                            className="navbar-toggler collapsed"
                            data-toggle="collapse"
                            data-target="#navbar-collapse-toggle"
                            aria-expanded={!isNavCollapsed ? true : false}
                            onClick={handleNavCollapse}>
                            <span className="icon-bar" />
                        </button>
                    </div>
                    {/* End Header Logo */}
                    {/* End Header Menu */}
                    <div
                        className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
                        id="navbar-collapse-toggle"
                        style={{}}
                    >
                        <ul className="nav navbar-nav m-auto">
                            <li>
                                <a className="nav-link active" href="#home">
                                    <i className="fas fa-home" /> Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#about">
                                    <i className="fas fa-user" /> About
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#resume">
                                    <i className="fas fa-address-book" /> Resume
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#services">
                                    <i className="fab fa-buffer" /> Services
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#work">
                                    <i className="fas fa-briefcase" /> Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#blog">
                                    <i className="fas fa-receipt" /> Blog
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#contactus">
                                    <i className="fas fa-envelope" /> Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* End Header Menu */}
                    {/* End Header Social */}
                    <div className="header-social">
                        <ul className="nav d-none si-t-white si-radisu social-icon d-md-flex">
                            <li>
                                <a href="https://www.facebook.com/sikandar.hayatturi?mibextid=ZbWKwL">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/SikandarHa31017?t=5zYeX5j5Q7ByIGL38EhyBw&s=08">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/sikandar.hayatturi?igshid=ZDdkNTZiNTM=">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sakandar-hayat-242827148/">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* End Header Social */}
                </div>
            </header>

        </>


    )
}
