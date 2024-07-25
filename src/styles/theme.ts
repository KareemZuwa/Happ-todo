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
    md: 10,
  },
  colors: {
    offWhite: "#EAE8EE",
    purpur: "#5D4692",
    lightGrey: "#ffffff63",
    darkGrey: "#09244B",
    lightGreen: "#49ada2",
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
};
