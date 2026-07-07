import { Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BarraBotoes({
  onNovo,
  onSalvar,
  onExcluir,
  editando = false,
}) {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onNovo}
      >
        Novo
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<SaveIcon />}
        onClick={onSalvar}
      >
        {editando ? "Atualizar" : "Salvar"}
      </Button>

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={onExcluir}
        disabled={!editando}
      >
        Excluir
      </Button>
    </Stack>
  );
}