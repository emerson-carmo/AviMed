import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
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
    element: <Navigate to="/doencas" replace />,
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