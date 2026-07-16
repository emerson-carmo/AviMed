import { useEffect, useState } from "react";

import {
  buscarFichaAve,
  listarHistoricoAve,
  totalHistoricos,
  totalTratamentos,
  totalCurados,
} from "../services/fichaAveService";

export default function useFichaAve(id) {

  const [ave, setAve] = useState(null);

  const [historico, setHistorico] = useState([]);

  const [loading, setLoading] = useState(true);

  const [totalHistorico, setTotalHistorico] = useState(0);

  const [tratamentos, setTratamentos] = useState(0);

  const [curados, setCurados] = useState(0);

  async function carregarFicha() {

    try {

      setLoading(true);

      const [
        dadosAve,
        listaHistorico,
        qtdHistoricos,
        qtdTratamentos,
        qtdCurados,
      ] = await Promise.all([

        buscarFichaAve(id),

        listarHistoricoAve(id),

        totalHistoricos(id),

        totalTratamentos(id),

        totalCurados(id),

      ]);

      setAve(dadosAve);

      setHistorico(listaHistorico);

      setTotalHistorico(qtdHistoricos);

      setTratamentos(qtdTratamentos);

      setCurados(qtdCurados);

    } catch (erro) {

      console.error("Erro ao carregar ficha da ave:", erro);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    if (id) {

      carregarFicha();

    }

  }, [id]);

  return {

    ave,

    historico,

    totalHistoricos: totalHistorico,

    totalTratamentos: tratamentos,

    totalCurados: curados,

    loading,

    carregarFicha,

  };

}