import React from 'react';

const ServiceProviders = () => {
  const sectionStyles = {
    padding: '80px 0',
    backgroundColor: '#ffffff'
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

  const providersGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px'
  };

  const providerCardStyles = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const providerHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  };

  const avatarStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#8fb741',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '20px'
  };

  const providerInfoStyles = {
    flex: 1
  };

  const providerNameStyles = {
    fontWeight: '600',
    color: '#333333',
    fontSize: '18px',
    marginBottom: '5px'
  };

  const ratingStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '5px'
  };

  const starsStyles = {
    display: 'flex',
    gap: '2px'
  };

  const starStyles = {
    color: '#ffd700',
    fontSize: '16px'
  };

  const ratingTextStyles = {
    fontSize: '14px',
    color: '#666666'
  };

  const servicesStyles = {
    marginBottom: '20px'
  };

  const servicesTitleStyles = {
    fontWeight: '600',
    color: '#333333',
    marginBottom: '10px',
    fontSize: '14px'
  };

  const servicesListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  };

  const serviceTagStyles = {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500'
  };

  const contactStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px'
  };

  const contactIconStyles = {
    width: '16px',
    height: '16px',
    color: '#8fb741'
  };

  const contactTextStyles = {
    fontSize: '14px',
    color: '#666666'
  };

  const buttonStyles = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#8fb741',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={starStyles}>
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  const providers = [
    {
      id: 1,
      name: "Green Thumb Lawn Care",
      avatar: "GT",
      rating: 4.9,
      reviewCount: 127,
      services: ["Lawn Mowing", "Edging", "Trimming", "Cleanup"],
      phone: "(614) 555-0123",
      email: "info@greenthumbcolumbus.com",
      experience: "5+ years"
    },
    {
      id: 2,
      name: "Columbus Lawn Pros",
      avatar: "CL",
      rating: 4.8,
      reviewCount: 89,
      services: ["Lawn Mowing", "Fertilization", "Weed Control", "Aeration"],
      phone: "(614) 555-0456",
      email: "service@columbuslawnpros.com",
      experience: "8+ years"
    },
    {
      id: 3,
      name: "Buckeye Lawn Service",
      avatar: "BL",
      rating: 4.9,
      reviewCount: 156,
      services: ["Lawn Mowing", "Leaf Removal", "Shrub Pruning", "Seasonal Cleanup"],
      phone: "(614) 555-0789",
      email: "contact@buckeyelawnservice.com",
      experience: "12+ years"
    },
    {
      id: 4,
      name: "Ohio Green Landscaping",
      avatar: "OG",
      rating: 4.7,
      reviewCount: 73,
      services: ["Lawn Mowing", "Landscaping", "Irrigation", "Maintenance"],
      phone: "(614) 555-0321",
      email: "hello@ohiogreenlandscaping.com",
      experience: "6+ years"
    },
    {
      id: 5,
      name: "Capital City Lawn Care",
      avatar: "CC",
      rating: 4.8,
      reviewCount: 94,
      services: ["Lawn Mowing", "Edging", "Trimming", "Debris Removal"],
      phone: "(614) 555-0654",
      email: "info@capitalcitylawncare.com",
      experience: "4+ years"
    },
    {
      id: 6,
      name: "Columbus Yard Masters",
      avatar: "CY",
      rating: 4.9,
      reviewCount: 112,
      services: ["Lawn Mowing", "Fertilization", "Pest Control", "Aeration"],
      phone: "(614) 555-0987",
      email: "service@columbusyardmasters.com",
      experience: "10+ years"
    }
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Top Rated Lawn Mowing Service Providers</h2>
          <p style={subtitleStyles}>
            Connect with trusted, vetted lawn care professionals in your area
          </p>
        </div>
        
        <div style={providersGridStyles}>
          {providers.map((provider) => (
            <div
              key={provider.id}
              style={providerCardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={providerHeaderStyles}>
                <div style={avatarStyles}>
                  {provider.avatar}
                </div>
                <div style={providerInfoStyles}>
                  <div style={providerNameStyles}>
                    {provider.name}
                  </div>
                  <div style={ratingStyles}>
                    <div style={starsStyles}>
                      {renderStars(Math.floor(provider.rating))}
                    </div>
                    <span style={ratingTextStyles}>
                      {provider.rating} ({provider.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
              
              <div style={servicesStyles}>
                <div style={servicesTitleStyles}>Services Offered:</div>
                <div style={servicesListStyles}>
                  {provider.services.map((service, index) => (
                    <span key={index} style={serviceTagStyles}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={contactStyles}>
                <span style={contactIconStyles}>📞</span>
                <span style={contactTextStyles}>{provider.phone}</span>
              </div>
              
              <div style={contactStyles}>
                <span style={contactIconStyles}>✉️</span>
                <span style={contactTextStyles}>{provider.email}</span>
              </div>
              
              <div style={contactStyles}>
                <span style={contactIconStyles}>⭐</span>
                <span style={contactTextStyles}>{provider.experience} experience</span>
              </div>
              
              <button
                style={buttonStyles}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Get Free Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders; 