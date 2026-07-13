import {
  Drawer,
  Toolbar,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import PeopleIcon from "@mui/icons-material/People";
import MedicationIcon from "@mui/icons-material/Medication";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import EventIcon from "@mui/icons-material/Event";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import BackupIcon from "@mui/icons-material/Backup";
import InfoIcon from "@mui/icons-material/Info";

import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../auth/AuthContext";

import {
  APP_NAME,
  APP_VERSION,
} from "../../config/constants";

const drawerWidth = 250;

export default function Sidebar() {

  const location = useLocation();

  const { perfil } = useAuth();

  const menuCadastro = [

    {
      texto: "Doenças",
      rota: "/doencas",
      icone: <CoronavirusIcon />,
    },

    {
      texto: "Usuários",
      rota: "/usuarios",
      icone: <PeopleIcon />,
      admin: true,
    },

    {
      texto: "Medicamentos",
      rota: "/medicamentos",
      icone: <MedicationIcon />,
    },

    {
      texto: "Vacinas",
      rota: "/vacinas",
      icone: <VaccinesIcon />,
    },

  ];

  const menuAdministracao = [

    {
      texto: "Configurações",
      rota: "/configuracoes",
      icone: <SettingsIcon />,
      admin: true,
    },

    {
      texto: "Backup",
      rota: "/backup",
      icone: <BackupIcon />,
      admin: true,
    },

    {
      texto: "Sobre",
      rota: "/sobre",
      icone: <InfoIcon />,
    },

  ];

  function renderMenu(lista) {

    return lista
      .filter(item => !item.admin || perfil === "ADMIN")
      .map(item => (

        <ListItemButton

          key={item.rota}

          component={Link}

          to={item.rota}

          selected={location.pathname === item.rota}

        >

          <ListItemIcon>

            {item.icone}

          </ListItemIcon>

          <ListItemText

            primary={item.texto}

          />

        </ListItemButton>

      ));

  }

  return (

    <Drawer

      variant="permanent"

      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {

          width: drawerWidth,
          boxSizing: "border-box",

          borderRight: "1px solid #E0E0E0",

        },
      }}

    >

      <Toolbar>

        <Typography

          variant="h6"

          fontWeight="bold"

        >

          {APP_NAME}

        </Typography>

      </Toolbar>

      <Divider />

      <List>

        <ListItemButton

          component={Link}

          to="/dashboard"

          selected={location.pathname === "/dashboard"}

        >

          <ListItemIcon>

            <DashboardIcon />

          </ListItemIcon>

          <ListItemText

            primary="Dashboard"

          />

        </ListItemButton>

      </List>

      <Divider />

      <List

        subheader={

          <ListSubheader>

            Cadastros

          </ListSubheader>

        }

      >

        {renderMenu(menuCadastro)}

      </List>

      <Divider />

      <List

        subheader={

          <ListSubheader>

            Administração

          </ListSubheader>

        }

      >

        {renderMenu(menuAdministracao)}

      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider />

      <Box sx={{ p: 2 }}>

        <Typography

          variant="caption"

          color="text.secondary"

        >

          {APP_NAME}

        </Typography>

        <br />

        <Typography

          variant="caption"

          color="text.secondary"

        >

          Versão {APP_VERSION}

        </Typography>

      </Box>

    </Drawer>

  );

}