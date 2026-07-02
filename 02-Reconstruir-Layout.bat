@echo off
title AviMed - Reconstrucao do Layout
color 0A

echo.
echo ==========================================
echo      AVI MED - RECONSTRUCAO DO LAYOUT
echo ==========================================
echo.

cd /d %~dp0..
node tools\reconstruir-layout.js

echo.
echo ==========================================
echo Processo concluido.
echo ==========================================
pause