import { supabase } from "./supabase";

/**
 * =====================================================
 * AviMed Manager
 * Serviço do módulo Histórico Clínico
 * =====================================================
 */

/**
 * Lista todo o histórico clínico
 */
export async function listarHistorico() {

  const { data, error } = await supabase
    .from("historico_clinico")
    .select(`
      *,
      plantel (
        id,
        nome,
        anilha
      ),
      doencas (
        id,
        nome,
        categoria
      )
    `)
    .order("data_diagnostico", { ascending: false });

  if (error) {
    console.error(error);
    throw error;
  }

  return data ?? [];
}

/**
 * Lista o histórico de uma ave
 */
export async function listarHistoricoPorAve(aveId) {

  const { data, error } = await supabase
    .from("historico_clinico")
    .select(`
      *,
      doencas (
        id,
        nome,
        categoria
      )
    `)
    .eq("ave_id", aveId)
    .order("data_diagnostico", { ascending: false });

  if (error) {
    console.error(error);
    throw error;
  }

  return data ?? [];
}

/**
 * Busca um histórico pelo ID
 */
export async function buscarHistorico(id) {

  const { data, error } = await supabase
    .from("historico_clinico")
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
 * Salva um novo histórico
 */
export async function salvarHistorico(dados) {

  const {
    id,
    created_at,
    updated_at,
    ...novoHistorico
  } = dados;

  const { data, error } = await supabase
    .from("historico_clinico")
    .insert([novoHistorico])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

/**
 * Atualiza um histórico
 */
export async function atualizarHistorico(id, dados) {

  const {
    created_at,
    updated_at,
    ...dadosAtualizados
  } = dados;

  const { data, error } = await supabase
    .from("historico_clinico")
    .update(dadosAtualizados)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

/**
 * Exclui um histórico
 */
export async function excluirHistorico(id) {

  const { error } = await supabase
    .from("historico_clinico")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw error;
  }

  return true;
}

/**
 * Total de registros
 */
export async function totalHistoricos() {

  const { count, error } = await supabase
    .from("historico_clinico")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) {
    console.error(error);
    throw error;
  }

  return count ?? 0;
}