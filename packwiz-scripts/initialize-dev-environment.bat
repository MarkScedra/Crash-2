@echo off
setlocal

rem === SETTINGS ===
for %%I in ("%~dp0..") do set "ROOT=%%~fI"
set "PACK_FOLDER=packwiz-modrinth"
set "BOOTSTRAP_JAR=packwiz-installer-bootstrap.jar"
set "BOOTSTRAP_URL=https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar"

rem === go to root folder ===
cd /d "%~dp0.."

rem === get bootstrapper if missing ===
if not exist "%BOOTSTRAP_JAR%" (
    echo Downloading packwiz installer bootstrapper...
    curl -L -o "%BOOTSTRAP_JAR%" "%BOOTSTRAP_URL%"
)

rem ====== Refresh the pack index so hashes are valid ======
echo Running packwiz refresh for %PACK_FOLDER%...
packwiz refresh -y --pack-file "%ROOT%\%PACK_FOLDER%\pack.toml"

rem === start packwiz serve ===
echo Starting packwiz server
start "packwiz-serve" /B cmd /c "cd /d "%PACK_FOLDER%" && packwiz serve --basic -p 8080"

rem === wait until server responds ===
echo Waiting for packwiz server to respond...
:WAIT
timeout /t 1 >nul
powershell -NoProfile -Command ^
  "try { Invoke-WebRequest -UseBasicParsing -Uri 'http://localhost:8080/pack.toml' -TimeoutSec 1 | Out-Null; exit 0 } catch { exit 1 }"
if errorlevel 1 goto WAIT

rem === run bootstrapper ===
echo Running bootstrapper to download files
java -jar "%BOOTSTRAP_JAR%" http://localhost:8080/pack.toml

rem === stop the serve process ===
echo Stopping packwiz server
taskkill /FI "WINDOWTITLE eq packwiz-serve" /T /F >nul

echo Done. Root folder should now be playable.
endlocal
pause