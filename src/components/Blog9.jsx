import React, { useState } from 'react'
import work1 from '../assets/img/projects/04-min.jpg'
import work2 from '../assets/img/projects/05-min.jpg'
import work3 from '../assets/img/projects/07-min.jpg'

export default function Blog9({ children }) {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="m-btn-link">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };


    return (
        <>
            {/* Blog */}
            <section id="blog" className="section white-bg">
                <div className="container">
                    <div className="row justify-content-center sm-m-25px-b m-40px-b">
                        <div className="col-md-12 col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="dark-color">Latest Blog</h2>
                                <p>
                                    Recently developed a mobile-responsive website for a residential property using React and Django, which increased customer inquiries by 40% and improved user experience through a modern interface.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 m-15px-tb">
                            <div className="blog-grid">
                                <div className="blog-grid-img">
                                    <a href="#">
                                        <img src={work1} title="" alt="" />
                                    </a>
                                </div>
                                <div className="blog-gird-info">
                                    <div className="b-meta">
                                        <span className="date">02 Mar 2023</span>
                                        <span className="meta">https://diamondexcellency.claystone.pk</span>
                                    </div>
                                    <h5>
                                        <a href="#">Diamond Excellency</a>
                                    </h5>
                                    <p><ReadMore>Diamond Excellency is a modern and dynamic website that we designed recently for a residential property company. With a user-friendly interface, it allows customers to easily select apartments and complete necessary requirements, including payments. The platform has increased customer inquiries by 30%, providing a seamless experience for users.</ReadMore></p>
                                    {/* <div className="btn-grid">
                                        <a className="m-btn-link" href="#">
                                            Read More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>{" "}
                        {/* col */}
                        <div className="col-lg-4 m-15px-tb">
                            <div className="blog-grid">
                                <div className="blog-grid-img">
                                    <a href="#">
                                        <img src={work2} title="" alt="" />
                                    </a>
                                </div>
                                <div className="blog-gird-info">
                                    <div className="b-meta">
                                        <span className="date">15 Feb 2023</span>
                                        <span className="meta">https://madinamac.claystone.pk/</span>
                                    </div>
                                    <h5>
                                        <a href="#">Madina MAC</a>
                                    </h5>
                                    <p><ReadMore>I designed and developed a website for a residential property project that featured 360-degree virtual tours, floor plans, and property details. The site was built with React and integrated with a custom CMS, allowing the client to manage and update property information. The project required a focus on user experience and creating an engaging visual presentation of the properties.</ReadMore></p>
                                    {/* <div className="btn-grid">
                                        <a className="m-btn-link" href="#">
                                            Read More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>{" "}
                        {/* col */}
                        <div className="col-lg-4 m-15px-tb">
                            <div className="blog-grid">
                                <div className="blog-grid-img">
                                    <a href="#">
                                        <img src={work3} title="" alt="" />
                                    </a>
                                </div>
                                <div className="blog-gird-info">
                                    <div className="b-meta">
                                        <span className="date">02 Dec 2022</span>
                                        <span className="meta">https://claystone.pk/</span>
                                    </div>
                                    <h5>
                                        <a href="#">Claystone.pk</a>
                                    </h5>
                                    <p><ReadMore>As the web developer and designer i have maintain company website, I created a modern and user-friendly platform for the client to showcase their services and products. The website is built laravel web application framework October CMS, which includes information about their technology services, team members, and property etc. The design emphasizes a sleek and professional aesthetic, with a focus on creating an engaging user experience. The site is optimized for search engines, helping to increase visibility and drive traffic to the client's website.</ReadMore></p>
                                    {/* <div className="btn-grid">
                                        <a className="m-btn-link" href="#">
                                            Read More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>{" "}
                        {/* col */}
                    </div>
                </div>
            </section>
            {/* End Blog */}
        </>

    )
}
