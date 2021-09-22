import styled from 'styled-components';
import MainLogo from'../../assets/Logo_White.png';

const Image = styled.img`
    width: 150px;
`;

const Logo = () => {
    return <Image src={MainLogo} alt="logo" />
}

export default Logo;