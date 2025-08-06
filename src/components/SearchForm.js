import React from 'react';
import arrowBtnImage from '../assets/shape-copy-13.svg';

const SearchForm = ({ isMobile, isTablet, screenWidth }) => {
  const getSearchBarWidth = () => {
    if (isMobile) {
      return '90%';
    } else if (screenWidth >= 1600) {
      return '800px';
    } else if (screenWidth >= 1500) {
      return '700px';
    } else if (screenWidth <= 1250) {
      return '500px';
    } else {
      return '600px';
    }
  };

  const addressFormStyles = {
    width: getSearchBarWidth(),
    height: isMobile ? 'auto' : isTablet ? '60px' : '70px',
    borderRadius: isMobile ? '50px' : isTablet ? '60px' : '70px',
    margin: '0 auto',
    border: isMobile ? 'none' : '1px solid #FF9000',
    paddingLeft: isMobile ? '0' : isTablet ? '25px' : '30px',
    backgroundColor: isMobile ? 'transparent' : '#fff',
    cursor: 'pointer',
    position: 'relative',
    transition: 'width 0.3s ease, height 0.3s ease',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const formStyles = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0' : '15px',
    height: isMobile ? 'auto' : '100%',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const checkAlignStyles = {
    position: 'relative',
    flex: 1,
    width: isMobile ? '100%' : 'auto'
  };

  const googlePlaceAutocompleteStyles = {
    width: '100%'
  };

  const formControlStyles = {
    width: '100%'
  };

  const labelStyles = {
    display: 'none'
  };

  const inputDiveStyles = {
    width: '100%'
  };

  const inputStyles = {
    width: '100%',
    border: isMobile ? '1px solid #FF9000' : 'none',
    outline: 'none',
    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
    marginBottom: isMobile ? '8px' : '0',
    backgroundColor: isMobile ? '#fff' : 'transparent',
    color: '#333',
    padding: isMobile ? '15px 20px' : isTablet ? '6px 0' : '8px 0',
    borderRadius: isMobile ? '50px' : '0',
    boxSizing: 'border-box'
  };

  const gpInputGroup1Styles = {
    display: 'none'
  };

  const gpInputGroup2Styles = {
    display: 'none'
  };

  const materialInputStyles = {
    display: 'none'
  };

  const gpInputGroupBtnStyles = {
    flexShrink: 0,
    position: isMobile ? 'static' : 'absolute',
    right: isMobile ? 'auto' : '-4px',
    top: isMobile ? 'auto' : '-2px',
    height: isMobile ? 'auto' : '100%',
    width: isMobile ? '100%' : 'auto'
  };

  const submitButtonStyles = {
    height: isMobile ? '51px' : isTablet ? '61px' : '71px',
    width: isMobile ? '100%' : isTablet ? '140px' : '170px',
    backgroundColor: '#FF9000',
    color: '#FFFFFF',
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px',
    textAlign: 'center',
    border: isMobile ? '1px solid #FF9000' : '0',
    outline: 'none',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    borderRadius: isMobile ? '50px' : isTablet ? '50px' : '50px',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 23px',
    position: isMobile ? 'static' : 'absolute',
    cursor: 'pointer',
    right: isMobile ? 'auto' : '0',
    top: isMobile ? 'auto' : '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '6px' : isTablet ? '7px' : '8px'
  };

  const btnTextStyles = {
    color: '#fff',
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px'
  };

  const arrowBtnStyles = {
    height: isMobile ? '16px' : isTablet ? '18px' : '19px',
    width: isMobile ? '9px' : isTablet ? '10px' : '11px'
  };

  return (
    <div style={addressFormStyles}>
      <form style={formStyles} id="new_user" autoComplete="off" encType="multipart/form-data" action="/users" acceptCharset="UTF-8" method="post" noValidate>
        <div style={checkAlignStyles} id="check_align">
          <div id="google-place-autocomplete">
            <div style={googlePlaceAutocompleteStyles}>
              <div style={formControlStyles}>
                <label style={labelStyles} htmlFor="address-autocomplete">
                  <span>Enter your house address</span>
                </label>
                <div style={{ display: 'none' }}></div>
                <div style={inputDiveStyles}>
                  <input type="password" style={{ display: 'none' }} />
                  <input
                    id="address-autocomplete"
                    autoComplete="off"
                    type="text"
                    placeholder="Enter your house address"
                    name="location"
                    style={inputStyles}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={gpInputGroup1Styles}>
            <input autoFocus id="street_number" autoComplete="off" type="hidden" name="user[address]" aria-required="true" />
            <input id="postal_code" autoComplete="off" type="hidden" name="user[zip_code]" aria-required="true" />
            <input id="administrative_area_level_1" autoComplete="off" type="hidden" name="user[american_state]" aria-required="true" />
            <input id="locality" autoComplete="off" type="hidden" name="user[city]" aria-required="true" />
            <input autoComplete="off" type="hidden" name="user[latitude]" id="user_latitude" />
            <input autoComplete="off" type="hidden" name="user[longitude]" id="user_longitude" />
          </div>
        </div>
        <div style={gpInputGroup2Styles}>
          <div style={materialInputStyles}>
            <input autoComplete="name" type="name" id="user[first_name]" minLength="5" name="user[first_name]" aria-required="true" style={inputStyles} />
            <label htmlFor="user[first_name]">Your Name</label>
          </div>
          <div id="ob2_name_error" style={{ color: 'red' }}></div>
          <div style={materialInputStyles}>
            <input autoComplete="email" type="email" id="user[email]" minLength="5" name="user[email]" aria-required="true" style={inputStyles} />
            <label htmlFor="user[email]">Email</label>
          </div>
          <div id="ob2_email_error" style={{ color: 'red' }}></div>
        </div>
        <div style={{ display: 'none' }}></div>
        <input value="2025-08-06" autoComplete="off" type="hidden" name="user[hidden_original_auction_date]" id="user_hidden_original_auction_date" />
        <div style={gpInputGroupBtnStyles}>
          <button id="submit" style={submitButtonStyles}>
            <span style={btnTextStyles}>See Prices</span>
            <img
              style={arrowBtnStyles}
              alt="Arrow"
              src={arrowBtnImage}
            />
          </button>
        </div>
        <div>
          <div style={{ display: 'none', color: 'red' }}>
            Hmm looks like you already have an account,
            <a href="/users/sign_in" style={{ color: 'red' }}>go here to sign in</a>
          </div>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div id="nameError" style={{ color: 'red' }}>
          <div id="nameErrorBlock"></div>
          <div id="emailErrorBlock"></div>
        </div>
        <div style={{ clear: 'both' }}></div>
      </form>
    </div>
  );
};

export default SearchForm; 