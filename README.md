# escape json
## installation
	npm install escape-json
## using
### cli
```
$ echo '{"hello": "world"}' | ./node_modules/bin/escape-json.js
{\"hello\": \"world\"}
```
### module
```
var escapeJson = require('escape-json');
var escaped = escapeJson('{"hello": "world"}'); // returns '{\"hello\": \"world\"}'
```
## tests
will be here soon
## license
	[MIT License](LICENSE)
