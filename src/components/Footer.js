import React, { useState, useEffect } from 'react';
import bgFooter from '../assets/bg-footer.svg';
import logoImage from '../assets/logo.svg';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const logoStyles = {
    marginLeft: isMobile ? '0' : '8px',
    maxWidth: isMobile ? '200px' : 'auto',
    height: 'auto'
  };
  
  const styles = {
    footer: {
      backgroundColor: '#2d3748',
      color: '#ffffff',
      padding: isMobile ? '40px 0 20px' : '60px 0 30px',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${bgFooter})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    container: {
    maxWidth: '1200px',
    margin: '0 auto',
      padding: isMobile ? '0 20px' : '0 90px',
      position: 'relative',
      zIndex: 1
    },
    topSection: {
      display: isMobile ? 'flex' : 'grid',
      gridTemplateColumns: isMobile ? 'none' : '1.75fr 1fr 1fr',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '30px' : '40px',
      marginBottom: isMobile ? '30px' : '40px'
    },
    logoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '15px' : '20px',
      textAlign: isMobile ? 'center' : 'left'
    },
    logo: {
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: 'bold',
      color: '#ffffff',
      lineHeight: 1,
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    description: {
      color: '#e2e8f0',
      fontSize: isMobile ? '14px' : '15px',
      lineHeight: isMobile ? '1.6' : '1.8',
      marginBottom: isMobile ? '15px' : '20px',
      textAlign: isMobile ? 'center' : 'left'
    },
    appSection: {
      marginTop: isMobile ? '15px' : '20px',
      textAlign: isMobile ? 'center' : 'left'
    },
    appHeading: {
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      marginBottom: isMobile ? '12px' : '15px',
      color: '#ffffff',
      textAlign: isMobile ? 'center' : 'left'
    },
    appButtons: {
      display: 'flex',
      gap: isMobile ? '10px' : '15px',
      flexWrap: 'wrap',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    appButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: isMobile ? '8px 12px' : '10px 15px',
      textDecoration: 'none',
      color: '#000000',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      minWidth: isMobile ? '100px' : '120px',
      justifyContent: 'center'
    },
    appButtonHover: {
      backgroundColor: '#f3f4f6',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
    linksSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '20px' : '30px',
      textAlign: isMobile ? 'center' : 'left'
    },
    linksColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '10px' : '15px'
    },
    sectionTitle: {
      fontSize: isMobile ? '16px' : '18px',
    fontWeight: '600',
      color: '#ffffff',
      marginBottom: isMobile ? '10px' : '15px',
      textAlign: isMobile ? 'center' : 'left'
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '6px' : '8px'
    },
    link: {
      color: '#e2e8f0',
    textDecoration: 'none',
      fontSize: isMobile ? '13px' : '14px',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      textAlign: isMobile ? 'center' : 'left'
    },
    socialSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '15px' : '20px',
      textAlign: isMobile ? 'center' : 'left'
    },
    socialIcons: {
      display: 'flex',
      gap: isMobile ? '12px' : '15px',
      marginTop: isMobile ? '8px' : '10px',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    socialIcon: {
      width: isMobile ? '35px' : '40px',
      height: isMobile ? '35px' : '40px',
      border: '1px solid #ffffff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontSize: isMobile ? '14px' : '16px'
    },
    satisfactionBadge: {
    display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '10px' : '15px',
      marginTop: isMobile ? '15px' : '20px',
      padding: isMobile ? '12px' : '15px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,0.2)',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left'
    },
    badgeIcon: {
      width: isMobile ? '40px' : '50px',
      height: isMobile ? '40px' : '50px',
      backgroundColor: '#4a90e2',
      borderRadius: '50%',
    display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '20px' : '24px',
      color: '#ffffff',
      flexShrink: 0
    },
    satisfactionText: {
      fontSize: isMobile ? '13px' : '14px',
      color: '#e2e8f0',
      lineHeight: isMobile ? '1.3' : '1.4'
    },
    locationsSection: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      paddingTop: isMobile ? '20px' : '30px',
      marginBottom: isMobile ? '20px' : '30px'
    },
    locationsText: {
    color: '#cbd5e0',
      fontSize: isMobile ? '12px' : '14px',
      lineHeight: isMobile ? '1.4' : '1.5',
      textAlign: isMobile ? 'center' : 'left'
    },
    bottomSection: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      paddingTop: isMobile ? '15px' : '20px',
    display: 'flex',
      justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
      gap: isMobile ? '15px' : '20px',
      flexDirection: isMobile ? 'column' : 'row'
    },
    bottomLinks: {
    display: 'flex',
      gap: isMobile ? '15px' : '20px',
      flexWrap: 'wrap',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    bottomLink: {
      color: '#e2e8f0',
    textDecoration: 'none',
      fontSize: isMobile ? '13px' : '14px',
    transition: 'color 0.3s ease',
      textAlign: isMobile ? 'center' : 'left'
    },
    copyright: {
      color: '#e2e8f0',
      fontSize: isMobile ? '12px' : '14px',
      textAlign: isMobile ? 'center' : 'left'
    }
  };

  const [hoveredStates, setHoveredStates] = React.useState({});

  const handleMouseEnter = (key) => {
    setHoveredStates(prev => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHoveredStates(prev => ({ ...prev, [key]: false }));
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          {/* Logo and Description Section */}
          <div style={styles.logoSection}>
            <div style={styles.logo}>
              <span style={{ flexShrink: 0 }}>
                <a href="https://www.yourgreenpal.com/" style={{ textDecoration: 'none' }}>
                  <img
                    id="logo-image"
                    loading="lazy"
                    alt="local-lawn-cutting-services-in-Columbus-OH"
                    title="the-yard-cutting-businesses-in-Columbus-OH"
                    src={logoImage}
                    style={logoStyles}
                />
              </a>
              </span>
            </div>
            <div style={styles.description}>
              <p>GreenPal is hands-down the easiest way to book a local lawn care company for yard maintenance services at an affordable price. If you're looking for same day lawn mowing or next day lawn cutting services you're at the right place.</p>
              <p style={{ marginTop: '20px' }}>GreenPal is the easiest way to book a lawn mowing services near me at the touch of a button without even having to make a phone call.</p>
            </div>
            <div style={styles.appSection}>
              <div style={styles.appHeading}>Get the remote control for your lawn</div>
              <div style={styles.appButtons}>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ionicframework.greenpal793748&hl=en" 
                  target="_blank" 
                  rel="noopener"
                  style={{
                    ...styles.appButton,
                    ...(hoveredStates.playStore ? styles.appButtonHover : {})
                  }}
                  onMouseEnter={() => handleMouseEnter('playStore')}
                  onMouseLeave={() => handleMouseLeave('playStore')}
                >
                  <span style={{ fontSize: isMobile ? '14px' : '16px' }}>▶</span>
                  <span>Play Store</span>
                </a>
                <a 
                  href="https://apps.apple.com/us/app/greenpal-lawn-yard-care-app/id674679653" 
                  target="_blank" 
                  rel="noopener"
                  style={{
                    ...styles.appButton,
                    ...(hoveredStates.appStore ? styles.appButtonHover : {})
                  }}
                  onMouseEnter={() => handleMouseEnter('appStore')}
                  onMouseLeave={() => handleMouseLeave('appStore')}
                >
                  <span style={{ fontSize: isMobile ? '14px' : '16px' }}>🍎</span>
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div style={styles.linksSection}>
            <div style={styles.linksColumn}>
              <div style={styles.sectionTitle}>GreenPal</div>
              <ul style={styles.linkList}>
                <li><a href="/blog" style={styles.link}>Lawn Care Blog</a></li>
                <li><a href="/snow-removal-services" style={styles.link}>Snow Removal Services</a></li>
                <li><a href="/knowledge-base" style={styles.link}>Frequently Asked Questions</a></li>
                <li><a href="/affordable-lawn-service" style={styles.link}>Affordable Lawn Care</a></li>
                <li><a href="/lawn-care-near-me" style={styles.link}>Lawn Care Near Me</a></li>
                <li><a href="/lawn-mowing-everything" style={styles.link}>Lawn Mowing Tips</a></li>
                <li><a href="/landscaping-tips" style={styles.link}>Landscaping</a></li>
                <li><a href="/yard-cleanup-tips" style={styles.link}>Yard Clean Up Tips</a></li>
                <li><a href="/order-lawn-care" style={styles.link}>Order Lawn Care</a></li>
                <li><a href="/blog" style={styles.link}>GreenPal Reviews</a></li>
                <li><a href="/team" style={styles.link}>About Us</a></li>
              </ul>
            </div>
          </div>

          {/* Providers and Social Section */}
          <div style={styles.socialSection}>
            <div style={styles.linksColumn}>
              <div style={styles.sectionTitle}>Providers</div>
              <ul style={styles.linkList}>
                <li><a href="/welcome-vendor" target="_blank" rel="noopener" style={styles.link}>Apply to be a GreenPal Vendor</a></li>
                <li><a href="https://www.yourgreenpal.com/guides" target="_blank" rel="noopener" style={styles.link}>Free Lawn Business Guides</a></li>
              </ul>
          </div>

            <div style={styles.linksColumn}>
              <div style={styles.sectionTitle}>Connect with us</div>
              <div style={styles.socialIcons}>
                <a href="https://www.facebook.com/pages/GreenPal/495779490484818" target="_blank" rel="noopener" style={styles.socialIcon}>f</a>
                <a href="https://x.com/YourGreenPal" target="_blank" rel="noopener" style={styles.socialIcon}>X</a>
                <a href="https://www.pinterest.com/yourgreenpal/" target="_blank" rel="noopener" style={styles.socialIcon}>P</a>
                <a href="https://www.instagram.com/yourgreenpal/" target="_blank" rel="noopener" style={styles.socialIcon}>📷</a>
              </div>
          </div>

            <div style={styles.satisfactionBadge}>
              <div style={styles.badgeIcon}>👍</div>
              <div style={styles.satisfactionText}>
                Total Satisfaction backed by<br />
                the GreenPal Guarantee!
              </div>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div style={styles.locationsSection}>
          <div style={styles.locationsText}>
            Cincinnati, OH • Cleveland, OH • Lexington, KY • Pittsburgh, PA • Detroit, MI • Indianapolis, IN • Louisville, KY • Lafayette, CO • Erie, CO • Chicago, IL • Orland Park, IL • Cicero, IL • Oak Park, IL • Evanston, IL • Knoxville, TN • Skokie, IL • Joliet, IL • Elmhurst, IL • Bolingbrook, IL • Des Plaines, IL • Naperville, IL • Buffalo, NY • Arlington Heights, IL • Palatine, IL • Aurora, CO • Aurora, IL • Elgin, IL • Lebanon, TN • Greensboro, NC • Hendersonville, TN • Hermitage, TN • Nashville, TN • Clarksville, TN • Smyrna, TN • Antioch, TN • Kannapolis, NC • Huntersville, NC • Murfreesboro, TN • Brentwood, TN • Gastonia, NC • Concord, NC • Bellevue, TN • Baltimore, MD • Chattanooga, TN • Charlotte, NC • Rochester, NY • Matthews, NC • Milwaukee, WI • Spring Hill, TN • Franklin, TN • Raleigh, NC • Granite City, MO • St Louis, MO • Ferguson, MO • Florissant, MO • Clayton, MO • Affton, MO • Cumming, GA • Ballwin, MO • Chesterfield, MO • Alpharetta, GA • St Charles, MO • Johns Creek, GA • O'fallon, MO • Roswell, GA • Lawrenceville, GA • Philadelphia, PA • Marietta, GA • Huntsville, AL • Smyrna, GA • Brookhaven, GA • Virginia Beach, VA • Atlanta, GA • Columbia, SC • Jackson, TN • East Point, GA • Birmingham, AL • Greenwich, CT • Stamford, CT • Memphis, TN • Columbus, GA • Bridgeport, CT • Charleston, SC • New Britain, CT • Savannah, GA • Des Moines, IA • Middletown, CT • Hartford, CT • Montgomery, AL • Blue Springs, MO
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          <div style={styles.bottomLinks}>
            <a href="/privacy-policy" style={styles.bottomLink}>Privacy Policy</a>
            <a href="/terms" style={styles.bottomLink}>Terms & Conditions</a>
          </div>
          <div style={styles.copyright}>
            Copyright © 2025 GreenPal Co. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 