import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const MoreAbout = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-5 mt-5"
      style={{ backgroundColor: '#F0ECEC' }}
    >
      <div className="heading-container">
        <span className="heading-text font">More About Elite</span>
      </div>
      <Fade direction="up" triggerOnce>
        <div className="container my-card-container mt-5">
          <div className="row">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4 pt-5 ">
              <div
                className="my-card card h-100"
                style={{ borderRadius: '15px' }}
              >
                <img
                  className="my-card-img"
                  src="/assets/news_events.jpg.png"
                  alt="Media Centre"
                  style={{
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <div className="my-card-body">
                  <h5 className="my-card-title">MEDIA CENTRE</h5>
                  <p className="my-card-text">
                    A one touch source for news from the media lens. Get access
                    to our brand assets – newsletters, press kit, and more.
                  </p>
                  <a href="/media-center" className="my-card-link">
                    FIND OUT MORE
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5 ">
              <div
                className="my-card card h-100"
                style={{ borderRadius: '15px' }}
              >
                <img
                  className="my-card-img"
                  src="/assets/elite_previlage.jpg.png"
                  alt="Media Centre"
                  style={{
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <div className="my-card-body">
                  <h5 className="my-card-title">ELITE PRIVILEGE</h5>
                  <p className="my-card-text">
                    A one-of-a-kind rewards programme, ELITE Privilege is
                    feature loaded. Welcome your friends and relatives to the
                    ELITE family and get rewarded too.
                  </p>
                  <a href="/elite-privilage" className="my-card-link">
                    FIND OUT MORE
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5 ">
              <div
                className="my-card card h-100"
                style={{ borderRadius: '15px' }}
              >
                <img
                  className="my-card-img"
                  src="/assets/blog.jpg.png"
                  alt="Media Centre"
                  style={{
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <div className="my-card-body">
                  <h5 className="my-card-title">ELITE BLOG</h5>
                  <p className="my-card-text">
                    Get latest insights from the construction sector and
                    in-depth views on real estate investment avenues, and more
                    from our thought leaders.
                  </p>
                  <a href="/elite-blog" className="my-card-link">
                    FIND OUT MORE
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Repeat for Card 2 and Card 3 with similar structure -->
        <!-- ... --> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MoreAbout;
