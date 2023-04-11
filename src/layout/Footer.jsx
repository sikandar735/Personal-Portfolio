import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Footer*/}
      <footer className="footer footer-dark">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 m-15px-tb mr-auto">
                <div className="footer-about">
                  <div className="fot-logo">Sakandar Hayat</div>
                  <p>
                    Hello, I'm Sakandar Hayat, a frontend developer with over 2
                    years of experience in the industry. I specialize in
                    developing user-friendly interfaces and experiences for
                    websites and applications using HTML, CSS, JavaScript, and
                    frameworks like React and Angular.
                  </p>
                  <address>
                    <p className="address">
                      <i className="fas fa-map-marker-alt" />
                      Bahria Town, Islamabad,
                      <br />
                      Pakistan
                    </p>
                    <p className="email">
                      <i className="fas fa-envelope" />{" "}
                      <a href="mailto:sikandarh735@gmail.com">
                        sikandarh735@gmail.com
                      </a>
                    </p>
                    <p className="call">
                      <i className="fas fa-phone-alt" />{" "}
                      <a href="tel:820-885-3321">+923035080399</a>
                    </p>
                  </address>
                </div>
              </div>
              {/* / col */}
              <div className="col-lg-3 col-sm-6 m-15px-tb">
                <div className="footer-link">
                  <h5 className="fot-title">About Us</h5>
                  <ul className="nav flex-column">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Website Optimization</a>
                    </li>
                    <li>
                      <a href="#">Debugging</a>
                    </li>
                    <li>
                      <a href="#">Website SEO</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* / col */}
              <div className="col-lg-3 col-sm-6 m-15px-tb">
                <div className="footer-link">
                  <h5 className="fot-title">Other links</h5>
                  <ul className="nav flex-column">
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Customer Support</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Copyright</a>
                    </li>
                    <li>
                      <a href="#">Popular Campaign</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* / row */}
          </div>
        </div>
        {/* footer top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-left">
                <p>© 2023 copyright all right reserved</p>
              </div>
              <div className="col-md-6 text-center">
                <ul className="nav justify-content-center justify-content-md-end">
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
            </div>
          </div>
        </div>
        {/* /footer bottom */}
      </footer>
      {/* footer End */}
    </>
  );
}
