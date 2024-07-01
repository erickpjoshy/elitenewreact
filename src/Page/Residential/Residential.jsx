import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CarouselComponent from '../../components/Banner';
import './residential.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import customAxios from '../../../utils/CustomAxios.js';
const Residential = () => {
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onClickNavigate = district => {
    navigate(`/districtName/${district}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
  const fetchDataApiCall = async () => {
    try {
      setLoading(true);
      const response = await customAxios.get('/buildercard');
      setState(response.data);
      setLoading(false);
      console.log(state);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };
  const fetchUniqueDistrictApi = async () => {
    const response = await customAxios.get('/buildercard');
    const uniqueDistricts = filterUniqueDistricts(response.data);
    setDistrict(uniqueDistricts);
  };

  const onViewProjectClick = id => {
    navigate(`/productDetails/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    fetchDataApiCall();
    fetchUniqueDistrictApi();
  }, []);

  return (
    <>
      <Header />
      <CarouselComponent state={state} loading={loading} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3 d-none d-md-block sidebar">
            <ul className="list-group">
              <a href="/residential">
                <li
                  className="list-group-item actives"
                  style={{ textTransform: 'uppercase' }}
                >
                  Residential
                </li>
              </a>
              {/* <a href="/thrissur">
                <li
                  className="list-group-item "
                  style={{ textTransform: 'uppercase' }}
                >
                  Thrissur
                </li>
              </a> */}
              {district.map(item => (
                <a key={item._id}>
                  <li
                    className="list-group-item "
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
              <option value="/trivandrum">Thiruvananthapuram</option>
              <option value="thrissur">Thrissur</option>
            </select>
          </div> */}

          <div className="col-md-9 content">
            <div className="heading-section mb-4">
              <h3 className="top-heading font">Residential</h3>
            </div>
            <div className="mt-5">
              <p className="description mt-4">
                Elite Developers, one of Kerala's leading Real Estate
                Developers, is committed towards premium quality, standards, and
                innovation. Four decades of rich experience in residential,
                commercial, and plotted real estate enables us to provide
                world-class living spaces mingling natural elements.
              </p>

              <div className="heading-container mt-5">
                <hr className="line" />
                <span className="heading-text ">
                  <h2>THERE’S NO PLACE,</h2> <br /> <h2>LIKE A ELITE HOME</h2>
                </span>
                <hr className="line2" />
              </div>
              <div className="row mt-5">
                {state.map((item, index) => (
                  <div className="col-md-6 col-sm-12 mb-4 animas" key={index}>
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
                        className="card-img-top"
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
                            <p className="card-texts">
                              {item.apartmenttype} Sq.Ft
                            </p>
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
                {/* <div className="col-md-6 col-sm-12 mb-4 animas">
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
                    ></div>
                    <img
                      src="/assets/samrudhi_image.png"
                      className="card-img-top"
                      alt="Image 1"
                      style={{
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Elite Samruddhi</h5>
                      <p className="card-text">
                        <i className="fas fa-map-marker-alt"></i> Kazhakkoottam,
                        Kerala 680551
                      </p>

                      <div className="row">
                        <div className="col">
                          <h6 className="small_h">Area Range</h6>
                          <p className="card-texts">2,854 - 1,210 Sq.Ft</p>
                        </div>
                        <div className="col ">
                          <h6 className="small_h">Apartment Type</h6>
                          <p className="card-texts">4,3 & 2 BHK</p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex-container">
                        <div>
                          <h6 className="small_h">K-RERA</h6>
                          <p className="card-texts">K-RERA/PRJ/ERN/050/2021</p>
                        </div>
                        <div className="contact-buttons">
                          <button className="btn btn-md property-btn-small whatsapp-btn">
                            <i className="fab fa-whatsapp"></i>
                          </button>
                          <button className="btn btn-light btn-md property-btn-small phone-btn">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify content-buttons">
                        <button className="btn btn-customs">BROCHURE</button>
                        <button className="btn btn-customse">
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 animas">
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
                    ></div>
                    <img
                      src="/assets/Frame 245.png"
                      className="card-img-top"
                      alt="Image 1"
                      style={{
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Elite Insignia</h5>
                      <p className="card-text">
                        <i className="fas fa-map-marker-alt"></i> Adat,
                        Thrissur, Kerala
                      </p>

                      <div className="row">
                        <div className="col">
                          <h6 className="small_h">Area Range</h6>
                          <p className="card-texts">2,854 - 1,210 Sq.Ft</p>
                        </div>
                        <div className="col ">
                          <h6 className="small_h">Apartment Type</h6>
                          <p className="card-texts">4,3 & 2 BHK</p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex-container">
                        <div>
                          <h6 className="small_h">K-RERA</h6>
                          <p className="card-texts">K-RERA/PRJ/ERN/050/2021</p>
                        </div>
                        <div className="contact-buttons">
                          <button className="btn btn-md property-btn-small whatsapp-btn">
                            <i className="fab fa-whatsapp"></i>
                          </button>
                          <button className="btn btn-light btn-md property-btn-small phone-btn">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </div>
                      <div className="d-flex  content-buttons">
                        <button className="btn btn-customs">BROCHURE</button>
                        <button className="btn btn-customse">
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 animas">
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
                    ></div>
                    <img
                      src="/assets/Frame 245.png"
                      className="card-img-top"
                      alt="Image 1"
                      style={{
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Elite Insignia</h5>
                      <p className="card-text">
                        <i className="fas fa-map-marker-alt"></i> Adat,
                        Thrissur, Kerala
                      </p>

                      <div className="row">
                        <div className="col">
                          <h6 className="small_h">Area Range</h6>
                          <p className="card-texts">2,854 - 1,210 Sq.Ft</p>
                        </div>
                        <div className="col ">
                          <h6 className="small_h">Apartment Type</h6>
                          <p className="card-texts">4,3 & 2 BHK</p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex-container">
                        <div>
                          <h6 className="small_h">K-RERA</h6>
                          <p className="card-texts">K-RERA/PRJ/ERN/050/2021</p>
                        </div>
                        <div className="contact-buttons">
                          <button className="btn btn-md property-btn-small whatsapp-btn">
                            <i className="fab fa-whatsapp"></i>
                          </button>
                          <button className="btn btn-light btn-md property-btn-small phone-btn">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify content-buttons">
                        <button className="btn btn-customs">BROCHURE</button>
                        <button className="btn btn-customse">
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 animas">
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
                    ></div>
                    <img
                      src="/assets/Frame 246.png"
                      className="card-img-top"
                      alt="Image 1"
                      style={{
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Elite Paradiza</h5>
                      <p className="card-text">
                        <i className="fas fa-map-marker-alt"></i>{' '}
                        Kuttoor,Thrissur, Kerala
                      </p>

                      <div className="row">
                        <div className="col">
                          <h6 className="small_h">Area Range</h6>
                          <p className="card-texts">2,854 - 1,210 Sq.Ft</p>
                        </div>
                        <div className="col ">
                          <h6 className="small_h">Apartment Type</h6>
                          <p className="card-texts">4,3 & 2 BHK</p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex-container">
                        <div>
                          <h6 className="small_h">K-RERA</h6>
                          <p className="card-texts">K-RERA/PRJ/ERN/050/2021</p>
                        </div>
                        <div className="contact-buttons">
                          <button className="btn btn-md property-btn-small whatsapp-btn">
                            <i className="fab fa-whatsapp"></i>
                          </button>
                          <button className="btn btn-light btn-md property-btn-small phone-btn">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify content-buttons">
                        <button className="btn btn-customs">BROCHURE</button>
                        <button className="btn btn-customse">
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 animas">
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
                    ></div>
                    <img
                      src="/assets/Frame 247.png"
                      className="card-img-top"
                      alt="Image 1"
                      style={{
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Elite La Pristine</h5>
                      <p className="card-text">
                        <i className="fas fa-map-marker-alt"></i> Adatt, Kerala
                        680551
                      </p>

                      <div className="row">
                        <div className="col">
                          <h6 className="small_h">Area Range</h6>
                          <p className="card-texts">2,854 - 1,210 Sq.Ft</p>
                        </div>
                        <div className="col ">
                          <h6 className="small_h">Apartment Type</h6>
                          <p className="card-texts">4,3 & 2 BHK</p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex-container">
                        <div>
                          <h6 className="small_h">K-RERA</h6>
                          <p className="card-texts">K-RERA/PRJ/ERN/050/2021</p>
                        </div>
                        <div className="contact-buttons">
                          <button className="btn btn-md property-btn-small whatsapp-btn">
                            <i className="fab fa-whatsapp"></i>
                          </button>
                          <button className="btn btn-light btn-md property-btn-small phone-btn">
                            <i className="fas fa-phone"></i>
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify content-buttons">
                        <button className="btn btn-customs">BROCHURE</button>
                        <button className="btn btn-customse">
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <!-- <div className="col-md-6 col-sm-12 mb-4">
                            
                            <img src="/assets/Frame 246.png" alt="Sobha Crystal Meadows" className="img-fluid image-container">
                            <div className="text-section mt-4">
                                <h1>Elite Meadows</h1>
                                <h2>Luxury Apartments</h2>
                                <p>Vilagan Hill Rd, Thrissur, Kerala 680555| 1491 to 2504 Sq. ft. |  3 & 4 BHK</p>
                            </div>
                        </div> --> */}
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
    </>
  );
};

export default Residential;
