import React, { useState, useEffect } from "react";

const TopRatedProviders = () => {
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const providers = [
    {
      id: 1,
      name: "Ricciardi - Lawn Services",
      location: "Columbus, OH",
      hired: 192,
      rating: 4.9,
      reviews: 208,
      description:
        "We provide Ohio's highest lawn service standards. Unlike Craigslist contractors who leave ruts, grass clumps, and use dull blades, GreenPal's strict verification ensures quality professionals.",
      services: [
        "Professional lawn mowing & maintenance",
        "Sharp blade grass cutting",
        "Edging and trimming",
        "Debris removal and cleanup"
      ],
      additionalDescription: "We're committed to delivering exceptional results with every service. Our team uses professional-grade equipment and follows industry best practices to ensure your lawn looks its best year-round.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      name: "Smartscapes, LLC",
      location: "Columbus, OH",
      hired: 87,
      rating: 4.7,
      reviews: 241,
      description:
        "Ready to make your home the gem you've dreamed? Don't be ashamed of dead spots - our services will turn that around. We install new lawns too!",
      services: [
        "Professional lawn mowing & maintenance",
        "New lawn installation",
        "Custom fertilizing plans",
        "Shaded area specialist care"
      ],
      additionalDescription: "We're different from companies that cut and run. We treat each lawn individually, teaching clients proper care. In tree-heavy Columbus areas, shaded grass needs special treatment to prevent bare patches. Our specialized approach ensures your lawn thrives regardless of the challenges it faces.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  const sectionStyles = {
    backgroundColor: '#ffffff',
    padding: isMobile ? '40px 15px' : isTablet ? '60px 20px' : '80px 20px',
    width: '100%'
  };

  const containerStyles = {
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    padding: isMobile ? '0 10px' : isTablet ? '0 15px' : '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '30px' : '50px'
  };

  const titleStyles = {
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '36px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '15px',
    lineHeight: isMobile ? '1.2' : '1.1'
  };

  const subtitleStyles = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666666',
    textAlign: 'center',
    maxWidth: isMobile ? '100%' : '600px',
    margin: '0 auto',
    lineHeight: '1.4'
  };

  const providerItemStyles = {
    borderBottom: '1px solid #ddd',
    padding: isMobile ? '15px 0' : '20px 0',
    width: '100%'
  };

  const providerHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: isMobile ? '15px' : '20px'
  };

  const avatarStyles = {
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '60px' : '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0
  };

  const infoStyles = {
    flex: 1,
    minWidth: isMobile ? '200px' : '250px',
    maxWidth: isMobile ? '100%' : 'none'
  };

  const nameStyles = {
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333333',
    lineHeight: '1.2',
    wordBreak: 'break-word'
  };

  const hiredStyles = {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '5px',
    fontSize: isMobile ? '13px' : '14px'
  };

  const starsContainerStyles = {
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2px'
  };

  const starStyles = {
    color: '#FFC107',
    fontSize: isMobile ? '14px' : '16px',
    marginRight: '2px'
  };

  const emptyStarStyles = {
    color: '#ccc',
    fontSize: isMobile ? '14px' : '16px',
    marginRight: '2px'
  };

  const ratingTextStyles = {
    marginLeft: '6px',
    fontSize: isMobile ? '12px' : '14px',
    color: '#666',
    whiteSpace: 'nowrap'
  };

  const buttonStyles = {
    padding: isMobile ? '8px 16px' : '10px 20px',
    borderRadius: '30px',
    border: '1px solid #F68B1F',
    background: '#fff',
    color: '#F68B1F',
    fontWeight: 'bold',
    fontSize: isMobile ? '12px' : '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: '10px',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    minWidth: isMobile ? 'auto' : '120px',
    justifyContent: 'center'
  };

  const quoteContainerStyles = {
    display: 'flex',
    marginTop: isMobile ? '15px' : '20px'
  };

  const quoteMarkStyles = {
    fontSize: isMobile ? '30px' : '40px',
    color: '#ccc',
    marginRight: '10px',
    lineHeight: '1'
  };

  const descriptionStyles = {
    fontSize: isMobile ? '16px' : '18px',
    color: '#333',
    lineHeight: '1.5'
  };

  const servicesContainerStyles = {
    marginTop: isMobile ? '15px' : '20px'
  };

  const servicesTitleStyles = {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '6px',
    fontSize: isMobile ? '14px' : '16px'
  };

  const servicesListStyles = {
    paddingLeft: isMobile ? '15px' : '20px',
    color: '#444',
    fontSize: isMobile ? '13px' : '14px',
    lineHeight: '24px'
  };

  const additionalDescriptionStyles = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#333',
    lineHeight: '1.5',
    marginTop: '15px'
  };

  const readMoreStyles = {
    background: 'none',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: isMobile ? '12px' : '14px',
    padding: '0',
    marginTop: '10px'
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#F68B1F';
    e.target.style.color = '#fff';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = '#F68B1F';
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Top Rated Lawn Mowing Service Providers in Columbus, OH</h2>
          <p style={subtitleStyles}>
            Connect with trusted, vetted lawn care professionals in your area
          </p>
        </div>

        {providers.map((provider) => (
          <div key={provider.id} style={providerItemStyles}>
            <div style={providerHeaderStyles}>
              {/* Left: Avatar */}
              <img
                src={provider.image}
                alt={provider.name}
                style={avatarStyles}
              />
              
              {/* Center Info */}
              <div style={infoStyles}>
                <div style={nameStyles}>
                  {provider.name} - Lawn Services in {provider.location}
                </div>
                <div style={hiredStyles}>
                  Hired {provider.hired} times on GreenPal
                </div>
                {/* Stars and Reviews */}
                <div style={starsContainerStyles}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={i < Math.floor(provider.rating) ? starStyles : emptyStarStyles}
                    >
                      ★
                    </span>
                  ))}
                  <span style={ratingTextStyles}>
                    (overall rating {provider.rating}/5. {provider.reviews} Reviews)
                  </span>
                </div>
              </div>
              
              {/* See Prices Button */}
              <div>
                <button
                  style={buttonStyles}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  See Prices <span style={{ marginLeft: '6px' }}>›</span>
                </button>
              </div>
            </div>
            
            {/* Quote */}
            <div style={quoteContainerStyles}>
              <div style={quoteMarkStyles}>"</div>
              <div style={descriptionStyles}>
                {provider.description}
              </div>
            </div>
            
            {/* Services */}
            {expanded[provider.id] && (
              <div style={servicesContainerStyles}>
                <div style={servicesTitleStyles}>Our Services:</div>
                <ul style={servicesListStyles}>
                  {provider.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
                {provider.additionalDescription && (
                  <div style={additionalDescriptionStyles}>
                    {provider.additionalDescription}
                  </div>
                )}
              </div>
            )}
            
            {/* Read More / Show Less */}
            <div>
              <button
                onClick={() => toggleExpand(provider.id)}
                style={readMoreStyles}
              >
                {expanded[provider.id] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders; 