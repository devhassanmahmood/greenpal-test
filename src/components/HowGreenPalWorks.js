import React, { useState, useEffect } from 'react';
import greyArrow from '../assets/grey_arrow.svg';

const HowGreenPalWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

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

  const faqs = [
    {
      id: 1,
      question: "When is the best time of year to get landscaping projects done?",
      answer: "The best time for landscaping projects is typically in the spring (March-May) or fall (September-November) when temperatures are moderate and plants are actively growing. Spring is ideal for planting new vegetation, while fall is perfect for major renovations and tree planting."
    },
    {
      id: 2,
      question: "What is the ideal grass height for mowing?",
      answer: "The ideal grass height depends on the type of grass. For most cool-season grasses like Kentucky bluegrass and fescue, maintain 2.5-3.5 inches. For warm-season grasses like Bermuda and Zoysia, keep 1-2 inches. Never remove more than one-third of the grass blade length in a single mowing."
    },
    {
      id: 3,
      question: "What are the most common lawn care mistakes to avoid?",
      answer: "Common mistakes include mowing too short, watering too frequently but shallowly, neglecting soil health, using dull mower blades, and applying too much fertilizer. It's also important to avoid mowing wet grass and to properly maintain your lawn equipment."
    },
    {
      id: 4,
      question: "What is the average cost for landscaping on the front of the house?",
      answer: "The average cost for front yard landscaping ranges from $3,000 to $15,000, depending on the scope of work. Basic landscaping with plants and mulch might cost $3,000-$8,000, while comprehensive projects with hardscaping, irrigation, and premium materials can reach $15,000 or more."
    },
    {
      id: 5,
      question: "What are some essential lawn mower maintenance tips?",
      answer: "Essential maintenance includes: sharpening blades every 20-25 hours of use, changing oil every 50 hours or annually, replacing air filters regularly, cleaning the mower deck after each use, and storing with fresh fuel or empty tank during winter months."
    },
    {
      id: 6,
      question: "Are there any safety precautions to follow while mowing the lawn?",
      answer: "Yes, always wear closed-toe shoes, long pants, and eye protection. Clear the area of debris, rocks, and toys before mowing. Never mow wet grass, and always turn off the mower before removing grass clippings or making adjustments. Keep children and pets away from the mowing area."
    }
  ];

  const sectionStyles = {
    backgroundColor: '#F7F7F7',
    padding: isMobile ? '40px 15px' : isTablet ? '60px 20px' : '80px 20px',
    width: '100%'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 10px' : isTablet ? '0 15px' : '0 20px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: isMobile ? '30px' : '50px'
  };

  const titleStyles = {
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '36px',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '15px',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: isMobile ? '1.2' : '1.1'
  };

  const subtitleStyles = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666666',
    textAlign: 'center',
    maxWidth: isMobile ? '100%' : '600px',
    margin: '0 auto',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '1.4'
  };

  const highlightedText = {
    color: '#22c55e',
    fontWeight: '600'
  };

  const faqContainerStyles = {
    maxWidth: isMobile ? '100%' : isTablet ? '700px' : '800px',
    margin: '0 auto',
    marginBottom: '40px'
  };

  const accordionItemStyles = {
    backgroundColor: '#F7F7F7',
    borderRadius: '8px',
    marginBottom: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid #E0E0E0'
  };

  const accordionHeaderStyles = {
    padding: isMobile ? '16px 20px' : '20px 24px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Poppins, sans-serif',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '500',
    color: '#333333',
    transition: 'background-color 0.3s ease',
    lineHeight: '1.3'
  };

  const accordionContentStyles = {
    padding: isMobile ? '0 20px 16px 20px' : '0 24px 20px 24px',
    backgroundColor: '#F7F7F7',
    color: '#666666',
    fontSize: isMobile ? '13px' : '14px',
    lineHeight: '1.6',
    fontFamily: 'Poppins, sans-serif'
  };

  const chevronStyles = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666666',
    transition: 'transform 0.3s ease',
    transform: 'rotate(0deg)',
    fontWeight: 'bold',
    flexShrink: 0,
    marginLeft: '10px'
  };

  const chevronOpenStyles = {
    ...chevronStyles,
    transform: 'rotate(180deg)'
  };

  const seeAllButtonStyles = {
    backgroundColor: 'transparent',
    color: '#f68519',
    border: '2px solid #f68519',
    borderRadius: '25px',
    padding: isMobile ? '10px 20px' : '12px 24px',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '280px' : 'none'
  };

  const handleAccordionClick = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#F7F7F7';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#F7F7F7';
  };

  const handleButtonMouseEnter = (e) => {
    e.target.style.backgroundColor = '#F7F7F7';
    e.target.style.color = '#ffffff';
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#F7F7F7';
  };

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>How does GreenPal Work?</h2>
          <p style={subtitleStyles}>
            Common questions about how GreenPal can help you{' '}
            <span style={highlightedText}>hire the best</span> lawn care services in Columbus.
          </p>
        </div>

        <div style={faqContainerStyles}>
          {faqs.map((faq) => (
            <div key={faq.id} style={accordionItemStyles}>
              <button
                style={accordionHeaderStyles}
                onClick={() => handleAccordionClick(faq.id)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {faq.question}
                <span style={openAccordion === faq.id ? chevronOpenStyles : chevronStyles}>
                  <img src={greyArrow} alt="Chevron" style={{width: '18px', height: '18px', fill: '#787878'}} />
                </span>
              </button>
              {openAccordion === faq.id && (
                <div style={accordionContentStyles}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          style={seeAllButtonStyles}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          See all FAQs &gt;
        </button>
      </div>
    </section>
  );
};

export default HowGreenPalWorks; 