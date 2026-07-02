@echo off
title Atualizar Projeto

echo =====================================
echo      ATUALIZANDO DEPENDENCIAS
echo =====================================

call npm install
call npm update

echo.
echo Atualizacao concluida.
pause