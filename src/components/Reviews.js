import React from 'react';

const Reviews = () => {
  const reviewsStyles = {
    padding: '80px 0',
    backgroundColor: '#f8f9fa'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '20px'
  };

  const subtitleStyles = {
    fontSize: '1.2rem',
    color: '#666666',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const reviewsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  };

  const reviewCardStyles = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const starsStyles = {
    display: 'flex',
    gap: '4px',
    marginBottom: '20px'
  };

  const starStyles = {
    color: '#ffd700',
    fontSize: '20px'
  };

  const reviewTextStyles = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333333',
    marginBottom: '20px',
    fontStyle: 'italic'
  };

  const customerInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const avatarStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#8fb741',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '18px'
  };

  const customerDetailsStyles = {
    flex: 1
  };

  const customerNameStyles = {
    fontWeight: '600',
    color: '#333333',
    marginBottom: '4px'
  };

  const customerLocationStyles = {
    fontSize: '14px',
    color: '#666666'
  };

  const ratingStyles = {
    fontSize: '14px',
    color: '#8fb741',
    fontWeight: '600'
  };

  const handleCardHover = (e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
  };

  const handleCardLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Finally, an easy way to get the lawn cut by someone near me. GreenPal made it so simple to find a reliable lawn care provider. The service was excellent and the price was fair.",
      customer: {
        name: "Sarah M.",
        location: "Columbus, OH",
        avatar: "SM"
      }
    },
    {
      id: 2,
      rating: 5,
      text: "I was skeptical at first, but GreenPal delivered exactly what they promised. Found a great lawn care provider within hours, and the job was done perfectly. Highly recommend!",
      customer: {
        name: "Michael R.",
        location: "Columbus, OH",
        avatar: "MR"
      }
    },
    {
      id: 3,
      rating: 5,
      text: "The best lawn care service I've ever used. The providers are professional, the pricing is transparent, and the results are outstanding. Will definitely use again.",
      customer: {
        name: "Jennifer L.",
        location: "Columbus, OH",
        avatar: "JL"
      }
    },
    {
      id: 4,
      rating: 5,
      text: "GreenPal saved me so much time and hassle. Instead of calling around to different lawn care companies, I got multiple quotes instantly. The service was top-notch.",
      customer: {
        name: "David K.",
        location: "Columbus, OH",
        avatar: "DK"
      }
    },
    {
      id: 5,
      rating: 5,
      text: "Excellent experience with GreenPal. The lawn care provider was punctual, professional, and did an amazing job. The platform is user-friendly and the customer service is great.",
      customer: {
        name: "Lisa P.",
        location: "Columbus, OH",
        avatar: "LP"
      }
    },
    {
      id: 6,
      rating: 5,
      text: "I've been using GreenPal for over a year now and couldn't be happier. The providers are reliable, the pricing is competitive, and the quality of work is consistently excellent.",
      customer: {
        name: "Robert T.",
        location: "Columbus, OH",
        avatar: "RT"
      }
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={starStyles}>
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section style={reviewsStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>What Our Customers Say</h2>
          <p style={subtitleStyles}>
            Join thousands of satisfied customers who have found reliable lawn care providers through GreenPal
          </p>
        </div>
        
        <div style={reviewsGridStyles}>
          {reviews.map((review) => (
            <div
              key={review.id}
              style={reviewCardStyles}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={starsStyles}>
                {renderStars(review.rating)}
              </div>
              
              <p style={reviewTextStyles}>
                "{review.text}"
              </p>
              
              <div style={customerInfoStyles}>
                <div style={avatarStyles}>
                  {review.customer.avatar}
                </div>
                <div style={customerDetailsStyles}>
                  <div style={customerNameStyles}>
                    {review.customer.name}
                  </div>
                  <div style={customerLocationStyles}>
                    {review.customer.location}
                  </div>
                </div>
                <div style={ratingStyles}>
                  {review.rating}.0
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 