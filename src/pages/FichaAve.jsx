import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  Button,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CardResumo from "../components/common/CardResumo";

import useFichaAve from "../hooks/useFichaAve";

export default function FichaAve() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {

    ave,

    historico,

    totalHistoricos,

    totalTratamentos,

    totalCurados,

    loading,

  } = useFichaAve(id);

  if (loading) {

    return (

      <Box p={3}>

        <Typography>
          Carregando ficha da ave...
        </Typography>

      </Box>

    );

  }

  if (!ave) {

    return (

      <Box p={3}>

        <Typography color="error">

          Ave não encontrada.

        </Typography>

        <Button

          sx={{ mt:2 }}

          startIcon={<ArrowBackIcon />}

          onClick={() => navigate("/plantel")}

        >

          Voltar

        </Button>

      </Box>

    );

  }

  return (

    <Box>

      <Button

        startIcon={<ArrowBackIcon />}

        sx={{ mb:3 }}

        onClick={() => navigate("/plantel")}

      >

        Voltar ao Plantel

      </Button>

      <Typography

        variant="h4"

        fontWeight="bold"

        mb={3}

      >

        🐦 {ave.nome}

      </Typography>

      <Grid

        container

        spacing={2}

        mb={3}

      >

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo

            titulo="Histórico"

            valor={totalHistoricos}

            icone="🩺"

          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo

            titulo="Tratamentos"

            valor={totalTratamentos}

            icone="💊"

          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo

            titulo="Curados"

            valor={totalCurados}

            icone="✅"

          />

        </Grid>

      </Grid>

      <Paper

        elevation={3}

        sx={{

          p:3,

          borderRadius:3,

          mb:3,

        }}

      >

        <Typography

          variant="h6"

          fontWeight="bold"

          mb={2}

        >

          Dados da Ave

        </Typography>

        <Divider sx={{ mb:2 }} />

        <Grid container spacing={2}>

          <Grid size={{ xs:12, md:4 }}>

            <Typography>

              <b>Anilha:</b>

            </Typography>

            <Typography>

              {ave.anilha}

            </Typography>

          </Grid>

          <Grid size={{ xs:12, md:4 }}>

            <Typography>

              <b>Espécie:</b>

            </Typography>

            <Typography>

              {ave.especie}

            </Typography>

          </Grid>

          <Grid size={{ xs:12, md:4 }}>

            <Typography>

              <b>Sexo:</b>

            </Typography>

            <Typography>

              {ave.sexo}

            </Typography>

          </Grid>

          <Grid size={{ xs:12, md:4 }}>

            <Typography>

              <b>Peso:</b>

            </Typography>

            <Typography>

              {ave.peso} g

            </Typography>

          </Grid>

          <Grid size={{ xs:12, md:4 }}>

            <Typography>

              <b>Status:</b>

            </Typography>

            <Typography>

              {ave.status}

            </Typography>

          </Grid>

          <Grid size={{ xs:12, md:4 }}>

            <Typography>

              <b>Origem:</b>

            </Typography>

            <Typography>

              {ave.origem}

            </Typography>

          </Grid>

        </Grid>

      </Paper>

      <Paper

        elevation={3}

        sx={{

          p:3,

          borderRadius:3,

        }}

      >

        <Typography

          variant="h6"

          fontWeight="bold"

          mb={2}

        >

          🩺 Histórico Clínico

        </Typography>

        <Divider sx={{ mb:2 }} />

        {

          historico.length === 0 ? (

            <Typography color="text.secondary">

              Nenhum histórico clínico encontrado.

            </Typography>

          ) : (

            historico.map((item) => (

              <Box

                key={item.id}

                sx={{

                  mb:3,

                  pb:2,

                  borderBottom:"1px solid #eee",

                }}

              >

                <Typography fontWeight="bold">

                  {

                    item.doencas?.nome ||

                    "Doença"

                  }

                </Typography>

                <Typography>

                  Data:

                  {" "}

                  {item.data_diagnostico}

                </Typography>

                <Typography>

                  Medicamento:

                  {" "}

                  {item.medicamento}

                </Typography>

                <Typography>

                  Status:

                  {" "}

                  {item.status}

                </Typography>

                <Typography>

                  Tratamento:

                  {" "}

                  {item.tratamento}

                </Typography>

              </Box>

            ))

          )

        }

      </Paper>

    </Box>

  );

}