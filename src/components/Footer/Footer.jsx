import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    // <div classNameName="footer text-white" style={{ backgroundColor: '#003366' }}>
    //   {/* <!-- You can replace the inline style with a classNameName if preferred --> */}
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       {/* <!-- Company Info Section --> */}
    //       <div classNameName="col-md-3">
    //         <img
    //           src="/assets/elite_parent_logo.png"
    //           alt="Company Logo"
    //           classNameName="mb-2"
    //         />
    //         <p>Trusted to deliver an ISO 9001: 2015 Certified Company</p>
    //         <h6>SFS @ Social</h6>
    //         <div classNameName="social-icons">
    //           {/* <!-- Icons can be added here using <a> tags with font-awesome icons --> */}
    //           <a href="#">
    //             <i classNameName="fab fa-instagram"></i>
    //           </a>
    //           <a href="#">
    //             <i classNameName="fab fa-facebook-f"></i>
    //           </a>
    //           <a href="#">
    //             <i classNameName="fab fa-twitter"></i>
    //           </a>
    //           <a href="#">
    //             <i classNameName="fab fa-linkedin-in"></i>
    //           </a>
    //           <a href="#">
    //             <i classNameName="fab fa-youtube"></i>
    //           </a>
    //         </div>
    //       </div>

    //       {/* <!-- More Info Section --> */}
    //       <div classNameName="col-md-3">
    //         <h6>More Info</h6>
    //         <a href="#">News & Events</a>
    //         <a href="#">CSR Policy</a>
    //         <a href="#">Handling over Events</a>
    //         <a href="#">Our Leadership</a>
    //         <a href="#">Contact Us</a>
    //       </div>

    //       {/* <!-- Flats in Trivandrum --> */}
    //       <div classNameName="col-md-3">
    //         <h6>Flats in Trivandrum</h6>
    //         <a href="#">Flats in Kowdiar</a>
    //         <a href="#">Flats in Vazhayila</a>
    //         <a href="#">Flats in Ambalamukku</a>
    //         <a href="#">Flats in Pallipuram</a>
    //         <a href="#">View all Projects</a>
    //       </div>

    //       {/* <!-- Flats in Cochin --> */}
    //       <div classNameName="col-md-3">
    //         <h6>Flats in Cochin</h6>
    //         <a href="#">Flats in Kakkanad</a>
    //         <a href="#">Flats in Edappally</a>
    //         <a href="#">Flats in Palarivattom</a>
    //         <a href="#">Flats near Infopark</a>
    //         <a href="#">View all Projects</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="footer text-white py-5">
      <div className="container" style={{ marginTop: '90px' }}>
        <div className="row">
          {/* <!-- First Section --> */}
          <div className="col-md-4 pt-5">
            {/* <!-- Logo and vertical line --> */}
            <div className="logo-section">
              <img
                src="/assets/elite_parent_logo.png"
                alt="Logo"
                className="mb-3 img-fluid"
                style={{ width: '120px' }}
              />
              <div className="vertical-line"></div>
              &nbsp; &nbsp;
              <h6 className="title mt-3 mb-3">
                <span>
                  An Elite Foods <br />
                  <span>& Innovations </span>
                  <br />
                  <span>Group Enterprise</span>
                </span>
              </h6>
            </div>
            <br />
            <h5 className="with-line" style={{ color: '#77c15f' }}>
              ADDRESS
            </h5>
            <p className="address">
              Elite Gardenia Hills,
              <br />
              Near Reliance Petrol Pump, <br />
              Puzhakkal P.O.Thrissur -680 553
              <br />
              Kerala, India
            </p>
            <br />
            <h5 className="with-line" style={{ color: '#77c15f' }}>
              CONTACT US
            </h5>
            <p className="address">
              +91 99468 11111 <br />
              +91 487 2322120
            </p>
            <br />
            <h5 className="with-line" style={{ color: '#77c15f' }}>
              EMAIL
            </h5>
            <p>sales@elitehomesindia.co.in</p>
          </div>
          <div className="col-md-1"></div>
          {/* <!-- Adjust the column size for the desired gap --> */}

          <div
            className="col-md-4 margin_section"
            style={{ marginTop: '150px' }}
          >
            {/* <!-- Second Section Content --> */}
            <h5 className="mb-3 with-line" style={{ color: '#77c15f' }}>
              MORE INFORMATION
            </h5>
            <br />
            <a className="footer-link" style={{ cursor: 'pointer' }}>
              <span style={{ color: '#77c15f' }}></span> News & Events
            </a>
            <br />
            <a className="footer-link" style={{ cursor: 'pointer' }}>
              <span style={{ color: '#77c15f' }}></span>
              Best Builder in Thrissur
            </a>
            <br />
            <a className="footer-link" style={{ cursor: 'pointer' }}>
              <span style={{ color: '#77c15f' }}></span> Best Builder in
              Trivandrum
            </a>
            <br />
            <br />
            <h5 className="mb-3 with-line" style={{ color: '#77c15f' }}>
              PROJECT DETAILS
            </h5>
            <a className="footer-link" style={{ cursor: 'pointer' }}>
              <span style={{ color: '#77c15f' }}></span> Flats in Thrissur
            </a>
            <br />
            <a className="footer-link" style={{ cursor: 'pointer' }}>
              <span style={{ color: '#77c15f' }}></span> Flats in Trivandrum
            </a>
            <br />
            <a className="footer-link" style={{ cursor: 'pointer' }}>
              <span style={{ color: '#77c15f' }}></span> All Location
            </a>
            <br />
          </div>
          <div className="col-md-2 pt-5">
            <h5 style={{ color: '#77c15f' }}>Get Social</h5>

            <a
              href="https://www.facebook.com"
              className="social-media-icon d-inline-flex align-items-center justify-content-center"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://www.twitter.com"
              className="social-media-icon d-inline-flex align-items-center justify-content-center"
            >
              <i className="fab fa-youtube"></i>
            </a>

            <a
              href="https://www.instagram.com"
              className="social-media-icon d-inline-flex align-items-center justify-content-center"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <div
              className="d-flex justify-content-between"
              style={{ marginTop: '120px' }}
            >
              <img
                src="/assets/certification1.png"
                alt="Logo 1"
                className="img-fluid"
                style={{ width: '100px', height: '100px' }}
              />
              <img
                src="/assets/certification2.png"
                alt="Logo 2"
                className="img-fluid"
                style={{ width: '100px', height: '100px' }}
              />
              <img
                src="/assets/certfications3.webp"
                alt="Logo 3"
                className="img-fluid"
                style={{ width: '100px', height: '100px' }}
              />
            </div>
          </div>
        </div>
        <div className="row bottom-section">
          <div className="col-md-6">
            <p>Elite Gardenia LLP © Copyright 2024 All rights reserved</p>
          </div>
          <div className="col-md-6 text-md-right d-flex flex-wrap">
            <a>Terms of Use</a> | <a>Privacy Policy</a> |<a>Disclaimer</a> |{' '}
            <a>RERA Disclaimer</a> |<a>Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
