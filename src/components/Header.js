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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    height: '63px',
    width: '100%',
    left: 0,
    position: 'fixed',
    top: 0
  };

  const topBarStyles = {
    background: isScrolled ? '#3aa2e1' : 'transparent',
    height: '63px',
    transition: 'linear 0.5s',
    overflow: 'hidden',
    lineHeight: '2.8125rem',
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
    padding: '3px 20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    width: '1168px'
  };

  const logoStyles = {
    marginLeft: '8px'
  };

  const rightNavStyles = {
    padding: 0,
    height: 'auto',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px'
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
    padding: '8px',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    borderRadius: '24.5px',
    width: '216px',
    height: '40px',
    fontSize: '18px',
    top: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textDecoration: 'none',
  };

  const getStartedStyles = {
    color: '#fff',
    fontSize: '18px',
    paddingRight: '23px',
    lineHeight: '2',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textDecoration: 'none',
  };

  const headerFillStyles = {
    position: 'relative',
    width: '100%',
    height: '670px',
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
    padding: '0 20px',
    boxSizing: 'border-box'
  };

  const mainHeadingStyles = {
    color: '#FFFFFF',
    width: '70%',
    margin: '0 auto',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };

  const h1Styles = {
    color: '#FFFFFF',
    fontSize: '71px',
    fontWeight: 600,
    lineHeight: '72px',
    margin: '0 0 20px 0',
    letterSpacing: 'normal'
  };

  const locationServiceStyles = {
    fontSize: '40px',
    marginTop: '16px',
    marginBottom: '25px',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 800,
  };

  const addressVariantStyles = {
    marginTop: '40px',
    width: '100%'
  };

  const lawnCareBannerInputHeadingStyles = {
    marginBottom: '10px',
    width: '100%'
  };

  const addressFormStyles = {
    width: '800px',
    height: '70px',
    borderRadius: '70px',
    margin: '0 auto',
    border: '1px solid #FF9000',
    paddingLeft: '30px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    position: 'relative'
  };

  const formStyles = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
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
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#333',
    padding: '8px 0'
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
    height: '71px',
    width: '170px',
    backgroundColor: '#FF9000',
    color: '#FFFFFF',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',
    border: '0',
    outline: 'none',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    borderRadius: '50px',
    padding: '0 23px',
    position: 'absolute',
    cursor: 'pointer',
    right: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const btnTextStyles = {
    color: '#fff',
    fontSize: '20px',
    lineHeight: '24px'
  };

  const arrowBtnStyles = {
    height: '19px',
    width: '11px'
  };

  const headerBottomStyles = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '100%',
    maxWidth: '100%'
  };

  const headerArrowStyles = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const headerArrowAnimatedStyles = {
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'all 0.2s ease-in-out',
    animation: 'header-arrow-bottom 1.7s ease infinite'
  };

  const headerArrowImgStyles = {
    width: '30px',
    height: 'auto'
  };

  const grayMatchineSecStyles = {
    textAlign: 'center',
    width: '100%',
    position: 'relative'
  };

  const garyPointingLeftStyles = {
    width: '274px',
    height: 'auto',
    maxWidth: '100%',
    position: 'absolute',
    top: '-210px',
    right: '10%',
    zIndex: 3
  };

  const getResponsiveGaryStyles = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth >= 1100) {
      return {
        ...garyPointingLeftStyles,
        top: '-210px',
        right: '8%',
        width: '274px'
      };
    } else if (screenWidth >= 768) {
      return {
        ...garyPointingLeftStyles,
        top: '-115px',
        right: '5%',
        width: '200px'
      };
    } else {
      return {
        ...garyPointingLeftStyles,
        display: 'none'
      };
    }
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
                    fontSize: '18px', 
                    fontWeight: '600', 
                    lineHeight: '38px', 
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
                      width: '10px',
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
              style={getResponsiveGaryStyles()}
            />
            <noscript>
              <img
                alt="grass-cutting-businesses-in-Columbus-OH"
                title="local-lawn-and-landscape-maintenance-services-near-me-in-Columbus-OH"
                src={garyPointingLeftImage}
                style={getResponsiveGaryStyles()}
              />
            </noscript>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 