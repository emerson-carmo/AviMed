import { useMemo, useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { DataGrid } from "@mui/x-data-grid";

export default function TabelaDoencas({
  doencas = [],
  onEditar,
  onExcluir,
}) {

  const [pesquisa, setPesquisa] = useState("");

  const linhas = useMemo(() => {

    return doencas.filter((item) =>

      item.nome
        ?.toLowerCase()
        .includes(pesquisa.toLowerCase())

    );

  }, [doencas, pesquisa]);

  const colunas = [

    {
      field: "nome",
      headerName: "Doença",
      flex: 2,
    },

    {
      field: "medicamento",
      headerName: "Medicamento",
      flex: 2,
    },

    {
      field: "dosagem",
      headerName: "Dosagem",
      width: 130,
    },

    {
      field: "periodo_tratamento",
      headerName: "Período",
      width: 140,
    },

    {
      field: "acoes",
      headerName: "Ações",
      width: 120,
      sortable: false,

      renderCell: (params) => (

        <>

          <Tooltip title="Editar">

            <IconButton
              color="warning"
              onClick={() => onEditar(params.row)}
            >
              <EditIcon />
            </IconButton>

          </Tooltip>

          <Tooltip title="Excluir">

            <IconButton
              color="error"
              onClick={() => onExcluir(params.row.id)}
            >
              <DeleteIcon />
            </IconButton>

          </Tooltip>

        </>

      ),

    },

  ];

  return (

    <Paper
      elevation={4}
      sx={{
        mt: 4,
        borderRadius: 3,
        p: 3,
      }}
    >

      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        mb={2}
      >
        Doenças cadastradas
      </Typography>

      <TextField
        fullWidth
        placeholder="Pesquisar doença..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        sx={{ mb: 2 }}

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ height: 500 }}>

        <DataGrid

          rows={linhas}

          columns={colunas}

          pageSizeOptions={[5,10,20,50]}

          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}

          disableRowSelectionOnClick

          localeText={{
            noRowsLabel: "Nenhuma doença cadastrada",
            footerRowSelected: () => "",
          }}

        />

      </Box>

    </Paper>

  );

}