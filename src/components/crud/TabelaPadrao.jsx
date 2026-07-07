import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

export default function TabelaPadrao({
  linhas,
  colunas,
  onSelecionar,
  carregando = false,
}) {
  return (
    <Paper sx={{ mt: 3, height: 450 }}>

      <DataGrid
        rows={linhas}
        columns={colunas}
        loading={carregando}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20, 50]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
        onRowClick={(params) => onSelecionar(params.row)}
      />

    </Paper>
  );
}