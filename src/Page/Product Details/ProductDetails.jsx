import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './productdetails.css';
import ContactSection from '../../components/Contact Section/ContactSection';
import Footer from '../../components/Footer/Footer';
import { Fade, Slide } from 'react-awesome-reveal';
import BuildingCard from '../../components/BuildingCard/BuildingCard';
import moment from 'moment';
import customAxios from '../../../utils/CustomAxios.js';
import { pdf } from '@react-pdf/renderer';
import Brochure from '../../components/Brochure/Brochure';
import { saveAs } from 'file-saver';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
  const { id } = useParams();
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [state, setState] = useState({
    images: [],
    name: '',
    location: '',
    status: '',
    bedroom: '',
    hall: '',
    kitchen: '',
    district: '',
    price: '',
    areaRange: '',
    kreranumber: '',
    permitno: '',
    logo: '',
    qrcode: '',
    youtube: '',
    locationurl: '',
    statusgallery: {
      images: [],
    },
    gallery: {
      images: [],
    },
  });
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const fetchDataApiCall = async () => {
    try {
      const response = await customAxios.get(`/buildercard/${id}`);
      setState(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchAllDataApiCall = async () => {
    try {
      const response = await customAxios.get('/buildercard');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAccordionClick = index => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };
  const accordionItems = [
    {
      title: 'EDUCATIONAL INSTITUTIONS',
      content: 'Content for EDUCATIONAL INSTITUTIONS goes here.',
    },
    {
      title: 'PUBLIC OFFICES',
      content: 'Content for PUBLIC OFFICES goes here.',
    },
    {
      title: 'HEALTHCARE FACILITIES',
      content: 'Content for HEALTHCARE FACILITIES goes here.',
    },
    {
      title: 'PLACES OF WORSHIP',
      content: 'Content for PLACES OF WORSHIP goes here.',
    },
    {
      title: 'TRANSPORTATION',
      content: 'Content for TRANSPORTATION goes here.',
    },
    {
      title: 'SHOPPING & ENTERTAINMENT',
      content: 'Content for SHOPPING & ENTERTAINMENT goes here.',
    },
    {
      title: 'OTHER LANDMARKS',
      content: 'Content for OTHER LANDMARKS goes here.',
    },
    // Add more items as needed
  ];

  //download broshcure
  const brochureOnClick = async () => {
    const blob = await pdf(<Brochure state={state} />).toBlob();
    saveAs(blob, 'E-broshure.pdf');
  };
  //---------------------Modal-----------------------
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //------------------Enquiry--------------------------------

  const [enquiry, setEnquiry] = useState({});

  const onChangeEnquiry = (e, key) => {
    setEnquiry({ ...enquiry, [key]: e.target.value });
    console.log(enquiry);
  };

  const postEnquiryDatas = async () => {
    try {
      await customAxios.post('/enquiry', enquiry);
    } catch (e) {
      console.log(e.message);
    }
  };
  //--------------------Capcha----------------------

  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');

  const generateCaptcha = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 4; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return captcha;
  };

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptchaCode(newCaptcha);
  };

  const handleSubmit = () => {
    if (captchaInput === captchaCode) {
      if (
        enquiry.name.length < 3 ||
        enquiry.email.length < 3 ||
        !enquiry.email.includes('@gmail.com') ||
        enquiry.mobileno.length > 10 ||
        enquiry.mobileno.length < 10
      ) {
        toast.warn('Enter all fields correctly', {
          position: 'top-center',
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      } else {
        brochureOnClick();
        postEnquiryDatas();
        setCaptchaInput('');
        refreshCaptcha();
        handleClose();
      }
    } else {
      toast.error('Captcha did not match', {
        position: 'top-center',
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    fetchDataApiCall();
    fetchAllDataApiCall();
    refreshCaptcha();
    //------------------tidio script-----------------------

    // const tidioScript = document.createElement('script');
    // tidioScript.src =
    //   'https://code.tidio.co/nspaiu7lyplddbjj37luly2mj4nazusn.js';
    // tidioScript.async = true;
    // document.head.appendChild(tidioScript);

    // return () => {
    //   // Clean up: Remove Tidio script when component unmounts
    //   document.head.removeChild(tidioScript);
    // };
  }, []);

  useEffect(() => {
    // Initialize FancyBox after images are updated
    Fancybox.bind("[data-fancybox='gallery']", {
      loop: true,
      buttons: ['slideShow', 'fullScreen', 'thumbs', 'close'],
    });

    return () => {
      // Clean up FancyBox bindings
      Fancybox.destroy();
    };
  }, [state.images]);
  // console.log(state);

  return (
    <div>
      <ToastContainer style={{ marginTop: '100px' }} />
      <Header />

      <Slider {...settings}>
        {state.images.map((item, index) => (
          <div className="item" key={index}>
            <img
              src={item}
              alt="Gallery 1"
              className="carousel-image main-banner-image"
            />
            <div className="carousel-content">
              <div className="carousel-content-left">
                <h2>{state.name}</h2>
                <div className="location">
                  <i className="fa fa-map-marker"></i> {state.location}
                </div>
              </div>
              <div className="carousel-content-middle">
                <div className="arrows">
                  <i className="fa fa-chevron-down arrow-fade-1"></i>
                  <i className="fa fa-chevron-down arrow-fade-2"></i>
                  <i className="fa fa-chevron-down arrow-fade-3"></i>
                </div>
              </div>
              <div className="carousel-content-right">
                <div className="price">{state.price}</div>
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
      <Modal open={open} onClose={handleClose}>
        <Slide direction="down">
          <div
            className="modal modal-dialog modal-dialog-centered"
            style={{ marginTop: 100 }}
          >
            {/* <!-- Centered modal --> */}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Download Brochure
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                {/* <!-- Form to collect user information --> */}
                <form id="brochureForm">
                  <div className="mb-3">
                    <label for="userName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      onChange={e => onChangeEnquiry(e, 'name')}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="userEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={e => onChangeEnquiry(e, 'email')}
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="userPhone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={e => onChangeEnquiry(e, 'mobileno')}
                      placeholder="Enter 10 digit mobile number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="captcha" className="form-label">
                      Captcha
                    </label>
                    <div className="input-group mb-3">
                      <p className="captcha-code">{captchaCode}</p>
                      <div
                        className="captcha-circle"
                        onClick={refreshCaptcha}
                        style={{ height: '40px' }}
                      >
                        ↻
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Captcha"
                      value={captchaInput}
                      onChange={e => setCaptchaInput(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Slide>
      </Modal>

      <div className="container mt-5">
        <div className="row">
          {/* <!-- Left Section --> */}
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h1 className="font text anim">{state.name}</h1>
                <div className="location-rera">
                  <div className="mt-3">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{state.location}</span>
                  </div>
                  <div>
                    <i className="fas fa-certificate"></i>
                    <span>{state.kreranumber}</span>
                  </div>
                </div>
              </div>
              <div className="qr-code">
                <img
                  src={state.qrcode && state.qrcode.images}
                  alt="QR Code"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="logo text-center mt-5">
              <img
                src={state.logo && state.logo.images}
                alt="Paradiza Logo"
                className="img-fluid"
              />
            </div>
            <h2 className="mt-5 font texts anim">
              Premium Luxury Villas at {state.location}
            </h2>
            <p className="mt-5 text_para">{state.description}</p>
          </div>

          {/* Right Section  */}
          <div className="col-md-6 right-section">
            <div
              className="card"
              style={{ backgroundColor: '#ede9e2', borderRadius: '0px' }}
            >
              <div className="card-body">
                <h3 className="card-titles font mt-5 anima">
                  Project Overview
                </h3>
                <div className="text-center mt-5">
                  <button className="btn btn-primarys">Enquire Now</button>
                  <button
                    className="btn btn-outline-secondarys"
                    data-bs-toggle="modal"
                    data-bs-target="#brochureModal"
                    onClick={() => {
                      handleOpen();
                    }}
                    // onClick={brochureOnClick}
                  >
                    E-Brochure
                  </button>
                </div>
                <ul className="list-unstyled mt-3">
                  <li>
                    <strong>Location</strong>
                    <p>{state.location}</p>
                  </li>
                  <li>
                    <strong>Permit Number</strong>
                    <p>{state.permitno}</p>
                  </li>
                  <li>
                    <strong>K-RERA Number</strong>
                    <p>{state.kreranumber}</p>
                  </li>
                  <li>
                    <strong>Status</strong>
                    <p>{state.status}</p>
                  </li>
                  <li>
                    <strong>Unit Type</strong>
                    <p>{state.apartmenttype} BHK Villa</p>
                  </li>
                  <li>
                    <strong>Area Range</strong>
                    <p>{state.areaRange} Sq ft</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        {/* <!-- Section 1 with one large image --> */}
        <div className="grid-item section-1">
          <a
            data-fancybox="gallery"
            href={state.gallery && state.gallery.images[0]}
          >
            <img
              src={state.gallery && state.gallery.images[0]}
              className="image"
              alt="Section 1 Image"
            />
          </a>
          <div className="gallery-heading">Gallery</div>
          {/* <!-- Adding the heading --> */}
        </div>

        {/* <!-- Section 2 with two vertically aligned images --> */}
        <div className="grid-item section-2">
          <a
            data-fancybox="gallery"
            href={state.gallery && state.gallery.images[1]}
          >
            <img
              src={state.gallery && state.gallery.images[1]}
              className="image"
              alt="Section 2 Top Image"
            />
          </a>
          <a
            data-fancybox="gallery"
            href={state.gallery && state.gallery.images[2]}
          >
            <img
              src={state.gallery && state.gallery.images[2]}
              className="image"
              alt="Section 2 Bottom Image"
            />
          </a>
        </div>

        {/* <!-- Section 3 with one tall image --> */}
        <div className="grid-item section-3">
          <a
            data-fancybox="gallery"
            href={state.gallery && state.gallery.images[3]}
          >
            <img
              src={state.gallery && state.gallery.images[3]}
              className="image"
              alt="Section 3 Image"
            />
          </a>
        </div>

        {/* <!-- Section 4 with two vertically aligned images --> */}
        <div className="grid-item section-4">
          <a
            data-fancybox="gallery"
            href={state.gallery && state.gallery.images[4]}
          >
            <img
              src={state.gallery && state.gallery.images[4]}
              className="image"
              alt="Section 4 Top Image"
            />
          </a>
          <a
            data-fancybox="gallery"
            href={state.gallery && state.gallery.images[5]}
          >
            <img
              src={state.gallery && state.gallery.images[5]}
              className="image"
              alt="Section 4 Bottom Image"
            />
          </a>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="text-center font project-heading">Project Plans</h2>
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={false}
          draggable={false}
          infinite={true}
          afterChange={false}
          // partialVisible={false}
          // dotListclassName="custom-dot-list-style"
        >
          <div className="item">
            <a data-fancybox="plan">
              <img
                src={state.siteplan && state.siteplan.images[0]}
                alt="Plan 1"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="item">
            <a data-fancybox="plan">
              <img
                src={state.siteplan && state.siteplan.images[1]}
                alt="Plan 2"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="item">
            <a href="assets/Frame 38.png" data-fancybox="plan">
              <img
                src={state.siteplan && state.siteplan.images[2]}
                alt="Plan 3"
                className="img-fluid"
              />
            </a>
          </div>
        </Carousel>

        {/* </div>  div end */}
      </div>
      <ContactSection />
      <div
        className=""
        style={{
          position: 'relative',
          backgroundImage: `url(${state.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '438px',
        }}
      >
        <div className="virtual-tour-heading font">Virtual Tour</div>
        <button
          className="play-button"
          data-bs-toggle="modal"
          data-bs-target="#videoModal"
        >
          <i className="fa fa-play" aria-hidden="true"></i>
          {/* <!-- FontAwesome icon --> */}
          PLAY NOW
        </button>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
        style={{ marginTop: '70px' }}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                VIRTUAL TOUR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="560"
                src={state.youtube}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-container mt-5">
        <span className="heading-text font">Amenities</span>
      </div>
      <div className="carousel-container container mt-5 animas mb-5">
        {/* //start */}
        <Carousel
          responsive={responsive2}
          autoPlay={false}
          swipeable={false}
          draggable={false}
          infinite={true}
          afterChange={false}
          // partialVisible={false}
          // dotListclassName="custom-dot-list-style"
        >
          <div className="square">
            <img src="/assets/club 1.png" alt="Club House" />
            <p>Club House</p>
          </div>
          <div className="square">
            <img src="/assets/house-plants 1.png" alt="Rooftop Garden" />
            <p>Rooftop Garden</p>
          </div>
          <div className="square">
            <img src="/assets/intercom 1.png" alt="Video Door Phone" />
            <p>Video Door Phone</p>
          </div>
          <div className="square">
            <img src="/assets/swimmer 1.png" alt="Swimming Pool" />
            <p>Swimming Pool</p>
          </div>
          <div className="square">
            <img src="/assets/exercise 1.png" alt="Gym" />
            <p>Gym</p>
          </div>
        </Carousel>
      </div>
      <div className="container" style={{ marginTop: '120px' }}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="map-heading">Location Map</h2>
            <div className="map-container mt-5">
              <iframe
                src={state.locationurl}
                width="550"
                height="550"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                className="map-frame"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="map-heading">Location Highlights</h2>
            <div className="accordion mt-5">
              {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        index === activeIndex ? '' : 'collapsed'
                      }`}
                      type="button"
                      onClick={() => handleAccordionClick(index)}
                      style={{ borderRadius: '20px' }}
                    >
                      {item.title}
                      <div className="icon-circle">
                        <i
                          className={`fas ${
                            index === activeIndex
                              ? 'fa-chevron-up'
                              : 'fa-chevron-down'
                          }`}
                        ></i>
                      </div>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      index === activeIndex ? 'show' : ''
                    }`}
                  >
                    <Slide direction="down">
                      <div className="accordion-body">{item.content}</div>
                    </Slide>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* //qweqweqweqweq */}

      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="container text-center logos">
              <div className="heading-container mt-5">
                <span className="heading-text font">Project Approved By</span>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-12 col-sm-2 px-1 logose">
                  <img
                    src="/assets/HDFC LOGO 1.png"
                    alt="HDFC Bank"
                    className="img-fluid-custom"
                  />
                </div>
                <div className="col-12 col-sm-2 px-1 logose">
                  <img
                    src="/assets/ICIC LOGO 1.png"
                    alt="ICICI Bank"
                    className="img-fluid-custom"
                  />
                </div>
                <div className="col-12 col-sm-2 px-1 logose">
                  <img
                    src="/assets/SBI LOGO 1.png"
                    alt="State Bank of India"
                    className="img-fluid-custom"
                  />
                </div>
                <div className="col-12 col-sm-2 px-1 logose">
                  <img
                    src="/assets/AXIS LOGO 1.png"
                    alt="Axis Bank"
                    className="img-fluid-custom"
                  />
                </div>
                <div className="col-12 col-sm-2 px-1 logose">
                  <img
                    src="/assets/FEDERAL LOGO 1.png"
                    alt="Federal Bank"
                    className="img-fluid-custom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 pt-5 mb-5">
            <div className="container">
              <div className="heading-container mt-5">
                <span className="heading-text font">Project Status</span>
              </div>
              <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={false}
                draggable={false}
                infinite={true}
                afterChange={false}
                className="mt-5 d-flex"
              >
                {state.statusgallery.images.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="img-container">
                      <a data-fancybox="status">
                        <img src={item} alt="Image 1" className="img-fluid" />
                      </a>
                      <div className="date-overlay">
                        {moment(state.statusgallery.date).format(
                          'MMMM D, YYYY'
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        {/* <!-- <div className="gradient-line"></div> --> */}
      </div>
      <BuildingCard />
      <div style={{ marginTop: '80px' }}></div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
