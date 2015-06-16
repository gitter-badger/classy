## maths.coffee
Classy = require '../specs/Classy'

Classy.Maths = (args...) =>
# @params {args...} Constitute multiple arguments
# @returns `eval(someNumber someSymbol someNumber)`
	return eval args...

module.exports = Classy.Maths