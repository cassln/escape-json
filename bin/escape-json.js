#!/usr/bin/env node

var escapeJson = require('../');

function read(callback) {
	var str = '',
		stdin = process.stdin;

	stdin.on('data', function(data) {
		str += data;
	});

	stdin.on('end', function() {
		callback(null, str);
	});

	stdin.on('error', function(err) {
		callback(err);
	});
}

read(function(err, input) {
	if (err) throw err;
	process.stdout.write(escapeJson(input));
});
