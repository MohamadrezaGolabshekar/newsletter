import styled from 'styled-components';
import { ReactComponent as SearchIcon } from "../../assets/search-icon@2x.svg";

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  border-bottom: 3px solid ${props => props.theme.light};
  background-color: ${props => props.theme.secondary};
`;

const Input = styled.input`
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

const Icon = styled.div`
//   flex: 0 0;
  cursor: pointer;
`;

const SearchBox = () => {
    return (
        <Container>
            <Input placeholder="Search all news" />
            <Icon>
                <SearchIcon
                    width="20px"
                    height="20px"
                    stroke="black"
                    onClick={() => {

                    }}
                />
            </Icon>
        </Container>
    )
}

export default SearchBox;