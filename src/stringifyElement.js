/***
 * stringifyElement.js
 * Experimental
 *
 * Author: Nicky Laczko
 * License: MIT
 */
var request = require('request');
var Console = require('./consoleMessages');
var Classy = require('../specs/Classy');

Classy.Element = function(url, $el) {
/// @param {$el} Element returned
/// How
// Make a request, then destringify the body
	request(url, function(err, request, body) {
		if (err) {
			Console.error(err.toString());
		} else if (!err && request.statusCode === 200) {
			body = body.toString();
			if (body.indexOf($el)) {
				Console.Success("Found " + $el + "!");
				return body;
			}
		} else {
			Console.Warn("Something went wrong, but no errors have occcured.");
		}
		return;
	})
}

module.exports = Classy.Element;