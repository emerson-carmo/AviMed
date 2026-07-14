import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Plantel from "./pages/Plantel";
import Doencas from "./pages/Doencas";

import ProtectedRoute from "./auth/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

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

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}