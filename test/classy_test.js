// classy_test.js

var Classy = require('../classy');

console.log(
	Classy.magicBall("win the lotto") + "\n" +
	Classy.Maths(1 + 2 + Math.cos(44) + 3) + "\n" +
	Classy.missingLink('#someID', null, 1, 10, 2) + "\n" +
	Classy.createTweet('bro', '@subway') + "\n" +
	Classy.createTweet("Hey broski") + "\n" +
	Classy.unquote("'hello jerry' &amp; sister!") + "\n" +
	Classy.rubberDucky("I just can't")
)