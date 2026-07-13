import { supabase } from "./supabase";

/**
 * Lista todas as doenças
 */
export async function listarDoencas() {
  const { data, error } = await supabase
    .from("doencas")
    .select("*")
    .order("nome", { ascending: true });

  if (error) throw error;

  return data ?? [];
}

/**
 * Pesquisa doenças pelo nome
 */
export async function pesquisarDoencas(texto) {
  const { data, error } = await supabase
    .from("doencas")
    .select("*")
    .ilike("nome", `%${texto}%`)
    .order("nome", { ascending: true });

  if (error) throw error;

  return data ?? [];
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

/**
 * Salva uma doença (compatibilidade)
 * Se existir id, atualiza.
 * Caso contrário, insere.
 */
export async function salvarDoenca(doenca) {
  if (doenca.id) {
    return atualizarDoenca(doenca.id, doenca);
  }

  return inserirDoenca(doenca);
}

/**
 * Insere nova doença
 */
export async function inserirDoenca(doenca) {
  const { data, error } = await supabase
    .from("doencas")
    .insert([doenca])
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Atualiza doença
 */
export async function atualizarDoenca(id, doenca) {
  const { data, error } = await supabase
    .from("doencas")
    .update(doenca)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

/**
 * Exclui doença
 */
export async function excluirDoenca(id) {
  const { error } = await supabase
    .from("doencas")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}