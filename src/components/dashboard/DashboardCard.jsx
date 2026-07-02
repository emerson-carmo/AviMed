import { Card,CardContent,Typography } from "@mui/material";

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
