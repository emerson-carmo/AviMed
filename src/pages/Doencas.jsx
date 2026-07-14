import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

import useDoencas from "../hooks/useDoencas";
import BarraBotoes from "../components/common/BarraBotoes";
import CardResumo from "../components/common/CardResumo";
import AvisoSnackbar from "../components/common/AvisoSnackbar";
import ConfirmDialog from "../components/common/ConfirmDialog";
import FormularioDoenca from "../components/doencas/FormularioDoenca";
import TabelaDoencas from "../components/doencas/TabelaDoencas";

export default function Doencas() {
  const { doencas, salvar, excluir } = useDoencas();

  const modelo = {
    nome: "",
    categoria: "",
    especie: "",
    sintomas: "",
    diagnostico: "",
    medicamento: "",
    dosagem: "",
    periodo: "",
    observacoes: "",
    status: "ATIVA",
  };

  const [id, setId] = useState(null);
  const [dados, setDados] = useState(modelo);
  const [snackbar, setSnackbar] = useState({ open:false, mensagem:"", severidade:"success" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [idExcluir, setIdExcluir] = useState(null);

  function novoCadastro(){ setId(null); setDados(modelo); }

  async function salvarCadastro(){
    if(!dados.nome.trim()){
      setSnackbar({open:true,mensagem:"Informe o nome da doença.",severidade:"warning"});
      return;
    }
    if(await salvar(id,dados)){
      setSnackbar({open:true,mensagem:"Cadastro salvo com sucesso.",severidade:"success"});
      novoCadastro();
    }
  }

  function editarCadastro(item){ setId(item.id); setDados({...modelo,...item}); }
  function solicitarExclusao(id){ setIdExcluir(id); setDialogOpen(true); }

  async function confirmarExclusao(){
    if(await excluir(idExcluir)){
      setSnackbar({open:true,mensagem:"Registro excluído com sucesso.",severidade:"success"});
      novoCadastro();
    }
    setDialogOpen(false);
    setIdExcluir(null);
  }

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={3}>Cadastro de Doenças</Typography>

      <Grid container spacing={2} mb={3}>
        <Grid size={{xs:12,md:4}}><CardResumo titulo="Total de Doenças" valor={doencas.length} icone="🦠" /></Grid>
        <Grid size={{xs:12,md:4}}><CardResumo titulo="Ativas" valor={doencas.filter(d=>d.status==="ATIVA").length} icone="🟢" cor="success.main" /></Grid>
        <Grid size={{xs:12,md:4}}><CardResumo titulo="Inativas" valor={doencas.filter(d=>d.status==="INATIVA").length} icone="🔴" cor="error.main" /></Grid>
      </Grid>

      <FormularioDoenca dados={dados} setDados={setDados} />

      <BarraBotoes
        onNovo={novoCadastro}
        onSalvar={salvarCadastro}
        onEditar={()=>{}}
        onExcluir={()=>solicitarExclusao(id)}
      />

      <TabelaDoencas
        doencas={doencas}
        onEditar={editarCadastro}
        onExcluir={solicitarExclusao}
      />

      <AvisoSnackbar
        open={snackbar.open}
        mensagem={snackbar.mensagem}
        severidade={snackbar.severidade}
        onClose={()=>setSnackbar(s=>({...s,open:false}))}
      />

      <ConfirmDialog
        open={dialogOpen}
        titulo="Excluir Doença"
        mensagem="Deseja realmente excluir este cadastro?"
        textoConfirmar="Excluir"
        onConfirm={confirmarExclusao}
        onCancel={()=>setDialogOpen(false)}
      />
    </Box>
  );
}
