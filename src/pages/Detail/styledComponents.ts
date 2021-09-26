import styled from 'styled-components';
import img from '../../assets/Logo_White.png';
import { device } from '../../theme';

export const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media ${device.tabletL} { 
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Content = styled.div<{fullWidth: boolean}>`
  max-width: ${props => props.fullWidth ? "100%" : "700px"};
  img, iframe {
    max-width: ${props => props.fullWidth ? "100%" : "700px"};
  }
  img {
    height: auto;
  }
  @media ${device.tabletL} { 
    max-width: 100%;
    img, iframe {
      max-width: 600px;
    }
  }
  @media ${device.mobileXL} { 
    img, iframe {
      max-width: 400px;
    }
  }
  @media ${device.mobileL} { 
    img, iframe {
      max-width: 300px;
    }
  }
`;

export const Header = styled.div`
  margin-top: 45px;
  display: flex;
  @media ${device.tablet} { 
    justify-content: center;
  }
`;

export const Img = styled.div<{src: string}>`
  max-width: 500px;
  width: 100%;
  height: 500px;
  background-color: ${props => props.theme.coverBlue};
  margin: 5px 0;
  background-image: url(${props => props.src || img});
  background-size: ${props => props.src ? "cover" : "100%"};
  background-repeat: no-repeat;
  background-position: ${props => props.src ? "center" : "0 20px"};
`;