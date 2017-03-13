Decision Maker
=====================

### Usage

Install the dependencies and start the server.

```
npm install
node server.js (from server folder)
open http://localhost:8080

### Requires a .env in server folder
PI_KEY = ...
TWILIO_ACCOUNT_SID = ...
TWILIO_AUTH_TOKEN = ...
TWILIO_NUMBER = ...
MY_NUMBER = ...

### Requires settings.json for Postgres settings in root
{
  "user": "",
  "password": "",
  "database": "",
  "hostname": "",
  "port": ,
  "ssl":
}
