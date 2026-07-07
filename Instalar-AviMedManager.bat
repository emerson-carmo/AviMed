@echo off
title AviMed - Instalador do Manager
color 0A
setlocal

REM ===========================================================
REM AviMed Manager Installer
REM Versao 1.0
REM ===========================================================

cd /d "%~dp0"

cls
echo.
echo ==========================================================
echo              INSTALADOR DO AVIMED MANAGER
echo ==========================================================
echo.

echo [1/8] Criando estrutura de pastas...

if not exist "scripts" mkdir "scripts"
if not exist "backups" mkdir "backups"
if not exist "backups\diarios" mkdir "backups\diarios"
if not exist "backups\versoes" mkdir "backups\versoes"
if not exist "backups\restaurados" mkdir "backups\restaurados"

if not exist "docs" mkdir "docs"
if not exist "docs\banco" mkdir "docs\banco"
if not exist "docs\manuais" mkdir "docs\manuais"
if not exist "docs\versoes" mkdir "docs\versoes"

echo OK

echo.
echo [2/8] Criando documentacao...

if not exist "docs\versoes\CHANGELOG.md" (
(
echo # CHANGELOG AVI MED
echo.
echo ## Versao 1.0
echo.
echo - Estrutura inicial do projeto
echo - CRUD Doencas
echo - Supabase integrado
echo - Material UI
)>docs\versoes\CHANGELOG.md
)

if not exist "docs\banco\estrutura.sql" (
type nul > docs\banco\estrutura.sql
)

if not exist "docs\manuais\README.md" (
(
echo # Manuais AviMed
echo.
echo Documentacao do projeto.
)>docs\manuais\README.md
)

echo OK

echo.
echo [3/8] Criando arquivo de versao...

(
echo AviMed
echo.
echo Versao=1.0
echo.
echo Data=%date%
)>versao.txt

echo OK

echo.
echo [4/8] Movendo scripts BAT...

if exist "bat\*.bat" (
copy /Y "bat\*.bat" "scripts\" >nul
)

echo OK

echo.
echo [5/8] Criando Backup.bat...

(
echo @echo off
echo title Backup AviMed
echo echo.
echo echo Utilize o backup profissional na proxima versao.
echo pause
)>scripts\Backup.bat

echo OK

echo.
echo [6/8] Criando Restaurar.bat...

(
echo @echo off
echo echo Funcao em desenvolvimento.
echo pause
)>scripts\Restaurar.bat

echo OK

echo.
echo [7/8] Criando AviMed-Manager.bat...

(
echo @echo off
echo title AviMed Manager
echo color 0A
echo :MENU
echo cls
echo echo.
echo echo ===============================================
echo echo              AVIMED MANAGER
echo echo ===============================================
echo echo.
echo echo 1 - Iniciar Projeto
echo echo 2 - Backup
echo echo 3 - Restaurar
echo echo 4 - Abrir VSCode
echo echo 5 - Abrir Supabase
echo echo 0 - Sair
echo echo.
echo set /p op=Escolha:
echo.
echo if "%%op%%"=="1" call Iniciar.bat
echo if "%%op%%"=="2" call Backup.bat
echo if "%%op%%"=="3" call Restaurar.bat
echo if "%%op%%"=="4" code ..
echo if "%%op%%"=="5" start https://supabase.com/dashboard
echo if "%%op%%"=="0" exit
echo goto MENU
)>scripts\AviMed-Manager.bat

echo OK

echo.
echo [8/8] Finalizando...

echo.
echo ===============================================
echo Instalacao concluida com sucesso.
echo ===============================================
echo.
echo Estrutura criada:
echo.
echo scripts
echo backups
echo docs
echo.
echo Execute:
echo.
echo scripts\AviMed-Manager.bat
echo.
pause