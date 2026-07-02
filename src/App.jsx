import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";
import Aves from "./pages/Aves";
import Medicamentos from "./pages/Medicamentos";
import Doencas from "./pages/Doencas";
import Tratamentos from "./pages/Tratamentos";
import Agenda from "./pages/Agenda";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route path="aves" element={<Aves />} />

          <Route path="medicamentos" element={<Medicamentos />} />

          <Route path="doencas" element={<Doencas />} />

          <Route path="tratamentos" element={<Tratamentos />} />

          <Route path="agenda" element={<Agenda />} />

          <Route path="relatorios" element={<Relatorios />} />

          <Route path="configuracoes" element={<Configuracoes />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}