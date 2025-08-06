import React from 'react';
import headerImage from '../assets/header_image.jpg';

const HeaderBackground = ({ isMobile, isTablet, children }) => {
  const headerFillStyles = {
    position: 'relative',
    width: '100%',
    minHeight: isMobile ? '800px' : isTablet ? '900px' : '1000px',
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: isMobile ? '100px' : isTablet ? '120px' : '150px'
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

  return (
    <div style={headerFillStyles}>
      <img
        alt="affordable-grass-cutting-businesses-in-Columbus-OH"
        title="residential-lawn-cutting-businesses-in-Columbus-OH"
        src={headerImage}
        style={sec1ImgStyles}
      />
      {children}
    </div>
  );
};

export default HeaderBackground; 