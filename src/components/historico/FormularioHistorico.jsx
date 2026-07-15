import {
  Grid,
  TextField,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";

export default function FormularioHistorico({
  dados,
  setDados,
  aves = [],
  doencas = [],
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
        Histórico Clínico
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs:12, md:6 }}>

          <TextField
            select
            fullWidth
            required
            label="Ave"
            name="ave_id"
            value={dados.ave_id}
            onChange={alterarCampo}
          >

            {aves.map((ave) => (

              <MenuItem
                key={ave.id}
                value={ave.id}
              >

                {ave.nome} ({ave.anilha})

              </MenuItem>

            ))}

          </TextField>

        </Grid>

        <Grid size={{ xs:12, md:6 }}>

          <TextField
            select
            fullWidth
            required
            label="Doença"
            name="doenca_id"
            value={dados.doenca_id}
            onChange={alterarCampo}
          >

            {doencas.map((item) => (

              <MenuItem
                key={item.id}
                value={item.id}
              >

                {item.nome}

              </MenuItem>

            ))}

          </TextField>

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <TextField
            fullWidth
            type="date"
            label="Data do Diagnóstico"
            name="data_diagnostico"
            value={dados.data_diagnostico}
            onChange={alterarCampo}
            InputLabelProps={{ shrink: true }}
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <TextField
            fullWidth
            label="Medicamento"
            name="medicamento"
            value={dados.medicamento}
            onChange={alterarCampo}
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <TextField
            fullWidth
            label="Dosagem"
            name="dosagem"
            value={dados.dosagem}
            onChange={alterarCampo}
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <TextField
            fullWidth
            label="Período"
            name="periodo"
            value={dados.periodo}
            onChange={alterarCampo}
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <TextField
            select
            fullWidth
            label="Status"
            name="status"
            value={dados.status}
            onChange={alterarCampo}
          >

            <MenuItem value="EM_TRATAMENTO">
              Em tratamento
            </MenuItem>

            <MenuItem value="CURADO">
              Curado
            </MenuItem>

            <MenuItem value="OBITO">
              Óbito
            </MenuItem>

          </TextField>

        </Grid>

        <Grid size={{ xs:12 }}>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Tratamento"
            name="tratamento"
            value={dados.tratamento}
            onChange={alterarCampo}
          />

        </Grid>

        <Grid size={{ xs:12 }}>

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