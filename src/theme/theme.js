import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2E7D32",
    },

    secondary: {
      main: "#1565C0",
    },

    success: {
      main: "#43A047",
    },

    warning: {
      main: "#F9A825",
    },

    error: {
      main: "#D32F2F",
    },

    background: {
      default: "#F4F6F8",
      paper: "#FFFFFF",
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;