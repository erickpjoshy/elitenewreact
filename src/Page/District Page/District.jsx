import React, { useEffect, useState } from 'react';
import './district.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import CarouselComponent from '../../components/Banner/index.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import customAxios from '../../../utils/CustomAxios.js';
const District = () => {
  const [state, setState] = useState([]);
  const { district } = useParams();
  const navigate = useNavigate();
  console.log(district);
  const [districts, setDistricts] = useState([]);

  const filterUniqueDistricts = data => {
    const districtsSet = new Set();
    return data.filter(item => {
      if (districtsSet.has(item.district)) {
        return false;
      }
      districtsSet.add(item.district);
      return true;
    });
  };

  const onClickNavigate = district => {
    navigate(`/districtName/${district}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const onViewProjectClick = id => {
    navigate(`/productDetails/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchDistrictApi = async () => {
    try {
      const response = await customAxios.get(
        `/buildercard/district/get?district=${district}`
      );
      setState(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchUniqueDistrictApi = async () => {
    const response = await customAxios.get('/buildercard');
    const uniqueDistricts = filterUniqueDistricts(response.data);
    setDistricts(uniqueDistricts);
    console.log(state);
  };

  useEffect(() => {
    if (district) {
      fetchDistrictApi();
    }
    fetchUniqueDistrictApi();
  }, [district]);
  return (
    <div>
      <Header />
      <CarouselComponent state={state} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3 d-none d-md-block sidebar">
            <ul className="list-group">
              <a href="/residential">
                <li
                  className="list-group-item"
                  style={{ textTransform: 'uppercase' }}
                >
                  Residential
                </li>
              </a>
              {districts.map(item => (
                <a key={item._id}>
                  <li
                    className={`list-group-item ${
                      district == item.district ? 'actives' : ''
                    }`}
                    style={{ textTransform: 'uppercase' }}
                    onClick={() => onClickNavigate(item.district)}
                  >
                    {item.district}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* <div className="col-12 d-md-none">
            <select className="form-control mb-3">
              <option value="">Select a location</option>
              <option value="/residential">Residential</option>
              <option value="/">Thiruvananthapuram</option>
              <option value="/">Thrissur</option>
            </select>
          </div> */}

          <div className="col-md-9 content">
            <div className="heading-section mb-4">
              <h3 className="top-heading font text-uppercase ">{district}</h3>
            </div>
            <div className="mt-5">
              <p className="description mt-4">
                Elite Developers, one of Kerala's leading Real Estate
                Developers, is committed towards premium quality, standards, and
                innovation. Four decades of rich experience in residential,
                commercial, and plotted real estate enables us to provide
                world-class living spaces mingling natural elements.
              </p>

              <div className="row mt-5 item-maps">
                {state.map(item => (
                  <div
                    className="col-md-6 col-sm-12 mb-4 animas"
                    key={item._id}
                  >
                    <div className="card mb-4" style={{ borderRadius: '15px' }}>
                      <div
                        className="status-label"
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'white',
                          padding: '5px 10px',
                          borderRadius: '10px',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.status}
                      </div>
                      <img
                        src={item.images[0]}
                        className="card-img-top card-image-district"
                        alt="Image 1"
                        style={{
                          borderTopLeftRadius: '15px',
                          borderTopRightRadius: '15px',
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          <i className="fas fa-map-marker-alt"></i>{' '}
                          {item.location}
                        </p>

                        <div className="row">
                          <div className="col">
                            <h6 className="small_h">Area Range</h6>
                            <p className="card-texts">{item.areaRange}</p>
                          </div>
                          <div className="col ">
                            <h6 className="small_h">Apartment Type</h6>
                            <p className="card-texts">{item.apartmenttype}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="flex-container">
                          <div>
                            <h6 className="small_h">K-RERA</h6>
                            <p className="card-texts">{item.kreranumber}</p>
                          </div>
                          <div className="contact-buttons">
                            <a
                              className="btn btn-md property-btn-small whatsapp-btn"
                              href={`https://api.whatsapp.com/send?phone=91${item.whatsappno}`}
                              target="_blank"
                            >
                              <i className="fab fa-whatsapp"></i>
                            </a>
                            <button className="btn btn-light btn-md property-btn-small phone-btn">
                              <i className="fas fa-phone"></i>
                            </button>
                          </div>
                        </div>
                        <div className="d-flex justify content-buttons">
                          <button className="btn btn-customs">BROCHURE</button>
                          <button
                            className="btn btn-customse"
                            onClick={() => onViewProjectClick(item._id)}
                          >
                            VIEW PROJECT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="heading-section mb-4">
                <h3 className="top-heading font">Reach Us</h3>
              </div>
              <div className="row">
                <div className="col-md-3 pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name*"
                    required
                  />
                </div>
                <div className="col-md-3 pt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="col-md-3 pt-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number*"
                    required
                  />
                </div>
                <div className="col-md-3 pt-3">
                  <button className="btn read-btns">Enquire</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default District;
