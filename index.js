'use strict';

module.exports = function(str) {
	return JSON.stringify({_: str}).slice(6, -2);
};
