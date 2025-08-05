import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          background: 'transparent',
          color: '#22c55e',
          border: '2px solid #22c55e'
        };
      case 'success':
        return {
          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
          color: 'white'
        };
      case 'danger':
        return {
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          color: 'white'
        };
      case 'warning':
        return {
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white'
        };
      case 'outline':
        return {
          background: 'transparent',
          color: '#22c55e',
          border: '2px solid #22c55e'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
          color: 'white'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          minHeight: '36px'
        };
      case 'large':
        return {
          padding: '1rem 2rem',
          fontSize: '1.125rem',
          minHeight: '52px'
        };
      default:
        return {
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          minHeight: '44px'
        };
    }
  };

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 600,
    fontFamily: 'inherit',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.6 : 1,
    ...getVariantStyles(),
    ...getSizeStyles()
  };

  const handleMouseEnter = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.3)';
      
      if (variant === 'secondary' || variant === 'outline') {
        e.target.style.background = '#22c55e';
        e.target.style.color = 'white';
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
      
      if (variant === 'secondary' || variant === 'outline') {
        e.target.style.background = 'transparent';
        e.target.style.color = '#22c55e';
      }
    }
  };

  const handleMouseDown = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(0)';
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
      onMouseDown={handleMouseDown}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 