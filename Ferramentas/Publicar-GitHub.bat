@echo off
title Publicar Projeto no GitHub
color 0B

cd /d "%~dp0"

echo ==========================================
echo       Publicando AviMed no GitHub
echo ==========================================
echo.

git status

echo.
echo ==========================================
echo.

set /p mensagem=Mensagem do Commit:

if "%mensagem%"=="" (
    set mensagem=Atualizacao AviMed
)

echo.
echo Adicionando arquivos...
git add .

echo.
echo Criando Commit...
git commit -m "%mensagem%"

echo.
echo Enviando para GitHub...
git push

echo.
echo ==========================================
echo Processo Finalizado.
echo ==========================================

pause