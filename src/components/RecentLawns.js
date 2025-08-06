import React, { useState, useEffect, useRef } from 'react';
import SeePricesButton from './SeePricesButton';

const RecentLawns = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [cardWidth, setCardWidth] = useState(300);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);

      // Calculate card width based on screen size
      if (width <= 768) {
        setCardWidth(width - 40); // Full width minus padding
      } else if (width > 768 && width <= 1024) {
        setCardWidth(320);
      } else {
        // For desktop, calculate based on container width
        const containerWidth = Math.min(width, 1200);
        const availableWidth = containerWidth - 60; // Account for padding
        const cardsPerView = 3;
        const gap = 30;
        setCardWidth(Math.floor((availableWidth - (gap * (cardsPerView - 1))) / cardsPerView));
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    if (isMobile) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
    const maxSlides = Math.max(0, lawnServices.length - slidesPerView);
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
    const maxSlides = Math.max(0, lawnServices.length - slidesPerView);
    setCurrentSlide(Math.min(index, maxSlides));
  };

  const getCardWidth = () => {
    return cardWidth;
  };

  const getGap = () => {
    return isMobile ? 0 : 30;
  };

  const sectionStyles = {
    backgroundColor: '#ffffff',
    padding: isMobile ? '40px 0px' : isTablet ? '60px 40px' : '80px 60px',
    maxWidth: '100%'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '40px' : '60px'
  };

  const titleStyles = {
    fontSize: isMobile ? '28px' : isTablet ? '32px' : '36px',
    fontWeight: '700',
    color: '#333333',
    margin: '0 0 10px 0',
    textAlign: 'center'
  };

  const subtitleStyles = {
    fontSize: isMobile ? '16px' : '18px',
    color: '#666666',
    margin: '0',
    textAlign: 'center'
  };

  const cardsGridStyles = {
    display: isMobile ? 'block' : 'grid',
    gridTemplateColumns: isMobile ? 'none' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '0' : '30px',
    marginBottom: '40px'
  };

  const carouselContainerStyles = {
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: '100%',
    padding: isMobile ? '0' : '0 60px',
    width: '100%',
    touchAction: 'pan-y pinch-zoom',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none'
  };

  const carouselTrackStyles = {
    display: 'flex',
    transition: 'transform 0.3s ease-in-out',
    transform: isMobile
      ? `translateX(-${currentSlide * getCardWidth()}px)`
      : `translateX(-${currentSlide * (getCardWidth() + getGap())}px)`,
    gap: `${getGap()}px`,
    width: 'max-content',
    margin: '0 10px',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none'
  };

  const cardStyles = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    minWidth: isMobile ? `${getCardWidth() - 200}px` : 'auto',
    maxWidth: isMobile ? `${getCardWidth()}px` : 'auto',
    flexShrink: isMobile ? 0 : 1,
    width: isMobile ? `${getCardWidth() - 200}px` : '100%',
    margin: isMobile ? '0 10px 0px 5px' : '0px'
  };

  const navigationStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: '#28272796',
    border: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 10,
    transition: 'all 0.3s ease',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const leftNavStyles = {
    ...navigationStyles,
    left: '10px'
  };

  const rightNavStyles = {
    ...navigationStyles,
    right: '10px'
  };

  const arrowIconStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const leftArrowStyles = {
    ...arrowIconStyles,
    transform: 'translateX(-2px)'
  };

  const rightArrowStyles = {
    ...arrowIconStyles,
    transform: 'translateX(2px)'
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#28272796';
    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#28272796';
    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  };

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    borderRadius: '20px',
    height: '200px',
    overflow: 'hidden'
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };


  const priceTagStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#FF9000',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: '1.2',
    zIndex: 2,
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
  };

  const priceAmountStyles = {
    fontSize: '16px',
    fontWeight: '700'
  };

  const priceUnitStyles = {
    fontSize: '10px',
    fontWeight: '400'
  };

  const cardContentStyles = {
    padding: '20px 0 0 0',
  };

  const serviceTitleStyles = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#333333',
    margin: '0 0 8px 0'
  };

  const locationContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  };

  const locationIconStyles = {
    width: '14px',
    height: '14px',
    marginRight: '6px',
    color: '#666666'
  };

  const locationStyles = {
    fontSize: '14px',
    color: '#666666',
    margin: '0'
  };

  const detailsContainerStyles = {
    marginBottom: '16px'
  };

  const detailRowStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '6px'
  };

  const detailIconStyles = {
    width: '16px',
    height: '16px',
    marginRight: '8px',
    color: '#8FB741'
  };

  const detailTextStyles = {
    fontSize: '14px',
    color: '#333333',
    margin: '0',
    fontWeight: '500'
  };

  const notesContainerStyles = {
    backgroundColor: '#EFF3F8',
    borderRadius: '0px 20px 20px 20px',
    padding: '12px',
  };

  const notesStyles = {
    fontSize: '13px',
    margin: '0',
    fontWeight: '100',
    lineHeight: '1.4',
  };

  const paginationStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '40px'
  };

  const paginationButtonStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#666666',
    transition: 'all 0.3s ease'
  };

  const paginationTextStyles = {
    fontSize: '16px',
    color: '#333333',
    fontWeight: '500'
  };

  const seePricesButtonStyles = {
    height: isMobile ? '51px' : isTablet ? '51px' : '60px',
    width: isMobile ? '200px' : isTablet ? '220px' : '260px',
    backgroundColor: '#FF9000',
    color: '#FFFFFF',
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px',
    textAlign: 'center',
    border: '0',
    marginTop: isMobile ? '10px' : '0px',
    outline: 'none',
    backgroundImage: 'linear-gradient(0deg, #FF6F00 0%, #FF9B00 100%)',
    borderRadius: '50px',
    padding: isMobile ? '0 15px' : isTablet ? '0 20px' : '0 23px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '6px' : isTablet ? '7px' : '8px',
    margin: '0 auto',
    transition: 'all 0.3s ease'
  };

  // Array of lawn service objects
  const lawnServices = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      priceUnit: "/mowing",
      title: "Yard Cutting – Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      pricePerCut: "$75 per cut",
      lastMowed: "2 months ago",
      frequency: "Weekly",
      notes: "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      priceUnit: "/mowing",
      title: "Yard Cutting – Kansas City, Missouri",
      location: "Near Lawn Cutting near Talbot's Corner",
      pricePerCut: "$75 per cut",
      lastMowed: "2 months ago",
      frequency: "Every 10 days",
      notes: "Our backyard is all garden/pea gravel so only the front yard needs to be mowed, but we do want it to be edged, blown off, etc."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      priceUnit: "/mowing",
      title: "Yard Cutting – Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      pricePerCut: "$75 per cut",
      lastMowed: "2 months ago",
      frequency: "Weekly",
      notes: "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      priceUnit: "/mowing",
      title: "Yard Cutting – Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      pricePerCut: "$75 per cut",
      lastMowed: "2 months ago",
      frequency: "Every 2 weeks",
      notes: "+/-4' wide - 2/3 of back has not been mowed this season. I'm not concerned with what day it's mowed, just kind of needs to be fairly soon. Will want it neat for future mowings."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      priceUnit: "/mowing",
      title: "Yard Cutting – Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      pricePerCut: "$75 per cut",
      lastMowed: "2 months ago",
      frequency: "Weekly",
      notes: "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$45",
      priceUnit: "/mowing",
      title: "Yard Cutting – Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      pricePerCut: "$75 per cut",
      lastMowed: "2 months ago",
      frequency: "Weekly",
      notes: "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions."
    }
  ];

  const handleCardClick = (service) => {
    console.log('Card clicked:', service);
    // Add navigation or modal logic here
  };

  const handleSeePrices = () => {
    console.log('See Prices clicked');
    // Add navigation logic here
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#e67e00';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#FF9000';
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Recent lawns mowed in Columbus, OH</h2>
          <p style={subtitleStyles}>GreenPal's community of lawn care pros</p>
        </div>

        {isMobile ? (
          <div
            ref={carouselRef}
            style={carouselContainerStyles}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div style={carouselTrackStyles}>
              {lawnServices.map((service) => (
                <div
                  key={service.id}
                  style={cardStyles}
                  onClick={() => handleCardClick(service)}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <div style={imageContainerStyles}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={imageStyles}
                    />
                    <div style={priceTagStyles}>
                      <span style={priceAmountStyles}>{service.price}</span>
                      <span style={priceUnitStyles}>{service.priceUnit}</span>
                    </div>
                  </div>

                  <div style={cardContentStyles}>
                    <h3 style={serviceTitleStyles}>{service.title}</h3>

                    <div style={locationContainerStyles}>
                      <svg style={locationIconStyles} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p style={locationStyles}>{service.location}</p>
                    </div>

                    <div style={detailsContainerStyles}>
                      <div style={detailRowStyles}>
                        <svg style={detailIconStyles} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        <p style={detailTextStyles}>Price: {service.pricePerCut}</p>
                      </div>

                      <div style={detailRowStyles}>
                        <svg style={detailIconStyles} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <p style={detailTextStyles}>Last Mowed: {service.lastMowed}</p>
                      </div>

                      <div style={detailRowStyles}>
                        <svg style={detailIconStyles} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <p style={detailTextStyles}>Service Frequency: {service.frequency}</p>
                      </div>
                    </div>

                    <div style={notesContainerStyles}>
                      <p style={notesStyles}>{service.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={cardsGridStyles}>
            {lawnServices.map((service) => (
              <div
                key={service.id}
                style={cardStyles}
                onClick={() => handleCardClick(service)}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div style={imageContainerStyles}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={imageStyles}
                  />
                  <div style={priceTagStyles}>
                    <span style={priceAmountStyles}>{service.price}</span>
                    <span style={priceUnitStyles}>{service.priceUnit}</span>
                  </div>
                </div>

                <div style={cardContentStyles}>
                  <h3 style={serviceTitleStyles}>{service.title}</h3>

                  <div style={locationContainerStyles}>
                    <svg style={locationIconStyles} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p style={locationStyles}>{service.location}</p>
                  </div>

                  <div style={detailsContainerStyles}>
                    <div style={detailRowStyles}>
                      <svg style={detailIconStyles} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      <p style={detailTextStyles}>Price: {service.pricePerCut}</p>
                    </div>

                    <div style={detailRowStyles}>
                      <svg style={detailIconStyles} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <p style={detailTextStyles}>Last Mowed: {service.lastMowed}</p>
                    </div>

                    <div style={detailRowStyles}>
                      <svg style={detailIconStyles} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <p style={detailTextStyles}>Service Frequency: {service.frequency}</p>
                    </div>
                  </div>

                  <div style={notesContainerStyles}>
                    <p style={notesStyles}>{service.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {
          !isMobile && (
            <div style={paginationStyles}>
              <button style={paginationButtonStyles}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <span style={paginationTextStyles}>1 of 45</span>
              <button style={paginationButtonStyles}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )
        }

        {/* <button
          style={seePricesButtonStyles}
          onClick={handleSeePrices}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={{
            color: '#fff',
            fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
            lineHeight: isMobile ? '20px' : isTablet ? '22px' : '24px'
          }}>See Prices &gt;</span>
        </button> */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <SeePricesButton size='large' />
        </div>
      </div>
    </section>
  );
};

export default RecentLawns; 