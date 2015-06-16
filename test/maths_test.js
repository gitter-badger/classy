// maths_test.js
var Maths = require('../src/maths');
var test = require('ava');

test(function(t) {
	t.assert(Maths(1 * 2000) === 2000);
	t.assert(Maths(2 / 2) === 1);
	t.assert(Maths(20 % 5) === 0);
	t.assert(Maths(70 * 2) === 140);
	t.assert(Maths(30 + 2) === 32);
	t.assert(Maths(100 - 49) === 51);
	t.assert(Maths(Math.sin(40) / 2) !== 0);

	t.end();
});