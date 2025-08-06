import React, { useState, useEffect } from 'react';

const GreenPalInfo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isZipCodesExpanded, setIsZipCodesExpanded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sectionStyles = {
    backgroundColor: '#ffffff',
    padding: isMobile ? '40px 0px' : isTablet ? '60px 40px' : '80px 60px',
    maxWidth: '100%'
  };

  const containerStyles = {
    maxWidth: '1250px',
    backgroundColor: '#EFFEEE',
    padding: isMobile ? '20px 30px' : '50px 80px',
    margin: '0 auto',
    width: '100%'
  };

  // First Section: "How does GreenPal Work?"
  const firstSectionStyles = {
    marginBottom: isMobile ? '40px' : '60px'
  };

  const firstSectionHeaderStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '30px' : '40px'
  };

  const firstSectionTitleStyles = {
    fontSize: isMobile ? '28px' : isTablet ? '32px' : '36px',
    fontWeight: '700',
    color: '#2d3748',
    margin: '0 0 20px 0',
    textAlign: 'center'
  };

  const firstSectionContentStyles = {
    display: isMobile ? 'block' : 'flex',
    alignItems: 'center',
    gap: isMobile ? '20px' : '40px',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const lawnImageStyles = {
    width: isMobile ? '100%' : '30%',
    borderRadius: '20px',
    overflow: 'hidden',
    height: '180px',
    flexShrink: 0
  };

  const lawnImageElementStyles = {
    width: '100%',
    height: isMobile ? '200px' : '300px',
    objectFit: 'cover',
    display: 'block'
  };

  const firstSectionTextStyles = {
    flex: 1,
    color: '#2d3748',
    fontSize: isMobile ? '16px' : '19px',
    lineHeight: '1.6',
    fontWeight: '700',
    marginBottom: '20px',
    position: 'relative'
  };

  const textContainerStyles = {
    marginTop: isMobile && '10px',
    position: 'relative',
    overflow: 'hidden',
    maxHeight: isTextExpanded ? 'none' : '4.8em', // 3 lines (1.6 * 3) to show 2 full lines + 1 faded line
    transition: 'max-height 0.3s ease'
  };

  const overlayStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1.6em', // One line height for the fade effect
    background: 'linear-gradient(transparent, #f0f8f0)',
    pointerEvents: 'none',
    display: isTextExpanded ? 'none' : 'block'
  };

  const readMoreButtonStyles = {
    color: '#FF9000',
    fontWeight: '600',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    background: 'transparent',
    display: 'inline-block',
    textDecoration: 'underline',
    transition: 'color 0.3s ease',
    marginTop: '10px',
    textAlign: isMobile ? 'center' : 'left',
    alignSelf: isMobile ? 'center' : 'flex-start',
    width: isMobile ? '100%' : 'auto'
  };

  const readMoreLinkStyles = {
    color: '#FF9000',
    textDecoration: 'underline',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'inline-block',
    transition: 'color 0.3s ease'
  };

  // Second Section: "Not in Columbia?"
  const secondSectionStyles = {

  };

  const secondSectionHeaderStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '30px' : '40px'
  };

  const secondSectionTitleStyles = {
    fontSize: isMobile ? '1.7rem' : '36px',
    fontWeight: '700',
    color: '#333333',
    margin: '0 0 0px 0',
    textAlign: 'center'
  };

  const secondSectionSubtitleStyles = {
    fontSize: isMobile ? '1.8rem' : '36px',
    fontWeight: '600',
    color: '#00A567',
    margin: '0',
    textAlign: 'center'
  };

  const secondSectionContentStyles = {
    display: isMobile ? 'block' : 'flex',
    gap: isMobile ? '30px' : '40px',
    alignItems: 'flex-start',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const mapContainerStyles = {
    // width: isMobile ? '100%' : '32%',
    // borderRadius: '20px',
    // overflow: 'hidden',
    // height: 'auto',
    // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    // flexShrink: 0
  };

  const mapStyles = {
    width: '100%',
    height: isMobile ? '250px' : '215px',
    border: 'none',
    borderRadius: '20px',
    marginTop: '10px'
  };

  const contentContainerStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };

  const citiesRowStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '15px' : '0px',
    marginTop: isMobile ? '10px' : '0px'
  };

  const cityItemStyles = {
    color: '#333333',
    fontSize: isMobile ? '1rem' : '14px',
    fontWeight: '600',
    padding: '2px 0',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    textAlign: 'left'
  };

  const zipCodesRowStyles = {
    textAlign: 'left'
  };

  const zipCodesTitleStyles = {
    fontSize: isMobile ? '1.4rem' : '15px',
    color: '#333333',
    marginBottom: '20px',
    fontWeight: '800',
    textAlign: 'left'
  };

  const zipCodesContainerStyles = {
    position: 'relative',
    overflow: 'hidden',
    maxHeight: isZipCodesExpanded ? 'none' : '4em', // Show both rows with second row blurred
    transition: 'max-height 0.3s ease'
  };

  const zipCodesOverlayStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1.5em', // Height for the fade effect on second row
    background: 'linear-gradient(transparent, #EFFEEE)',
    pointerEvents: 'none',
    display: isZipCodesExpanded ? 'none' : 'block'
  };

  const zipCodesGridStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const zipCodeRowStyles = {
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-start',
    gap: isMobile ? '20px' : '11px',
    flexWrap: 'wrap'
  };

  const zipCodeItemStyles = {
    fontSize: isMobile ? '1rem' : '12px',
    color: '#333333',
    fontFamily: 'inherit',
    fontWeight: '400'
  };

  const handleReadMoreClick = (section) => {
    console.log(`Read more clicked for ${section}`);
    // Add your navigation or modal logic here
  };

  const handleCityClick = (city) => {
    console.log(`City clicked: ${city}`);
    // Add your city selection logic here
  };

  const handleTextExpand = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  const handleZipCodesExpand = () => {
    setIsZipCodesExpanded(!isZipCodesExpanded);
  };

  // Zip codes array
  const zipCodes = [
    '46201', '46202', '46202', '46202', '46202', '46202', '46202', '46202', '46202', '46202', '46202', '46202', '46202',
    '46217', '46218', '46218', '46218', '46218', '46218', '46218', '46218', '46218', '46218', '46218', '46218', '46218'
  ];

  return (
    <div>

      <section style={sectionStyles}>
        <div style={containerStyles}>
          {/* First Section: How does GreenPal Work? */}
          <div style={firstSectionStyles}>
            <div style={firstSectionHeaderStyles}>
              <h2 style={firstSectionTitleStyles}>How does GreenPal Work?</h2>
            </div>

            <div style={firstSectionContentStyles}>
              <div style={lawnImageStyles}>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Green lawn with ride-on mower"
                  style={lawnImageElementStyles}
                />
              </div>

              <div style={firstSectionTextStyles}>
                <div style={textContainerStyles}>
                  <p>
                    How long did it take you to contract a cheap lawn mower the last time?
                    If it took you more than an hour you are wasting thirty minutes of your life.
                    GreenPal can connect you not only to the same lawn care professionals but also
                    to verified, insured, and background-checked service providers who guarantee
                    quality work and competitive pricing. Our platform streamlines the entire process,
                    from getting instant quotes to scheduling services, all in under 60 seconds.
                  </p>
                  <div style={overlayStyles}></div>
                </div>
                <button
                  style={readMoreButtonStyles}
                  onClick={handleTextExpand}
                >
                  {isTextExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Second Section: Not in Columbia? */}
          <div style={secondSectionStyles}>
            <div style={secondSectionHeaderStyles}>
              <h3 style={secondSectionTitleStyles}>Not in Columbia ?</h3>
              <p style={secondSectionSubtitleStyles}>GreenPal also covers these nearby cities</p>
            </div>

            <div style={secondSectionContentStyles}>
              {/* Column 1: Map */}
              <div style={mapContainerStyles}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0000000000005!2d-81.00000000000001!3d34.0007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9000000000001%3A0x1234567890abcdef!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  title="Columbia, SC Area Map with Nearby Cities"
                  style={mapStyles}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Column 2: Content with 2 rows */}
              <div style={contentContainerStyles}>
                {/* Row 1: Cities in 4 columns */}
                <div style={citiesRowStyles}>
                  {/* Column 1 */}
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Asheville')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Asheville
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Fayetteville')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Fayetteville
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Augusta')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Augusta
                  </div>

                  {/* Column 2 */}
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Statesboro')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Statesboro
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Greenville')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Greenville
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Milledgeville')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Milledgeville
                  </div>

                  {/* Column 3 */}
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Charleston')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Charleston
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Pooler')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Pooler
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Rock Hill')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Rock Hill
                  </div>

                  {/* Column 4 */}
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Athens')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Athens
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Summerville')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Summerville
                  </div>
                  <div
                    style={cityItemStyles}
                    onClick={() => handleCityClick('Savannah')}
                    onMouseEnter={(e) => e.target.style.color = '#28a745'}
                    onMouseLeave={(e) => e.target.style.color = '#333333'}
                  >
                    Savannah
                  </div>
                </div>

                {/* Row 2: Zip Codes */}
                <div style={zipCodesRowStyles}>
                  <p style={zipCodesTitleStyles}>
                    GreenPal offers nearby lawn maintenance services in these Columbia Zip Codes
                  </p>
                  <div style={zipCodesContainerStyles}>
                    <div style={zipCodeRowStyles}>
                      {zipCodes.map((zip, index) => (
                        <span key={index} style={zipCodeItemStyles}>{zip}</span>
                      ))}
                    </div>
                    <div style={zipCodesOverlayStyles}></div>
                  </div>
                  <button
                    style={readMoreButtonStyles}
                    onClick={handleZipCodesExpand}
                  >
                    {isZipCodesExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenPalInfo; 