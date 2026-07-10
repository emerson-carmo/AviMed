@echo off

title AviMed Manager

cd /d "%~dp0"

start code .

start http://localhost:5173

call npm run dev

pause