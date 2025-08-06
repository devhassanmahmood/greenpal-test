import React, { useState, useEffect, useRef } from 'react';
import LawnProCardNew from './LawnProCardNew';

const LawnProsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [cardWidth, setCardWidth] = useState(400);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRadius, setSelectedRadius] = useState('3');
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      
      // Calculate card width based on screen size
      if (width <= 768) {
        setCardWidth(300);
      } else if (width > 768 && width <= 1024) {
        setCardWidth(320);
      } else {
        // For desktop, calculate based on 80% container width
        const containerWidth = width * 0.8;
        const availableWidth = containerWidth - 120; // Account for padding
        const cardsPerView = 3;
        const gap = 20;
        setCardWidth(Math.floor((availableWidth - (gap * (cardsPerView - 1))) / cardsPerView));
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const sectionStyles = {
    padding: '0',
    position: 'relative',
    marginTop: '0',
    width: '100%',
    backgroundColor: '#E5F6FD',
    zIndex: 2
  };

  const containerStyles = {
    maxWidth: '80%',
    margin: '0 auto',
    padding: isMobile ? '20px 15px' : '40px 20px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '30px'
  };

  const titleStyles = {
    fontSize: isMobile ? '28px' : '36px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '10px',
    fontFamily: 'Poppins, sans-serif'
  };

  const subtitleStyles = {
    fontSize: '16px',
    color: '#666666',
    textAlign: 'center',
    marginBottom: '40px',
    fontFamily: 'Poppins, sans-serif'
  };

  const searchContainerStyles = {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto 20px'
  };

  const searchBarStyles = {
    position: 'relative',
    flex: isMobile ? '1' : '0 0 450px',
    maxWidth: isMobile ? '100%' : '450px'
  };

  const searchInputStyles = {
    width: '100%',
    padding: '12px 16px 12px 45px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    backgroundColor: '#E5F6FD',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  const searchIconStyles = {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666666',
    fontSize: '16px',
    width: '16px',
    height: '16px'
  };

  const SearchIcon = () => (
    <svg 
      style={searchIconStyles}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  );

  const dropdownStyles = {
    color: '#666666',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
    outline: 'none',
    backgroundColor: '#E5F6FD',
    cursor: 'pointer',
    minWidth: isMobile ? '100%' : '250px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  const resultsTextStyles = {
    textAlign: 'center',
    fontSize: '16px',
    color: '#666666',
    marginBottom: '30px',
    fontFamily: 'Poppins, sans-serif'
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

  const getCardWidth = () => {
    return cardWidth;
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
    height: 'auto'
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
    e.target.style.transform = 'translateY(-50%) scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#28272796';
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
    backgroundColor: '#6a6a6a',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const activeDotStyles = {
    ...paginationDotStyles,
    backgroundColor: '#fff'
  };

  const providers = [
    {
      id: 1,
      name: "Green Lawn Care",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      avgPrice: 75,
      available: true,
      location: "Nashville, TN 37220",
      serviceType: "Full Service Lawn Care near Timberwood",
      testimonial: "I love Mercury Greens they always do such a detailed job.",
      date: "Aug 8, 2025"
    },
    {
      id: 2,
      name: "Family Cox",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      avgPrice: 74,
      available: true,
      location: "Nashville, TN 37220",
      serviceType: "Full Service Lawn Care near Timberwood",
      testimonial: "Excellent service and very reliable team.",
      date: "May 21, 2025"
    },
    {
      id: 3,
      name: "Lucian Radu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      avgPrice: 74,
      available: true,
      location: "Nashville, TN 37220",
      serviceType: "Full Service Lawn Care near Timberwood",
      testimonial: "Great quality work and fair pricing.",
      date: "Jun 15, 2025"
    },
    {
      id: 4,
      name: "Elite Lawn Solutions",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      avgPrice: 78,
      available: true,
      location: "Nashville, TN 37220",
      serviceType: "Full Service Lawn Care near Timberwood",
      testimonial: "Professional service and beautiful results.",
      date: "Jul 3, 2025"
    },
    {
      id: 5,
      name: "Pro Lawn Masters",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      avgPrice: 72,
      available: true,
      location: "Nashville, TN 37220",
      serviceType: "Full Service Lawn Care near Timberwood",
      testimonial: "Consistent quality and great communication.",
      date: "Aug 12, 2025"
    }
  ];

  const nextSlide = () => {
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
    const maxSlides = Math.max(0, providers.length - slidesPerView);
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
    const maxSlides = Math.max(0, providers.length - slidesPerView);
    setCurrentSlide(Math.min(index, maxSlides));
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {/* Main Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>Find Trusted Lawn Care Pros Instantly</h2>
          <p style={subtitleStyles}>Search by Name or Zip Code. Easy booking in seconds</p>
        </div>

        {/* Search Section */}
        <div style={searchContainerStyles}>
          <div style={searchBarStyles}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search by Name or Zip Code"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={searchInputStyles}
            />
          </div>
          <select
            value={selectedRadius}
            onChange={(e) => setSelectedRadius(e.target.value)}
            style={dropdownStyles}
          >
            <option value="1">Within 1 mile of ZIP</option>
            <option value="3">Within 3 miles of ZIP</option>
            <option value="5">Within 5 miles of ZIP</option>
            <option value="10">Within 10 miles of ZIP</option>
          </select>
        </div>

        {/* Results Count */}
        <div style={resultsTextStyles}>
          {providers.length} lawn pros found near you
        </div>
        
        <div 
          ref={carouselRef}
          style={carouselContainerStyles}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {!isMobile && (
            <>
              <div 
                style={leftNavStyles} 
                onClick={prevSlide}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={leftArrowStyles}>‹</span>
              </div>
              
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
                <LawnProCardNew 
                  provider={provider}
                  onClick={() => console.log(`Clicked on ${provider.name}`)}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div style={paginationStyles}>
          {Array.from({ length: Math.max(1, providers.length - (isMobile ? 0 : isTablet ? 1 : 2)) }, (_, index) => (
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

export default LawnProsSection; 