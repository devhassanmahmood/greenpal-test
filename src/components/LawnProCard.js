import React from 'react';

/**
 * LawnProCard - A reusable card component for displaying lawn care service providers
 * 
 * @param {Object} props - Component props
 * @param {Object} props.provider - Provider information object
 * @param {string} [props.provider.name] - Provider name (default: 'Green Lawn Care')
 * @param {string} [props.provider.image] - Provider profile image URL (default: placeholder)
 * @param {number} [props.provider.rating] - Provider rating out of 5 (default: 4.8)
 * @param {number} [props.provider.reviews] - Number of reviews (default: 105)
 * @param {number} [props.provider.avgPrice] - Average price for service (default: 75)
 * @param {boolean} [props.provider.available] - Whether provider is available (default: true)
 * @param {Function} [props.onClick] - Click handler for the card
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} props... - Additional props to pass to the card container
 * 
 * @example
 * ```jsx
 * <LawnProCard 
 *   provider={{
 *     name: "Green Lawn Care",
 *     image: "https://example.com/image.jpg",
 *     rating: 4.8,
 *     reviews: 105,
 *     avgPrice: 75,
 *     available: true
 *   }}
 *   onClick={() => console.log('Card clicked')}
 * />
 * ```
 */
const LawnProCard = ({ 
  provider = {},
  onClick,
  className = '',
  ...props 
}) => {
  const cardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    position: 'relative',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    cursor: onClick ? 'pointer' : 'default',
    backdropFilter: 'blur(10px)',
    minHeight: '280px',
    height: '280px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
  };

  // Ribbon-style price tag with V-cut bottom
  const priceTagStyles = {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#f97316',
    color: '#ffffff',
    padding: '8px 12px',
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    lineHeight: '1.2',
    boxShadow: '0 2px 8px rgba(249, 115, 22, 0.3)',
    width: '80px',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: '12px'
  };

  const priceTagTriangleStyles = {
    position: 'absolute',
    bottom: '-8px',
    right: '0',
    width: '0',
    height: '0',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid #f97316',
    borderTop: '8px solid #f97316',
    zIndex: 1
  };

  const priceTagMainStyles = {
    fontSize: '18px',
    fontWeight: '700',
    display: 'block',
    lineHeight: '1'
  };

  const priceTagSubStyles = {
    fontSize: '12px',
    fontWeight: '500',
    opacity: '0.9',
    display: 'block',
    marginTop: '2px'
  };

  const profileSectionStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '15px',
    marginTop: '10px'
  };

  const profileImageStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0
  };

  const providerInfoStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };

  const availabilityStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '4px'
  };

  const availabilityCheckmarkStyles = {
    color: '#10b981',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  const availabilityTextStyles = {
    fontSize: '12px',
    color: '#10b981',
    fontWeight: '500'
  };

  const providerNameStyles = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '4px',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '1.2'
  };

  const ratingStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  };

  const starsStyles = {
    display: 'flex',
    gap: '2px'
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

  const priceStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '15px'
  };

  const priceIconStyles = {
    color: '#10b981',
    fontSize: '14px',
    fontWeight: 'bold'
  };

  const priceTextStyles = {
    fontSize: '14px',
    color: '#666666',
    fontWeight: '500'
  };

  const priceBoldStyles = {
    fontWeight: '700',
    color: '#333333'
  };

  const seePriceButtonStyles = {
    width: '100%',
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    color: '#333333',
    border: '1px solid #d1d5db',
    borderRadius: '25px',
    fontSize: '14px',
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
      // Removed elevation effect - card stays in place
    }
  };

  const handleMouseLeave = (e) => {
    if (onClick) {
      // Removed elevation effect - card stays in place
    }
  };

  // Default values for provider - matching the structure from LawnProsCarousel
  const {
    name = 'Green Lawn Care',
    image = 'https://via.placeholder.com/50x50',
    rating = 4.8,
    reviews = 105,
    avgPrice = 75,
    available = true
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
      {/* Ribbon-style Price Tag */}
      <div style={priceTagStyles}>
        <span style={priceTagMainStyles}>${avgPrice}</span>
        <span style={priceTagSubStyles}>/mowing</span>
      </div>
      <div style={priceTagTriangleStyles}></div>
      
      {/* Profile Section */}
      <div style={profileSectionStyles}>
        <img
          src={image}
          alt={name}
          style={profileImageStyles}
        />
        <div style={providerInfoStyles}>
          {/* Availability Status */}
          {available && (
            <div style={availabilityStyles}>
              <span style={availabilityCheckmarkStyles}>✓</span>
              <span style={availabilityTextStyles}>Available</span>
            </div>
          )}
          
          {/* Provider Name */}
          <div style={providerNameStyles}>{name}</div>
          
          {/* Rating */}
          <div style={ratingStyles}>
            <div style={starsStyles}>
              {renderStars(rating)}
            </div>
            <span style={ratingTextStyles}>
              ({rating}/5 • {reviews} Reviews)
            </span>
          </div>
        </div>
      </div>
      
      {/* Price Section */}
      <div style={priceStyles}>
        <span style={priceIconStyles}>$</span>
        <span style={priceTextStyles}>
          Avg. Price: <span style={priceBoldStyles}>${avgPrice}</span> per cut
        </span>
      </div>
      
      {/* See Price Button */}
      <button style={seePriceButtonStyles}>
        See Price
      </button>
    </div>
  );
};

export default LawnProCard; 