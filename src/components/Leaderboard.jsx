import React from "react";
import {
  Wrapper,
  Card,
  Header,
  RankNumber,
  RankText,
  CompanyName,
  AvatarContainer,
  CompanyInfoSection,
  StatsSection,
  StatsRow,
  StatItem,
  StatIcon,
  StatText,
  ServicesSection,
  ServicesTitle,
  ServicesGrid,
  ServiceItem,
  ServiceTick,
  ServiceIcon,
  ServiceLabel,
  ReliabilitySection,
  ReliabilityStars,
  ReliabilityText,
  PriceSection,
  Price,
  SeePricesButton,
  ButtonWrapper,
  ButtonStyled,
  ContentContainer,
  BottomSection,
} from "./Leaderboard.styled";

const CustomAvatar = ({ src, alt, sx }) => {
  const avatarStyle = {
    width: sx?.width || 64,
    height: sx?.height || 64,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ffd700',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <img
      src={src}
      alt={alt}
      style={avatarStyle}
      onError={(e) => {
        e.target.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.style.cssText = `
          width: ${sx?.width || 64}px;
          height: ${sx?.height || 64}px;
          border-radius: 50%;
          background: #8fb741;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 20px;
          border: 3px solid #ffd700;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        `;
        fallback.textContent = alt ? alt.substring(0, 2).toUpperCase() : '?';
        e.target.parentNode.appendChild(fallback);
      }}
    />
  );
};

const companies = [
  {
    id: 1,
    name: "Landscape Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    reliability: "84%",
    earnings: "85,749",
    lawnsMowed: 82,
    location: "Indianapolis, IN",
    hired: 81,
    price: 45,
    rank: 1,
    rankText: "Ranked #1 in Texas",
    services: {
      shrubPruning: true,
      weedRemoval: true,
      snowPlowing: true,
      landscaping: true,
      turfAeration: true,
      leafRemoval: true,
    },
  },
  {
    id: 2,
    name: "Taurus Property Work",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    reliability: "60%",
    earnings: "85,749",
    lawnsMowed: 1184,
    location: "Cincinnati, OH",
    hired: 154,
    price: 55,
    rank: 2,
    rankText: "Ranked #2 in Ohio",
    services: {
      shrubPruning: true,
      weedRemoval: false,
      snowPlowing: false,
      landscaping: true,
      turfAeration: false,
      leafRemoval: false,
    },
  },
  {
    id: 3,
    name: "True Property Sol",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    reliability: "57%",
    earnings: "85,749",
    lawnsMowed: 962,
    location: "Columbus, OH",
    hired: 98,
    price: 65,
    rank: 3,
    rankText: "Ranked #3 in Ohio",
    services: {
      shrubPruning: true,
      weedRemoval: false,
      snowPlowing: false,
      landscaping: true,
      turfAeration: false,
      leafRemoval: true,
    },
  },
];

const Leaderboard = () => {
  const renderService = (serviceKey, label, iconSrc, isAvailable) => (
    <ServiceItem key={serviceKey} available={isAvailable}>
      <ServiceTick
        src="https://greenpal-production.s3.amazonaws.com/images/state_page/service_tick.png"
        alt="Checkmark icon symbolizing service confirmation or completion"
      />
      <ServiceIcon src={iconSrc} alt="Service image" />
      <ServiceLabel>{label}</ServiceLabel>
    </ServiceItem>
  );

  const renderStars = (reliability) => {
    const percentage = parseInt(reliability);
    const stars = Math.round((percentage / 100) * 5);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <Wrapper>
      <ContentContainer>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://greenpal-production.s3.amazonaws.com/images/state_page/leaderboard_oh.png"
              alt="Leaderboard Icon"
              style={{
                width: "30px",
                height: "auto",
                marginRight: "0px", // no space after image
              }}
            />
            <div
              style={{
                fontSize: "28px",
                lineHeight: "38px",
                fontFamily: "greenpal-semibold",
                textAlign: "left",
              }}
            >
              Columbia Lawn Care Companies
            </div>
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: "38px",
              fontFamily: "greenpal-semibold",
            }}
          >
            Companies Leaderboard
          </div>
        </div>
        {companies.map((company, index) => (
          <Card key={company.id}>
            <Header>
              {/* Rank Number and Avatar - Side by side on mobile */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <RankNumber>#{company.rank}</RankNumber>
                <AvatarContainer>
                  <div className="avatar-wrapper">
                    <div className="crown">
                      <img
                        src="https://greenpal-production.s3.amazonaws.com/images/state_page/ranked_no_1.png"
                        alt="State rank"
                        style={{
                          width: "24px",
                          height: "24px",
                          position: "absolute",
                          top: "-12px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 2,
                          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                        }}
                      />
                    </div>
                    <CustomAvatar
                      src={company.avatar}
                      alt={company.name}
                      sx={{ width: 64, height: 64 }}
                    />
                  </div>
                </AvatarContainer>
              </div>

              {/* Company Info Section - Centered on mobile */}
              <CompanyInfoSection>
                <RankText>{company.rankText}</RankText>
                <CompanyName>{company.name}</CompanyName>
                <ReliabilitySection>
                  <ReliabilityStars>
                    {renderStars(company.reliability)}
                  </ReliabilityStars>
                  <ReliabilityText>
                    {company.reliability} Reliability Rating
                  </ReliabilityText>
                </ReliabilitySection>
              </CompanyInfoSection>

              {/* Price Section - FIRST */}
              <PriceSection>
                <Price>${company.price}/Mowing</Price>
              </PriceSection>

              {/* Stats Section - AFTER price */}
              <StatsSection>
                <StatsRow>
                  <StatItem>
                    <StatIcon>💰</StatIcon>
                    <StatText>${company.earnings} earned</StatText>
                  </StatItem>
                  <StatItem>
                    <StatIcon>📍</StatIcon>
                    <StatText>{company.location}</StatText>
                  </StatItem>
                </StatsRow>
                <StatsRow>
                  <StatItem>
                    <StatIcon>🏡</StatIcon>
                    <StatText>{company.lawnsMowed} lawns mowed in</StatText>
                  </StatItem>
                  <StatItem>
                    <StatIcon>👥</StatIcon>
                    <StatText>Hired {company.hired} Times</StatText>
                  </StatItem>
                </StatsRow>
              </StatsSection>
            </Header>

            {/* Divider */}
            <div
              style={{ height: "1px", background: "#e0e0e0", margin: "16px 0" }}
            ></div>

            {/* Services Section */}
            <ServicesSection>
              <ServicesTitle>Yard Maintenance Services offered</ServicesTitle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <ServicesGrid>
                  {/* First Row - 3 services */}
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    {renderService(
                      "shrubPruning",
                      "Shrub Pruning",
                      "https://greenpal-production.s3.amazonaws.com/images/state_page/shrub_prunning.png",
                      company.services.shrubPruning
                    )}
                    {renderService(
                      "weedRemoval",
                      "Weed Removal",
                      "https://greenpal-production.s3.amazonaws.com/images/state_page/weed_removal.png",
                      company.services.weedRemoval
                    )}
                    {renderService(
                      "snowPlowing",
                      "Snow Plowing",
                      "https://greenpal-production.s3.amazonaws.com/images/state_page/snow_plow.png",
                      company.services.snowPlowing
                    )}
                  </div>
                  {/* Second Row - 3 services */}
                  <div style={{ display: "flex", gap: "16px" }}>
                    {renderService(
                      "landscaping",
                      "Landscaping",
                      "https://greenpal-production.s3.amazonaws.com/images/state_page/landscaping.png",
                      company.services.landscaping
                    )}
                    {renderService(
                      "turfAeration",
                      "Turf Aeration",
                      "https://greenpal-production.s3.amazonaws.com/images/state_page/turf_aeration.png",
                      company.services.turfAeration
                    )}
                    {renderService(
                      "leafRemoval",
                      "Leaf Removal",
                      "https://greenpal-production.s3.amazonaws.com/images/state_page/leaf_removal.png",
                      company.services.leafRemoval
                    )}
                  </div>
                </ServicesGrid>
                <SeePricesButton>See Prices ›</SeePricesButton>
              </div>
            </ServicesSection>
          </Card>
        ))}

        <ButtonWrapper>
          <ButtonStyled>
            See all Indianapolis, IN Lawn Care Companies ›
          </ButtonStyled>
        </ButtonWrapper>
      </ContentContainer>
    </Wrapper>
  );
};

export default Leaderboard;
