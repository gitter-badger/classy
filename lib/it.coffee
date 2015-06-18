# it.coffeee
chalk = require 'chalk'
_ = require 'underscore-plus'
Console = require './consoleMessages'

_.extend Console, it, (msg) =>
	it = chalk.blue.underline
	return console.log it(msg)

module.exports = Classy.Highlight