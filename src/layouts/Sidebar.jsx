import { Drawer,List,ListItemButton,ListItemText } from "@mui/material";

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
