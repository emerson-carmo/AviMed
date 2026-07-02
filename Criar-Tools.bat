
echo ==========================================
echo      CRIANDO TOOLS DO AVIMED
echo ==========================================
echo.

REM Vai para a pasta onde o .bat está
cd /d "%~dp0"

REM Cria a pasta tools
if not exist tools (
    mkdir tools
    echo [OK] Pasta tools criada.
) else (
    echo [OK] Pasta tools ja existe.
)

REM Cria o arquivo gerador.js se nao existir
if not exist tools\gerador.js (

(
echo console.log("=====================================");
echo console.log("      AVI MED GERADOR");
echo console.log("=====================================");
echo console.log("");
echo console.log("Ferramenta em desenvolvimento...");
echo console.log("");
echo console.log("Em breve sera o gerador oficial do AviMed.");
) > tools\gerador.js

    echo [OK] Arquivo gerador.js criado.

) else (

    echo [OK] Arquivo gerador.js ja existe.

)

echo.
echo ==========================================
echo Estrutura criada com sucesso!
echo ==========================================
echo.

tree tools /F

echo.
pause