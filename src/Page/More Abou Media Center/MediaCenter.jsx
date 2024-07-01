import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './mediacenter.css';
import Footer from '../../components/Footer/Footer';
import customAxios from '../../../utils/CustomAxios.js';
import moment from 'moment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const MediaCenter = () => {
  // Render function for MediaCenter component
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
      breakpoint: { max: 767, min: 200 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
    ],
  };

  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [blog, setBlog] = useState([]);

  const fetchBlogApi = async () => {
    try {
      const response = await customAxios.get('/blogcard');
      setBlog(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onClickReadMore = id => {
    navigate(`/elite-blog-extra/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNewsAndEvents = async () => {
    try {
      const response = await customAxios.get('/newsandevents');
      setEvents(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onNewsAndEventsClick = id => {
    navigate(`/media-center/image-gallery/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    //get api call
    getNewsAndEvents();
    fetchBlogApi();
    // Load Instagram script
    const instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Load Twitter script
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.async = true;
    twitterScript.charset = 'utf-8';
    document.body.appendChild(twitterScript);
    return () => {
      document.body.removeChild(instagramScript);
      document.body.removeChild(twitterScript);
    };
  }, []);
  console.log(events);
  return (
    <>
      <Header />
      <div className="image-section">
        <img
          src="/assets/social_medi_image.webp"
          alt="philosophy"
          className="img-fluid"
        />
        <div className="header-overlay">
          <h1>Media Center</h1>
          <p></p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="dropdown-containers mt-3 text-center">
          <select
            className="dropdown-menu form-control"
            id="linkDropdown"
            onChange={e => scrollToSection(e.target.value)}
            style={{ borderRadius: '0px' }}
          >
            <option value="">Select Section</option>
            <option value="#section2">NEWS AND EVENTS</option>
            <option value="#section1">SOCIAL MEDIA FEEDS</option>
            <option value="#section3">PLANT FOR THE PLANET</option>
            <option value="#section4">BLOGS</option>
            <option value="#">BRAND MANUAL</option>
          </select>
        </div>
        <div className="link-section">
          <a href="#section2" className="nav-link">
            NEWS AND EVENTS
          </a>
          <a href="#section1" className="nav-link">
            SOCIAL MEDIA FEEDS
          </a>
          <a href="#section3" className="nav-link">
            PLANT FOR THE PLANET
          </a>
          <a href="#section4" className="nav-link">
            BLOGS
          </a>
          <a href="#" className="nav-link">
            BRAND MANUAL
          </a>
        </div>
      </div>
      <div id="section2" className="content-section mt-5 ">
        <div className="container mt-5">
          <div className="text-center font">
            <h2>News And Events</h2>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={false}
            draggable={false}
            infinite={true}
            afterChange={false}
            // partialVisible={false}
            // dotListClass="custom-dot-list-style"
          >
            {events.map(item => (
              <div className="item text-center" key={item._id}>
                <a
                  //  href="/media-center/image-gallery"
                  onClick={() => onNewsAndEventsClick(item._id)}
                  className="media-link"
                >
                  <img
                    src={item && item.images[0]}
                    alt="Image 1"
                    className="img-fluid"
                  />
                  <p>{moment(item.date).format('MMMM D YYYY')}</p>
                  <h4 className="news-heading">{item.heading}</h4>
                </a>
              </div>
            ))}

            {/* <div className="item text-center">
              <a href="/media-center/image-gallery" className="media-link">
                <img
                  src="/assets/Frame 302.png"
                  alt="Image 2"
                  className="img-fluid"
                />
                <p>April 15, 2021</p>
                <h4 className="news-heading">Environmental Awareness Day</h4>
              </a>
            </div>

            <div className="item text-center">
              <a href="/media-center/image-gallery" className="media-link">
                <img
                  src="/assets/Frame 306.png"
                  alt="Image 3"
                  className="img-fluid"
                />
                <p>May 10, 2021</p>
                <h4 className="news-heading">Employee Health and Wellness</h4>
              </a>
            </div> */}
          </Carousel>

          {/* <div
            className="custom-navigation text-center"
            style={{ paddingTop: '10px' }}
          >
            <button id="customPrev" className="btn custom-nav-btn">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button id="customNext" className="btn custom-nav-btn">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div> */}
        </div>
      </div>

      <div id="section1" className="content-section mt-5">
        <div className="text-center font">
          <h2>Social Media Feeds</h2>
        </div>
        <div className="container" style={{ marginTop: '70px' }}>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-12 pt-5 d-flex justify-content-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/elitedevelopersindia/"
                data-instgrm-version="13"
              ></blockquote>
              <script async src="//www.instagram.com/embed.js"></script>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-12 pt-5 d-flex justify-content-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Elitedevlp&tabs=timeline&width=340&height=500"
                width="320"
                height="480"
                style={{ border: 'none', overflow: 'hidden' }}
                frameorder="0"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-12 pt-5 d-flex justify-content-center">
              <a
                className="twitter-timeline"
                data-width="320"
                data-height="480"
                href="https://twitter.com/eliterealtydev?ref_src=twsrc%5Etfw"
              >
                Tweets by eliterealtydev
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
            </div>
          </div>
        </div>
      </div>

      <div
        id="section3"
        className="content-section"
        style={{ marginTop: '70px' }}
      >
        <div className="text-center font">
          <h1>It's True We Use Trees For Constructions</h1>
          <h2 className="mt-3" style={{ color: '#77c15f' }}>
            By Keeping Them Alive!
          </h2>
        </div>
        <div className="container">
          <div
            className="planet-paragraph mt-5"
            style={{ textAlign: 'center' }}
          >
            <p className="descriptions">
              Elite Developers launched its “Plant for the Planet” as part of it
              corporate social responsibility initiative to bring awareness on
              sustainable development through tree plantation. As part of this
              program, Elite has committed to plant at at least a 1000 trees
              this year. This initiative was launched at Shri. Ramakrishna
              Mission School, Puranattukara and Elite Gardenia Hills under the
              guidance of KFRI, Peechi and Kerala Agriculture University
              (Forestry Dept.) Apart from the tree planting activity, Elite also
              organises talks for the students at schools to promote awareness
              among students on the importance of trees and the need to protect
              them.
            </p>
          </div>
          <div className="container mt-5">
            <Carousel
              responsive={responsive}
              autoPlay={false}
              swipeable={false}
              draggable={false}
              infinite={true}
              afterChange={false}
              // partialVisible={false}
              // dotListClass="custom-dot-list-style"
            >
              <div className="item text-center">
                <a href="">
                  <img
                    src="/assets/plant-1.jpg"
                    alt="Image 1"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="item text-center">
                <img
                  src="/assets/plant-2.jpg"
                  alt="Image 2"
                  className="img-fluid"
                />
              </div>

              <div className="item text-center">
                <img
                  src="/assets/plant-3.jpg"
                  alt="Image 3"
                  className="img-fluid"
                />
              </div>
              <div className="item text-center">
                <img
                  src="/assets/plant-4.jpg"
                  alt="Image 3"
                  className="img-fluid"
                />
              </div>
              <div className="item text-center">
                <img
                  src="/assets/plant-5.jpg"
                  alt="Image 3"
                  className="img-fluid"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div id="section4" className="content-section">
        <div className="text-center font">
          <h2>Blogs</h2>
        </div>

        <div className="container my-blog-container mt-5 mb-5">
          <Slider {...settings}>
            {blog.map(item => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item._id}>
                <div className="card h-100 m-1">
                  <img
                    className="card-img-top img-fluid-blog"
                    src={item && item.images && item.images[0]}
                    alt="Blog Title"
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="blog-date text-muted mt-3">
                      {moment(item.date).format('MMMM D YYYY')}
                    </p>
                    <h5 className="card-title-blog font mt-3 line-clamp-2">
                      {item.heading}
                    </h5>
                    <p
                      className="card-text-blog flex-grow-1 mt-3 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />

                    <a
                      onClick={() => onClickReadMore(item._id)}
                      className="mt-auto blog-read-more"
                    >
                      READ MORE <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MediaCenter;
