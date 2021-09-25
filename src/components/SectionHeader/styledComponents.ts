import styled from 'styled-components';
import { device } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media ${device.mobileXL} { 
    justify-content: center;
}
`;

export const BookmarkWrapper = styled.div`
  @media ${device.mobileL} { 
    margin-bottom: 20px
  }
`;

