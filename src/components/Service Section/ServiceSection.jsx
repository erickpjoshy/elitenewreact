import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './servicesection.css';
import { Fade, Slide } from 'react-awesome-reveal';
const ServiceSection = () => {
  return (
    <div className="services-section">
      <div className="container">
        <h2 className="font">What we do</h2>
        <p>
          We transform our projects into iconic landmarks through our unwavering
          commitment to quality, sustainable development practices, adopting
          latest technologies and ensuring timely completion.
        </p>
        <Fade direction="left" triggerOnce>
          <div className="row">
            <div className="col-md-4 service  hover">
              <div className="circle-img">
                <img
                  src="/assets/residential_image.jpg"
                  alt="Residential"
                  className="img-fluid"
                />
              </div>
              <h3 className="text-center">Residential</h3>
            </div>
            <div className="col-md-4 service  hover">
              <div className="circle-img">
                <img
                  src="/assets/commercial_image.jpg"
                  alt="Commercial & Office"
                  className="img-fluid"
                />
              </div>
              <h3 className="text-center">Commercial & Office</h3>
            </div>
            <div className="col-md-4 service  hover">
              <div className="circle-img">
                <img
                  src="/assets/industrial_image.jpg"
                  alt="Factory & Industrial"
                  className="img-fluid "
                />
              </div>
              <h3 className="text-center">Factory & Industrial</h3>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ServiceSection;
