import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Most Relevant");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

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
      backgroundColor: "#ffffff",
      padding: isMobile ? "40px 0" : "80px 0",
      fontFamily: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "0 15px" : "0 20px",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "10px" : "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.5rem",
      fontWeight: "700",
      color: "#333333",
      lineHeight: "1.2",
      maxWidth: isMobile ? "100%" : "60%",
      textAlign: "center",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? "8px" : "10px",
      marginBottom: isMobile ? "30px" : "40px",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    ratingText: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: "#333333",
      fontWeight: "600",
    },
    stars: {
      display: "flex",
      gap: "2px",
    },
    star: {
      color: "#ffd700",
      fontSize: isMobile ? "18px" : "20px",
    },
    reviewCount: {
      color: "#3aa2e1",
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontWeight: "700",
    },
    searchSection: {
      marginBottom: isMobile ? "20px" : "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: isMobile ? "100%" : "60%",
      margin: "0 auto",
    },
    searchContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "10px" : "15px",
      marginBottom: "20px",
      alignItems: "stretch",
      width: "100%",
    },
    searchBar: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: isMobile ? "10px 12px" : "12px 16px",
      backgroundColor: "#ffffff",
    },
    searchIcon: {
      marginRight: "10px",
      color: "#666666",
      fontSize: isMobile ? "14px" : "16px",
    },
    searchInput: {
      border: "none",
      outline: "none",
      flex: 1,
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#333333",
    },
    sortDropdown: {
      padding: isMobile ? "10px 12px" : "12px 16px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#333333",
      cursor: "pointer",
      minWidth: isMobile ? "100%" : "30%",
    },
    filterSection: {
      marginBottom: isMobile ? "20px" : "30px",
      width: "100%",
    },
    filterText: {
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      color: "#666666",
      marginBottom: "10px",
      textAlign: "left",
    },
    filterTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: isMobile ? "8px" : "10px",
    },
    filterTag: {
      backgroundColor: "#ffffff",
      border: "1px solid gray",
      color: "#39aeea",
      padding: isMobile ? "5px 10px" : "6px 12px",
      borderRadius: "20px",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    reviewsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(350px, 1fr))",
      gap: isMobile ? "15px" : "20px",
      marginBottom: isMobile ? "30px" : "40px",
    },
    reviewCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: isMobile ? "15px" : "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      border: "1px solid #f0f0f0",
    },
    reviewHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      // marginBottom: "10px",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    reviewStars: {
      display: "flex",
      gap: "2px",
    },
    reviewStar: {
      color: "#ffd700",
      fontSize: isMobile ? "14px" : "16px",
    },
    verifiedBadge: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: "#b5cf81",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      fontWeight: "500",
      paddingLeft: "10px",
    },
    location: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: "#666666",
      fontSize: isMobile ? "0.6rem" : "0.8rem",
      fontWeight: "500",
      marginBottom: "5px",
    },
    serviceDescription: {
      color: "#999999",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      marginBottom: isMobile ? "10px" : "15px",
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      display: "inline-block",
    },
    reviewText: {
      color: "#333333",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      lineHeight: "1.5",
      marginBottom: isMobile ? "10px" : "15px",
    },
    reviewerInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: isMobile ? "8px" : "10px",
    },
    reviewerAvatar: {
      width: isMobile ? "28px" : "32px",
      height: isMobile ? "28px" : "32px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      fontWeight: "600",
      flexShrink: 0,
    },
    reviewerName: {
      color: "#333333",
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      fontWeight: "700",
      flex: 1,
      marginLeft: "10px",
    },
    reviewDate: {
      color: "#999999",
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      fontWeight: "400",
      flexShrink: 0,
    },
    readMoreButton: {
      textAlign: "center",
    },
    readMoreBtn: {
      backgroundColor: "#ffffff",
      color: "#333333",
      border: "1px solid #e0e0e0",
      borderRadius: "40px",
      padding: isMobile ? "10px 20px" : "12px 24px",
      fontSize: isMobile ? "0.9rem" : "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: isMobile ? "100%" : "auto",
    },
  };

  const filterTags = [
    { name: "Lawn", count: 6 },
    { name: "Landscaping", count: 2 },
    { name: "Garden", count: 2 },
    { name: "Removal", count: 2 },
    { name: "Plant", count: 2 },
    { name: "Yard", count: 1 },
    { name: "Weeds", count: 1 },
  ];

  const allReviews = [
    {
      id: 1,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Near Lawn Cutting near Talbot's Corner",
      text: "They did great, I love Mercury Greens they always do such a detailed job.",
      reviewer: {
        initials: "FC",
        name: "Frank Cooper",
        avatarColor: "#3aa2e1",
      },
      date: "May 21, 2025",
    },
    {
      id: 2,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Full Service Lawn Care near Timberwood",
      text: "They did great, I love Mercury Greens they always do such a detailed job.",
      reviewer: {
        initials: "MR",
        name: "Mike Rodriguez",
        avatarColor: "#ff9800",
      },
      date: "May 21, 2025",
    },
    {
      id: 3,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Lawn Maintenance near Oak Hill",
      text: "They did great, I love Mercury Greens they always do such a detailed job.",
      reviewer: { initials: "AD", name: "Alice Davis", avatarColor: "#ff9800" },
      date: "May 21, 2025",
    },
    {
      id: 4,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Garden Care near Belle Meade",
      text: "They did great, I love Mercury Greens they always do such a detailed job.",
      reviewer: { name: "Stacy Miller", avatarColor: "#9c27b0" },
      date: "May 21, 2025",
    },
    {
      id: 5,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Landscaping Services near Green Hills",
      text: "They did great, I love Mercury Greens they always do such a detailed job.",
      reviewer: { initials: "JW", name: "John Wilson", avatarColor: "#4caf50" },
      date: "May 21, 2025",
    },
    {
      id: 6,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Yard Maintenance near West End",
      text: "They did great, I love Mercury Greens they always do such a detailed job.",
      reviewer: {
        initials: "SM",
        name: "Sarah Mitchell",
        avatarColor: "#e91e63",
      },
      date: "May 21, 2025",
    },
    {
      id: 7,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Landscaping near Belle Meade",
      text: "Excellent service! The team was professional and did an amazing job with our landscaping project.",
      reviewer: {
        initials: "RJ",
        name: "Robert Johnson",
        avatarColor: "#795548",
      },
      date: "May 20, 2025",
    },
    {
      id: 8,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Lawn Care near Green Hills",
      text: "Very satisfied with the lawn care service. They were punctual and thorough.",
      reviewer: {
        initials: "LM",
        name: "Lisa Martinez",
        avatarColor: "#607d8b",
      },
      date: "May 19, 2025",
    },
    {
      id: 9,
      rating: 5,
      verified: true,
      location: "Nashville, TN 37220",
      service: "Garden Maintenance near Oak Hill",
      text: "Great experience with the garden maintenance. Everything looks perfect!",
      reviewer: {
        initials: "DW",
        name: "David Wilson",
        avatarColor: "#9e9e9e",
      },
      date: "May 18, 2025",
    },
  ];

  const reviews = showAllReviews ? allReviews : allReviews.slice(0, 6);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={styles.reviewStar}>
        ★
      </span>
    ));
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            Here is what other GreenPal users have to say as of July 2025
          </h1>
        </div>

        <div style={styles.ratingContainer}>
          {!isMobile && (
            <span style={styles.ratingText}>Overall rating 5/5</span>
          )}
          <div style={styles.stars}>{renderStars(5)}</div>
          <span style={styles.reviewCount}>( 4,940 reviews )</span>
        </div>

        <div style={styles.searchSection}>
          <div style={styles.searchContainer}>
            <div style={styles.searchBar}>
              <span style={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search reviews"
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              style={styles.sortDropdown}
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="Most Relevant">Most Relevant</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Highest Rated">Highest Rated</option>
            </select>
          </div>

          <div style={styles.filterSection}>
            <div style={styles.filterText}>Read reviews that mention:</div>
            <div style={styles.filterTags}>
              {filterTags.map((tag, index) => (
                <button
                  key={index}
                  style={styles.filterTag}
                  onClick={() => console.log(`Filter by ${tag.name}`)}
                >
                  {tag.name} • {tag.count}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} style={styles.reviewCard}>
              <div style={styles.reviewHeader}>
                <div style={styles.reviewStars}>
                  {renderStars(review.rating)}
                </div>
                {review.verified && (
                  <div style={styles.verifiedBadge}>
                    <span>✓</span>
                    Verified by GreenPal
                  </div>
                )}
              </div>

              <div style={styles.location}>
                <span>📍</span>
                {review.location}
              </div>

              <div style={styles.serviceDescription}>{review.service}</div>

              <div style={styles.reviewText}>{review.text}</div>

              <div style={styles.reviewerInfo}>
                <div
                  style={{
                    ...styles.reviewerAvatar,
                    backgroundColor: review.reviewer.avatarColor,
                  }}
                >
                  {review.reviewer.initials || review.reviewer.name.charAt(0)}
                </div>
                <div style={styles.reviewerName}>{review.reviewer.name}</div>
                <div style={styles.reviewDate}>{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.readMoreButton}>
          <button
            style={styles.readMoreBtn}
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? "Show Less Reviews" : "Read More Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
