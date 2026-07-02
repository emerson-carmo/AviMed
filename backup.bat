@echo off
title AviMed - Backup

echo ==========================================
echo          BACKUP DO AVIMED
echo ==========================================
echo.

set DATA=%date:~6,4%-%date:~3,2%-%date:~0,2%
set HORA=%time:~0,2%-%time:~3,2%

if "%HORA:~0,1%"==" " set HORA=0%HORA:~1%

set DESTINO=bat\backups

if not exist "%DESTINO%" (
    mkdir "%DESTINO%"
)

powershell Compress-Archive ^
-Path * ^
-DestinationPath "%DESTINO%\AviMed_%DATA%_%HORA%.zip" ^
-Force

echo.
echo Backup criado com sucesso!
echo.
pause