import { useState, useEffect } from "react";

import {
  listarDoencas,
  salvarDoenca,
  atualizarDoenca,
  excluirDoenca,
} from "../services/doencasService";

export default function useDoencas() {
  const [doencas, setDoencas] = useState([]);
  const [loading, setLoading] = useState(false);

  // ============================
  // Carregar doenças
  // ============================
  async function carregarDoencas() {
    try {
      setLoading(true);

      const dados = await listarDoencas();

      setDoencas(dados ?? []);

    } catch (error) {

      console.error("Erro ao carregar doenças:", error);

      alert(error.message);

    } finally {

      setLoading(false);

    }
  }

  // ============================
  // Salvar ou atualizar
  // ============================
  async function salvar(id, dados) {
    try {

      if (id) {
        await atualizarDoenca(id, dados);
      } else {
        await salvarDoenca(dados);
      }

      await carregarDoencas();

      return true;

    } catch (error) {

      console.error("Erro ao salvar:", error);

      console.log(error);

      alert(error.message);

      return false;

    }
  }

  // ============================
  // Excluir
  // ============================
  async function excluir(id) {
    try {

      await excluirDoenca(id);

      await carregarDoencas();

      return true;

    } catch (error) {

      console.error("Erro ao excluir:", error);

      console.log(error);

      alert(error.message);

      return false;

    }
  }

  useEffect(() => {
    carregarDoencas();
  }, []);

  return {
    doencas,
    loading,
    carregarDoencas,
    salvar,
    excluir,
  };
}