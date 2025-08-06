import React from 'react';

const HowItWorks = () => {
  const sectionStyles = {
    padding: '80px 0',
    backgroundColor: '#f8f9fa'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '20px'
  };

  const subtitleStyles = {
    fontSize: '1.2rem',
    color: '#666666',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const stepsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    marginBottom: '60px'
  };

  const stepCardStyles = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px 30px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const stepNumberStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#8fb741',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 auto 20px'
  };

  const stepTitleStyles = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '15px'
  };

  const stepDescriptionStyles = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666666'
  };

  const ctaSectionStyles = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const ctaTitleStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '20px'
  };

  const ctaDescriptionStyles = {
    fontSize: '1.1rem',
    color: '#666666',
    marginBottom: '30px',
    maxWidth: '600px',
    margin: '0 auto 30px'
  };

  const ctaButtonStyles = {
    padding: '15px 30px',
    backgroundColor: '#8fb741',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const handleCardHover = (e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
  };

  const handleCardLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#7a9e3a';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#8fb741';
  };

  const steps = [
    {
      number: 1,
      title: "Enter Your Address",
      description: "Tell us where you need lawn care services. We'll connect you with local providers in your area."
    },
    {
      number: 2,
      title: "Get Free Quotes",
      description: "Receive competitive quotes from multiple vetted lawn care professionals within minutes."
    },
    {
      number: 3,
      title: "Choose & Book",
      description: "Review profiles, ratings, and photos, then select your preferred provider and schedule your service."
    }
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>How GreenPal Works</h2>
          <p style={subtitleStyles}>
            Get professional lawn care services in just 3 simple steps
          </p>
        </div>
        
        <div style={stepsContainerStyles}>
          {steps.map((step) => (
            <div
              key={step.number}
              style={stepCardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={stepNumberStyles}>
                {step.number}
              </div>
              <h3 style={stepTitleStyles}>
                {step.title}
              </h3>
              <p style={stepDescriptionStyles}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div style={ctaSectionStyles}>
          <h3 style={ctaTitleStyles}>
            Ready to Get Started?
          </h3>
          <p style={ctaDescriptionStyles}>
            Join thousands of satisfied customers who have found reliable lawn care providers through GreenPal. 
            Get your first quote in minutes - no obligation required.
          </p>
          <a
            href="/new-homeowner-signup"
            style={ctaButtonStyles}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Get Free Quotes Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 