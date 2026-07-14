import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Plantel from "../pages/Plantel";
import Doencas from "../pages/Doencas";

import ProtectedRoute from "../auth/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

const routes = [

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/plantel",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Plantel />
        </MainLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/doencas",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Doencas />
        </MainLayout>
      </ProtectedRoute>
    ),
  },

];

export default routes;