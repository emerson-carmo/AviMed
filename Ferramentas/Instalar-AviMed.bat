@echo off
title AviMed Manager - Instalador
color 0A

echo ==========================================
echo          AviMed Manager v1.0
echo              Instalador
echo ==========================================
echo.

cd /d "%~dp0"

:: --------------------------------------------------
:: Verifica Node.js
:: --------------------------------------------------

where node >nul 2>&1

if errorlevel 1 (
    color 0C
    echo.
    echo [ERRO] Node.js nao encontrado.
    echo.
    echo Instale o Node.js:
    echo https://nodejs.org
    pause
    exit
)

echo [OK] Node.js encontrado.
echo.

:: --------------------------------------------------
:: Verifica npm
:: --------------------------------------------------

where npm >nul 2>&1

if errorlevel 1 (
    color 0C
    echo.
    echo [ERRO] NPM nao encontrado.
    pause
    exit
)

echo [OK] NPM encontrado.
echo.

:: --------------------------------------------------
:: Verifica package.json
:: --------------------------------------------------

if not exist package.json (
    color 0C
    echo.
    echo package.json nao encontrado.
    pause
    exit
)

echo [OK] package.json localizado.
echo.

:: --------------------------------------------------
:: Verifica .env
:: --------------------------------------------------

if not exist .env (

    echo.
    echo ==========================================
    echo Arquivo .env nao encontrado
    echo ==========================================
    echo.

    if exist .env.example (

        copy .env.example .env

        echo.
        echo .env criado a partir do .env.example
        echo.
        echo IMPORTANTE:
        echo Edite o arquivo .env
        echo Informe a URL e a KEY do Supabase
        echo.

    ) else (

        echo.
        echo Crie manualmente o arquivo .env
        echo.

    )

)

:: --------------------------------------------------
:: Instala dependencias
:: --------------------------------------------------

echo.
echo Instalando dependencias...
echo.

call npm install

if errorlevel 1 (
    color 0C
    echo.
    echo Erro durante npm install.
    pause
    exit
)

echo.
echo Dependencias instaladas.
echo.

:: --------------------------------------------------
:: Atualiza pacotes
:: --------------------------------------------------

echo Verificando vulnerabilidades...
echo.

call npm audit fix

echo.

:: --------------------------------------------------
:: Abre VS Code
:: --------------------------------------------------

where code >nul 2>&1

if not errorlevel 1 (
    start code .
)

:: --------------------------------------------------
:: Inicia o projeto
:: --------------------------------------------------

echo.
echo ==========================================
echo Iniciando AviMed...
echo ==========================================
echo.

call npm run dev

pause