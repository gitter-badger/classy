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
  , missingLink: require('./src/missingLink')
  , magicBall: require('./src/magic8ball')
  , unquote: require('./src/unquote')
  , svg: require('./src/svg')
  , Console: require('./src/consoleMessages')
  , createTweet: require('./src/createTweet')
  , rubberDucky: require('./src/rubber_ducky')
};

module.exports = Classy;