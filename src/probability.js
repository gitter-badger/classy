/***
 * probability.js
 * Get the random chance of an Event happening
 *
 * Author: Nicky Laczko
 * License: MIT
 */

var Console = require('./consoleMessages');
var Classy = require('../specs/Classy');
// Generate random probability
Classy.Probability = function(result, percent) {
	/* 
	 * Tailor#Probability
	 * @arguments {result} -> String
	 * @arguments {percent} -> int
	 * @returns Random percent that the result will happen
	 */
	var msg = 'There is a ',
		t = " that '" + result + "' will happen.",
		chance = 0,
	factors = {
		wind: 5,
		humidity: 2,
		cold: 55,
		angry: Math.floor(Math.random() * ~~99999),
		mad: Math.floor(Math.random() % 99999)
	};
	// Narrow it down
		switch(percent) {
			case percent >= 33.3:
			chance = percent / factors.mad;
			return msg + chance + t;
				break;
			case percent <= 66.6:
			chance = percent - wind * angry
			return msg + chance + t;
				break;
			case percent <= 99.9:
			chance = percent - humidity * cold - angry;
			return msg + chance + t;
				break;
			case percent == 100:
				break;
		}
	//return msg + chance + t;
}

module.exports = Classy.Probability;