import { Box, Typography } from "@mui/material";

import {
  APP_NAME,
  APP_VERSION,
} from "../../config/constants";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">

        {APP_NAME} - Versão {APP_VERSION}

      </Typography>
    </Box>
  );
}