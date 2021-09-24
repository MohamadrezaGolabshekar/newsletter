import styled from 'styled-components';

export const Toast = styled.div<{isSuccess: boolean}>`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: ${props => props.isSuccess ? "green" : "red"};
  color: ${props => props.theme.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;