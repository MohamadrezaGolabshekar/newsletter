import { ReactChild } from "react";
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
    padding: 0 100px;
    min-height: calc(100vh - ${props => props.theme.footerHeight + props.theme.headerHeight}px)
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
