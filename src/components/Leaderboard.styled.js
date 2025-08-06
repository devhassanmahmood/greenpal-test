import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f0f8ff;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial,
    sans-serif;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f4fd;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const RankNumber = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  line-height: 1;
  margin-bottom: 2px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 0;
    order: 1;
  }
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;
  position: relative;

  .avatar-wrapper {
    position: relative;
    display: inline-block;
  }

  .avatar-wrapper img {
    border: 3px solid #ffd700;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .avatar-wrapper img {
      width: 56px !important;
      height: 56px !important;
    }
    order: 2;
  }
`;

export const CompanyInfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    align-items: center;
    width: 100%;
    order: 3;
  }
`;

export const RankText = styled.div`
  font-size: 12px;
  color: #ffb34d;
  margin-bottom: 4px;
  font-weight: 500;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CompanyName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ReliabilitySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const ReliabilityStars = styled.div`
  color: #ffa726;
  font-size: 16px;
  letter-spacing: 2px;
`;

export const ReliabilityText = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 500;
`;

export const PriceSection = styled.div`
  flex-shrink: 0;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    margin-top: 10px;
    order: 4;
    width: 100%;
  }
`;

export const Price = styled.div`
  background: #fff5e6;
  color: #ff8901;
  font-weight: bold;
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #ffe4cc;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 6px 12px;
    text-align: center;
    background: transparent;
    border: none;
    padding: 0;
    color: #000000;
    font-weight: bold;
  }
`;

export const StatsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
    order: 5;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: flex-start;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

export const StatIcon = styled.span`
  font-size: 14px;
  width: 16px;
`;

export const StatText = styled.span`
  font-size: 13px;
  color: #507f18;
  font-weight: 500;
`;

export const ServicesSection = styled.div`
  margin: 16px 0;

  @media (max-width: 768px) {
    margin: 12px 0;
    order: 6;
  }
`;

export const ServicesTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 6px;
    width: 100%;
  }
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  min-width: fit-content;
  color: #dfdfdf;
  font-family: inherit;
`;

export const ServiceTick = styled.img`
  width: 16px;
  height: 16px;
`;

export const ServiceIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ServiceLabel = styled.span``;

export const SeePricesButton = styled.button`
  background: #ff8901;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: flex-start;
  margin-top: -8px;

  &:hover {
    background: #e67c00;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
    margin-top: 15px;
    align-self: center;
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ButtonStyled = styled.button`
  background: #ffffff;
  color: #ff8901;
  border: 2px solid #ff8901;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ff8901;
    color: white;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;
