# Documentation
===============

- Author: Nicky Laczko

### Classy#Maths(args...)
- This simply calculates all the arguments that are passed through the function.

### Classy#ClassCut(String _class, Object opts, int from, int to, int _by)
- Returns a String that fixes Sass's ``@for`` loop "cut" integration.

### Classy#Probability(String result, int percent)
> note: percent can't be a float integer.

- Returns a random integer that predicts your result.

### Classy#shellShock(args...)
- Executes all the commands inside a String.

### Classy#Svg(options)
- Options [Object]
	- _classname
	- w (width)
	- h (height)
	- cy
	- cx
	- rx
	- ry
	- style
- Returns a SVG template for your HTML document.

### Classy#MagicBall(question)
- Ask the all powerful Magic 8 ball and see what kind of answer you get.

### Classy#createTweet(String tweet, String at)
> Note: `at` is optional

- Generates text to tweet out.

### Classy#unquote(String str)
- Unescape html characters like ``&amp;``