import { DataGrid } from "@mui/x-data-grid";

const colunas = [
  { field: "anilha", headerName: "Anilha", flex: 1 },
  { field: "nome", headerName: "Nome", flex: 1 },
  { field: "especie", headerName: "Espécie", flex: 1 },
  { field: "sexo", headerName: "Sexo", width: 100 },
  { field: "viveiro", headerName: "Viveiro", flex: 1 },
];

const linhas = [];

export default function TabelaAves() {
  return (
    <div style={{ height: 420 }}>
      <DataGrid
        rows={linhas}
        columns={colunas}
        pageSizeOptions={[10]}
      />
    </div>
  );
}