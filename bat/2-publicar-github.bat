@echo off
title Publicar no GitHub

echo =====================================
echo      PUBLICANDO NO GITHUB
echo =====================================

git add .
git commit -m "Atualizacao do AviMed"
git push origin main

echo.
echo Projeto enviado ao GitHub.
pause