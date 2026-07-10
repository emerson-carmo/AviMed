import { Snackbar, Alert } from "@mui/material";

export default function AvisoSnackbar({
  open,
  onClose,
  mensagem,
  severidade = "success",
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={onClose}
        severity={severidade}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {mensagem}
      </Alert>
    </Snackbar>
  );
}