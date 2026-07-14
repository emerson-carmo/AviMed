
import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import DashboardCard from "../components/dashboard/DashboardCard";

import { listarDoencas } from "../services/doencasService";

export default function Dashboard() {

  const [totalDoencas, setTotalDoencas] = useState(0);

  useEffect(() => {
    carregarIndicadores();
  }, []);

  async function carregarIndicadores() {

    try {

      const doencas = await listarDoencas();

      setTotalDoencas(doencas.length);

    } catch (erro) {

      console.error(erro);

    }

  }

  return (

    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        🏠 Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs:12, md:3 }}>
          <DashboardCard
            titulo="Doenças"
            valor={totalDoencas}
            icone="🦠"
            cor="error.main"
          />
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <DashboardCard
            titulo="Medicamentos"
            valor="0"
            icone="💊"
            cor="primary.main"
          />
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <DashboardCard
            titulo="Vacinas"
            valor="0"
            icone="💉"
            cor="success.main"
          />
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <DashboardCard
            titulo="Usuários"
            valor="1"
            icone="👤"
            cor="warning.main"
          />
        </Grid>

      </Grid>

      <Grid
        container
        spacing={3}
        mt={2}
      >

        <Grid size={{ xs:12, md:8 }}>

          <Paper
            elevation={3}
            sx={{
              p:3,
              borderRadius:3,
              minHeight:300,
            }}
          >

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              📊 Resumo do Sistema
            </Typography>

            <Typography color="text.secondary">

              Bem-vindo ao AviMed Manager.

              Aqui serão exibidos os gráficos e indicadores do sistema.

            </Typography>

          </Paper>

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <Paper
            elevation={3}
            sx={{
              p:3,
              borderRadius:3,
              minHeight:300,
            }}
          >

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              📌 Próximas Implementações
            </Typography>

            <List>

              <ListItem>
                <ListItemText primary="Dashboard Inteligente" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Medicamentos" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Vacinas" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Relatórios" />
              </ListItem>

            </List>

          </Paper>

        </Grid>

      </Grid>

    </Box>

  );

}