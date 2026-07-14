import { useState } from "react";

import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import useDoencas from "../hooks/useDoencas";

import BarraBotoes from "../components/common/BarraBotoes";
import AvisoSnackbar from "../components/common/AvisoSnackbar";
import ConfirmDialog from "../components/common/ConfirmDialog";
import CardResumo from "../components/common/CardResumo";

import FormularioDoenca from "../components/doencas/FormularioDoenca";
import TabelaDoencas from "../components/doencas/TabelaDoencas";

export default function Doencas() {

  const {
    doencas,
    salvar,
    excluir,
  } = useDoencas();

  const [id, setId] = useState(null);

  const [dados, setDados] = useState({

    nome: "",
    categoria: "",
    especie: "",
    sintomas: "",
    diagnostico: "",
    medicamento: "",
    dosagem: "",
    periodo: "",
    observacoes: "",
    status: "ATIVA",

  });

  const [snackbar, setSnackbar] = useState({

    open: false,
    mensagem: "",
    severidade: "success",

  });

  const [confirmar, setConfirmar] = useState(false);

  const [idExcluir, setIdExcluir] = useState(null);

  function novoCadastro() {

    setId(null);

    setDados({

      nome: "",
      categoria: "",
      especie: "",
      sintomas: "",
      diagnostico: "",
      medicamento: "",
      dosagem: "",
      periodo: "",
      observacoes: "",
      status: "ATIVA",

    });

  }

  async function salvarCadastro() {

    if (!dados.nome.trim()) {

      setSnackbar({

        open: true,

        mensagem: "Informe o nome da doença.",

        severidade: "warning",

      });

      return;

    }

    const sucesso = await salvar(id, dados);

    if (sucesso) {

      setSnackbar({

        open: true,

        mensagem: "Cadastro salvo com sucesso.",

        severidade: "success",

      });

      novoCadastro();

    }

  }

  function editarCadastro(item) {

    setId(item.id);

    setDados({

      nome: item.nome || "",

      categoria: item.categoria || "",

     