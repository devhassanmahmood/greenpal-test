import React from 'react';
import orangeBottomArrowImage from '../assets/orange-bottom-arrow.svg';
import SearchForm from './SearchForm';

const HeroSection = ({ isMobile, isTablet, screenWidth }) => {
  const headerMsgStyles = {
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    zIndex: 2,
    width: '100%',
    maxWidth: '100%',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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

  return (
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

          <SearchForm 
            isMobile={isMobile}
            isTablet={isTablet}
            screenWidth={screenWidth}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 