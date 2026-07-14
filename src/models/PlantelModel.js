/**
 * ==========================================================
 * AviMed Manager
 * Modelo padrão do cadastro de aves (Plantel)
 * ==========================================================
 */

export const PLANTEL_INICIAL = {
  id: null,

  // Identificação
  anilha: "",
  nome: "",

  // Classificação
  especie: "",
  raca: "",
  sexo: "",

  // Dados da ave
  nascimento: "",
  origem: "",
  peso: "",

  // Situação
  status: "ATIVA",

  // Complemento
  observacoes: "",
  foto: "",

  // Controle
  created_at: null,
  updated_at: null,
};