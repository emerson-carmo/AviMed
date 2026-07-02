import { Card, CardContent, Typography } from "@mui/material";

export default function CardResumo({ titulo, valor }) {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography color="text.secondary">
          {titulo}
        </Typography>

        <Typography
          variant="h4"
          color="success.main"
          fontWeight="bold"
        >
          {valor}
        </Typography>
      </CardContent>
    </Card>
  );
}