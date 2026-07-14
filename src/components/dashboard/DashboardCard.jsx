import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function DashboardCard({
  titulo,
  valor,
  icone,
  cor = "primary.main",
}) {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        height: "100%",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 8,
        },
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
              variant="h3"
              fontWeight="bold"
              color={cor}
            >
              {valor}
            </Typography>

          </Box>

          <Typography
            sx={{
              fontSize: 42,
            }}
          >
            {icone}
          </Typography>

        </Box>
      </CardContent>
    </Card>
  );
}