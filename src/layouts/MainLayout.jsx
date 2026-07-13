import { Box } from "@mui/material";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

const drawerWidth = 250;

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F4F6F8",
      }}
    >
      {/* Menu Lateral */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <Box
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Cabeçalho */}
        <Header />

        {/* Área das páginas */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          {children}
        </Box>

        {/* Rodapé */}
        <Footer />
      </Box>
    </Box>
  );
}