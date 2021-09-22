import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  border-bottom: 3px solid ${props => props.theme.light};
  background-color: ${props => props.theme.secondary};
`;

export const Input = styled.input`
//   flex: 1 0;
  color: ${props => props.theme.light};
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div`
//   flex: 0 0;
  cursor: pointer;
`;