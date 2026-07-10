import {
  Avatar,
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/AuthContext";

export default function UserMenu() {

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

    <Box
      display="flex"
      alignItems="center"
      gap={2}
    >

      <Avatar>

        {nome?.charAt(0) ?? "A"}

      </Avatar>

      <Box>

        <Typography fontWeight="bold">

          {nome}

        </Typography>

        <Typography variant="body2">

          {perfil}

        </Typography>

      </Box>

      <Button onClick={sair}>

        Sair

      </Button>

    </Box>

  );

}