import { useState } from "react";

import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import usePlantel from "../hooks/usePlantel";

import FormularioAve from "../components/plantel/FormularioAve";
import TabelaPlantel from "../components/plantel/TabelaPlantel";

import BarraBotoes from "../components/common/BarraBotoes";
import CardResumo from "../components/common/CardResumo";
import AvisoSnackbar from "../components/common/AvisoSnackbar";
import ConfirmDialog from "../components/common/ConfirmDialog";

export default function Plantel() {

  const {
    aves,
    dados,
    setDados,
    salvar,
    excluir,
    editar,
    limpar,
  } = usePlantel();

  const [snackbar, setSnackbar] = useState({
    open: false,
    mensagem: "",
    severidade: "success",
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const [idExcluir, setIdExcluir] = useState(null);

  async function salvarCadastro() {

    if (!dados.nome.trim()) {

      setSnackbar({
        open: true,
        mensagem: "Informe o nome da ave.",
        severidade: "warning",
      });

      return;
    }

    const sucesso = await salvar();

    if (sucesso) {

      setSnackbar({
        open: true,
        mensagem: "Cadastro salvo com sucesso.",
        severidade: "success",
      });

    }

  }

  function solicitarExclusao(id) {

    setIdExcluir(id);

    setDialogOpen(true);

  }

  async function confirmarExclusao() {

    const sucesso = await excluir(idExcluir);

    if (sucesso) {

      setSnackbar({
        open: true,
        mensagem: "Cadastro excluído.",
        severidade: "success",
      });

    }

    setDialogOpen(false);

    setIdExcluir(null);

  }

  return (

    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        🐦 Plantel
      </Typography>

      <Grid
        container
        spacing={2}
        mb={3}
      >

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo
            titulo="Total de Aves"
            valor={aves.length}
            icone="🐦"
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo
            titulo="Ativas"
            valor={aves.filter(a => a.status === "ATIVA").length}
            icone="🟢"
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo
            titulo="Vendidas / Óbito"
            valor={aves.filter(a => a.status !== "ATIVA").length}
            icone="📦"
          />

        </Grid>

      </Grid>

      <FormularioAve

        dados={dados}

        setDados={setDados}

      />

      <BarraBotoes

        onNovo={limpar}

        onSalvar={salvarCadastro}

        onEditar={() => {}}

        onExcluir={() => solicitarExclusao(dados.id)}

      />

      <TabelaPlantel

        aves={aves}

        onEditar={editar}

        onExcluir={solicitarExclusao}

      />

      <AvisoSnackbar

        open={snackbar.open}

        mensagem={snackbar.mensagem}

        severidade={snackbar.severidade}

        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }

      />

      <ConfirmDialog

        open={dialogOpen}

        titulo="Excluir Ave"

        mensagem="Deseja realmente excluir este cadastro?"

        textoConfirmar="Excluir"

        onConfirm={confirmarExclusao}

        onCancel={() => setDialogOpen(false)}

      />

    </Box>

  );

}