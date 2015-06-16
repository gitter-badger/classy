/***
 * consoleMessages.js
 * A simple helper for better console interactions
 *
 * Author: Nicky Laczko
 * License: MIT
 */
var chalk = require('chalk');

var Console = {
	warn: function(message) {
		var w = chalk.yellow.underline;
		console.log(w(message));
	},
	Success: function(message) {
		var s = chalk.green.bold;
		console.log(s(message));
	},
	error: function(message) {
		var e = chalk.red.underline.bold;
		console.log(e(message));
	}
};

module.exports = Console;