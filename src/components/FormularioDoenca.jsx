import {
  Paper,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@mui/material";

import BarraBotoes from "./BarraBotoes";

export default function FormularioDoenca({
  formulario,
  onChange,
  onNovo,
  onSalvar,
  loading = false,
}) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        mb={3}
      >
        Dados da Doença
      </Typography>

      <Grid container spacing={3}>

        <Grid size={12}>
          <TextField
            label="Nome da doença"
            name="nome"
            value={formulario.nome}
            onChange={onChange}
            fullWidth
            required
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Sintomas"
            name="sintomas"
            value={formulario.sintomas}
            onChange={onChange}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Medicamento indicado"
            name="medicamento"
            value={formulario.medicamento}
            onChange={onChange}
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            label="Dosagem"
            name="dosagem"
            value={formulario.dosagem}
            onChange={onChange}
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            label="Período de tratamento"
            name="periodo_tratamento"
            value={formulario.periodo_tratamento}
            onChange={onChange}
            fullWidth
          />
        </Grid>

        <Grid size={12}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        <Grid size={12}>
          <BarraBotoes
            onNovo={onNovo}
            onSalvar={onSalvar}
            onEditar={() => {}}
            onExcluir={() => {}}
            loading={loading}
          />
        </Grid>

      </Grid>
    </Paper>
  );
}