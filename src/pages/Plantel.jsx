import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem
} from "@mui/material";

export default function Plantel() {
  return (
    <Box p={3}>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Cadastro de Aves
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Gerencie todo o plantel do AviMed.
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>

        <Grid container spacing={2}>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Número da Anilha"
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Nome"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Espécie"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Raça"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              label="Sexo"
            >
              <MenuItem value="M">Macho</MenuItem>
              <MenuItem value="F">Fêmea</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Cor"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="date"
              label="Nascimento"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Pai"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Mãe"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Viveiro"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Situação"
            >
              <MenuItem value="Ativa">Ativa</MenuItem>
              <MenuItem value="Vendida">Vendida</MenuItem>
              <MenuItem value="Óbito">Óbito</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Observações"
            />
          </Grid>

        </Grid>

        <Box
          mt={4}
          display="flex"
          gap={2}
        >
          <Button
            variant="contained"
            color="success"
          >
            Salvar
          </Button>

          <Button
            variant="outlined"
          >
            Cancelar
          </Button>
        </Box>

      </Paper>

    </Box>
  );
}