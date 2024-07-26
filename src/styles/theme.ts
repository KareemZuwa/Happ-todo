import { Theme } from "../types/interfaces";

export const theme: Theme = {
  breakpoints: {
    xs: 366,
    sm: 475,
    md: 768,
    lg: 1440,
  },
  background: {
    gradient: `linear-gradient(
    137deg,
    rgba(239, 136, 187, 1) 0%,
    rgba(41, 24, 80, 1) 100%
  )`,
  },
  borders: {
    md: "10px",
  },
  colors: {
    offWhite: "#EAE8EE",
    purpleLight: "#5D4692",
    purpleDark: "#291850",
    lightGrey: "#ffffff63",
    darkGrey: "#09244B",
    lightGreen: "#49ada2",
    mainGreen: "#1B998B",
    darkGreen: "#167a6f",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  shadows: {
    shade1:
      "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
  },
};
