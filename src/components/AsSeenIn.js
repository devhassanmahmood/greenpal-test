import React from 'react';

const AsSeenIn = () => {
  const sec2Styles = {
    background: 'linear-gradient(90deg, #00b45e 0%, #00ad50 30%, #009858 100%)',
    maxWidth: '100%',
    paddingBottom: '42px',
    backgroundSize: 'contain, contain',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundPosition: 'center, center',
    maxWidth: '100%',
    paddingBottom: '20px',
    display: 'flex',
    position: 'relative'
  };

  const container2Styles = {
    maxWidth: '1168px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%'
  };

  const sec2HeadingStyles = {
    textAlign: 'left',
  };

  const h2Styles = {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '46px',
    fontWeight: '600',
    lineHeight: '62px',
    paddingTop: '20px',
    marginTop: '0'
  };

  const sliderMainStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const logosListStyles = {
    flex: 1,
    maxWidth: '60%',
    minWidth: '300px'
  };

  const priceSliderStyles = {
    position: 'relative',
    overflow: 'hidden'
  };

  const carouselStyles = {
    position: 'relative'
  };

  const slideDataStyles = {
    overflow: 'hidden'
  };

  const carouselTrackStyles = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    animation: 'scroll 20s linear infinite',
    width: 'fit-content'
  };

  const logoItemStyles = {
    margin: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '98px',
    height: '50px'
  };

  const logoImageStyles = {
    height: 'auto',
    maxHeight: '50px',
    width: '98px',
    objectFit: 'contain'
  };

  React.useEffect(() => {
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

      .as-seen-in-logo {
        filter: brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(427%) hue-rotate(86deg) brightness(95%) contrast(89%) !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const reviewsSecStyles = {
    textAlign: 'right',
    color: '#FFFFFF',
    minWidth: '200px',
    flexShrink: 0
  };

  const h3Styles = {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
    color: '#FFFFFF'
  };

  const sec2ReviewsStyles = {
    fontSize: '16px',
    margin: '0 0 10px 0',
    color: '#FFFFFF'
  };

  const greenpalReviewsStyles = {
    display: 'flex',
    justifyContent: 'flex-end'
  };

  const starImageStyles = {
    height: '20px',
    width: 'auto'
  };

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
        <div style={container2Styles}>
          <div style={sec2HeadingStyles}>
            <h2 style={h2Styles}>As seen in...</h2>
          </div>
          <div style={sliderMainStyles}>
            <div style={logosListStyles}>
              <div style={priceSliderStyles}>
                <div style={carouselStyles}>
                  <div style={slideDataStyles}>
                    <ul style={carouselTrackStyles} className="as-seen-in-logos">
                      {logos.map((logo, index) => (
                        <li key={index} style={logoItemStyles}>
                          <img
                            style={{ ...logoImageStyles }}
                            className="as-seen-in-logo"
                            loading="lazy"
                            alt={`${logo.name} logo`}
                            title={`${logo.name} logo`}
                            src={logo.src}
                          />
                        </li>
                      ))}
                      {logos.map((logo, index) => (
                        <li key={`duplicate-${index}`} style={logoItemStyles}>
                          <img
                            style={{ ...logoImageStyles }}
                            className="as-seen-in-logo"
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
            </div>
            <div style={reviewsSecStyles}>
              <h3 style={h3Styles}>4.9 / 5</h3>
              <p style={sec2ReviewsStyles}>4,276 reviews</p>
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