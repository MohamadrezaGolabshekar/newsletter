import styled from 'styled-components';
import { device } from '../../theme';

export const Container = styled.div<{isOpen: boolean, ref: any}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  border-bottom: 3px solid ${props => props.theme.light};
  background-color: ${props => props.isOpen ? props.theme.secondary : 'unset'};
  width: ${props => props.isOpen ? "220px" : "unset"};
  transition: width 1s;
  @media ${device.mobileL} { 
    width: 220px;
    background-color: ${props => props.theme.secondary};
  }
`;

export const Input = styled.input<{isOpen: boolean}>`
  color: ${props => props.theme.light};
  width: ${props => props.isOpen ? "220px" : "0"};
  transition: width .5s;
  // min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: ${props => props.theme.light};
  }
  @media ${device.mobileL} { 
    width: 200px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;