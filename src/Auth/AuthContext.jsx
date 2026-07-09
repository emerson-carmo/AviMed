import { createContext, useContext, useEffect, useState } from "react";

import {
  login as loginService,
  logout as logoutService,
  getSession,
  onAuthStateChange,
} from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarSessao() {
      try {
        const session = await getSession();

        if (session) {
          setUser(session.user);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregarSessao();

    const {
      data: { subscription },
    } = onAuthStateChange((session) => {
      setUser(session?.user ?? null);

      if (!session) {
        setUsuario(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function login(email, senha) {
    const dados = await loginService(email, senha);

    setUser(dados.user);
    setUsuario(dados.usuario);

    return dados;
  }

  async function logout() {
    await logoutService();

    setUser(null);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        usuario,
        loading,

        login,
        logout,

        isAuthenticated: !!user,

        perfil: usuario?.perfil,

        nome: usuario?.nome,

        email: usuario?.email,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}