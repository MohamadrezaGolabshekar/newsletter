import styled from 'styled-components';
import Logo from '../../Logo';
import SearchBox from "../../SearchBox";
import { Link } from "react-router-dom";


const HeaderContainer = styled.div`
    display: flex;
    position: relative;
    // width: 100%;
    height: ${props => props.theme.headerHeight}px;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    background-color: ${props => props.theme.primary};

`;

const SearchContainer = styled.div`
    
`;

const Header = () => {

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>

            <SearchContainer>
                <SearchBox />
            </SearchContainer>
        </HeaderContainer>
    );
}

export default Header;
