# it.coffeee
chalk = require 'chalk'
Classy = require '../specs/Classy'

Classy.Highlight = (msg) ->
	it = chalk.blue.underline
	return console.log it(msg)

module.exports = Classy.Highlight