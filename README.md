# tfk-portalen

Enkel beskrivelse av skjelettet til ny portalforside.
Det er tenkt svært minimalistisk og hele løsningen består av funksjoner for oppgaver, meldinger og linker.
Oppgavene blir postet til portalen fra ulike fagsystemer.
Meldinger lages i portalen, men vil også kunne støtte input fra eksterne kilder.
Linkene er kun for brukeren.
Settings er personlige preferanser over hvilke tags man følger og hvilke meldinger man har markert som lest.

##API

/tasks
GET
POST

/task/{id}
GET
PUT
DELETE

/messages
GET
POST

/message/{id}
GET
PUT
DELETE

/links
GET
POST

/link/{id}
GET
PUT
DELETE

/settings
POST

/setting/{id}
GET
PUT
DELETE

##Models
De ulike modellene man trenger i portalen.

###task_id
user
type
title
created
modified
due
url
done

###message
_id
from
title
description
tags
created
modified
remove

###link
_id
title
description
category
user
type
created
modified

###setting
_id
user
tags
read
created
modified
