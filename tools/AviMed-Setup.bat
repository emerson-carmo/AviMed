@echo off
title AviMed v0.1.0
color 0A

:MENU
cls
echo.
echo ======================================================
echo               AVI MED v0.1.0
echo      Sistema de Gestao para Criadores de Canarios
echo ======================================================
echo.
echo  1 - Iniciar o AviMed
echo  2 - Abrir no VS Code
echo  3 - Atualizar dependencias (npm install)
echo  4 - Verificar Node.js
echo  5 - Verificar Git
echo.
echo  0 - Sair
echo.
set /p opcao=Escolha uma opcao: 

if "%opcao%"=="1" goto iniciar
if "%opcao%"=="2" goto vscode
if "%opcao%"=="3" goto instalar
if "%opcao%"=="4" goto node
if "%opcao%"=="5" goto git
if "%opcao%"=="0" exit

goto MENU

:iniciar
cls
echo.
echo Iniciando o AviMed...
echo.
call npm run dev
pause
goto MENU

:vscode
cls
echo.
echo Abrindo o projeto no VS Code...
echo.
code .
pause
goto MENU

:instalar
cls
echo.
echo Instalando dependencias...
echo.
call npm install
pause
goto MENU

:node
cls
echo.
echo Versao do Node.js
echo.
node -v
pause
goto MENU

:git
cls
echo.
echo Versao do Git
echo.
git --version
pause
goto MENU