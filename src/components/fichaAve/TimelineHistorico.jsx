import {
  Paper,
  Typography,
  Divider,
  Box,
  Chip,
} from "@mui/material";

export default function TimelineHistorico({

  historico = [],

}) {

  return (

    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        mt: 3,
      }}
    >

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >

        🩺 Histórico Clínico

      </Typography>

      {

        historico.length === 0 ? (

          <Typography color="text.secondary">

            Nenhum histórico clínico encontrado.

          </Typography>

        ) : (

          historico.map((item, index) => (

            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: 2,
                mb: 3,
              }}
            >

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 40,
                }}
              >

                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    bgcolor:
                      item.status === "CURADO"
                        ? "success.main"
                        : item.status === "EM_TRATAMENTO"
                        ? "warning.main"
                        : "error.main",
                  }}
                />

                {

                  index < historico.length - 1 && (

                    <Box
                      sx={{
                        flexGrow: 1,
                        width: 2,
                        bgcolor: "#DDD",
                        mt: 1,
                      }}
                    />

                  )

                }

              </Box>

              <Box sx={{ flexGrow: 1 }}>

                <Typography
                  fontWeight="bold"
                  variant="subtitle1"
                >

                  {item.doencas?.nome || "Doença"}

                </Typography>

                <Typography
                  color="text.secondary"
                  variant="body2"
                >

                  Diagnóstico:
                  {" "}
                  {item.data_diagnostico}

                </Typography>

                <Typography mt={1}>

                  <b>Medicamento:</b>
                  {" "}
                  {item.medicamento || "-"}

                </Typography>

                <Typography>

                  <b>Dosagem:</b>
                  {" "}
                  {item.dosagem || "-"}

                </Typography>

                <Typography>

                  <b>Período:</b>
                  {" "}
                  {item.periodo || "-"}

                </Typography>

                <Typography mt={1}>

                  {item.tratamento || "-"}

                </Typography>

                <Chip
                  sx={{ mt: 2 }}
                  size="small"
                  label={item.status}
                  color={
                    item.status === "CURADO"
                      ? "success"
                      : item.status === "EM_TRATAMENTO"
                      ? "warning"
                      : "error"
                  }
                />

                {

                  index < historico.length - 1 && (

                    <Divider sx={{ mt:3 }} />

                  )

                }

              </Box>

            </Box>

          ))

        )

      }

    </Paper>

  );

}