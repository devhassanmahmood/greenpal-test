import React, { useState } from 'react';

const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem'
  };

  const labelStyles = {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#2d3748',
    marginBottom: '0.5rem'
  };

  const inputStyles = {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: error ? '2px solid #e53e3e' : isFocused ? '2px solid #667eea' : '2px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: disabled ? '#f7fafc' : 'white',
    color: disabled ? '#a0aec0' : '#2d3748',
    transition: 'all 0.3s ease',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const errorStyles = {
    fontSize: '0.75rem',
    color: '#e53e3e',
    marginTop: '0.25rem'
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={containerStyles}>
      {label && (
        <label style={labelStyles}>
          {label}
          {required && <span style={{ color: '#e53e3e' }}> *</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {error && (
        <span style={errorStyles}>{error}</span>
      )}
    </div>
  );
};

export default Input; 