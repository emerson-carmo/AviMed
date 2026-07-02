@echo off
title Backup AviMed

echo =====================================
echo        BACKUP DO AVIMED
echo =====================================

set DATA=%date:~6,4%-%date:~3,2%-%date:~0,2%
set HORA=%time:~0,2%-%time:~3,2%

if not exist backups mkdir backups

powershell Compress-Archive -Path src,public,package.json,package-lock.json,vite.config.js -DestinationPath backups\AviMed-%DATA%-%HORA%.zip -Force

echo.
echo Backup criado com sucesso.
pause