@echo off
setlocal

rem ====== SETTINGS ======
set "PACK_FOLDER=packwiz-curseforge"
set "BOOTSTRAP_JAR=packwiz-installer-bootstrap.jar"
set "BOOTSTRAP_URL=https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"

rem ====== Paths ======
for %%I in ("%~dp0..") do set "ROOT=%%~fI"
set "SERVER_DIR=%ROOT%\packwiz-server"

rem ====== Ensure bootstrapper exists at ROOT ======
cd /d "%ROOT%"
if not exist "%BOOTSTRAP_JAR%" (
  echo Downloading packwiz installer bootstrapper...
  curl -L -o "%BOOTSTRAP_JAR%" "%BOOTSTRAP_URL%"
)

rem ====== Refresh the pack index so hashes are valid ======
echo Running packwiz refresh for %PACK_FOLDER%...
packwiz refresh -y --pack-file "%ROOT%\%PACK_FOLDER%\pack.toml"

rem ====== Start packwiz serve from Curseforge pack (port 8080) ======
echo Starting packwiz serve (from %PACK_FOLDER%)...
start "packwiz-serve" /B cmd /c "cd /d "%PACK_FOLDER%" && packwiz serve --basic -p 8080"

rem ====== Wait until the server responds ======
echo Waiting for packwiz serve to respond...
:WAIT
timeout /t 1 >nul
powershell -NoProfile -Command ^
  "try { Invoke-WebRequest -UseBasicParsing -Uri 'http://localhost:8080/pack.toml' -TimeoutSec 1 | Out-Null; exit 0 } catch { exit 1 }"
if errorlevel 1 goto WAIT

rem ====== Run bootstrapper into packwiz-server (server-side mods only) ======
if not exist "%SERVER_DIR%" mkdir "%SERVER_DIR%"
cd /d "%SERVER_DIR%"

echo Downloading server-side mods into "%SERVER_DIR%"...
rem -g = no GUI, -s server = download only server-or-both mods (skip client)
java -jar "%ROOT%\%BOOTSTRAP_JAR%" -g -s server http://localhost:8080/pack.toml

rem ====== Stop the packwiz serve process ======
echo Stopping packwiz serve...
taskkill /FI "WINDOWTITLE eq packwiz-serve" /T /F >nul

echo [OK] Mods downloaded to packwiz-server (server-only).
endlocal
pause