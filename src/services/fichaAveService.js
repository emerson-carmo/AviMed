import { supabase } from "./supabase";

/**
 * ============================================
 * AviMed Manager
 * Serviço da Ficha da Ave
 * ============================================
 */

/**
 * Busca todos os dados da ave
 */
export async function buscarFichaAve(id) {

  const { data, error } = await supabase
    .from("plantel")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;

}

/**
 * Busca o histórico clínico da ave
 */
export async function listarHistoricoAve(id) {

  const { data, error } = await supabase
    .from("historico_clinico")
    .select(`
      *,
      doencas(
        id,
        nome
      )
    `)
    .eq("ave_id", id)
    .order("data_diagnostico", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    throw error;
  }

  return data ?? [];

}

/**
 * Total de registros clínicos
 */
export async function totalHistoricos(id) {

  const { count, error } = await supabase
    .from("historico_clinico")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("ave_id", id);

  if (error) {
    console.error(error);
    throw error;
  }

  return count ?? 0;

}

/**
 * Total de tratamentos em andamento
 */
export async function totalTratamentos(id) {

  const { count, error } = await supabase
    .from("historico_clinico")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("ave_id", id)
    .eq("status", "EM_TRATAMENTO");

  if (error) {
    console.error(error);
    throw error;
  }

  return count ?? 0;

}

/**
 * Total de registros curados
 */
export async function totalCurados(id) {

  const { count, error } = await supabase
    .from("historico_clinico")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("ave_id", id)
    .eq("status", "CURADO");

  if (error) {
    console.error(error);
    throw error;
  }

  return count ?? 0;

}