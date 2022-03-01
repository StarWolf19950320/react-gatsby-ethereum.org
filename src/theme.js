import { createGlobalStyle } from "styled-components"

const white = "#ffffff"
const black = "#000000"
const primaryLight = "#1c1cff"
const primaryDark = "#ff7324"
const success = "#109e62"
const fail = "#b80000"
const turquoise = "#ccfcff"
const turquoiseDark = "#293233"
const yellow = "#fff8df"
const mint = "#e1fefa"
const mintDark = "#2d3332"
const codeBoxDark = "#2a2734"
const codeBoxLight = "#fafafa"

// purple and orangeDark introduced for dark mode alts for homepage boxes
const purpleDark = "#212131"
const orangeDark = "#332821"
const pink = "#ffe5f9"
const pinkDark = "#332027"
const gridYellow = "#ffe78e"
const gridRed = "#ef7d7d"
const gridBlue = "#a7d0f4"
const gridPink = "#ffa1c3"

const white500 = white
const white600 = "#f7f7f7"
const white700 = "#e5e5e5"
const white800 = "#cccccc"
const white900 = "#b2b2b2"

const black50 = "#7f7f7f"
const black100 = "#666666"
const black200 = "#4c4c4c"
const black300 = "#333333"
const black400 = "#191919"
const black500 = black

const primaryLight950 = "#040426"
const primaryLight900 = "#050532"
const primaryLight800 = "#0b0b66"
const primaryLight700 = "#101099"
const primaryLight600 = "#1616cc"
const primaryLight500 = primaryLight
const primaryLight400 = "#4949ff"
const primaryLight300 = "#7676ff"
const primaryLight200 = "#a4a4ff"
const primaryLight100 = "#d1d1ff"
const primaryLight50 = "#e8e8ff"

const primaryDark950 = "#190b03"
const primaryDark900 = "#321607"
const primaryDark800 = "#662e0e"
const primaryDark700 = "#994515"
const primaryDark600 = "#cc5c1c"
const primaryDark500 = primaryDark
const primaryDark400 = "#ff8f4f"
const primaryDark300 = "#ffab7b"
const primaryDark200 = "#ffc7a7"
const primaryDark100 = "#ffe3d3"

const success900 = "#031f13"
const success800 = "#063f27"
const success700 = "#095e3a"
const success600 = "#0c7e4e"
const success500 = success
const success400 = "#3fb181"
const success300 = "#6fc4a0"
const success200 = "#9fd8c0"
const success100 = "#cfebdf"

const fail900 = "#240000"
const fail800 = "#490000"
const fail700 = "#6e0000"
const fail600 = "#930000"
const fail500 = fail
const fail400 = "#c63333"
const fail300 = "#d46666"
const fail200 = "#e29999"
const fail100 = "#f0cccc"

const baseColors = {
  white,
  white500,
  white600,
  white700,
  white800,
  white900,
  black,
  black500,
  black400,
  black300,
  black200,
  black100,
  black50,
  boxShadow: "rgba(#000000, 0.12)",
  boxShadowHover: "rgba(#000000, 0.24)",
  secondary: "#b2b2b2", // TODO replace
  success900,
  success800,
  success700,
  success600,
  success,
  success500,
  success400,
  success300,
  success200,
  success100,
  fail900,
  fail800,
  fail700,
  fail600,
  fail,
  fail500,
  fail400,
  fail300,
  fail200,
  fail100,
  tagBlue: primaryLight100,
  tagOrange: primaryDark100,
  tagGreen: success100,
  tagRed: fail100,
  tagTurqouise: turquoise,
  tagGray: white700,
  tagYellow: yellow,
  tagMint: mint,
  tagPink: pink,
  warning: primaryDark100,
  warningLink: primaryDark700,
  warningLinkHover: primaryDark900,
  lowBug: primaryDark100,
  mediumBug: primaryDark300,
  primaryLight300,
  primaryDark300,
  yellow,
  gridYellow,
  gridRed,
  gridBlue,
  gridGreen: success300,
  gridOrange: primaryDark300,
  gridPink,
  gridPurple: primaryLight200,
  infoBanner: primaryLight50,
}

// TODO replace random variables w/ baseColor variables
const lightColors = {
  buttonColor: white,
  upgradesGradient:
    "linear-gradient(285.24deg, #f7cbc0 0%, #f4b1ab 29.8%, #8476d9 49.78%, #85acf9 54.14%, #1c1ce1 61.77%, #000000 69.77%)",
  runNodeGradient:
    "linear-gradient(0deg, rgba(#999df4, 0.1) 0%, #999df4 100%), linear-gradient(270.72deg, #fdf0ff 0.62%, rgba(#ecc3c3, 0.56) 32.61%, rgba(#cfbde6, 0.3) 49.67%, #c4c4c4 72.88%);",
  runNodeGradient2:
    "linear-gradient(135deg, rgba(#4f71eb, 0.2) 9.8%, rgba(#e84feb, 0.2) 92.84%);",
  ghostCardBackground: white,
  ghostCardGhost: white600,
  secondaryButtonBackgroundActive: white700,
  primary: primaryLight,
  primary950: primaryLight950,
  primary900: primaryLight900,
  primary800: primaryLight800,
  primary700: primaryLight700,
  primary600: primaryLight600,
  primary500: primaryLight500,
  primary400: primaryLight400,
  primary300: primaryLight300,
  primary200: primaryLight200,
  primary100: primaryLight100,
  primaryHover: "rgba(#1c1ce1, 0.8)",
  primaryActive: primaryLight600,
  lightBorder: "#ececec",
  priceCardBackgroundPositive:
    "linear-gradient( 0, rgba(#cfece0, 0.6) 0%,	#cfece0 100%)",
  priceCardBackgroundNegative:
    "linear-gradient(180deg, rgba(#f1cccc, 0.4) 0%, #f1cccc 100%)",
  priceCardBorder: "#ececec",
  priceCardBorderNegative: "#ececec",
  searchBorder: "#7f7f7f",
  searchBackground: white,
  searchBackgroundEmpty: "#f2f2f2",
  searchResultText: "#33363d",
  searchResultBackground: "#f1f3f5",
  selectHover: primaryLight100,
  selectActive: primaryLight200,
  dropdownBackground: white,
  dropdownBackgroundHover: "#f2f2f2",
  dropdownBorder: "#e5e5e5",
  markBackground: "rgba(#8fbbed, 0.1)",
  markUnderline: "rgba(#8fbbed, 0.5)",
  modalBackground: "rgba(#b2b2b2, 0.9)",
  text: "#333333",
  text200: "#666666",
  text300: "#4c4c4c",
  textTableOfContents: "#7f7f7f",
  background: white,
  ednBackground: white600,
  border: white700,
  tableBoxShadow:
    "0 14px 66px rgba(#000000, 0.07), 0 10px 17px rgba(#000000, 0.03), 0 4px 7px rgba(#000000, 0.05)",
  tableItemBoxShadow: "#000000",
  tableBackgroundHover: "#f2f2f2",
  preBackground: "#f2f2f2",
  preBorder: "#000000",
  homeDivider: "#a4a4f3",
  displayDark: "none",
  displayLight: "block",
  grayBackground: "#fcfcfc",
  cardGradient:
    "radial-gradient(46.28% 66.31% at 66.95% 58.35%, #e6e6f7 0%, #e7edfa 50%, #e9fbfa 100%)",
  upgradeStatusBackground:
    "linear-gradient(180deg, rgba(#00f0ff, 0.2) 0%, #ffffff 100%), linear-gradient(0deg, rgba(#ffffff, 0.8), rgba(#ffffff, 0.8)), #1c1ce1",
  upgradeStatusShippedBackground:
    "linear-gradient(180deg, rgba(#00f0ff, 0.2) 0%, #ffffff 100%), linear-gradient(0deg, rgba(#ffffff, 0.8), rgba(#ffffff, 0.8)), #109e62",
  upgradeStatusBorder: "none",
  upgradeStatusShippedBorder: "none",
  warning: primaryDark100,
  warningLink: primaryDark700,
  warningLinkHover: primaryDark900,
  tagMint: mint,
  mainnet: success200,
  mainnetBorder: black50,
  beaconchain: turquoise,
  beaconchainBorder: black50,
  shard: primaryDark100,
  shardBorder: black50,
  infoLink: primaryLight800,
  infoLinkHover: primaryLight900,
  cardBoxShadow: "4px 4px 0px 0px #d2d2f9",
  homeBoxMint: mint,
  homeBoxTurquoise: turquoise,
  homeBoxOrange: primaryDark100,
  homeBoxPurple: primaryLight50,
  homeBoxPink: pink,
  codeBackground: codeBoxLight,
  beta: "radial-gradient(25.56% 133.51% at 28.36% 45.54%, #1c1ce1 0%, rgba(#1c1ce1, 0.06) 100%)",
}

// TODO replace random variables w/ baseColor variables
const darkColors = {
  buttonColor: black300,
  upgradesGradient:
    "linear-gradient(285.24deg, #f7cbc0 0%, #fbeae3 17.81%, #f4b1ab 29.8%, #8476d9 49.78%, #8db4ff 69.77%);",
  runNodeGradient:
    "linear-gradient(0deg, rgba(#999df4, 0.35) 0%, #999df4 100%), linear-gradient(89.24deg, rgba(#fdf0ff, 0.7) -64.3%, rgba(#d47777, 0.4) -7.43%, rgba(#bca3dc, 0.2) 46.66%, #c4c4c4 99.16%);",
  runNodeGradient2:
    "linear-gradient(135deg, rgba(#4f71eb, 0.2) 9.8%, rgba(#e84feb, 0.2) 92.84%);",
  primaryHover: primaryDark400,
  primaryActive: primaryDark200,
  ghostCardBackground: black300,
  ghostCardGhost: black50,
  secondaryButtonBackgroundActive: black300,
  primary: primaryDark,
  primary950: primaryDark950,
  primary900: primaryDark900,
  primary800: primaryDark800,
  primary700: primaryDark700,
  primary600: primaryDark600,
  primary500: primaryDark500,
  primary400: primaryDark400,
  primary300: primaryDark300,
  primary200: primaryDark200,
  primary100: primaryDark100,
  lightBorder: "#404040",
  priceCardBackground: "transparent",
  priceCardBorder: success700,
  priceCardBorderNegative: fail300,
  searchBorder: "#b2b2b2",
  searchBackground: "#4c4c4c",
  searchBackgroundEmpty: "#333333",
  searchResultText: "#f1f3f5",
  searchResultBackground: "#33363d",
  selectHover: primaryDark700,
  selectActive: primaryDark600,
  dropdownBackground: "#191919",
  dropdownBackgroundHover: "#000000",
  dropdownBorder: "#333333",
  markBackground: "rgba(#ff7324, 0.1)",
  markUnderline: "rgba(#ff7324, 0.5)",
  modalBackground: "rgba(#191919, 0.8)",
  text: "#f2f2f2",
  text200: "#b2b2b2",
  text300: "#cccccc",
  textTableOfContents: "rgba(#b2b2b2, 0.8)",
  background: "#222222",
  ednBackground: black400,
  border: black300,
  tableBoxShadow:
    "0 14px 66px rgba(#f5f5f5, 0.07), 0 10px 17px rgba(#f5f5f5, 0.03), 0 4px 7px rgba(#f5f5f5, 0.05)",
  tableItemBoxShadow: "#ffffff",
  tableBackgroundHover: "#ff7324",
  preBackground: "#191919",
  preBorder: "rgba(#ffffff, 0.05)",
  homeDivider: "#ffc7a7",
  displayDark: "block",
  displayLight: "none",
  grayBackground: "#272627",
  upgradeStatusBackground: "#222222",
  upgradeStatusShippedBackground: "#222222",
  upgradeStatusBorder: `${primaryLight200} solid 2px`,
  upgradeStatusShippedBorder: `${success400} solid 2px`,
  warning: primaryDark100,
  warningLink: primaryDark700,
  warningLinkHover: primaryDark900,
  tagMint: mint,
  mainnet: "#222222",
  mainnetBorder: success300,
  beaconchain: "#222222",
  beaconchainBorder: pink,
  shard: "#222222",
  shardBorder: primaryDark500,
  infoLink: primaryLight800,
  infoLinkHover: primaryLight900,
  cardBoxShadow: "4px 4px 0px 0px #ffab7c",
  homeBoxMint: mintDark,
  homeBoxTurquoise: turquoiseDark,
  homeBoxOrange: orangeDark,
  homeBoxPurple: purpleDark,
  homeBoxPink: pinkDark,
  codeBackground: codeBoxDark,
  beta: "background: radial-gradient(25.56% 133.51% at 28.36% 45.54%, rgba(#ff8f50, 0.72) 0%, rgba(#ff8f50, 0.22) 100%)",
  cardGradient:
    "linear-gradient(49.21deg, rgba(#7f7fd5, 0.2) 19.87%, rgba(#86a8e7, 0.2) 58.46%, rgba(#91eae4, 0.2) 97.05% )",
}

const lightThemeColors = Object.assign({}, baseColors, lightColors)
const darkThemeColors = Object.assign({}, baseColors, darkColors)

const theme = {
  isDark: false, // Overwritten in Object.assign
  colors: {}, // Overwritten in Object.assign
  fonts: {
    monospace:
      '"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSizes: {
    // based on typical browser default font size of 16px
    xs: "0.75rem", // 12px
    s: "0.875rem", // 14px
    m: "1rem", // 16px
    r: "1.125rem", // 18px
    l: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
  breakpoints: {
    xs: "320px",
    s: "414px",
    m: "768px",
    l: "1024px",
    xl: "1440px", // Used as the max-width
  },
  variables: {
    maxPageWidth: "1504px", // xl breakpoint (1440px) + 72px (2rem padding on each side)
    navHeight: "4.75rem",
    navBannerHeightDesktop: "134px", // 76px + 58px
    navBannerHeightTablet: "159px", // 76px + 83px
    navBannerHeightMobile: "184px", // 76px + 108px
    navSubNavHeightDesktop: "134px", // 76px + 58px
    navSideNavHeightMobile: "140px", // 76px + 64px
  },
}

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors }
)
export const darkTheme = Object.assign(
  {},
  theme,
  { isDark: true },
  { colors: darkThemeColors }
)

// Dynamic global styles
// Unfortunately Prettier doesn't format `createGlobalStyle`
// TODO external link styles no longer working...
// Seemingly nothing that doesn't involve a theme variable?
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }
  mark {
    background: ${(props) => props.theme.colors.markBackground};
    box-shadow: inset 0 -2px 0 0 rgba(69,142,225,.8);
  }

  .anchor.before {
    fill: ${(props) => props.theme.colors.text};
  }

  hr {
    background: ${(props) => props.theme.colors.lightBorder};
  }

  /* Legacy styles from lists.styl */
  ul {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    margin: 2rem 0 1rem;
    padding: 0;
    margin: 1em;
    list-style-type: none;
    list-style-image: none;
  }

  li {
    padding-left: .5em;
    margin-bottom: .5em;
      p:first-of-type {
        margin-top: 0;
      }
      p:last-of-type {
        margin-bottom: 0;
      }
    &:before {
      content: "\2022";
      color: ${(props) => props.theme.colors.primary};
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      position: absolute;
    }
  }

  /* YouTube embeds */
  iframe {
    display: block;
    max-width: 560px;
    margin: 32px 0;
  }
  
  h1 {
    font-size: 3rem;
    line-height: 1.4;
    margin: 2rem 0;
    font-weight: 700;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 2.5rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    line-height: 1.4;
    margin: 2rem 0;
    margin-top: 3rem;
    font-weight: 600;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 2rem 0;
    margin-top: 2.5rem;
    font-weight: 600;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1.25rem;
    }
  }
  
  h4 {
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 500;
    margin: 2rem 0;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 1rem;
    }
  }
  
  h5 {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 450;
    margin: 2rem 0;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
  }

  h6 {
    font-size: 0.9rem;
    line-height: 1.4;
    font-weight: 400;
    text-transform: uppercase;
    margin: 2rem 0;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
  }
  
`
// H6 basically only uses as labels as per design system

// Old Mixins for referecne
// export const Mixins = {
//   textLevel1: `
//     font-size: 3rem;
//     line-height: 1.4;
//     margin: 2rem 0;
//     font-weight: 400;
//   `,
//   textLevel2: `
//     font-size: 2rem;
//     line-height: 1.4;
//     margin: 2rem 0;
//     font-weight: 600;
//   `,
//   textLevel3: `
//     font-size: 1.5rem;
//     line-height: 1.4;
//     margin: 1.5rem 0 2rem;
//     font-weight: 600;
//   `,
//   textLevel4: `
//     font-size: 1.25rem;
//     line-height: 1.4;
//     font-weight: 400;
//     margin-top: 2rem;
//   `,
//   textLevel5: `
//     font-size: 1rem;
//     line-height: 1.6;
//     font-weight: 400;
//     margin-top: 2rem;
//   `,
//   textLevel6: `
//     font-size: .875rem;
//     line-height: 1.6;
//     font-weight: 400;
//     letter-spacing: 0.04em;
//     margin: 1.14em 0;
//     text-transform uppercase
//   `,
//   textLevel7: `
//     font-size: 1rem;
//     line-height: 1.6;
//     font-weight: 400;
//     margin: 2rem 0 1rem;
//   `,
//   textLevel8: `
//     font-size: .875rem;
//     line-height:1.6;
//     margin: 1.14em 0;
//     font-weight: 400;
//   `,
// }
