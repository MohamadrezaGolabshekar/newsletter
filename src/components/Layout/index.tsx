import { ReactChild } from "react";
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import { device } from "../../theme";

const Container = styled.div`
    padding: 0 100px;
    min-height: calc(100vh - ${props => props.theme.headerHeight}px);

    @media ${device.laptopM} { 
        padding: 0 50px;
    }
    @media ${device.laptop} { 
        padding: 0 10px;
    }
`;

const Layout = ({ children }: { children: ReactChild }) => {

    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
