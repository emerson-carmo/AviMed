import {
  Box,
  Typography,
  Paper,
  TextField,
  Grid,
  Divider,
} from "@mui/material";

import BarraBotoes from "../components/BarraBotoes";

export default function Doencas() {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        py: 3,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        color="primary"
        gutterBottom
      >
        Cadastro de Doenças
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        mb={3}
      >
        Cadastro, consulta e gerenciamento das doenças do plantel.
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <TextField
              label="Nome da doença"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <TextField
              label="Categoria"
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Sintomas"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Diagnóstico"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Prevenção"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Observações"
              multiline
              rows={3}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <Divider sx={{ my: 1 }} />
          </Grid>

          <Grid size={12}>
            <BarraBotoes
              onNovo={() => console.log("Novo")}
              onSalvar={() => console.log("Salvar")}
              onEditar={() => console.log("Alterar")}
              onExcluir={() => console.log("Excluir")}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Doenças cadastradas
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography
          align="center"
          color="text.secondary"
        >
          Nenhuma doença cadastrada.
        </Typography>
      </Paper>
    </Box>
  );
}