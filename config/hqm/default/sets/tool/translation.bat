@ECHO OFF
SET FILES=Basic_Survival.json Under_Pressure.json Salvage_Operation.json Technological_Revolution!.json Creating_Life.json

PUSHD ..
jq -s -f .\tool\hqm_gen_translation_keys.jq %FILES% > .\tool\en_us.json
FOR %%i IN (%FILES%) DO (
    jq -f .\tool\hqm_replace_translation_keys.jq %%i > .\tool\%%i
    COPY /Y .\tool\%%i %%i > NUL
    DEL .\tool\%%i
)
POPD
