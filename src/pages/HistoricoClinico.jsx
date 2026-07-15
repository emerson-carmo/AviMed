import { useEffect, useState } from "react";

import { Box, Typography, Grid } from "@mui/material";

import useHistoricoClinico from "../hooks/useHistoricoClinico";
import usePlantel from "../hooks/usePlantel";
import useDoencas from "../hooks/useDoencas";

import FormularioHistorico from "../components/historico/FormularioHistorico";
import TabelaHistorico from "../components/historico/TabelaHistorico";

import BarraBotoes from "../components/common/BarraBotoes";
import CardResumo from "../components/common/CardResumo";
import AvisoSnackbar from "../components/common/AvisoSnackbar";
import ConfirmDialog from "../components/common/ConfirmDialog";

export default function HistoricoClinico() {

  const {
    historicos,
    dados,
    setDados,
    salvar,
    excluir,
    editar,
    limpar,
  } = useHistoricoClinico();

  const { aves } = usePlantel();

  const { doencas } = useDoencas();

  const [snackbar, setSnackbar] = useState({
    open: false,
    mensagem: "",
    severidade: "success",
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const [idExcluir, setIdExcluir] = useState(null);

  async function salvarCadastro() {

    if (!dados.ave_id) {

      setSnackbar({
        open: true,
        mensagem: "Selecione uma ave.",
        severidade: "warning",
      });

      return;

    }

    if (!dados.doenca_id) {

      setSnackbar({
        open: true,
        mensagem: "Selecione uma doença.",
        severidade: "warning",
      });

      return;

    }

    const sucesso = await salvar();

    if (sucesso) {

      setSnackbar({
        open: true,
        mensagem: "Histórico salvo com sucesso.",
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
        mensagem: "Registro excluído com sucesso.",
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

        🩺 Histórico Clínico

      </Typography>

      <Grid
        container
        spacing={2}
        mb={3}
      >

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo
            titulo="Total de Registros"
            valor={historicos.length}
            icone="📋"
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo
            titulo="Em Tratamento"
            valor={
              historicos.filter(
                item => item.status === "EM_TRATAMENTO"
              ).length
            }
            icone="💊"
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

          <CardResumo
            titulo="Curados"
            valor={
              historicos.filter(
                item => item.status === "CURADO"
              ).length
            }
            icone="✅"
          />

        </Grid>

      </Grid>

      <FormularioHistorico

        dados={dados}

        setDados={setDados}

        aves={aves}

        doencas={doencas}

      />

      <BarraBotoes

        onNovo={limpar}

        onSalvar={salvarCadastro}

        onEditar={() => {}}

        onExcluir={() => solicitarExclusao(dados.id)}

      />

      <TabelaHistorico

        historicos={historicos}

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

        titulo="Excluir Histórico"

        mensagem="Deseja realmente excluir este registro?"

        textoConfirmar="Excluir"

        onConfirm={confirmarExclusao}

        onCancel={() => setDialogOpen(false)}

      />

    </Box>

  );

}