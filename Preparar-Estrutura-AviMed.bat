@echo off
title AviMed Manager - Preparar Estrutura
color 0A

echo ============================================
echo       AviMed Manager v1.1
echo   Preparando Estrutura do Projeto
echo ============================================
echo.

cd /d "%~dp0"

echo Criando estrutura de pastas...
echo.

:: COMPONENTES
mkdir src\components 2>nul
mkdir src\components\common 2>nul
mkdir src\components\dashboard 2>nul
mkdir src\components\forms 2>nul
mkdir src\components\layout 2>nul
mkdir src\components\tables 2>nul

:: LAYOUT
mkdir src\layouts 2>nul

:: ROTAS
mkdir src\routes 2>nul

:: CONFIGURAÇÕES
mkdir src\config 2>nul

:: TEMA
mkdir src\theme 2>nul

:: UTILITÁRIOS
mkdir src\utils 2>nul

:: DOCUMENTAÇÃO
mkdir docs 2>nul

:: FERRAMENTAS
mkdir Ferramentas 2>nul

:: BACKUP
mkdir Backup 2>nul

echo.
echo Criando arquivos base...
echo.

:: constants.js
if not exist src\config\constants.js (
echo export const APP_NAME = "AviMed Manager";>src\config\constants.js
echo export const APP_VERSION = "1.1.0";>>src\config\constants.js
echo export const PERFIL_ADMIN = "ADMIN";>>src\config\constants.js
echo export const PERFIL_CONSULTA = "CONSULTA";>>src\config\constants.js
)

:: theme.js
if not exist src\theme\theme.js (
echo // Theme do AviMed>src\theme\theme.js
)

:: MainLayout
if not exist src\layouts\MainLayout.jsx (
echo export default function MainLayout(){>>src\layouts\MainLayout.jsx
echo return ^<div^>Main Layout^</div^>;>>src\layouts\MainLayout.jsx
echo }>>src\layouts\MainLayout.jsx
)

:: Header
if not exist src\components\layout\Header.jsx (
echo export default function Header(){>>src\components\layout\Header.jsx
echo return ^<header^>Header^</header^>;>>src\components\layout\Header.jsx
echo }>>src\components\layout\Header.jsx
)

:: Sidebar
if not exist src\components\layout\Sidebar.jsx (
echo export default function Sidebar(){>>src\components\layout\Sidebar.jsx
echo return ^<aside^>Sidebar^</aside^>;>>src\components\layout\Sidebar.jsx
echo }>>src\components\layout\Sidebar.jsx
)

:: Footer
if not exist src\components\layout\Footer.jsx (
echo export default function Footer(){>>src\components\layout\Footer.jsx
echo return ^<footer^>Footer^</footer^>;>>src\components\layout\Footer.jsx
echo }>>src\components\layout\Footer.jsx
)

:: UserMenu
if not exist src\components\layout\UserMenu.jsx (
echo export default function UserMenu(){>>src\components\layout\UserMenu.jsx
echo return ^<div^>User Menu^</div^>;>>src\components\layout\UserMenu.jsx
echo }>>src\components\layout\UserMenu.jsx
)

:: Rotas
if not exist src\routes\routes.jsx (
echo // Rotas do AviMed>src\routes\routes.jsx
)

echo.
echo ============================================
echo Estrutura criada com sucesso!
echo ============================================
echo.
echo Proximos passos:
echo.
echo 1 - MainLayout
echo 2 - Header
echo 3 - Sidebar
echo 4 - Footer
echo 5 - Dashboard
echo 6 - Usuarios
echo 7 - Permissoes
echo.
pause