import { rem } from "polished";

const typo = {
  importFont: "https://fonts.googleapis.com/css?family=Crete+Round|Lato",
  font: "'Nunito', sans-serif",
  headerFont: "'Crete Round', serif",
  fontMono:
    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  lineHeight: rem("24px"),
  size: {
    normal: rem("16px"),
    head1: rem("24px"),
    head2: rem("21px"),
    head3: rem("18px"),
    head4: rem("16px"),
    small: rem("14px"),
    smaller: rem("12px"),
    smallest: rem("10px")
  }
};

const gap = {
  XXXXL: rem("28px"),
  XXXL: rem("24px"),
  XXL: rem("18px"),
  XL: rem("16px"),
  L: rem("14px"),
  M: rem("12px"),
  S: rem("8px"),
  XS: rem("6px"),
  XXS: rem("4px"),
  XXXS: rem("2px"),
  XXXXS: rem("1px")
};

const grey = {
  50: "#eceff1",
  100: "#cfd8dc",
  200: "#b0bec5",
  300: "#90a4ae",
  400: "#78909c",
  500: "#607d8b",
  600: "#546e7a",
  700: "#455a64",
  800: "#37474f",
  900: "#263238"
};

const indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  a100: "#8c9eff",
  a200: "#536dfe",
  a400: "#3d5afe",
  a700: "#304ffe"
};

const amber = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  A100: "#ffe57f",
  A200: "#ffd740",
  A400: "#ffc400",
  A700: "#ffab00"
};

const colours = {
  white: "#FFF"
};

export default {
  grey,
  colours,
  indigo,
  amber,
  gap,
  typo
};
