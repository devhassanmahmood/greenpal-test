import React, { useState, useEffect } from 'react';
import bgSec7 from '../assets/bg-sec7.png';
import homeSec4Bg from '../assets/home-sec4-bg.svg';
import videoImage from '../assets/video-image.webp';
import illustration1 from '../assets/promotional-illusion-image.png';
import orangeBottomArrowImage from '../assets/orange-bottom-arrow.svg';
import SeePricesButton from './SeePricesButton';

const PromotionalSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const arrowStyles = {
    height: '20px',
    width: 'auto'
  };

  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden'
    },
    // Section 1: Top Section (Light Grey Background)
    section1: {
      backgroundColor: '#F8F9FC',
      padding: '80px 0',
      position: 'relative'
    },
    section1Content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 20px' : '0 90px',
      display: isMobile ? 'flex' : 'grid',
      gridTemplateColumns: isMobile ? 'none' : '40% 60%',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '30px' : '80px',
      alignItems: 'center',
      textAlign: isMobile ? 'center' : 'left'
    },
    illustration1: {
      textAlign: isMobile ? 'center' : 'left',
      position: 'relative'
    },
    illustration1Image: {
      width: '300px',
      height: 'auto',
      maxWidth: '100%'
    },
    stars: {
      position: 'absolute',
      top: '-30px',
      right: '60px',
      display: 'flex',
      gap: '12px'
    },
    star: {
      width: '28px',
      height: '28px',
      backgroundColor: '#ffd700',
      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      animation: 'twinkle 2s infinite',
      filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
    },
    section1Text: {
      textAlign: isMobile ? 'center' : 'left'
    },
    section1Heading: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#2d3748',
      lineHeight: 1.1,
      marginBottom: '25px',
      textAlign: isMobile ? 'center' : 'left'
    },
    networkHighlight: {
      color: '#ff8c00',
      fontSize: '40px'
    },
    section1Paragraph: {
      fontSize: '18px',
      color: '#4a5568',
      lineHeight: 1.7,
      maxWidth: '520px'
    },
    // Section 2: Middle Section (Dark Blue Background)
    section2: {
      backgroundImage: isMobile ? 'none' : `url(${homeSec4Bg})`,
      backgroundColor: isMobile ? '#166388' : 'transparent',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: isMobile ? '40px 0 0px 0' : '80px 0 120px 0',
      position: 'relative',
      overflow: 'visible',
      minHeight: isMobile ? '40vh' : '50vh',
    },
    section2Content: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: isMobile ? '0 20px' : '0 90px',
      textAlign: isMobile ? 'left' : 'center',
      position: 'relative',
      paddingBottom: isMobile ? '40px' : '60px'
    },
    section2Heading: {
      fontSize: isMobile ? '24px' : '35px',
      fontWeight: '650',
      color: '#e2e8f0',
      lineHeight: isMobile ? '1.2' : '1.25',
      marginBottom: '25px',
      textAlign: isMobile ? 'left' : 'center',
      maxWidth: isMobile ? '280px' : 'none'
    },
    section2Paragraph: {
      fontSize: isMobile ? '16px' : '18px',
      color: '#e2e8f0',
      lineHeight: 1.6,
      marginBottom: '40px',
      textAlign: isMobile ? 'left' : 'center'
    },
    clickHereText: {
      color: '#FF9002',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '400',
      lineHeight: isMobile ? '20px' : '22px',
      textAlign: 'left',
      margin: 0,
      display: 'inline'
    },
    clickHereContainer: {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'left',
      width: '100%'
    },
    // Video Section - Spans across section2 and section3
    videoSection: {
      position: isMobile ? 'relative' : 'absolute',
      top: isMobile ? 'auto' : '-175px',
      left: isMobile ? 'auto' : '50%',
      transform: isMobile ? 'none' : 'translateX(-50%)',
      width: isMobile ? '100%' : '650px',
      maxWidth: isMobile ? '400px' : '650px',
      margin: isMobile ? '30px auto' : '0',
      zIndex: 10,
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    videoThumbnail: {
      width: '100%',
      height: isMobile ? '200px' : '350px',
      objectFit: 'cover'
    },
    // Section 3: Bottom Section (Light Blue Background with gradient)
    section3: {
      backgroundImage: `url(${bgSec7})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      padding: '120px 0 80px 0',
      position: 'relative',
      minHeight: '65vh',
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      width: '100%',
      overflow: 'visible'
    },
    section3Content: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center'
    },
    section3Text: {
      textAlign: 'center'
    },
    section3Heading: {
      fontSize: '37px',
      fontWeight: '700',
      color: '#1a365d',
      lineHeight: 1.1,
      marginBottom: '25px',
      textAlign: 'center'
    },
    serviceHighlight: {
      color: '#00bfff'
    },
    section3Button: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#8fb741',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    section3ButtonHover: {
      backgroundColor: '#e67e00',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255,140,0,0.4)'
    },
    illustration3: {
      textAlign: 'right'
    },
    illustration3Image: {
      width: '380px',
      height: 'auto',
      maxWidth: '100%',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
    },
    // Arrow styles
    arrow: {
      position: 'absolute',
      bottom: '-50px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '60px',
      opacity: 0.9,
      zIndex: 1
    },
    arrowPath: {
      stroke: '#ffffff',
      strokeWidth: '3',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
        `}
      </style>
      
      {/* Section 1: Top Section */}
      <section style={styles.section1}>
        <div style={styles.section1Content}>
          <div style={styles.illustration1}>
            <img src={illustration1} alt="Professional landscaper on riding lawnmower" style={styles.illustration1Image} />
          </div>
          <div style={styles.section1Text}>
            <h2 style={styles.section1Heading}>
              How the GreenPal{' '}
              <span style={styles.networkHighlight}>network ranks</span>{' '}
              lawn & landscape companies
            </h2>
            <p style={styles.section1Paragraph}>
              Each week, thousands of customers across the U.S. trust our network of professional landscapers. 
              In Columbus, GA, we evaluate lawn care companies based on five key performance areas: customer satisfaction, 
              service quality, punctuality, job volume, and responsiveness. This approach helps us identify and highlight 
              the top-performing lawn mowing services in the area.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Middle Section */}
      <section style={styles.section2}>
        <div style={styles.section2Content}>
          {/* Content below the video */}
          <h2 style={styles.section2Heading}>
            Tired of unreliable lawn services? So are we... See how it works
          </h2>
          <p style={styles.section2Paragraph}>
            Save Time, Save Money, Book a great local landscaping service in Columbus now with GreenPal.
          </p>
          
          {/* Click here to watch text with arrow - Mobile only */}
          {isMobile && (
            <div style={styles.clickHereContainer}>
              <p style={styles.clickHereText}>
                Click here to watch how<br />
                GreenPal works.
              </p>
              <img
                alt="Orange Bottom Arrow"
                src={orangeBottomArrowImage}
                style={{
                  position: 'absolute',
                  marginLeft: '5px',
                  top: '70%',
                  transform: 'translateY(-30%)',
                  width: '12px',
                  height: 'auto'
                }}
              />
            </div>
          )}
          
          {/* Video Section - For mobile, it's part of section2 */}
          {isMobile && (
            <div style={styles.videoSection}>
              <img
                src={videoImage}
                alt="Lawn care video thumbnail"
                style={styles.videoThumbnail}
              />
            </div>
          )}
          { isMobile && (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <SeePricesButton size="xl" />
            </div>
          )}
          
        </div>
      </section>

      {/* Section 3: Bottom Section */}
      <section style={styles.section3}>
        {/* Video Section - Spans across section2 and section3 */}
        <div style={styles.videoSection}>
          <img
            src={videoImage}
            alt="Lawn care video thumbnail"
            style={styles.videoThumbnail}
          />
        </div>

        <div style={styles.section3Content}>
          <div style={styles.section3Text}>
            <h2 style={styles.section3Heading}>
              Save Time, Save Money, Book a{' '}
              <span style={styles.serviceHighlight}>great local landscaping service</span>{' '}
              in Columbus now with GreenPal.
            </h2>
            <SeePricesButton size="xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionalSection; 