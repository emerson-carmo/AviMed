import {
  Paper,
  Grid,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

export default function DadosAve({ ave }) {

  if (!ave) return null;

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
        mb={2}
      >
        📋 Dados da Ave
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Anilha
          </Typography>

          <Typography fontWeight="bold">
            {ave.anilha || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Nome
          </Typography>

          <Typography fontWeight="bold">
            {ave.nome || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Espécie
          </Typography>

          <Typography fontWeight="bold">
            {ave.especie || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Raça
          </Typography>

          <Typography fontWeight="bold">
            {ave.raca || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Sexo
          </Typography>

          <Typography fontWeight="bold">
            {ave.sexo || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Nascimento
          </Typography>

          <Typography fontWeight="bold">
            {ave.nascimento || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Peso
          </Typography>

          <Typography fontWeight="bold">
            {ave.peso || 0} g
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Origem
          </Typography>

          <Typography fontWeight="bold">
            {ave.origem || "-"}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <Typography variant="caption">
            Situação
          </Typography>

          <Chip
            label={ave.status}
            color={
              ave.status === "ATIVA"
                ? "success"
                : ave.status === "VENDIDA"
                ? "warning"
                : "error"
            }
          />
        </Grid>

        <Grid size={{ xs:12 }}>
          <Typography variant="caption">
            Observações
          </Typography>

          <Typography>
            {ave.observacoes || "Nenhuma observação cadastrada."}
          </Typography>
        </Grid>

      </Grid>

    </Paper>

  );

}