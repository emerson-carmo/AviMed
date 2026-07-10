@echo off
title AviMed Manager
color 0A

:MENU
cls

echo ===============================================
echo             AviMed Manager v1.0
echo ===============================================
echo.
echo   1 - Iniciar AviMed
echo   2 - Instalar Dependencias
echo   3 - Atualizar Projeto
echo   4 - Backup do Projeto
echo   5 - Publicar no GitHub
echo   6 - Abrir VS Code
echo   7 - Abrir Pasta do Projeto
echo.
echo   0 - Sair
echo.
echo ===============================================

set /p opcao=Escolha uma opcao:

if "%opcao%"=="1" call Iniciar-AviMed.bat
if "%opcao%"=="2" call Instalar-AviMed.bat
if "%opcao%"=="3" call Atualizar-AviMed.bat
if "%opcao%"=="4" call Backup-AviMed.bat
if "%opcao%"=="5" call Publicar-GitHub.bat
if "%opcao%"=="6" start code .
if "%opcao%"=="7" start .
if "%opcao%"=="0" exit

goto MENU