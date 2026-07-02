import { Grid,Typography } from "@mui/material";
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
