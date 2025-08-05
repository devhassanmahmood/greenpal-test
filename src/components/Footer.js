import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#2d3748',
    color: '#ffffff',
    padding: '60px 0 30px'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const mainFooterStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  };

  const footerSectionStyles = {
    marginBottom: '30px'
  };

  const footerTitleStyles = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#ffffff'
  };

  const footerLinkStyles = {
    display: 'block',
    color: '#cbd5e0',
    textDecoration: 'none',
    marginBottom: '10px',
    fontSize: '14px',
    transition: 'color 0.3s ease'
  };

  const appStoreStyles = {
    display: 'flex',
    gap: '15px',
    marginTop: '15px'
  };

  const appStoreButtonStyles = {
    height: '40px',
    width: 'auto'
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '15px',
    marginTop: '15px'
  };

  const socialIconStyles = {
    width: '24px',
    height: '24px',
    color: '#cbd5e0',
    transition: 'color 0.3s ease'
  };

  const bottomFooterStyles = {
    borderTop: '1px solid #4a5568',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  };

  const copyrightStyles = {
    color: '#cbd5e0',
    fontSize: '14px'
  };

  const bottomLinksStyles = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const bottomLinkStyles = {
    color: '#cbd5e0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease'
  };

  const citiesGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const cityLinkStyles = {
    color: '#cbd5e0',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    display: 'block',
    marginBottom: '8px'
  };

  const handleLinkHover = (e) => {
    e.target.style.color = '#8fb741';
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = '#cbd5e0';
  };

  const cities = [
    "Akron, OH",
    "Canton, OH",
    "Cincinnati, OH", 
    "Cleveland, OH",
    "Columbus, OH",
    "Dayton, OH",
    "Toledo, OH",
    "Youngstown, OH"
  ];

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={mainFooterStyles}>
          <div style={footerSectionStyles}>
            <h3 style={footerTitleStyles}>GreenPal</h3>
            <p style={{ color: '#cbd5e0', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              The easiest way to book local lawn care services. Get free quotes from trusted professionals in your area.
            </p>
            <div style={appStoreStyles}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <img 
                  style={appStoreButtonStyles}
                  alt="Download on App Store" 
                  src="https://greenpal-production.s3.amazonaws.com/images/app-store-badge.svg"
                />
              </a>
              <a href="#" style={{ textDecoration: 'none' }}>
                <img 
                  style={appStoreButtonStyles}
                  alt="Get it on Google Play" 
                  src="https://greenpal-production.s3.amazonaws.com/images/google-play-badge.svg"
                />
              </a>
            </div>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={footerTitleStyles}>Services</h3>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Lawn Mowing
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Landscaping
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Tree Services
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Snow Removal
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Leaf Removal
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Fertilization
            </a>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={footerTitleStyles}>Company</h3>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              About Us
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Careers
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Press
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Blog
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Contact Us
            </a>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={footerTitleStyles}>Support</h3>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Help Center
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Provider Support
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Safety
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Trust & Safety
            </a>
          </div>

          <div style={footerSectionStyles}>
            <h3 style={footerTitleStyles}>Legal</h3>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Terms of Service
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Privacy Policy
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Cookie Policy
            </a>
            <a href="#" style={footerLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Accessibility
            </a>
          </div>
        </div>

        <div style={footerSectionStyles}>
          <h3 style={footerTitleStyles}>Lawn Care Services by City</h3>
          <div style={citiesGridStyles}>
            {cities.map((city, index) => (
              <a 
                key={index}
                href={`/local/lawn-care-${city.toLowerCase().replace(', oh', '-oh').replace(' ', '-')}`}
                style={cityLinkStyles}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        <div style={bottomFooterStyles}>
          <div style={copyrightStyles}>
            © 2024 GreenPal. All rights reserved.
          </div>
          <div style={bottomLinksStyles}>
            <a href="#" style={bottomLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Sitemap
            </a>
            <a href="#" style={bottomLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              Accessibility
            </a>
            <a href="#" style={bottomLinkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
              California Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 