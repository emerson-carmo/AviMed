import { supabase } from "./supabase";

/**
 * Lista todas as doenças
 */
export async function listarDoencas() {
  const { data, error } = await supabase
    .from("doencas")
    .select("*")
    .order("nome");

  if (error) throw error;

  return data;
}

/**
 * Salva uma nova doença
 */
export async function salvarDoenca(doenca) {
  const { data, error } = await supabase
    .from("doencas")
    .insert([doenca])
    .select();

  if (error) throw error;

  return data;
}

/**
 * Atualiza uma doença
 */
export async function atualizarDoenca(id, doenca) {
  const { data, error } = await supabase
    .from("doencas")
    .update(doenca)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}

/**
 * Exclui uma doença
 */
export async function excluirDoenca(id) {
  const { error } = await supabase
    .from("doencas")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

/**
 * Busca uma doença pelo ID
 */
export async function buscarDoenca(id) {
  const { data, error } = await supabase
    .from("doencas")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}