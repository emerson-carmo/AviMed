@echo off
title AviMed - Reconstrucao do Layout
color 0A

echo.
echo ==========================================
echo      AVI MED - RECONSTRUCAO DO LAYOUT
echo ==========================================
echo.

REM Vai para a pasta raiz do projeto
cd /d "%~dp0.."

echo Pasta atual:
cd

echo.

if not exist "tools\reconstruir-layout.js" (
    echo.
    echo ERRO:
    echo O arquivo tools\reconstruir-layout.js nao foi encontrado.
    echo.
    pause
    exit /b
)

node tools\reconstruir-layout.js

echo.
echo ==========================================
echo Processo concluido.
echo ==========================================
pause