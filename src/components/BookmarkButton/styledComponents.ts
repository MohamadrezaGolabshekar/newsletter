import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.light};
  height: 30px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  min-width: 170px;
  justify-content: center;
  cursor: pointer;
  padding: 0 20px;
`;

