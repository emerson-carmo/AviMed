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
  mensagem = "Deseja realmente realizar esta operação?",
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  corBotao = "error",
  loading = false,
  onConfirm,
  onCancel,
}) {
  return (
    <Dialog
      open={open}
      onClose={!loading ? onCancel : undefined}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>{titulo}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {mensagem}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onCancel}
          disabled={loading}
        >
          {textoCancelar}
        </Button>

        <Button
          variant="contained"
          color={corBotao}
          onClick={onConfirm}
          disabled={loading}
          autoFocus
        >
          {textoConfirmar}
        </Button>
      </DialogActions>
    </Dialog>
  );
}