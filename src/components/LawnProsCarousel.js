import React, { useState, useEffect, useRef } from 'react';
import LawnProCard from './LawnProCard';

const LawnProsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
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
    const isLeftSwipe = distance > 30; // Reduced threshold for easier swiping
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const sectionStyles = {
    padding: '0',
    position: 'relative',
    marginTop: '0',
    width: '100%',
    zIndex: 2
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '20px 15px' : '40px 20px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '10px'
  };

  const titleStyles = {
    fontSize: isMobile ? '28px' : '36px',
    fontWeight: '700',
    color: '#ffffff',
  };

  const carouselContainerStyles = {
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: '1000px',
    padding: isMobile ? '0' : '0 60px',
    width: '100%',
    touchAction: 'pan-y pinch-zoom',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none'
  };

  const getCardWidth = () => {
    return isMobile ? 250 : isTablet ? 320 : 300;
  };

  const getGap = () => {
    return isMobile ? 10 : 20;
  };

  const carouselTrackStyles = {
    display: 'flex',
    transition: 'transform 0.3s ease-in-out',
    transform: isMobile 
      ? `translateX(-${currentSlide * getCardWidth()}px)` 
      : `translateX(-${currentSlide * (getCardWidth() + getGap())}px)`,
    gap: `${getGap()}px`,
    width: 'max-content',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none'
  };

  const cardStyles = {
    minWidth: `${getCardWidth()}px`,
    maxWidth: `${getCardWidth()}px`,
    flexShrink: 0,
    width: `${getCardWidth()}px`,
    height: '280px'
  };

  const navigationStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    color: '#333',
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
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    e.target.style.transform = 'translateY(-50%) scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    e.target.style.transform = 'translateY(-50%) scale(1)';
  };

  const paginationStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '30px'
  };

  const paginationDotStyles = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#d1d5db',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const activeDotStyles = {
    ...paginationDotStyles,
    backgroundColor: '#10b981'
  };

  const providers = [
    {
      id: 1,
      name: "Green Lawn Care",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 105,
      avgPrice: 75,
      available: true
    },
    {
      id: 2,
      name: "Perfect Yard Services",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 98,
      avgPrice: 74,
      available: true
    },
    {
      id: 3,
      name: "Fresh Cut Crew",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviews: 98,
      avgPrice: 74,
      available: true
    },
    {
      id: 4,
      name: "Elite Lawn Solutions",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviews: 87,
      avgPrice: 78,
      available: true
    },
    {
      id: 5,
      name: "Pro Lawn Masters",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      reviews: 112,
      avgPrice: 72,
      available: true
    }
  ];

  const nextSlide = () => {
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
    const maxSlides = Math.ceil(providers.length / slidesPerView);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
    const maxSlides = Math.ceil(providers.length / slidesPerView);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Hire a Trusted Lawn Pro</h2>
        </div>
        
        <div 
          ref={carouselRef}
          style={carouselContainerStyles}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows - Only show on desktop/tablet */}
          {!isMobile && (
            <>
              {/* Left Navigation Arrow */}
              <div 
                style={leftNavStyles} 
                onClick={prevSlide}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={leftArrowStyles}>‹</span>
              </div>
              
              {/* Right Navigation Arrow */}
              <div 
                style={rightNavStyles} 
                onClick={nextSlide}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={rightArrowStyles}>›</span>
              </div>
            </>
          )}
          
          <div style={carouselTrackStyles}>
            {providers.map((provider) => (
              <div key={provider.id} style={cardStyles}>
                <LawnProCard 
                  provider={provider}
                  onClick={() => console.log(`Clicked on ${provider.name}`)}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div style={paginationStyles}>
          {Array.from({ length: Math.ceil(providers.length / (isMobile ? 1 : isTablet ? 2 : 3)) }, (_, index) => (
            <div
              key={index}
              style={index === currentSlide ? activeDotStyles : paginationDotStyles}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawnProsCarousel; 