import React from 'react';

const SeePricesButton = ({ 
  children = 'See Prices', 
  size = 'medium', 
  onClick, 
  disabled = false,
  type = 'button',
  showArrow = true,
  className = '',
  ...props 
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '8px 16px',
          fontSize: '14px',
          height: '36px',
          borderRadius: '18px'
        };
      case 'large':
        return {
          padding: '15px 30px',
          fontSize: '18px',
          height: '52px',
          borderRadius: '26px'
        };
      case 'xl':
          return {
            padding: '18px 80px',
            fontSize: '24px',
            height: '52px',
            borderRadius: '26px'
          };
      default:
        return {
          padding: '10px 20px',
          fontSize: '16px',
          height: '44px',
          borderRadius: '22px'
        };
    }
  };

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#f68519',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '24.5px',
    fontWeight: 600,
    fontFamily: 'Poppins, sans-serif',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.6 : 1,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    ...getSizeStyles()
  };

  const arrowStyles = {
    height: '16px',
    width: 'auto',
    filter: 'brightness(0) invert(1)'
  };

  const handleMouseEnter = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(-1px)';
      e.target.style.boxShadow = '0 4px 12px rgba(246, 133, 25, 0.3)';
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <button
      style={baseStyles}
      onClick={onClick}
      disabled={disabled}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
      {showArrow && (
        <img 
          style={arrowStyles}
          alt="Arrow" 
          src="https://greenpal-production.s3.amazonaws.com/images/local/shape-copy-13.svg"
        />
      )}
    </button>
  );
};

export default SeePricesButton; 