import { useEffect, useState } from "react";

import {
  listarHistorico,
  salvarHistorico,
  atualizarHistorico,
  excluirHistorico,
} from "../services/historicoClinicoService";

import { HISTORICO_INICIAL } from "../models/HistoricoClinicoModel";

export default function useHistoricoClinico() {

  const [historicos, setHistoricos] = useState([]);

  const [dados, setDados] = useState(HISTORICO_INICIAL);

  const [loading, setLoading] = useState(false);

  const [idEdicao, setIdEdicao] = useState(null);

  async function carregarHistorico() {

    try {

      setLoading(true);

      const lista = await listarHistorico();

      setHistoricos(lista);

    } catch (erro) {

      console.error(erro);

    } finally {

      setLoading(false);

    }

  }

  async function salvar() {

    try {

      if (idEdicao) {

        await atualizarHistorico(idEdicao, dados);

      } else {

        await salvarHistorico(dados);

      }

      limpar();

      carregarHistorico();

      return true;

    } catch (erro) {

      console.error(erro);

      return false;

    }

  }

  async function excluir(id) {

    try {

      await excluirHistorico(id);

      carregarHistorico();

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

    setDados(HISTORICO_INICIAL);

  }

  useEffect(() => {

    carregarHistorico();

  }, []);

  return {

    historicos,

    dados,

    setDados,

    loading,

    salvar,

    excluir,

    editar,

    limpar,

    carregarHistorico,

    idEdicao,

  };

}