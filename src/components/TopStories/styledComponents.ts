import styled from 'styled-components';
import { device } from '../../theme';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const HotStory = styled.div`
  width: 50%;
  
  @media ${device.tabletL} { 
    width: 100%;
    display: flex;
    justify-content: center;
  };
`;
export const TopCardContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tabletL} { 
    max-width: 100%;
  };
  @media ${device.mobileXL} { 
    justify-content: center;
  };
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.tablet} {
    justify-content: center;
  };
`;