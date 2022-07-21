import { createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: "#fff",
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[800],
      contrastText: "#fff",
    },
  },
});

export default darkTheme;
