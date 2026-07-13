import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function CardResumo({
  titulo,
  valor,
  icone,
  cor = "primary.main",
}) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {titulo}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              color={cor}
            >
              {valor}
            </Typography>

          </Box>

          <Box
            sx={{
              fontSize: 42,
              color: cor,
            }}
          >
            {icone}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}