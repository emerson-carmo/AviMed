import { useMemo, useState } from "react";

import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { DataGrid } from "@mui/x-data-grid";

export default function TabelaDoencas({
  doencas = [],
  onEditar,
  onExcluir,
}) {

  const [pesquisa, setPesquisa] = useState("");

  const linhas = useMemo(() => {

    return doencas.filter((item) => {

      const texto = pesquisa.toLowerCase();

      return (

        item.nome?.toLowerCase().includes(texto) ||

        item.categoria?.toLowerCase().includes(texto) ||

        item.medicamento?.toLowerCase().includes(texto)

      );

    });

  }, [doencas, pesquisa]);

  const colunas = [

    {
      field: "nome",
      headerName: "Doença",
      flex: 2,
    },

    {
      field: "categoria",
      headerName: "Categoria",
      width: 150,
    },

    {
      field: "medicamento",
      headerName: "Medicamento",
      flex: 2,
    },

    {
      field: "dosagem",
      headerName: "Dosagem",
      width: 120,
    },

    {
      field: "periodo",
      headerName: "Período",
      width: 120,
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,

      renderCell: ({ value }) => (

        <Chip

          size="small"

          color={value === "ATIVA" ? "success" : "default"}

          label={value || "ATIVA"}

        />

      ),

    },

    {
      field: "acoes",
      headerName: "Ações",
      width: 160,
      sortable: false,

      renderCell: ({ row }) => (

        <>

          <Tooltip title="Visualizar">

            <IconButton color="primary">

              <VisibilityIcon />

            </IconButton>

          </Tooltip>

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

        borderRadius: 2,

      }}

    >

      <Typography

        variant="h6"

        fontWeight="bold"

        mb={2}

      >

        Doenças Cadastradas

      </Typography>

      <TextField

        fullWidth

        placeholder="Pesquisar..."

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

          pageSizeOptions={[10, 20, 50]}

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

          }}

        />

      </Box>

    </Paper>

  );

}