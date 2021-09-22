import styled from 'styled-components';
import img from '../../assets/Logo_White.png';


type Props = {
  size: "s" | "m" | "l",
  color: string;
  imgUrl?: string;
}

export const Container = styled.div<Props>`
  position: relative;
  width: ${props => props.size === "s" ? '300px' : props.size === "m" ? '400px' : '600px' };
  height: ${props => props.size === "s" ? '300px' : props.size === "m" ? '400px' : '400px' };
  background-color: ${props => props.theme.lightBlue};
  margin: 5px 0;
  border-bottom: 3px solid ${props => props.color};
  background-image: url(${props => props.imgUrl || img});
  background-size: ${props => props.imgUrl ? "cover" : "unset"};
  background-repeat: no-repeat;
  background-position: ${props => props.imgUrl ? "center" : "top"};
  box-shadow: rgb(0 0 0 / 60%) 2px 3px 15px;
  div {
    background-color: ${props => props.theme.opacityPrimary};
    color: ${props => props.theme.light};
    position: absolute;
    bottom: 0;
    padding: 0px 15px 10px 15px;
    height: 140px;
  }
`;

