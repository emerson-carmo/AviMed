import {
  Grid,
  TextField,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";

export default function FormularioDoenca({
  dados,
  setDados,
}) {
  function alterarCampo(evento) {
    const { name, value } = evento.target;

    setDados((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Cadastro de Doença
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            required
            label="Nome da Doença"
            name="nome"
            value={dados.nome}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            select
            label="Categoria"
            name="categoria"
            value={dados.categoria}
            onChange={alterarCampo}
          >
            <MenuItem value="Bacteriana">Bacteriana</MenuItem>
            <MenuItem value="Viral">Viral</MenuItem>
            <MenuItem value="Fúngica">Fúngica</MenuItem>
            <MenuItem value="Parasitária">Parasitária</MenuItem>
            <MenuItem value="Nutricional">Nutricional</MenuItem>
            <MenuItem value="Outras">Outras</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Espécie"
            name="especie"
            value={dados.especie}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Medicamento"
            name="medicamento"
            value={dados.medicamento}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Dosagem"
            name="dosagem"
            value={dados.dosagem}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Período"
            name="periodo"
            value={dados.periodo}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            select
            label="Status"
            name="status"
            value={dados.status}
            onChange={alterarCampo}
          >
            <MenuItem value="ATIVA">Ativa</MenuItem>
            <MenuItem value="INATIVA">Inativa</MenuItem>
          </TextField>
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Sintomas"
            name="sintomas"
            value={dados.sintomas}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Diagnóstico"
            name="diagnostico"
            value={dados.diagnostico}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Observações"
            name="observacoes"
            value={dados.observacoes}
            onChange={alterarCampo}
          />
        </Grid>

      </Grid>
    </Paper>
  );
}