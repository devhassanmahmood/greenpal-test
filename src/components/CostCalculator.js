import React, { useState, useEffect } from 'react';
import SeePricesButton from './SeePricesButton';

const CostCalculator = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [grassHeight, setGrassHeight] = useState('0');
  const [mowingFrequency, setMowingFrequency] = useState('0');
  const [estimatedPrice, setEstimatedPrice] = useState(39);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const basePrice = 39;
    const heightExtra = parseFloat(grassHeight) || 0;
    const freqExtra = parseFloat(mowingFrequency) || 0;
    const total = basePrice + heightExtra + freqExtra;
    setEstimatedPrice(total);
  }, [grassHeight, mowingFrequency]);

  const styles = {
    container: {
      backgroundColor: '#F7F7F7',
      padding: isMobile ? '40px 20px' : '80px 0',
      width: '100%'
    },
    mainSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0' : '0 90px'
    },
    headerSection: {
      textAlign: 'center',
      marginBottom: isMobile ? '30px' : '50px'
    },
    mainHeading: {
      fontSize: isMobile ? '28px' : '36px',
      fontWeight: '700',
      color: '#2D3748',
      marginBottom: '10px',
      lineHeight: 1.2
    },
    subHeading: {
      fontSize: isMobile ? '16px' : '18px',
      color: '#4A5568',
      fontWeight: '400',
      lineHeight: 1.5
    },
    zipCode: {
      display: 'inline-block',
      marginLeft: '10px',
      fontWeight: '600',
      color: '#2D3748'
    },
    contentRow: {
      display: isMobile ? 'flex' : 'grid',
      gridTemplateColumns: isMobile ? 'none' : '65% 35%',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '30px' : '50px',
      alignItems: 'flex-start'
    },
    mapSection: {
      flex: isMobile ? '1' : '1',
      position: 'relative'
    },
    mapContainer: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    mapImage: {
      width: '100%',
      height: isMobile ? '250px' : '400px',
      objectFit: 'cover',
      display: 'block'
    },
    zipCodeOverlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'white',
      padding: '8px 12px',
      borderRadius: '6px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontSize: '14px',
      fontWeight: '600',
      color: '#2D3748'
    },
    formSection: {
      flex: isMobile ? '1' : '1',
      backgroundColor: 'transparent',
      margin: isMobile ? '0 auto' : '0',
      maxWidth: isMobile ? '400px' : 'none'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      fontSize: '16px',
      fontWeight: '600',
      color: '#2D3748',
      marginBottom: '2px'
    },
    select: {
      width: '100%',
      padding: '10px 14px',
      border: '2px solid #E2E8F0',
      borderRadius: '8px',
      fontSize: '16px',
      backgroundColor: 'white',
      color: '#2D3748',
      cursor: 'pointer',
      transition: 'border-color 0.3s ease'
    },
    priceSection: {
      backgroundColor: '#E6F3E6',
      padding: '15px',
      borderRadius: '12px',
      textAlign: 'left',
      marginTop: '10px'
    },
    priceAmount: {
      fontSize: isMobile ? '28px' : '42px',
      fontWeight: '700',
      color: '#2D3748',
      marginBottom: '5px'
    },
    priceLabel: {
      fontSize: '14px',
      color: '#4A5568',
      marginBottom: '5px'
    },
    priceBasis: {
      fontSize: '12px',
      color: '#718096'
    },
    ctaButton: {
      backgroundColor: '#FF8C00',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '15px 30px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      width: '100%',
      marginTop: '20px',
      transition: 'background-color 0.3s ease'
    },
    arrowIcon: {
      width: '16px',
      height: '16px',
      filter: 'brightness(0) invert(1)'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainSection}>
        <div style={styles.headerSection}>
          <h2 style={styles.mainHeading}>
            Get an Instant Lawn Mowing Quote – Columbia, SC
          </h2>
          <p style={styles.subHeading}>
            Let AI estimate your lawn care price based on local data
            <span style={styles.zipCode}>
              <label>Zip: </label>
              <span>29044</span>
            </span>
          </p>
        </div>

        <div style={styles.contentRow}>
          {/* Map Section */}
          <div style={styles.mapSection}>
            <div style={styles.mapContainer}>
              <img
                src="https://s3.amazonaws.com/greenpal-production/greenpal-service-area-maps/lawn-care-services-in-Columbia-SC-29044.jpg"
                alt="Lawn care services in Columbia, SC"
                style={styles.mapImage}
              />
              <div style={styles.zipCodeOverlay}>
                <label>Zip: </label>
                <span>29044</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div style={styles.formSection}>
            <form>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="grass-height">
                  How tall is your grass?
                </label>
                <select
                  id="grass-height"
                  style={styles.select}
                  value={grassHeight}
                  onChange={(e) => setGrassHeight(e.target.value)}
                >
                  <option value="0">Less than 10" tall</option>
                  <option value="10">Over 10" tall</option>
                  <option value="20">Over 20" tall</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="mowing-frequency">
                  How often are you wanting mowing
                </label>
                <select
                  id="mowing-frequency"
                  style={styles.select}
                  value={mowingFrequency}
                  onChange={(e) => setMowingFrequency(e.target.value)}
                >
                  <option value="0">Every Week</option>
                  <option value="5">Every 10 days</option>
                  <option value="10">Every 2 Weeks</option>
                </select>
              </div>

              <div style={styles.priceSection}>
                <div style={styles.priceAmount}>
                  ${estimatedPrice}.00/cut
                </div>
                <div style={styles.priceLabel}>
                  Estimated Price for Columbia, SC:
                </div>
                <div style={styles.priceBasis}>
                  Based on average lawn size, every week mowing
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <SeePricesButton size="xl" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator; 