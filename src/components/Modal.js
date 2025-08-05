import React, { useEffect } from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  showCloseButton = true 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { maxWidth: '400px' };
      case 'large':
        return { maxWidth: '800px' };
      default:
        return { maxWidth: '600px' };
    }
  };

  const backdropStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem'
  };

  const modalStyles = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    ...getSizeStyles()
  };

  const headerStyles = {
    padding: '1.5rem 1.5rem 0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyles = {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#2d3748'
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '6px',
    color: '#718096',
    transition: 'all 0.3s ease'
  };

  const contentStyles = {
    padding: '1.5rem',
    overflow: 'auto',
    flex: 1
  };

  if (!isOpen) return null;

  return (
    <div style={backdropStyles} onClick={handleBackdropClick}>
      <div style={modalStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>{title}</h2>
          {showCloseButton && (
            <button 
              style={closeButtonStyles}
              onClick={onClose}
              onMouseEnter={(e) => {
                e.target.style.color = '#e53e3e';
                e.target.style.backgroundColor = '#fed7d7';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#718096';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>
          )}
        </div>
        <div style={contentStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 