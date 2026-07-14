import { supabase } from "./supabase";

/**
 * =====================================================
 * AviMed Manager
 * Serviço do módulo Plantel
 * =====================================================
 */

/**
 * Lista todas as aves
 */
export async function listarAves() {
  const { data, error } = await supabase
    .from("plantel")
    .select("*")
    .order("nome", { ascending: true });

  if (error) {
    console.error(error);
    throw error;
  }

  return data ?? [];
}

/**
 * Busca uma ave pelo ID
 */
export async function buscarAve(id) {
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
 * Salva uma nova ave
 */
export async function salvarAve(dados) {

  // Remove campos que são gerados automaticamente pelo banco
  const {
    id,
    created_at,
    updated_at,
    ...novaAve
  } = dados;

  const { data, error } = await supabase
    .from("plantel")
    .insert([novaAve])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

/**
 * Atualiza uma ave existente
 */
export async function atualizarAve(id, dados) {

  // Também remove campos que não devem ser alterados
  const {
    created_at,
    updated_at,
    ...dadosAtualizados
  } = dados;

  const { data, error } = await supabase
    .from("plantel")
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
 * Exclui uma ave
 */
export async function excluirAve(id) {
  const { error } = await supabase
    .from("plantel")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw error;
  }

  return true;
}

/**
 * Total de aves cadastradas
 */
export async function totalAves() {
  const { count, error } = await supabase
    .from("plantel")
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