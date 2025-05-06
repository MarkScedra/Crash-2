def toId:
    gsub("\\p{^Alnum}+$"; "")  |
    gsub("[. ]"; "_")          |
    ascii_downcase;


. | map(
    ("hqm."+(.name|toId)) as $set |
    if has("description") then {($set+".description"): .description.text} else {} end +
    ((.quests) | map(
        .name.text         as $name |
        ("."+($name|toId)) as $id   |
        .description.text  as $desc |
        {
            ($set+$id+".name"):$name,
            ($set+$id+".description"):$desc
        } +
        (.tasks | to_entries | map(
            .key as $i |
            .value |
            {
                ($set+$id+".task."+($i|tostring)+".description"):.description.text,
                ($set+$id+".task."+($i|tostring)+".long_description"):.longDescription.text,
            } | del(..|nulls)
        ) | add)
    ) | add)
) | add
