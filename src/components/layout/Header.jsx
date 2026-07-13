import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/AuthContext";

import {
  APP_NAME,
  APP_VERSION,
} from "../../config/constants";

export default function Header() {
  const navigate = useNavigate();

  const {
    nome,
    perfil,
    logout,
  } = useAuth();

  async function sair() {
    await logout();
    navigate("/login");
  }

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      sx={{
        borderBottom: "1px solid #E0E0E0",
        bgcolor: "#FFFFFF",
      }}
    >
      <Toolbar>

        {/* Logo */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          flexGrow={1}
        >
          <PetsIcon
            color="success"
            fontSize="large"
          />

          <Box>

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {APP_NAME}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              Versão {APP_VERSION}
            </Typography>

          </Box>

        </Box>

        {/* Usuário */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >

          <Avatar
            sx={{
              bgcolor: "success.main",
            }}
          >
            {nome?.charAt(0)?.toUpperCase() || "A"}
          </Avatar>

          <Box
            textAlign="right"
          >

            <Typography
              fontWeight="bold"
            >
              {nome || "Administrador"}
            </Typography>

            <Chip
              label={perfil || "ADMIN"}
              size="small"
              color={
                perfil === "ADMIN"
                  ? "success"
                  : "primary"
              }
            />

          </Box>

          <Tooltip title="Sair">

            <IconButton
              color="error"
              onClick={sair}
            >
              <LogoutIcon />
            </IconButton>

          </Tooltip>

        </Box>

      </Toolbar>
    </AppBar>
  );
}