import React, { useState } from 'react';

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '70px'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
    color: '#ffffff'
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

  const inputGroupStyles = {
    marginBottom: '20px'
  };

  const inputStyles = {
    width: '100%',
    padding: '15px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  };

  const buttonStyles = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#8fb741',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const arrowStyles = {
    height: '20px',
    width: 'auto'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#7a9e3a';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#8fb741';
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#8fb741';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e5e7eb';
  };

  return (
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
          
          <form onSubmit={handleSubmit}>
            <div style={inputGroupStyles}>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                style={inputStyles}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>
            
            <div style={inputGroupStyles}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyles}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>
            
            <div style={inputGroupStyles}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyles}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>
            
            <button
              type="submit"
              style={buttonStyles}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              See Prices
              <img 
                style={arrowStyles}
                alt="Arrow" 
                src="https://greenpal-production.s3.amazonaws.com/images/local/shape-copy-13.svg"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero; 