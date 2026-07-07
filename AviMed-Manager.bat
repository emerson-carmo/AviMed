@echo off
title AviMed Manager v1.0
color 0A

:MENU
cls

echo.
echo ==========================================================
echo                    AVIMED MANAGER
echo ==========================================================
echo.
echo   Projeto............... AviMed
echo   Versao................ 1.0
echo.
echo ==========================================================
echo.
echo   [1] Iniciar Projeto
echo   [2] Fazer Backup
echo   [3] Restaurar Backup
echo   [4] Publicar GitHub
echo   [5] Organizar Projeto
echo   [6] Limpar Arquivos Temporarios
echo   [7] Abrir VS Code
echo   [8] Abrir Supabase
echo.
echo   [0] Sair
echo.
echo ==========================================================

set /p op=Escolha uma opcao:

if "%op%"=="1" call "%~dp0Iniciar.bat"
if "%op%"=="2" call "%~dp0Backup.bat"
if "%op%"=="3" call "%~dp0Restaurar.bat"
if "%op%"=="4" call "%~dp0GitHub.bat"
if "%op%"=="5" call "%~dp0Organizar.bat"
if "%op%"=="6" call "%~dp0Limpar.bat"
if "%op%"=="7" code ..
if "%op%"=="8" start https://supabase.com/dashboard
if "%op%"=="0" exit

pause
goto MENU