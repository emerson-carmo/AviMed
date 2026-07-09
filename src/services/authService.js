import { supabase } from "./supabase";

/**
 * Login
 */
export async function login(email, password) {
  // Faz login no Supabase Auth
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  // Busca o perfil na tabela usuarios
  const { data: usuario, error: erroUsuario } = await supabase
    .from("usuarios")
    .select("*")
    .eq("auth_id", data.user.id)
    .single();

  if (erroUsuario) throw erroUsuario;

  return {
    user: data.user,
    session: data.session,
    usuario,
  };
}

/**
 * Logout
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}

/**
 * Sessão atual
 */
export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

/**
 * Usuário logado
 */
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

/**
 * Escuta Login/Logout
 */
export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });
}