@echo off
title AviMed Manager - Atualizador
color 0A

echo ==========================================
echo         AviMed Manager
echo      Atualizador de Desenvolvimento
echo ==========================================
echo.

REM ===== Configuração =====
set PROJETO=%~dp0
set BACKUP=%PROJETO%Backup

echo Projeto:
echo %PROJETO%
echo.

REM ===== Verifica Node =====
where node >nul 2>&1
if errorlevel 1 (
    echo Node.js nao encontrado.
    pause
    exit
)

REM ===== Verifica npm =====
where npm >nul 2>&1
if errorlevel 1 (
    echo NPM nao encontrado.
    pause
    exit
)

REM ===== Backup =====
if not exist "%BACKUP%" (
    mkdir "%BACKUP%"
)

echo.
echo Criando Backup...

set DATA=%date:~-4%%date:~3,2%%date:~0,2%
set HORA=%time:~0,2%%time:~3,2%
set HORA=%HORA: =0%

powershell Compress-Archive -Path "%PROJETO%src","%PROJETO%package.json","%PROJETO%vite.config.*" -DestinationPath "%BACKUP%\AviMed_%DATA%_%HORA%.zip" -Force

echo Backup concluido.
echo.

REM ===== Atualizar Dependencias =====
echo Instalando dependencias...
call npm install

echo.

REM ===== Atualizar pacotes =====
call npm update

echo.

REM ===== Git Status =====
where git >nul 2>&1

if not errorlevel 1 (
    echo Git encontrado.
    git status
)

echo.

REM ===== Abrir VS Code =====
where code >nul 2>&1

if not errorlevel 1 (
    echo Abrindo VS Code...
    start code .
)

echo.

REM ===== Iniciar Projeto =====
echo ==========================================
echo Iniciando AviMed...
echo ==========================================
echo.

call npm run dev

pause