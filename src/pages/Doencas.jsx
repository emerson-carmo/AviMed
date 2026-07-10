import { useState } from "react";

import {
  Box,
  Typography,
  Paper,
  TextField,
  Grid,
  Divider,
} from "@mui/material";

import BarraBotoes from "../components/BarraBotoes";
import TabelaDoencas from "../components/TabelaDoencas";
import useDoencas from "../hooks/useDoencas";

export default function Doencas() {
  const { doencas, salvar, excluir } = useDoencas();

  const [id, setId] = useState(null);

  const [formulario, setFormulario] = useState({
    nome: "",
    sintomas: "",
    medicamento: "",
    dosagem: "",
    periodo_tratamento: "",
  });

  function alterarCampo(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  function novoCadastro() {
    setId(null);

    setFormulario({
      nome: "",
      sintomas: "",
      medicamento: "",
      dosagem: "",
      periodo_tratamento: "",
    });
  }

  async function salvarCadastro() {
    if (!formulario.nome.trim()) {
      alert("Informe o nome da doença.");
      return;
    }

    const sucesso = await salvar(id, formulario);

    if (sucesso) {
      alert("Cadastro salvo com sucesso!");

      novoCadastro();
    }
  }

  function editarCadastro(item) {
    setId(item.id);

    setFormulario({
      nome: item.nome || "",
      sintomas: item.sintomas || "",
      medicamento: item.medicamento || "",
      dosagem: item.dosagem || "",
      periodo_tratamento: item.periodo_tratamento || "",
    });
  }

  async function excluirCadastro(id) {
    if (!window.confirm("Deseja realmente excluir esta doença?")) {
      return;
    }

    const sucesso = await excluir(id);

    if (sucesso) {
      alert("Cadastro excluído com sucesso!");

      novoCadastro();
    }
  }

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        py: 4,
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        fontWeight="bold"
        textAlign="center"
      >
        Cadastro de Doenças
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        mb={4}
      >
        Cadastro, consulta e gerenciamento das doenças do plantel.
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Grid container spacing={3}>

          <Grid size={12}>
            <TextField
              label="Nome da doença"
              name="nome"
              value={formulario.nome}
              onChange={alterarCampo}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Sintomas"
              name="sintomas"
              value={formulario.sintomas}
              onChange={alterarCampo}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Medicamento indicado"
              name="medicamento"
              value={formulario.medicamento}
              onChange={alterarCampo}
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              label="Dosagem"
              name="dosagem"
              value={formulario.dosagem}
              onChange={alterarCampo}
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              label="Período de tratamento"
              name="periodo_tratamento"
              value={formulario.periodo_tratamento}
              onChange={alterarCampo}
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <Divider />
          </Grid>

          <Grid size={12}>
            <BarraBotoes
              onNovo={novoCadastro}
              onSalvar={salvarCadastro}
              onEditar={() => {}}
              onExcluir={() => {}}
            />
          </Grid>

        </Grid>
      </Paper>

      <TabelaDoencas
        doencas={doencas}
        onEditar={editarCadastro}
        onExcluir={excluirCadastro}
      />
    </Box>
  );
}