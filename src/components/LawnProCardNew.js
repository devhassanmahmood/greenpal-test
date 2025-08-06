import React, { useEffect, useState } from 'react';

const LawnProCardNew = ({ 
  provider = {},
  onClick,
  className = '',
  ...props 
}) => {
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
  const cardStyles = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
    border: '1px solid rgba(0,0,0,0.08)',
    position: 'relative',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    cursor: onClick ? 'pointer' : 'default',
    minHeight: '300px',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: isMobile ? '300px' : isTablet ? '350px' : '400px'
  };

  const profileSectionStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '16px'
  };

  const profileImageStyles = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0,
    border: '3px solid #E5F6FD'
  };

  const providerInfoStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '3px'
  };

  const verifiedBadgeStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#8FB741',
    fontSize: '11px',
    fontWeight: '600',
    marginBottom: '2px'
  };

  const checkmarkStyles = {
    fontSize: '12px',
    fontWeight: 'bold'
  };

  const providerNameStyles = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '2px',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '1.2'
  };

  const ratingStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '3px'
  };

  const starsStyles = {
    display: 'flex',
    gap: '1px'
  };

  const starStyles = {
    color: '#fbbf24',
    fontSize: '14px'
  };

  const ratingTextStyles = {
    fontSize: '12px',
    color: '#666666',
    fontWeight: '500'
  };

  const locationStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '3px'
  };

  const locationIconStyles = {
    color: '#333333',
    fontSize: '12px'
  };

  const locationTextStyles = {
    fontSize: '12px',
    color: '#666666',
    fontWeight: '500'
  };

  const serviceTypeStyles = {
    fontSize: '11px',
    color: '#999999',
    fontWeight: '400',
    marginBottom: '6px'
  };

  const testimonialStyles = {
    marginBottom: '3px'
  };

  const testimonialTextStyles = {
    fontSize: '12px',
    color: '#333333',
    lineHeight: '1.3',
    marginBottom: '2px'
  };

  const testimonialDateStyles = {
    fontSize: '10px',
    color: '#999999',
    fontWeight: '500'
  };

  const getInstantPriceButtonStyles = {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#8FB741',
    color: '#333333',
    border: '1px solid #d1d5db',
    borderRadius: '25px',
    fontSize: '13px',
    fontWeight: '500',
    fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    outline: 'none'
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={starStyles}>
        ★
      </span>
    ));
  };

  const handleMouseEnter = (e) => {
    if (onClick) {
    }
  };

  const handleMouseLeave = (e) => {
    if (onClick) {
    }
  };

  const {
    name = 'Green Lawn Care',
    image = 'https://via.placeholder.com/80x80',
    avgPrice = 75,
    available = true,
    location = 'Nashville, TN 37220',
    serviceType = 'Full Service Lawn Care near Timberwood',
    testimonial = 'I love Mercury Greens they always do such a detailed job.',
    date = 'Aug 8, 2025'
  } = provider;

  return (
    <div 
      style={cardStyles} 
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div style={profileSectionStyles}>
        <img
          src={image}
          alt={name}
          style={profileImageStyles}
        />
        <div style={providerInfoStyles}>
          <div style={verifiedBadgeStyles}>
            <span style={checkmarkStyles}>✓</span>
            <span>Verified by GreenPal</span>
          </div>
          
          <div style={providerNameStyles}>{name}</div>
          
          <div style={ratingStyles}>
            <div style={starsStyles}>
              {renderStars(4.8)}
            </div>
            <span style={ratingTextStyles}>
              (4.8/5 • 105 Reviews)
            </span>
          </div>

          <div style={locationStyles}>
            <span style={locationIconStyles}>📍</span>
            <span style={locationTextStyles}>{location}</span>
          </div>

          <div style={serviceTypeStyles}>{serviceType}</div>

          <div style={testimonialStyles}>
            <div style={testimonialTextStyles}>"{testimonial}"</div>
            <div style={testimonialDateStyles}>{date}</div>
          </div>
        </div>
      </div>
      
      <button style={getInstantPriceButtonStyles}>
        Get Instant Price ›
      </button>
    </div>
  );
};

export default LawnProCardNew; 