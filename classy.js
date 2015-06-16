"use strict";
/***
 * classy.js
 * A posh utility helper
 * 
 * Author: Nicky Laczko
 * License: MIT
 * Repository: RivalNick/Classy
 */
Classy = {
	Maths: require('./src/maths')
  , Probability: require('./src/probability')
  , missingLink: require('./src/missingLink')
  , magicBall: require('./src/magic8ball')
  , unquote: require('./src/unquote')

  , Console: require('./src/consoleMessages')
  , createTweet: require('./src/createTweet')
};

module.exports = Classy;