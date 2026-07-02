const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");

console.clear();

console.log("=========================================");
console.log(" AVI MED - RECONSTRUÇÃO DO LAYOUT");
console.log("=========================================\n");

function criarPasta(pasta) {
    if (!fs.existsSync(pasta)) {
        fs.mkdirSync(pasta, { recursive: true });
        console.log("📁 Pasta criada:", path.relative(raiz, pasta));
    }
}

function escreverArquivo(relativo, conteudo) {

    const destino = path.join(raiz, relativo);

    criarPasta(path.dirname(destino));

    fs.writeFileSync(destino, conteudo, "utf8");

    console.log("✔", relativo);
}

//
// Estrutura
//

criarPasta(path.join(raiz, "src"));
criarPasta(path.join(raiz, "src/layouts"));
criarPasta(path.join(raiz, "src/pages"));
criarPasta(path.join(raiz, "src/components/dashboard"));

//
// Layout.jsx
//

escreverArquivo(
"src/layouts/Layout.jsx",

`import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(){

return(

<Box sx={{display:"flex"}}>

<Header/>

<Sidebar/>

<Box
component="main"
sx={{
flexGrow:1,
padding:3,
marginTop:"64px",
marginLeft:"240px",
background:"#f5f7fa",
minHeight:"100vh"
}}
>

<Outlet/>

</Box>

</Box>

);

}
`
);

//
// Header
//

escreverArquivo(
"src/layouts/Header.jsx",

`import { AppBar,Toolbar,Typography } from "@mui/material";

export default function Header(){

return(

<AppBar>

<Toolbar>

<Typography variant="h6">

AviMed

</Typography>

</Toolbar>

</AppBar>

);

}
`
);

//
// Sidebar
//

escreverArquivo(
"src/layouts/Sidebar.jsx",

`import { Drawer,List,ListItemButton,ListItemText } from "@mui/material";

const itens=[
"Dashboard",
"Aves",
"Medicamentos",
"Doenças",
"Tratamentos",
"Agenda",
"Relatórios",
"Configurações"
];

export default function Sidebar(){

return(

<Drawer
variant="permanent"
sx={{
width:240,
"& .MuiDrawer-paper":{
width:240
}
}}
>

<List>

{itens.map(item=>(

<ListItemButton key={item}>

<ListItemText primary={item}/>

</ListItemButton>

))}

</List>

</Drawer>

);

}
`
);

//
// DashboardCard
//

escreverArquivo(
"src/components/dashboard/DashboardCard.jsx",

`import { Card,CardContent,Typography } from "@mui/material";

export default function DashboardCard({titulo,valor}){

return(

<Card>

<CardContent>

<Typography>

{titulo}

</Typography>

<Typography variant="h4">

{valor}

</Typography>

</CardContent>

</Card>

);

}
`
);

//
// Dashboard
//

escreverArquivo(
"src/pages/Dashboard.jsx",

`import { Grid,Typography } from "@mui/material";
import DashboardCard from "../components/dashboard/DashboardCard";

export default function Dashboard(){

return(

<>

<Typography
variant="h3"
mb={4}
>

🏠 Painel de Controle

</Typography>

<Grid container spacing={3}>

<Grid item xs={12} md={3}>
<DashboardCard titulo="Plantel" valor={0}/>
</Grid>

<Grid item xs={12} md={3}>
<DashboardCard titulo="Medicamentos" valor={0}/>
</Grid>

<Grid item xs={12} md={3}>
<DashboardCard titulo="Doenças" valor={0}/>
</Grid>

<Grid item xs={12} md={3}>
<DashboardCard titulo="Tratamentos" valor={0}/>
</Grid>

</Grid>

</>

);

}
`
);

//
// Páginas
//

const paginas=[
"Aves",
"Medicamentos",
"Doencas",
"Tratamentos",
"Agenda",
"Relatorios",
"Configuracoes"
];

paginas.forEach(nome=>{

escreverArquivo(

`src/pages/${nome}.jsx`,

`export default function ${nome}(){

return(

<h1>${nome}</h1>

);

}
`

);

});

//
// App.jsx
//

escreverArquivo(
"src/App.jsx",

`import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";

export default function App(){

return(

<Layout>

<Dashboard/>

</Layout>

);

}
`
);

console.log("\n=========================================");
console.log(" RECONSTRUÇÃO CONCLUÍDA");
console.log("=========================================");