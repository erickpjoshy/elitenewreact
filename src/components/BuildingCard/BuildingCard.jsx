import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './buildingcard.css';
import axios from 'axios';
// import ScrollReveal from 'scrollreveal';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import customAxios from '../../../utils/CustomAxios.js';
import { ClipLoader } from 'react-spinners';

function BuildingCard() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint for large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000, // Adjust the breakpoint for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600, // Adjust the breakpoint for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      //   {
      //     breakpoint: 480, // Adjust the breakpoint for mobile devices
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true,
      //       dots: true,
      //     },
      //   },
    ],
  };
  const [state, setState] = useState([]);
  let [loading, setLoading] = useState(false);
  const fetchDataApiCall = async () => {
    try {
      setLoading(true);
      const response = await customAxios.get('/buildercard');
      setState(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  // console.log(state);
  const navigate = useNavigate();

  const onClickViewProject = id => {
    navigate(`/productDetails/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    fetchDataApiCall();
  }, []);
  return (
    <div className="container project-sections mt-5">
      <h2 className="mb-5 pro_heading">Featured Projects</h2>
      {loading ? (
        <ClipLoader
          color="blue"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="clip-loader-bcard"
        />
      ) : (
        <div className="slider-container building-card">
          <Slider {...settings}>
            {state.map(item => (
              <div className="item" key={item._id}>
                <div className="card mb-4" style={{ borderRadius: '15px' }}>
                  <Fade>
                    <div className="status-label">
                      {item.status}
                      {/* <!-- Example status text --> */}
                    </div>
                  </Fade>

                  <img
                    src={item.images[0]}
                    className="card-img-top card-image-district"
                    alt="Image 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text-carousel">
                      <i className="fas fa-map-marker-alt"></i> {item.location}
                    </p>

                    <div className="row">
                      <div className="col">
                        <h6 className="small_h">Area Range</h6>
                        <p className="card-texts">{item.areaRange} Sq.Ft</p>
                      </div>
                      <div className="col ">
                        <h6 className="small_h">Apartment Type</h6>
                        <p className="card-texts">{item.apartmenttype} BHK</p>
                      </div>
                    </div>
                    {/* <hr> */}
                    <div className="flex-container">
                      <div>
                        <h6 className="small_h">K-RERA</h6>
                        <p className="card-texts">K-RERA/PRJ/ERN/050/2021</p>
                      </div>
                      <div className="contact-buttons">
                        <a
                          className="btn btn-md property-btn-small whatsapp-btn"
                          href={`https://api.whatsapp.com/send?phone=91${item.whatsappno}`}
                          target="_blank"
                        >
                          {/* <!-- Small button with WhatsApp icon --> */}
                          <i className="fab fa-whatsapp"></i>
                        </a>
                        <button className="btn btn-light btn-md property-btn-small phone-btn">
                          {/* <!-- Small button with telephone icon --> */}
                          <i className="fas fa-phone"></i>
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify content-buttons">
                      <button className="btn btn-customsee">BROCHURE</button>
                      <a
                        className="btn btn-customser"
                        onClick={() => onClickViewProject(item._id)}
                      >
                        VIEW PROJECT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default BuildingCard;
