import React, { useState, useEffect } from 'react';

const AsSeenIn = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 480);
      setIsTablet(width > 480 && width <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sec2Styles = {
    background: 'linear-gradient(90deg, #00b45e 0%, #00ad50 30%, #009858 100%)',
    maxWidth: '100%',
    paddingBottom: '22px',
    display: 'flex',
    position: 'relative'
  };

  const container2Styles = {
    maxWidth: '1168px',
    margin: '0 auto',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 20px',
    width: '100%'
  };

  const sec2HeadingStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '5px' : isTablet ? '0px' : '0px'
  };

  const h2Styles = {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '46px',
    fontWeight: '600',
    lineHeight: isMobile ? '32px' : isTablet ? '40px' : '62px',
    paddingTop: isMobile ? '15px' : isTablet ? '20px' : '20px',
    marginTop: '0',
    marginBottom: '0'
  };

  const sliderMainStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: screenWidth <= 1024 ? 'wrap' : 'nowrap',
    gap: isMobile ? '20px' : isTablet ? '25px' : '20px',
    flexDirection: screenWidth <= 1024 ? 'column' : 'row',
    position: 'relative',
    width: '100%'
  };

  const logosListStyles = {
    flex: isMobile || isTablet ? 'none' : 1,
    maxWidth: isMobile || isTablet ? '100%' : '80%',
    minWidth: isMobile ? 'auto' : isTablet ? 'auto' : '300px',
    order: isMobile || isTablet ? 1 : 'unset',
    position: 'relative',
    overflow: 'hidden'
  };

  const priceSliderStyles = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  };

  const carouselStyles = {
    position: 'relative',
    width: '100%'
  };

  const slideDataStyles = {
    overflow: 'hidden',
    width: '100%'
  };

  const carouselTrackStyles = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    animation: 'scroll 20s linear infinite',
    width: 'fit-content',
    flexWrap: 'nowrap',
    alignItems: 'center'
  };

  const logoItemStyles = {
    margin: isMobile ? '0 8px' : isTablet ? '0 15px' : '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: isMobile ? '70px' : isTablet ? '85px' : '98px',
    height: isMobile ? '35px' : isTablet ? '45px' : '50px',
    flexShrink: 0
  };

  const logoImageStyles = {
    height: 'auto',
    maxHeight: isMobile ? '35px' : isTablet ? '45px' : '50px',
    width: isMobile ? '70px' : isTablet ? '85px' : '98px',
    objectFit: 'contain',
    flexShrink: 0
  };

  const reviewsSecStyles = {
    textAlign: 'right',
    color: '#FFFFFF',
    minWidth: isMobile || isTablet ? 'auto' : '200px',
    flexShrink: 0,
    order: isMobile || isTablet ? 2 : 'unset',
    marginTop: screenWidth > 1024 ? '-25px' : '0',
    display: isMobile ? 'flex' : 'block',
    flexDirection: isMobile ? 'row' : 'column',
    justifyContent: isMobile ? 'center' : 'flex-end',
    alignItems: isMobile ? 'end' : 'flex-end'
  };

  const h3Styles = {
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '36px',
    color: '#FFFFFF',
    opacity: 0.9,
    margin: 0,
    fontFamily: 'Poppins',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  };

  const sec2ReviewsStyles = {
    fontSize: '17px',
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: '24px',
    margin: 0,
    marginTop: '-3px',
    fontFamily: 'Poppins',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  };

  const greenpalReviewsStyles = {
    display: 'flex',
    justifyContent: isMobile || isTablet ? 'center' : 'flex-end'
  };

  const starImageStyles = {
    height: isMobile ? '18px' : isTablet ? '20px' : '20px',
    width: 'auto'
  };

  // Vertical line styles for desktop (above 1024px) - positioned for reviews section
  const verticalLineStyles = {
    position: 'relative',
    right: '26px',
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    width: '2px',
    height: '95px',
    display: screenWidth > 1024 ? 'block' : 'none',
    float: 'left',
    content: '""'
  };

  const horizontalLineStyles = {
    position: 'relative',
    top: '18px',
    width: '100%',
    margin: '0 auto',
    color: '#D8D8D8',
    opacity: 0.16,
    height: '1px',
    clear: 'both',
    marginBottom: '20px',
    display: screenWidth <= 1024 ? 'block' : 'none',
    backgroundColor: '#D8D8D8',
    border: 'none',
    marginTop: '20px',
    justifyContent: 'center'
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @media (max-width: 768px) {
        .as-seen-in-logos {
          animation: scroll 15s linear infinite;
        }
      }
      
      @media (max-width: 480px) {
        .as-seen-in-logos {
          animation: scroll 12s linear infinite;
        }
      }

      .as-seen-in-logo {
        filter: brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(427%) hue-rotate(86deg) brightness(95%) contrast(89%) !important;
      }
      
      .as-seen-in-logos {
        display: flex !important;
        flex-wrap: nowrap !important;
        align-items: center !important;
      }
      
      .as-seen-in-logo-item {
        flex-shrink: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const logos = [
    {
      name: 'Inc.',
      src: 'https://greenpal-production.s3.amazonaws.com/images/local/landscaping-services-near-me.svg',
      height: '32px'
    },
    {
      name: 'Wall Street Journal',
      src: 'https://greenpal-production.s3.amazonaws.com/images/local/affordable-landscape-companies.webp',
      height: '38px'
    },
    {
      name: 'Forbes',
      src: 'https://greenpal-production.s3.amazonaws.com/images/local/lawn-care-services-near-me-1.svg',
      height: '24px'
    },
    {
      name: 'Harvard Business Review',
      src: 'https://greenpal-production.s3.amazonaws.com/images/local/harverd-business-review.webp',
      height: '50px'
    },
    {
      name: 'TIME',
      src: 'https://greenpal-production.s3.amazonaws.com/images/local/affordable-landscape-maintenance-services-1.svg',
      height: '38px'
    }
  ];

  return (
    <div id="as-seen-in">
      <section style={sec2Styles}>
        <div style={container2Styles} className="as-seen-in-container">
          <div style={sec2HeadingStyles}>
            <h2 style={h2Styles} className="as-seen-in-heading">As seen in...</h2>
          </div>
          <div style={sliderMainStyles} className="as-seen-in-slider">
            <div style={logosListStyles} className="as-seen-in-logos-container">
              <div style={priceSliderStyles}>
                <div style={carouselStyles}>
                  <div style={slideDataStyles}>
                    <ul style={carouselTrackStyles} className="as-seen-in-logos">
                      {logos.map((logo, index) => (
                        <li key={index} style={logoItemStyles} className="as-seen-in-logo-item">
                          <img
                            style={logoImageStyles}
                            className="as-seen-in-logo as-seen-in-logo-img"
                            loading="lazy"
                            alt={`${logo.name} logo`}
                            title={`${logo.name} logo`}
                            src={logo.src}
                          />
                        </li>
                      ))}
                      {/* Duplicate logos for seamless scrolling */}
                      {logos.map((logo, index) => (
                        <li key={`duplicate-${index}`} style={logoItemStyles} className="as-seen-in-logo-item">
                          <img
                            style={logoImageStyles}
                            className="as-seen-in-logo as-seen-in-logo-img"
                            loading="lazy"
                            alt={`${logo.name} logo`}
                            title={`${logo.name} logo`}
                            src={logo.src}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <hr style={horizontalLineStyles} className="hr-style" />
            </div>
            <div style={reviewsSecStyles} className="as-seen-in-reviews reviews_sec">
              {/* Vertical line for reviews section (desktop) */}
              <div style={verticalLineStyles}></div>
              <h3 style={h3Styles}>4.8/5</h3>
              <p style={sec2ReviewsStyles} className="sec2_reviews">4,276 reviews</p>
              <div style={greenpalReviewsStyles}>
                <img
                  loading="lazy"
                  alt="rating stars"
                  title="rating stars"
                  src="https://greenpal-production.s3.amazonaws.com/images/rating-stars.png"
                  style={starImageStyles}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsSeenIn; 