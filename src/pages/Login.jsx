import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function entrar(e) {
    e.preventDefault();

    setErro("");
    setLoading(true);

    try {
      await login(email, senha);

      navigate("/doencas");

    } catch (error) {

      console.error(error);

      if (
        error.message?.includes("Invalid login credentials")
      ) {
        setErro("E-mail ou senha inválidos.");
      } else {
        setErro(error.message);
      }

    } finally {
      setLoading(false);
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={8}
        sx={{
          width: "100%",
          borderRadius: 4,
        }}
      >
        <CardContent sx={{ p: 5 }}>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={4}
          >
            <Avatar
              sx={{
                bgcolor: "success.main",
                width: 70,
                height: 70,
                mb: 2,
              }}
            >
              <LockIcon fontSize="large" />
            </Avatar>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              AviMed Manager
            </Typography>

            <Typography color="text.secondary">
              Sistema de Controle Sanitário
            </Typography>

          </Box>

          <Box
            component="form"
            onSubmit={entrar}
          >

            <TextField
              label="E-mail"
              fullWidth
              margin="normal"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <TextField
              label="Senha"
              fullWidth
              margin="normal"
              required
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) =>
                setSenha(e.target.value)
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setMostrarSenha(!mostrarSenha)
                      }
                    >
                      {mostrarSenha
                        ? <VisibilityOff />
                        : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {erro && (
              <Typography
                color="error"
                mt={2}
              >
                {erro}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              size="large"
              sx={{ mt: 4 }}
              disabled={loading}
            >
              {loading
                ? (
                  <CircularProgress
                    size={24}
                    color="inherit"
                  />
                )
                : "Entrar"}
            </Button>

          </Box>

          <Typography
            align="center"
            mt={4}
            color="text.secondary"
            variant="body2"
          >
            AviMed Manager v1.0
          </Typography>

        </CardContent>
      </Card>
    </Container>
  );
}