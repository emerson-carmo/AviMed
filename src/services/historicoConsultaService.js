import { supabase } from "./supabase";

export async function listarHistoricoPorAve(aveId) {
  const { data, error } = await supabase
    .from("historico_clinico")
    .select(`
      *,
      plantel(nome, anilha),
      doencas(nome)
    `)
    .eq("ave_id", aveId)
    .order("data_diagnostico", { ascending: false });

  if (error) throw error;

  return data ?? [];
}