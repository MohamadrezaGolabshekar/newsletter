import styled from 'styled-components';
import Logo from'../../Logo';
import SearchBox from "../../SearchBox";


const HeaderContainer = styled.div`
    display: flex;
    // width: 100%;
    height: ${props => props.theme.headerHeight}px;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    background-color: ${props => props.theme.primary};

`;

const Header = () => {

    return (
        <HeaderContainer>
            <Logo />
            <SearchBox />
        </HeaderContainer>
    );
}

export default Header;
