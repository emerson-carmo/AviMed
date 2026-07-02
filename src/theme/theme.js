import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32",
    },
    secondary: {
      main: "#FFB300",
    },
    background: {
      default: "#F4F6F8",
    },
  },

  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;