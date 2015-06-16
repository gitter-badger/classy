/***
 * shellShock.js
 * execute shell commands
 *
 * Author: Nicky Laczko
 * License: MIT
 */
var Console = require('./consoleMessages'),
	spawn = require('child_process').spawn;
var Classy = require('../specs/Classy');

Classy.shellShock = function(commands) {
	if (commands == 1) {
		// okay 1 argument
		return spawn(commands);
	}
	if (commands >= 2) {
	commands = commands.split('\n');
		for (var i = 0; i < commands.length, i >= 0; i++) {
				spawn(commands);
			}
	}
	return;
}

module.exports = Classy.shellShock;