import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Doencas from "./pages/Doencas";

import ProtectedRoute from "./auth/ProtectedRoute";

import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/doencas" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
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
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}