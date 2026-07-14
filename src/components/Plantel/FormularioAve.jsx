import {
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function FormularioAve({
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
        borderRadius: 3,
        mb: 3,
      }}
    >

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Cadastro de Ave
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Anilha"
            name="anilha"
            value={dados.anilha}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <TextField
            fullWidth
            required
            label="Nome"
            name="nome"
            value={dados.nome}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Espécie"
            name="especie"
            value={dados.especie}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Raça"
            name="raca"
            value={dados.raca}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <TextField
            fullWidth
            select
            label="Sexo"
            name="sexo"
            value={dados.sexo}
            onChange={alterarCampo}
          >
            <MenuItem value="MACHO">Macho</MenuItem>
            <MenuItem value="FEMEA">Fêmea</MenuItem>
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            type="date"
            label="Nascimento"
            name="nascimento"
            value={dados.nascimento}
            onChange={alterarCampo}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Peso (g)"
            name="peso"
            value={dados.peso}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Origem"
            name="origem"
            value={dados.origem}
            onChange={alterarCampo}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            select
            label="Status"
            name="status"
            value={dados.status}
            onChange={alterarCampo}
          >
            <MenuItem value="ATIVA">Ativa</MenuItem>
            <MenuItem value="VENDIDA">Vendida</MenuItem>
            <MenuItem value="OBITO">Óbito</MenuItem>
          </TextField>
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
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