import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#89CFF0",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
