import { useEffect, useState } from "react";

import {
  listarAves,
  salvarAve,
  atualizarAve,
  excluirAve,
} from "../services/plantelService";

import { PLANTEL_INICIAL } from "../models/PlantelModel";

export default function usePlantel() {

  const [aves, setAves] = useState([]);

  const [dados, setDados] = useState(PLANTEL_INICIAL);

  const [loading, setLoading] = useState(false);

  const [idEdicao, setIdEdicao] = useState(null);

  async function carregarAves() {

    try {

      setLoading(true);

      const lista = await listarAves();

      setAves(lista);

    } catch (erro) {

      console.error(erro);

    } finally {

      setLoading(false);

    }

  }

  async function salvar() {

    try {

      if (idEdicao) {

        await atualizarAve(idEdicao, dados);

      } else {

        await salvarAve(dados);

      }

      limpar();

      carregarAves();

      return true;

    } catch (erro) {

      console.error(erro);

      return false;

    }

  }

  async function excluir(id) {

    try {

      await excluirAve(id);

      carregarAves();

      return true;

    } catch (erro) {

      console.error(erro);

      return false;

    }

  }

  function editar(item) {

    setIdEdicao(item.id);

    setDados(item);

  }

  function limpar() {

    setIdEdicao(null);

    setDados(PLANTEL_INICIAL);

  }

  useEffect(() => {

    carregarAves();

  }, []);

  return {

    aves,

    dados,

    setDados,

    loading,

    salvar,

    excluir,

    editar,

    limpar,

    carregarAves,

    idEdicao,

  };

}