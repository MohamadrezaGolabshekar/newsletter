import styled from 'styled-components';


const Footer = styled.div`
    height: ${props => props.theme.footerHeight}px;
    padding: 0 100px;
    background-color: ${props => props.theme.primary};

`;

const FooterContainer = () => {

    return (
        <Footer />
    );
}

export default FooterContainer;
