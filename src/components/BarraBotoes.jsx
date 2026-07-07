import { Stack, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BarraBotoes({
  onNovo,
  onSalvar,
  onEditar,
  onExcluir,
}) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      sx={{ mt: 3 }}
    >
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
        Salvar
      </Button>

      <Button
        variant="contained"
        color="warning"
        startIcon={<EditIcon />}
        onClick={onEditar}
      >
        Alterar
      </Button>

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={onExcluir}
      >
        Excluir
      </Button>
    </Stack>
  );
}