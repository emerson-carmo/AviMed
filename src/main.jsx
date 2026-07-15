import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";

import { AuthProvider } from "./Auth/AuthContext";
import theme from "./theme/theme";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AuthProvider>
        <App />
      </AuthProvider>

    </ThemeProvider>
  </StrictMode>
);