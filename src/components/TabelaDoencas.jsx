import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

export default function TabelaDoencas({ dados, onSelecionar }) {

  const colunas = [
    {
      field: "nome",
      headerName: "Doença",
      flex: 2,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      flex: 1,
    },
  ];

  return (
    <Paper sx={{ mt: 3, height: 400 }}>

      <DataGrid
        rows={dados}
        columns={colunas}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        onRowClick={(params) => onSelecionar(params.row)}
      />

    </Paper>
  );
}