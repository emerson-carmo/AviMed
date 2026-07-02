@echo off
title Organizar Scripts do AviMed
color 0A

echo.
echo ==========================================
echo      ORGANIZANDO SCRIPTS DO AVIMED
echo ==========================================
echo.

echo Pasta atual:
echo %cd%
echo.

echo Renomeando arquivos...

if exist "1-Backup.bat" ren "1-Backup.bat" "01-backup.bat"
if exist "2-publicar-github.bat" ren "2-publicar-github.bat" "02-publicar-github.bat"
if exist "3-atualizar-projeto.bat" ren "3-atualizar-projeto.bat" "03-atualizar-projeto.bat"
if exist "4-abrir-vscode.bat" ren "4-abrir-vscode.bat" "04-abrir-vscode.bat"
if exist "5-Executar.bat" ren "5-Executar.bat" "05-executar.bat"
if exist "6-executar-avimed.bat" ren "6-executar-avimed.bat" "06-executar-avimed.bat"
if exist "7-Cadastro de aves.bat" ren "7-Cadastro de aves.bat" "07-cadastro-aves.bat"
if exist "Iniciar o AviMed.bat" ren "Iniciar o AviMed.bat" "08-iniciar-avimed.bat"

echo.
echo ==========================================
echo Arquivos atuais:
echo ==========================================
dir *.bat /b

echo.
pause