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

export default function TabelaHistorico({
  historicos = [],
  onEditar,
  onExcluir,
}) {

  const [pesquisa, setPesquisa] = useState("");

  const linhas = useMemo(() => {

    const texto = pesquisa.toLowerCase();

    return historicos.filter((item) => {

      const ave = item.plantel?.nome?.toLowerCase() || "";

      const doenca = item.doencas?.nome?.toLowerCase() || "";

      const medicamento = item.medicamento?.toLowerCase() || "";

      return (

        ave.includes(texto) ||

        doenca.includes(texto) ||

        medicamento.includes(texto)

      );

    });

  }, [historicos, pesquisa]);

  const colunas = [

    {
      field: "ave",
      headerName: "Ave",
      flex: 2,

      valueGetter: (_, row) => row.plantel?.nome || "",
    },

    {
      field: "doenca",
      headerName: "Doença",
      flex: 2,

      valueGetter: (_, row) => row.doencas?.nome || "",
    },

    {
      field: "data_diagnostico",
      headerName: "Diagnóstico",
      width: 140,
    },

    {
      field: "medicamento",
      headerName: "Medicamento",
      flex: 2,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,

      renderCell: ({ value }) => (

        <Chip

          size="small"

          label={value}

          color={
            value === "CURADO"
              ? "success"
              : value === "OBITO"
              ? "error"
              : "warning"
          }

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

        Histórico Clínico

      </Typography>

      <TextField

        fullWidth

        placeholder="Pesquisar ave, doença ou medicamento..."

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

      <Box sx={{ height: 550 }}>

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

            noRowsLabel: "Nenhum histórico clínico cadastrado",

          }}

        />

      </Box>

    </Paper>

  );

}