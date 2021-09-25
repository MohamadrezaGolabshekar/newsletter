import styled from 'styled-components';
import img from '../../assets/Logo_White.png';
import { device } from '../../theme';


type Props = {
  size: "s" | "m" | "l",
  color: string;
  imgUrl?: string;
}

const SMALL_WIDTH = "300px";
const SMALL_HEIGHT = "250px";

const MEDIUM_WIDTH = "400px";
const MEDIUM_HEIGHT = "400px";

const LARGE_WIDTH = "600px";
const LARGE_HEIGHT = "510px";

export const Container = styled.div<Props>`
  position: relative;
  cursor: pointer;
  width: ${props => props.size === "s" ? SMALL_WIDTH : props.size === "m" ? MEDIUM_WIDTH : LARGE_WIDTH};
  height: ${props => props.size === "s" ? SMALL_HEIGHT : props.size === "m" ? MEDIUM_HEIGHT : LARGE_HEIGHT};
  background-color: ${props => props.theme.coverBlue};
  margin: 5px 0;
  border-bottom: 3px solid ${props => props.color};
  background-image: url(${props => props.imgUrl || img});
  background-size: ${props => props.imgUrl ? "cover" : "100%"};
  background-repeat: no-repeat;
  background-position: ${props => props.imgUrl ? "center" : "0 20px"};
  box-shadow: rgb(0 0 0 / 60%) 2px 3px 15px;

  @media ${device.tabletL} { 
    width: ${props => props.size === "s" ? SMALL_WIDTH : MEDIUM_WIDTH};
    height: ${props => props.size === "s" ? SMALL_HEIGHT : MEDIUM_HEIGHT};
  };

  @media ${device.mobileXL} { 
    width: ${props => MEDIUM_WIDTH};
    height: ${props => MEDIUM_HEIGHT};
  };

  @media ${device.mobileL} { 
    max-width: calc(100vw - 20px);
  };

  div {
    background-color: ${props => props.theme.opacityPrimary};
    color: ${props => props.theme.light};
    position: absolute;
    bottom: 0;
    padding: 0px 15px 10px 15px;
    height: 140px;
    width: 100%;
    box-sizing: border-box;
  }
`;

