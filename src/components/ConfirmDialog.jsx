import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function ConfirmDialog({
  open,
  titulo = "Confirmação",
  mensagem = "Deseja continuar?",
  onCancelar,
  onConfirmar,
}) {
  return (
    <Dialog
      open={open}
      onClose={onCancelar}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>{titulo}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {mensagem}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button
          variant="outlined"
          onClick={onCancelar}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={onConfirmar}
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}