import React from 'react';
import logoImage from '../assets/logo.svg';
import arrowNextGeoImage from '../assets/arrow-next-geo.svg';
import SeePricesButton from './SeePricesButton';

const NavigationBar = ({ isScrolled, isMobile, isTablet, screenWidth }) => {
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
    maxWidth: screenWidth <= 430 ? '100%' : screenWidth <= 768 ? '100%' : '100%',
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
    paddingTop: screenWidth >= 768 ? '12px' : '3px',
    width: isMobile ? '100%' : isTablet ? '90%' : '1168px',
    maxWidth: screenWidth <= 430 ? '320px' : screenWidth <= 768 ? '100%' : '1168px'
  };

  const logoStyles = {
    marginLeft: screenWidth >= 300 && screenWidth <= 440 ? '-2px' : isMobile ? '0' : '8px',
    width: screenWidth >= 300 && screenWidth <= 440 ? '117px' : 'auto',
    height: 'auto',
    flexShrink: isMobile ? 'auto' : 0
  };

  const rightNavStyles = {
    padding: 0,
    height: 'auto',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  const testLiStyles = {
    transition: 'linear 0.5s',
    opacity: 1
  };

  const getStartedStyles = {
    color: '#fff',
    fontSize: '18px',
    paddingRight: '23px',
    lineHeight: '2',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textDecoration: 'none',
    display: isMobile ? 'none' : 'block'
  };

  return (
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
                <SeePricesButton />
              </div>
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar; 