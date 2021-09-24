import styled from 'styled-components';
import img from '../../assets/Logo_White.png';



export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Content = styled.div<{fullWidth: boolean}>`
  max-width: ${props => props.fullWidth ? "100%" : "700px"};
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