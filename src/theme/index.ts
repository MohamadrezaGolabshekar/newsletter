
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '445px',
    mobileXL: '650px',
    tablet: '768px',
    tabletL: '1235px',
    laptop: '1300px',
    laptopM: '1400px',
    laptopL: '1680px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileXL: `(max-width: ${size.mobileXL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    laptopM: `(max-width: ${size.laptopM})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

const theme = {
    primary: "#08367b",
    opacityPrimary: "rgba(8, 54, 123, 0.7)",
    coverBlue: "#0d47a2",
    secondary: "#2253a3",
    light: "#FFFFFF",
    lightBlue: "#9eb4d8",
    footerHeight: 300,
    headerHeight: 110,
};

export default theme;