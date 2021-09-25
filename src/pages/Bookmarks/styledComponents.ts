import styled from 'styled-components';
import { device } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tablet} { 
    justify-content: center;
  };
`;
