# escape json
## installation
	npm install escape-json
## using
### cli
```bash
$ echo '{"hello": "world"}' | ./node_modules/bin/escape-json.js
{\"hello\": \"world\"}
```
### module
```javascript
var escapeJson = require('escape-json');
// escaped === '{\"hello\": \"world\"}'
var escaped = escapeJson('{"hello": "world"}');
```
## tests
will be here soon
## license
[MIT License](LICENSE)
