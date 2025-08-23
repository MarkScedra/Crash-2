@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ====== Paths ======
for %%I in ("%~dp0..") do set "ROOT=%%~fI"
set "SERVER_DIR=%ROOT%\packwiz-server"
set "PACK_FOLDER=%ROOT%\packwiz-modrinth"
set "BUILD_DIR=%ROOT%\packwiz-builds"
set "COPY_LIST_FILE=%ROOT%\packwiz-scripts\configs\server-copy-list.txt"

rem ====== Ensure destination directories exist ======
if not exist "%SERVER_DIR%" mkdir "%SERVER_DIR%"
if not exist "%BUILD_DIR%" mkdir "%BUILD_DIR%"

rem ====== Copy items from list ======
if not exist "%COPY_LIST_FILE%" (
  echo [ERROR] Copy list not found: "%COPY_LIST_FILE%"
  exit /b 1
)

rem ====== Pre-cleanup ======
call :CLEAN_LIST_COPIES "%SERVER_DIR%" "%COPY_LIST_FILE%"

echo Copying items from server copy list...
for /f "usebackq tokens=* delims= eol=#" %%L in ("%COPY_LIST_FILE%") do (
  set "ITEM=%%L"
  if defined ITEM (
    set "SRC=%ROOT%\!ITEM!"
    set "DST=%SERVER_DIR%\!ITEM!"
    if exist "!SRC!\" (
      echo   [+] DIR  "!ITEM!"
      robocopy "!SRC!" "!DST!" /E /NFL /NDL /NJH /NJS /NP >nul
      if errorlevel 8 (
        echo   [ERROR] robocopy failed for directory "!ITEM!"
        exit /b 1
      )
    ) else if exist "!SRC!" (
      echo   [+] FILE "!ITEM!"
      for %%P in ("!DST!") do set "DSTDIR=%%~dpP"
      if not exist "!DSTDIR!" mkdir "!DSTDIR!" 2>nul
      copy /Y "!SRC!" "!DST!" >nul
      if errorlevel 1 (
        echo   [ERROR] copy failed for file "!ITEM!"
        exit /b 1
      )
    ) else (
      echo   [!] Skipping "!ITEM!" (not found at root)
    )
  )
)

rem ====== Zip server folder ======
set "OUTZIP=%BUILD_DIR%\Desolate Planet Server Pack.zip"
echo Creating "%OUTZIP%" ...
powershell -NoProfile -Command ^
  "if (Test-Path -LiteralPath '%OUTZIP%') { Remove-Item -LiteralPath '%OUTZIP%' -Force } ;" ^
  "Compress-Archive -Path '%SERVER_DIR%\*' -DestinationPath '%OUTZIP%' -Force"

echo [OK] Wrote: %OUTZIP%

rem --- POST-CLEANUP: remove the copied items so SERVER_DIR is clean ---
echo.
echo === Post-cleanup: removing copied items ===
call :CLEAN_LIST_COPIES "%SERVER_DIR%" "%COPY_LIST_FILE%"

endlocal
pause
goto :eof

:CLEAN_LIST_COPIES
rem %1 = DEST base (where items were copied), %2 = copy-list file
set "CLEAN_DEST=%~1"
set "CLEAN_LIST=%~2"
for /f "usebackq tokens=* delims= eol=#" %%L in ("%CLEAN_LIST%") do (
  set "ITEM=%%L"
  if defined ITEM (
    set "TGT=%CLEAN_DEST%\!ITEM!"
    if exist "!TGT!\" (
      rmdir /S /Q "!TGT!" 2>nul
    ) else if exist "!TGT!" (
      del /Q "!TGT!" 2>nul
    )
  )
)
powershell -NoProfile -Command ^
  "$base = '%CLEAN_DEST%';" ^
  "do {" ^
  "  $removed = 0;" ^
  "  Get-ChildItem -LiteralPath $base -Recurse -Directory |" ^
  "    Where-Object { ($_.GetFileSystemInfos().Count -eq 0) } |" ^
  "    ForEach-Object { Remove-Item -LiteralPath $_.FullName -Force; $removed++ };" ^
  "} while ($removed -gt 0)"
goto :eof
