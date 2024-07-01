import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import './banner.css';
import ClipLoader from 'react-spinners/ClipLoader';
import customAxios from '../../../utils/CustomAxios.js';

const CarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };
  const [state, setState] = useState([]);
  let [loading, setLoading] = useState(false);
  const fetchDataApiCall = async () => {
    try {
      setLoading(true);
      const response = await customAxios.get('/slider/homesliders');
      setState(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchDataApiCall();
  }, []);

  return (
    <>
      {/* {state.length ? ( */}
      {loading ? (
        <ClipLoader
          color="blue"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="clip-loader-cc"
        />
      ) : (
        <Slider {...settings}>
          {state.map(item => (
            <div className="item" key={item._id}>
              <img
                src={item.images[0]}
                alt="Gallery 1"
                className="carousel-image main-banner-image"
              />
              <div className="carousel-content">
                <div className="carousel-content-left">
                  <h2>{item.name}</h2>
                  {item.location ? (
                    <div className="location">
                      <i className="fa fa-map-marker"></i> {item.location}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="carousel-content-middle">
                  <div className="arrows">
                    <i className="fa fa-chevron-down arrow-fade-1"></i>
                    <i className="fa fa-chevron-down arrow-fade-2"></i>
                    <i className="fa fa-chevron-down arrow-fade-3"></i>
                  </div>
                </div>
                <div className="carousel-content-right">
                  <div className="price">{item.price}</div>
                </div>
                {/* Contact details */}
                <div className="carousel-contact">
                  <button className="btn-know-more">Know More</button>
                </div>
              </div>
            </div>
          ))}

          {/* Add more banners here in the same format */}
        </Slider>
      )}
      {/* ) : (
        <img
          src="/assets/banner_1.png"
          alt="Gallery 1"
          className="carousel-image main-banner-image"
        />
      )} */}
    </>
  );
};

export default CarouselComponent;
