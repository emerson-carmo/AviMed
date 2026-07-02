import { Box } from "@mui/material";
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
