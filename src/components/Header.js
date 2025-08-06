import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import HeaderBackground from './HeaderBackground';
import HeroSection from './HeroSection';
import LawnProsCarousel from './LawnProsCarousel';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <NavigationBar 
        isScrolled={isScrolled}
        isMobile={isMobile}
        isTablet={isTablet}
        screenWidth={screenWidth}
      />
      
      <HeaderBackground isMobile={isMobile} isTablet={isTablet}>
        <HeroSection 
          isMobile={isMobile}
          isTablet={isTablet}
          screenWidth={screenWidth}
        />
        
        <div style={{ 
          position: 'relative', 
          zIndex: 3, 
          width: '100%'
        }}>
          <LawnProsCarousel />
        </div>
      </HeaderBackground>
    </>
  );
};

export default Header; 