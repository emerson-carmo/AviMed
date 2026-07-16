import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Plantel from "./pages/Plantel";
import Doencas from "./pages/Doencas";
import HistoricoClinico from "./pages/HistoricoClinico";
import FichaAve from "./pages/FichaAve";

import ProtectedRoute from "./Auth/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página inicial */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Plantel */}
        <Route
          path="/plantel"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Plantel />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Ficha da Ave */}
        <Route
          path="/plantel/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <FichaAve />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Doenças */}
        <Route
          path="/doencas"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Doencas />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Histórico Clínico */}
        <Route
          path="/historico"
          element={
            <ProtectedRoute>
              <MainLayout>
                <HistoricoClinico />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Página não encontrada */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}