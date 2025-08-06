import React, { useState, useEffect } from "react";
import aboutLeftImage from "../assets/about-left.png";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const styles = {
    section: {
      backgroundColor: "#e6f3ff",
      padding: isMobile ? "10px 0" : "0 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "0 15px" : "0 20px",
    },
    card: {
      backgroundColor: "#e6f3ff",
      borderRadius: "16px",
      padding: isMobile ? "30px 20px" : isTablet ? "40px" : "60px",
      margin: "0 auto",
      // boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "30px" : "50px",
    },
    title: {
      fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.5rem",
      fontWeight: "700",
      color: "#333333",
      marginBottom: "10px",
      lineHeight: "1.2",
      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    },
    subtitle: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: "#666666",
      fontWeight: "400",
      lineHeight: "1.4",
      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    },
    content: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "30px" : "50px",
      alignItems: "center",
      marginBottom: isMobile ? "30px" : "40px",
    },
    image: {
      width: "100%",
      height: isMobile ? "200px" : "300px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    },
    text: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      lineHeight: "1.3",
      color: "#666666",
      textAlign: "left",
      marginBottom: "10px",
      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    },
    readMore: {
      color: isMobile ? "#333333" : "#f68519",
      textDecoration: "underline",
      fontWeight: "600",
      fontSize: isMobile ? "0.9rem" : "1rem",
      cursor: "pointer",
      alignSelf: "flex-start",
      transition: "color 0.3s ease",
      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
      display: isMobile ? "block" : "inline-block",
      width: isMobile ? "100%" : "auto",
      textAlign: isMobile ? "center" : "left",
      marginBottom: isMobile ? "10px" : "10px",
      border: isMobile ? "1px solid #333333" : "none",
      padding: isMobile ? "8px 16px" : "4px 8px",
      borderRadius: isMobile ? "40px" : "0",
    },
    buttonContainer: {
      textAlign: "left",
      marginTop: "10px",
    },
    button: {
      backgroundColor: "#f68519",
      color: "#ffffff",
      border: "none",
      borderRadius: "25px",
      padding: isMobile ? "12px 24px" : "15px 30px",
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      display: isMobile ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: isMobile ? "8px" : "10px",
      width: isMobile ? "100%" : "auto",
      boxShadow: isMobile
        ? "0 2px 8px rgba(246, 133, 25, 0.3)"
        : "0 4px 15px rgba(246, 133, 25, 0.3)",
      transition: "all 0.3s ease",
      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.title}>About Columbia South Carolina</h1>
            <p style={styles.subtitle}>
              Columbia is a city in South Carolina, United States.
            </p>
          </div>

          <div style={styles.content}>
            <div>
              <img
                src={aboutLeftImage}
                alt="Columbia South Carolina skyline"
                style={styles.image}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p style={styles.text}>
                  Columbia is the capital and second-largest city of South
                  Carolina, with a population of 134,309 as of 2016, growing to
                  832,666 by July 1st, 2018. It serves as the seat of Richland
                  County and is the center of the Columbia metropolitan
                  statistical area, which had a population of 767,598 in 2010,
                  making it the 70th largest metropolitan area in the United
                  States. The name Columbia is a poetic reference to the United
                  States, originating from the name of Christopher Columbus.
                  {isExpanded && (
                    <>
                      <br />
                      Columbia was founded in 1786 and was named after
                      Christopher Columbus.
                    </>
                  )}
                </p>
                <a
                  href="#"
                  style={styles.readMore}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                  }}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </a>
              </div>

              <div style={styles.buttonContainer}>
                <button style={styles.button}>See Prices &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
