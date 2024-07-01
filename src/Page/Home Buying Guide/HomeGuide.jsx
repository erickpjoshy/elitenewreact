import React from 'react';
import './homeguide.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Fade, Slide } from 'react-awesome-reveal';
const HomeGuide = () => {
  return (
    <div>
      <Header />
      <div className="image-section">
        <img
          src="/assets/buy_a_home.png"
          alt="philosophy"
          className="img-fluid"
        />

        <div className="header-overlay font">
          <h1>How To Buy A Home</h1>
          <p></p>
        </div>
      </div>
      <div className="container mt-5">
        <div className=" font">
          <h1 className="text-center head">HOME ALLY</h1>
        </div>
        <div className="sub-heading-section mt-4 text-center">
          <h5>MILESTONES IN YOUR HOME SEARCH</h5>
        </div>
      </div>
      <Fade direction="right" triggerOnce>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/real.gif" alt="Real Estate Terms" />
                </div>
                <p>Real Estate Terms</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/online.gif" alt="Online Research" />
                </div>
                <p>Online Research</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/property.gif" alt="The Right Property" />
                </div>
                <p>The Right Property</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img
                    src="/assets/construction.gif"
                    alt="Construction Quality"
                  />
                </div>
                <p>Construction Quality</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/money.gif" alt="Construction Quality" />
                </div>
                <p>Price</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/doc.gif" alt="Construction Quality" />
                </div>
                <p>Documentation</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/loan.gif" alt="Construction Quality" />
                </div>
                <p>Home Loan</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/book.gif" alt="Construction Quality" />
                </div>
                <p>Booking and Registration</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/poss.gif" alt="Construction Quality" />
                </div>
                <p>Possession</p>
              </div>
            </div>
            <div className="col-md-3 text-center animas">
              <div className="circle-container">
                <div className="circle">
                  <img src="/assets/main.gif" alt="Construction Quality" />
                </div>
                <p>Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-md-12">
            <p className="descriptions">
              <strong>Disclaimer : </strong> Elite Developers has made available
              this website solely for educational and informative purposes with
              regard to real estate sector and no warranty is made with respect
              to the accuracy or reliability of the information provided. There
              is no assurance that any statement contained or cited herein is
              complete, correct or precise and the same is not to be construed
              as a legal advice on the matter. Elite Developers has the right to
              alter or modify any content on the website at its sole discretion.
              Elite Developers disowns any liability that may arise in
              connection with the use of this information. Interested persons
              are advised to apprise themselves of necessary information before
              investing/purchasing any property.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeGuide;
