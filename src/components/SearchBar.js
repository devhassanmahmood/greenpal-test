import React, { useState } from 'react';
import SeePricesButton from './SeePricesButton';

const SearchBar = ({ 
  placeholder = 'Enter your house address',
  onSubmit,
  buttonText = 'See Prices',
  showArrow = true,
  size = 'medium',
  className = '',
  ...props 
}) => {
  const [address, setAddress] = useState('');

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '50px',
    padding: '5px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #FF9000',
    maxWidth: '600px',
    margin: '0 auto',
    width: '100%'
  };

  const inputStyles = {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    padding: '15px 20px',
    backgroundColor: 'transparent',
    color: '#333',
    borderRadius: '50px'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(address);
    }
  };

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyles} className={className} {...props}>
      <input
        type="text"
        placeholder={placeholder}
        value={address}
        onChange={handleInputChange}
        style={inputStyles}
        required
      />
      <SeePricesButton 
        type="submit"
        size={size}
        showArrow={showArrow}
      >
        {buttonText}
      </SeePricesButton>
    </form>
  );
};

export default SearchBar; 