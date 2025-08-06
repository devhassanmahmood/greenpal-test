import React, { useState, useEffect } from 'react';

const ServiceProcess = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    container: {
      background: 'linear-gradient(to bottom, #9ac540 -14%, #42a042 93%)',
      padding: isMobile ? '40px 20px' : '80px 0',
      width: '100%'
    },
    mainSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0' : '0 90px',
      textAlign: 'center'
    },
    heading: {
      fontSize: isMobile ? '28px' : '36px',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: isMobile ? '40px' : '60px',
      lineHeight: 1.2
    },
    processContainer: {
      display: isMobile ? 'flex' : 'grid',
      gridTemplateAreas: isMobile ? 'none' : '"step1 arrow1 step2 arrow2 step3"',
      gridTemplateColumns: isMobile ? 'none' : '1fr auto 1fr auto 1fr',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '40px' : '40px',
      position: 'relative',
      minHeight: isMobile ? 'auto' : '300px'
    },
    processStep: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: isMobile ? '280px' : '300px',
      position: 'relative'
    },
    step1: {
      gridArea: isMobile ? 'none' : 'step1'
    },
    step2: {
      gridArea: isMobile ? 'none' : 'step2'
    },
    step3: {
      gridArea: isMobile ? 'none' : 'step3'
    },
    iconContainer: {
      width: isMobile ? '120px' : '140px',
      height: isMobile ? '120px' : '140px',
      backgroundColor: '#1A365D',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      position: 'relative',
      border: '2px solid white'
    },
    stepText: {
      fontSize: isMobile ? '18px' : '20px',
      fontWeight: '600',
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: 1.3
    },
    arrow1: {
      display: isMobile ? 'none' : 'block',
      gridArea: 'arrow1',
      width: '80px',
      height: '40px',
      alignSelf: 'center'
    },
    arrow2: {
      display: isMobile ? 'none' : 'block',
      gridArea: 'arrow2',
      width: '80px',
      height: '40px',
      alignSelf: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainSection}>
        <h2 style={styles.heading}>
          Local lawn mowing services in Indianapolis Indiana<br />
          compete for your lawn
        </h2>
        
        <div style={styles.processContainer}>
          {/* Step 1: Get free quotes */}
          <div style={{...styles.processStep, ...styles.step1}}>
            <div style={styles.iconContainer}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80px', height: '80px' }}>
                {/* Hand */}
                <path d="M25 70 Q20 65 25 60 L35 50 Q40 45 45 50 L55 55 Q60 60 55 65 L50 70 Q45 75 40 70 L30 75 Q25 70 25 70 Z" fill="#FFB6C1"/>
                {/* Speech bubbles */}
                <circle cx="20" cy="40" r="6" fill="#FF8C00"/>
                <text x="20" y="43" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">$28</text>
                
                <circle cx="35" cy="30" r="6" fill="#87CEEB"/>
                <text x="35" y="33" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">$37</text>
                
                <circle cx="50" cy="40" r="6" fill="#FF8C00"/>
                <text x="50" y="43" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">$45</text>
              </svg>
            </div>
            <div style={styles.stepText}>Get free quotes</div>
          </div>

          {/* Arrow 1 - Downward curve */}
          <svg style={styles.arrow1} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 Q40 40 70 10" stroke="white" strokeWidth="2" fill="none" opacity="0.7"/>
          </svg>

          {/* Step 2: Read reviews */}
          <div style={{...styles.processStep, ...styles.step2}}>
            <div style={styles.iconContainer}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80px', height: '80px' }}>
                {/* Thumbs up */}
                <path d="M30 70 L30 50 Q30 45 35 45 L45 45 Q50 45 50 50 L50 70 Q50 75 45 75 L35 75 Q30 75 30 70 Z" fill="#FFB6C1"/>
                <path d="M35 45 L35 35 Q35 30 40 30 L45 30 Q50 30 50 35 L50 45" fill="#FFB6C1"/>
                {/* Stars */}
                <path d="M55 30 L57 35 L62 35 L58 38 L60 43 L55 40 L50 43 L52 38 L48 35 L53 35 Z" fill="#FF8C00"/>
                <path d="M65 25 L67 30 L72 30 L68 33 L70 38 L65 35 L60 38 L62 33 L58 30 L63 30 Z" fill="#FF8C00"/>
                <path d="M75 35 L77 40 L82 40 L78 43 L80 48 L75 45 L70 48 L72 43 L68 40 L73 40 Z" fill="#FF8C00"/>
              </svg>
            </div>
            <div style={styles.stepText}>Read their reviews and choose with confidence</div>
          </div>

          {/* Arrow 2 - Upward curve */}
          <svg style={styles.arrow2} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30 Q40 0 70 30" stroke="white" strokeWidth="2" fill="none" opacity="0.7"/>
          </svg>

          {/* Step 3: Hire with ease */}
          <div style={{...styles.processStep, ...styles.step3}}>
            <div style={styles.iconContainer}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80px', height: '80px' }}>
                {/* Phone */}
                <rect x="35" y="25" width="30" height="50" rx="4" fill="white"/>
                <rect x="37" y="27" width="26" height="46" rx="2" fill="#87CEEB"/>
                <text x="50" y="50" textAnchor="middle" fill="#8FB741" fontSize="8" fontWeight="bold">GREENPAL</text>
                {/* Finger */}
                <circle cx="45" cy="35" r="3" fill="#FFB6C1"/>
              </svg>
            </div>
            <div style={styles.stepText}>Hire with ease & relax</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess; 