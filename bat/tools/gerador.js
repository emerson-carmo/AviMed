#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarPasta(pasta) {
    if (!fs.existsSync(pasta)) {
        fs.mkdirSync(pasta, { recursive: true });
        console.log("📁", pasta);
    }
}

function criarArquivo(arquivo, conteudo) {

    if (fs.existsSync(arquivo)) {
        console.log("⚠ Já existe:", arquivo);
        return;
    }

    fs.writeFileSync(arquivo, conteudo);
    console.log("✅", arquivo);

}

function gerarPlantel() {

    criarPasta("src/components/plantel");

    criarArquivo(
        "src/pages/Plantel.jsx",
`import Typography from "@mui/material/Typography";

export default function Plantel(){

    return(

        <>
            <Typography variant="h4">
                Cadastro de Aves
            </Typography>
        </>

    )

}
`
    );

    criarArquivo(
        "src/components/plantel/FormAve.jsx",
`export default function FormAve(){

    return(

        <div>

            Formulário da Ave

        </div>

    )

}
`
    );

    criarArquivo(
        "src/components/plantel/ListaAves.jsx",
`export default function ListaAves(){

    return(

        <div>

            Lista de Aves

        </div>

    )

}
`
    );

    criarArquivo(
        "src/components/plantel/BarraPesquisa.jsx",
`export default function BarraPesquisa(){

    return(

        <div>

            Pesquisa

        </div>

    )

}
`
    );

    criarArquivo(
        "src/components/plantel/CardEstatisticas.jsx",
`export default function CardEstatisticas(){

    return(

        <div>

            Estatísticas

        </div>

    )

}
`
    );

    criarPasta("src/services");

    criarArquivo(
        "src/services/avesService.js",
`export default {

}
`
    );

    criarPasta("src/styles");

    criarArquivo(
        "src/styles/plantel.css",
``
    );

    console.log("");
    console.log("🎉 Módulo Plantel criado com sucesso!");
    console.log("");

}

function menu(){

console.clear();

console.log("========================================");
console.log("        AVI MED GERADOR");
console.log("========================================");
console.log("");
console.log("1 - Dashboard");
console.log("2 - Plantel");
console.log("3 - Medicamentos");
console.log("4 - Doenças");
console.log("5 - Tratamentos");
console.log("0 - Sair");
console.log("");

rl.question("Escolha: ", resposta=>{

switch(resposta){

case "1":
console.log("Em desenvolvimento...");
break;

case "2":
gerarPlantel();
break;

case "3":
console.log("Em desenvolvimento...");
break;

case "4":
console.log("Em desenvolvimento...");
break;

case "5":
console.log("Em desenvolvimento...");
break;

default:
break;

}

rl.close();

})

}

menu();