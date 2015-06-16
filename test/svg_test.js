// svg_test.js

var Svg = require('../src/svg');


console.log(
	Svg({
		_class: "someTestClass",
		w: 500,
		h: 800,
		shape: "circle",
		style: "border-box: 0px;"
	})
);