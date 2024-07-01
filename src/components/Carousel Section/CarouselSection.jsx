import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carouselsection.css';

const CarouselSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5" style={{ backgroundColor: '#77c15f' }}>
      <div className="container pt-5 pb-5 position-relative green-container">
        <div className="">
          <Slider {...settings}>
            <div className="d-flex align-items-center justify-content-center flex-wrap pe-5 ps-5">
              <div className="col-md-6">
                <div className="text">
                  <p>
                    "The satisfaction of customers is paramount for Elite
                    Developers, a real estate developer who has a strong
                    reputation for delivering quality projects on time”
                  </p>
                  <p style={{ fontWeight: '700' }}>
                    - Mr. K.S. Prasad & Family
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video">
                  <iframe
                    src="https://www.youtube.com/embed/f6Zuv0KrEUc?si=1pYSs5SS_Yw7HZ6N"
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: '20px' }}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-wrap pe-5 ps-5">
              <div className="col-md-6">
                <div className="text">
                  <p>
                    "The satisfaction of customers is paramount for Elite
                    Developers, a real estate developer who has a strong
                    reputation for delivering quality projects on time”
                  </p>
                  <p style={{ fontWeight: '700' }}>
                    - Mr. K.S. Prasad & Family
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video">
                  <iframe
                    src="https://www.youtube.com/embed/f6Zuv0KrEUc?si=1pYSs5SS_Yw7HZ6N"
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: '20px' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </Slider>

          {/* <div className="carousel-slide">
            <div className="row">
              <div className="col-md-6">
                <div className="text">
                  <p>
                    "The satisfaction of customers is paramount for Elite
                    Developers, a real estate developer who has a strong
                    reputation for delivering quality projects on time”
                  </p>
                  <p style={{ fontWeight: '700px' }}>
                    - Mr. K.S. Prasad & Family
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video">
                  <iframe
                    src="https://www.youtube.com/embed/f6Zuv0KrEUc?si=1pYSs5SS_Yw7HZ6N"
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: '20px' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="row">
              <div className="col-md-6">
                <div className="text">
                  <p>
                    "The satisfaction of customers is paramount for Elite
                    Developers, a real estate developer who has a strong
                    reputation for delivering quality projects on time”
                  </p>
                  <p style={{ fontWeight: '700' }}>
                    - Mr. K.S. Prasad & Family
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video">
                  <iframe
                    src="https://www.youtube.com/embed/f6Zuv0KrEUc?si=1pYSs5SS_Yw7HZ6N"
                    frameBorder="0"
                    allowfullscreen
                    style={{ borderRadius: '20px' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- Add more slides as needed --> */}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
