def toId:
    gsub("\\p{^Alnum}+$"; "")  |
    gsub("[. ]"; "_")          |
    ascii_downcase;

def mapText(id):
    if . != null then {"text":(id), "isTranslationKey":true} else empty end;

("hqm."+(.name|toId)) as $set |
.description |= mapText($set+".description") |
.quests |= map(
    ("."+(.name.text|toId)) as $id |
    .name        |= mapText($set+$id+".name")        |
    .description |= mapText($set+$id+".description") |
    .tasks = (.tasks | to_entries | map(
        .key as $i |
        .value |
        .description     |= mapText($set+$id+".task."+($i|tostring)+".description")      |
        .longDescription |= mapText($set+$id+".task."+($i|tostring)+".long_description")
    ))
)
