import React, { useState, useEffect } from 'react';
import headerImage from '../assets/header_image.jpg';
import downArrowImage from '../assets/down-arrow.svg';
import logoImage from '../assets/logo.svg';
import arrowNextGeoImage from '../assets/arrow-next-geo.svg';
import orangeBottomArrowImage from '../assets/orange-bottom-arrow.svg';
import arrowBtnImage from '../assets/shape-copy-13.svg';
import garyPointingLeftImage from '../assets/character.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Add CSS keyframes for header arrow animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes header-arrow-bottom {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        50% {
          -webkit-transform: translateY(-7px);
          transform: translateY(-7px);
        }
        55% {
          -webkit-transform: translateY(-7px);
          transform: translateY(-7px);
        }
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const fixedStyles = {
    zIndex: 999,
    transition: 'linear 0.5s',
    height: isMobile ? '60px' : '63px',
    width: '100%',
    left: 0,
    position: 'fixed',
    top: 0
  };

  const topBarStyles = {
    background: isScrolled ? '#3aa2e1' : 'transparent',
    height: isMobile ? '60px' : '63px',
    transition: 'linear 0.5s',
    overflow: 'hidden',
    lineHeight: isMobile ? '2.5rem' : '2.8125rem',
    position: 'relative',
    marginBottom: 0,
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const titleAreaStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '3px 15px' : isTablet ? '3px 20px' : '3px 20px',
    paddingTop: isMobile ? '8px' : '12px',
    paddingBottom: isMobile ? '8px' : '12px',
    width: isMobile ? '100%' : isTablet ? '90%' : '1168px',
    maxWidth: '1168px'
  };

  const logoStyles = {
    marginLeft: isMobile ? '0' : '8px',
    maxWidth: isMobile ? '120px' : 'auto',
    height: 'auto'
  };

  const rightNavStyles = {
    padding: 0,
    height: 'auto',
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: '1.6',
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: isMobile ? '10px' : '15px',
    alignItems: 'center'
  };

  const testLiStyles = {
    transition: 'linear 0.5s',
    opacity: 1
  };

  const headerSeePricesStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f68519',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    padding: isMobile ? '6px 12px' : '8px',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    borderRadius: '24.5px',
    width: isMobile ? '120px' : isTablet ? '150px' : '216px',
    height: isMobile ? '35px' : '40px',
    fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
    top: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textDecoration: 'none',
  };

  const getStartedStyles = {
    color: '#fff',
    fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
    paddingRight: isMobile ? '10px' : '23px',
    lineHeight: '2',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textDecoration: 'none',
    display: isMobile ? 'none' : 'block'
  };

  const headerFillStyles = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '500px' : isTablet ? '600px' : '670px',
    overflow: 'hidden'
  };

  const sec1ImgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  };

  const headerMsgStyles = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    WebkitTransform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    zIndex: 2,
    width: '100%',
    maxWidth: '100%',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 20px',
    boxSizing: 'border-box'
  };

  const mainHeadingStyles = {
    color: '#FFFFFF',
    width: isMobile ? '90%' : isTablet ? '80%' : '70%',
    margin: '0 auto',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };

  const h1Styles = {
    color: '#FFFFFF',
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '71px',
    fontWeight: 600,
    lineHeight: isMobile ? '36px' : isTablet ? '52px' : '72px',
    margin: '0 0 20px 0',
    letterSpacing: 'normal'
  };

  const locationServiceStyles = {
    fontSize: isMobile ? '20px' : isTablet ? '28px' : '40px',
    marginTop: isMobile ? '10px' : isTablet ? '12px' : '16px',
    marginBottom: isMobile ? '15px' : isTablet ? '20px' : '25px',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 800,
  };

  const addressVariantStyles = {
    marginTop: isMobile ? '20px' : isTablet ? '30px' : '40px',
    width: '100%'
  };

  const lawnCareBannerInputHeadingStyles = {
    marginBottom: isMobile ? '15px' : '10px',
    width: '100%'
  };

  const getSearchBarWidth = () => {
    if (isMobile) {
      return '90%';
    } else if (screenWidth >= 1600) {
      return '800px';
    } else if (screenWidth >= 1500) {
      return '700px';
    } else if (screenWidth <= 1250) {
      return '500px';
    } else {
      return '600px';
    }
  };

  const addressFormStyles = {
    width: getSearchBarWidth(),
    height: isMobile ? '50px' : isTablet ? '60px' : '70px',
    borderRadius: isMobile ? '50px' : isTablet ? '60px' : '70px',
    margin: '0 auto',
    border: '1px solid #FF9000',
    paddingLeft: isMobile ? '20px' : isTablet ? '25px' : '30px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    position: 'relative',
    transition: 'width 0.3s ease, height 0.3s ease'
  };

  const formStyles = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '10px' : '15px',
    height: '100%'
  };

  const checkAlignStyles = {
    position: 'relative',
    flex: 1
  };

  const googlePlaceAutocompleteStyles = {
    width: '100%'
  };

  const formControlStyles = {
    width: '100%'
  };

  const labelStyles = {
    display: 'none'
  };

  const inputDiveStyles = {
    width: '100%'
  };

  const inputStyles = {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
    backgroundColor: 'transparent',
    color: '#333',
    padding: isMobile ? '6px 0' : '8px 0'
  };

  const gpInputGroup1Styles = {
    display: 'none'
  };

  const gpInputGroup2Styles = {
    display: 'none'
  };

  const materialInputStyles = {
    display: 'none'
  };

  const gpInputGroupBtnStyles = {
    flexShrink: 0,
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%'
  };

  const submitButtonStyles = {
    height: isMobile ? '51px' : isTablet ? '61px' : '71px',
    width: isMobile ? '120px' : isTablet ? '140px' : '170px',
    backgroundColor: '#FF9000',
    color: '#FFFFFF',
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px',
    textAlign: 'center',
    border: '0',
    outline: 'none',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    borderRadius: isMobile ? '50px' : isTablet ? '50px' : '50px',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 23px',
    position: 'absolute',
    cursor: 'pointer',
    right: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '6px' : isTablet ? '7px' : '8px'
  };

  const btnTextStyles = {
    color: '#fff',
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px'
  };

  const arrowBtnStyles = {
    height: isMobile ? '16px' : isTablet ? '18px' : '19px',
    width: isMobile ? '9px' : isTablet ? '10px' : '11px'
  };

  const headerBottomStyles = {
    position: 'absolute',
    bottom: isMobile ? '15px' : '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '100%',
    maxWidth: '100%'
  };

  const headerArrowStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '15px' : '20px'
  };

  const headerArrowAnimatedStyles = {
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'all 0.2s ease-in-out',
    animation: 'header-arrow-bottom 1.7s ease infinite'
  };

  const headerArrowImgStyles = {
    width: isMobile ? '25px' : '30px',
    height: 'auto'
  };

  const grayMatchineSecStyles = {
    textAlign: 'center',
    width: '100%',
    position: 'relative'
  };

  const garyPointingLeftStyles = {
    width: screenWidth >= 1250 ? '274px' : '200px',
    height: 'auto',
    maxWidth: '100%',
    position: 'absolute',
    top: screenWidth >= 1250 ? '-210px' : '-115px',
    right: screenWidth >= 1250 ? '8%' : '5%',
    zIndex: 3,
    display: screenWidth >= 1250 ? 'block' : 'none' // Hide under 1250px
  };

  return (
    <>
      <div style={fixedStyles}>
        <nav style={topBarStyles}>
          <div style={titleAreaStyles}>
            <span style={{ flexShrink: 0 }}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <img
                  id="logo-image"
                  loading="lazy"
                  alt="local-lawn-cutting-services-in-Columbus-OH"
                  title="the-yard-cutting-businesses-in-Columbus-OH"
                  src={logoImage}
                  style={logoStyles}
                />
              </a>
            </span>
            <span>
              <div style={rightNavStyles}>
                <div style={{ ...testLiStyles, display: 'flex', alignItems: 'center' }}>
                  <a href="/new-homeowner-signup" style={getStartedStyles}>
                    Get Started With Free Quotes
                    <img
                      alt="lawn-care-services-and-maintenance"
                      loading="lazy"
                      src={arrowNextGeoImage}
                      style={{ maxWidth: '100%', height: 'auto', display: 'inline', verticalAlign: 'baseline', marginLeft: '5px' }}
                    />
                  </a>
                </div>
                <div style={{ ...testLiStyles, display: 'flex', alignItems: 'center' }}>
                  <a
                    href="/new-homeowner-signup"
                    style={headerSeePricesStyles}
                  >
                    See Prices
                  </a>
                </div>
              </div>
            </span>
          </div>
        </nav>
      </div>

      <div style={headerFillStyles}>
        <img
          alt="affordable-grass-cutting-businesses-in-Columbus-OH"
          title="residential-lawn-cutting-businesses-in-Columbus-OH"
          src={headerImage}
          style={sec1ImgStyles}
        />
        <div style={headerMsgStyles}>
          <div style={mainHeadingStyles}>
            <h1 style={h1Styles}>Professional Lawn Care Services in Columbus</h1>
          </div>
          <div style={locationServiceStyles}>
            <div>Fast, Easy, & Free Quotes</div>
          </div>
          <div>
            <div style={addressVariantStyles}>
              <div style={lawnCareBannerInputHeadingStyles}>
                <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center', width: '100%' }}>
                  <p style={{ 
                    color: '#FF9000',   
                    fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px', 
                    fontWeight: '600', 
                    lineHeight: isMobile ? '32px' : isTablet ? '36px' : '38px', 
                    textAlign: 'center', 
                    margin: 0,
                    display: 'inline'
                  }}>
                    Book your grass cutting in 60 seconds
                  </p>
                  <img
                    alt="Orange Bottom Arrow"
                    src={orangeBottomArrowImage}
                    style={{
                      position: 'absolute',
                      marginLeft: '5px',
                      top: '70%',
                      transform: 'translateY(-30%)',
                      width: isMobile ? '8px' : isTablet ? '9px' : '10px',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>

              <div style={addressFormStyles}>
                <form style={formStyles} id="new_user" autoComplete="off" encType="multipart/form-data" action="/users" acceptCharset="UTF-8" method="post" noValidate>
                  <div style={checkAlignStyles} id="check_align">
                    <div id="google-place-autocomplete">
                      <div style={googlePlaceAutocompleteStyles}>
                        <div style={formControlStyles}>
                          <label style={labelStyles} htmlFor="address-autocomplete">
                            <span>Enter your house address</span>
                          </label>
                          <div style={{ display: 'none' }}></div>
                          <div style={inputDiveStyles}>
                            <input type="password" style={{ display: 'none' }} />
                            <input
                              id="address-autocomplete"
                              autoComplete="off"
                              type="text"
                              placeholder="Enter your house address"
                              name="location"
                              style={inputStyles}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={gpInputGroup1Styles}>
                      <input autoFocus id="street_number" autoComplete="off" type="hidden" name="user[address]" aria-required="true" />
                      <input id="postal_code" autoComplete="off" type="hidden" name="user[zip_code]" aria-required="true" />
                      <input id="administrative_area_level_1" autoComplete="off" type="hidden" name="user[american_state]" aria-required="true" />
                      <input id="locality" autoComplete="off" type="hidden" name="user[city]" aria-required="true" />
                      <input autoComplete="off" type="hidden" name="user[latitude]" id="user_latitude" />
                      <input autoComplete="off" type="hidden" name="user[longitude]" id="user_longitude" />
                    </div>
                  </div>

                  <div style={gpInputGroup2Styles}>
                    <div style={materialInputStyles}>
                      <input autoComplete="name" type="name" id="user[first_name]" minLength="5" name="user[first_name]" aria-required="true" style={inputStyles} />
                      <label htmlFor="user[first_name]">Your Name</label>
                    </div>
                    <div id="ob2_name_error" style={{ color: 'red' }}></div>
                    <div style={materialInputStyles}>
                      <input autoComplete="email" type="email" id="user[email]" minLength="5" name="user[email]" aria-required="true" style={inputStyles} />
                      <label htmlFor="user[email]">Email</label>
                    </div>
                    <div id="ob2_email_error" style={{ color: 'red' }}></div>
                  </div>
                  <div style={{ display: 'none' }}></div>
                  <input value="2025-08-06" autoComplete="off" type="hidden" name="user[hidden_original_auction_date]" id="user_hidden_original_auction_date" />
                  <div style={gpInputGroupBtnStyles}>
                    <button id="submit" style={submitButtonStyles}>
                      <span style={btnTextStyles}>See Prices</span>
                      <img
                        style={arrowBtnStyles}
                        alt="Arrow"
                        src={arrowBtnImage}
                      />
                    </button>
                  </div>
                  <div>
                    <div style={{ display: 'none', color: 'red' }}>
                      Hmm looks like you already have an account,
                      <a href="/users/sign_in" style={{ color: 'red' }}>go here to sign in</a>
                    </div>
                  </div>
                  <div style={{ clear: 'both' }}></div>
                  <div id="nameError" style={{ color: 'red' }}>
                    <div id="nameErrorBlock"></div>
                    <div id="emailErrorBlock"></div>
                  </div>
                  <div style={{ clear: 'both' }}></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div style={headerBottomStyles}>
          <div id="scroll-btn" style={headerArrowStyles}>
            <div style={headerArrowAnimatedStyles}>
              <img alt="Header Arrow" src={downArrowImage} style={headerArrowImgStyles} />
            </div>
          </div>
          <div style={grayMatchineSecStyles}>
            <img
              alt="grass-cutting-businesses-in-Columbus-OH"
              title="local-lawn-and-landscape-maintenance-services-near-me-in-Columbus-OH"
              src={garyPointingLeftImage}
              style={garyPointingLeftStyles}
            />
            <noscript>
              <img
                alt="grass-cutting-businesses-in-Columbus-OH"
                title="local-lawn-and-landscape-maintenance-services-near-me-in-Columbus-OH"
                src={garyPointingLeftImage}
                style={garyPointingLeftStyles}
              />
            </noscript>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 