import styled from 'styled-components';
import { device } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.mobileXL} { 
    justify-content: center;
  };
`;

export const SectionWrapper = styled.div`
  margin: 60px 0;
`;

export const SectionTitle = styled.h2`
  @media ${device.mobileXL} { 
    text-align: center;
  };
`;

