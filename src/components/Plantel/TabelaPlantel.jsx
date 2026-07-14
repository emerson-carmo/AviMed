import { useMemo, useState } from "react";

import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TabelaPlantel({
  aves = [],
  onEditar,
  onExcluir,
}) {

  const [pesquisa, setPesquisa] = useState("");

  const linhas = useMemo(() => {

    const texto = pesquisa.toLowerCase();

    return aves.filter((item) =>

      item.nome?.toLowerCase().includes(texto) ||

      item.anilha?.toLowerCase().includes(texto) ||

      item.especie?.toLowerCase().includes(texto)

    );

  }, [aves, pesquisa]);

  const colunas = [

    {
      field: "anilha",
      headerName: "Anilha",
      width: 120,
    },

    {
      field: "nome",
      headerName: "Nome",
      flex: 2,
    },

    {
      field: "especie",
      headerName: "Espécie",
      flex: 1,
    },

    {
      field: "sexo",
      headerName: "Sexo",
      width: 110,
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,

      renderCell: ({ value }) => (

        <Chip

          label={value}

          size="small"

          color={
            value === "ATIVA"
              ? "success"
              : value === "VENDIDA"
              ? "warning"
              : "error"
          }

        />

      ),

    },

    {
      field: "acoes",
      headerName: "Ações",
      width: 120,
      sortable: false,

      renderCell: ({ row }) => (

        <>

          <Tooltip title="Editar">

            <IconButton
              color="warning"
              onClick={() => onEditar(row)}
            >
              <EditIcon />
            </IconButton>

          </Tooltip>

          <Tooltip title="Excluir">

            <IconButton
              color="error"
              onClick={() => onExcluir(row.id)}
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
      elevation={3}
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 3,
      }}
    >

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        Plantel Cadastrado
      </Typography>

      <TextField
        fullWidth
        placeholder="Pesquisar ave..."
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

      <Box sx={{ height: 520 }}>

        <DataGrid

          rows={linhas}

          columns={colunas}

          pageSizeOptions={[10,20,50]}

          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}

          disableRowSelectionOnClick

          localeText={{
            noRowsLabel: "Nenhuma ave cadastrada",
          }}

        />

      </Box>

    </Paper>

  );

}