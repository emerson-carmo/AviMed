import { supabase } from "./supabase";

/**
 * Lista registros
 */
export async function listar(tabela, ordem = "nome") {
  const { data, error } = await supabase
    .from(tabela)
    .select("*")
    .order(ordem);

  if (error) throw error;

  return data;
}

/**
 * Insere registro
 */
export async function inserir(tabela, registro) {
  const { data, error } = await supabase
    .from(tabela)
    .insert([registro])
    .select();

  if (error) throw error;

  return data;
}

/**
 * Atualiza registro
 */
export async function atualizar(tabela, id, registro) {
  const { data, error } = await supabase
    .from(tabela)
    .update(registro)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}

/**
 * Exclui registro
 */
export async function excluir(tabela, id) {
  const { error } = await supabase
    .from(tabela)
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

/**
 * Busca um registro
 */
export async function buscarPorId(tabela, id) {
  const { data, error } = await supabase
    .from(tabela)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}