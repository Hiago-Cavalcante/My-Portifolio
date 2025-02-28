import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      // "#89CFF0"
    },
    secondary: {
      main: "#0077B5",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily:
      "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
