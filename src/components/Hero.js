import React, { useState } from 'react';
import LawnProsCarousel from './LawnProsCarousel';
import SearchBar from './SearchBar';

const Hero = () => {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    email: ''
  });

  const heroStyles = {
    position: 'relative',
    minHeight: '600px',
    background: 'linear-gradient(rgba(143, 183, 65, 0.9), rgba(143, 183, 65, 0.9)), url("/assets/location_v1_bg/yard-maintenance-businesses-near-me-1ec775b41547b095f825d3ac519b53c0e1d42e96824a31675cb8baed24c91323.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '70px',
    flexDirection: 'column'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
    color: '#ffffff',
    width: '100%'
  };

  const headingStyles = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2'
  };

  const subtitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '40px',
    fontWeight: '500'
  };

  const formContainerStyles = {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  };

  const formHeadingStyles = {
    color: '#333333',
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontWeight: '600'
  };

  const handleSearchSubmit = (address) => {
    console.log('Search submitted:', address);
  };

  return (
    <>
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={headingStyles}>
            Professional Lawn Care Services in Columbus
          </h1>
          <div style={subtitleStyles}>
            Fast, Easy, & Free Quotes
          </div>
          
          <div style={formContainerStyles}>
            <div style={formHeadingStyles}>
              Book your grass cutting in 60 seconds
            </div>
            
            <SearchBar 
              onSubmit={handleSearchSubmit}
              placeholder="Enter your house address"
              buttonText="See Prices"
              showArrow={true}
              size="medium"
            />
          </div>
        </div>
      </section>
      <LawnProsCarousel />
    </>
  );
};

export default Hero; 