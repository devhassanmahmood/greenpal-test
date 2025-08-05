import React from 'react';

const Card = ({ 
  children, 
  title, 
  subtitle,
  image,
  imageAlt,
  onClick,
  className = '',
  variant = 'default',
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
        };
      case 'outlined':
        return {
          border: '2px solid #e1e5e9',
          boxShadow: 'none'
        };
      case 'gradient':
        return {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        };
      default:
        return {
          background: 'white',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        };
    }
  };

  const baseStyles = {
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    position: 'relative',
    cursor: onClick ? 'pointer' : 'default',
    ...getVariantStyles()
  };

  const imageStyles = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    position: 'relative'
  };

  const imageElementStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const contentStyles = {
    padding: '1.5rem'
  };

  const titleStyles = {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: variant === 'gradient' ? 'white' : '#2d3748'
  };

  const subtitleStyles = {
    margin: '0 0 1rem 0',
    fontSize: '0.875rem',
    lineHeight: 1.5,
    color: variant === 'gradient' ? 'white' : '#718096'
  };

  const bodyStyles = {
    lineHeight: 1.6,
    color: variant === 'gradient' ? 'white' : '#4a5568'
  };

  const handleMouseEnter = (e) => {
    if (onClick) {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
    } else {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    }

    if (variant === 'outlined') {
      e.currentTarget.style.borderColor = '#667eea';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.15)';
    }

    // Scale image on hover
    const imageElement = e.currentTarget.querySelector('img');
    if (imageElement) {
      imageElement.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    
    if (variant === 'elevated') {
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else if (variant === 'outlined') {
      e.currentTarget.style.borderColor = '#e1e5e9';
      e.currentTarget.style.boxShadow = 'none';
    } else {
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }

    // Reset image scale
    const imageElement = e.currentTarget.querySelector('img');
    if (imageElement) {
      imageElement.style.transform = 'scale(1)';
    }
  };

  return (
    <div 
      style={baseStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {image && (
        <div style={imageStyles}>
          <img 
            src={image} 
            alt={imageAlt || title} 
            style={imageElementStyles}
          />
        </div>
      )}
      
      <div style={contentStyles}>
        {title && (
          <h3 style={titleStyles}>{title}</h3>
        )}
        
        {subtitle && (
          <p style={subtitleStyles}>{subtitle}</p>
        )}
        
        <div style={bodyStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card; 