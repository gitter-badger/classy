"use strict"
# rubber_ducky.coffee
# For JavaScript debugging

# Load dependencies
Classy = require '../specs/Classy'
Random = require '../specs/Random'
_ 	   = require 'underscore-plus'
Console = require './consoleMessages'

###
# @param {ducky} Your buddy in helping you code
# @param {questions} Set of questions to help you debug
# @param {genie} Extension of the `magic8ball` class
###

Classy.RubberDucky = (_prompt) ->
	# needed constructor
	constructor: (questions, ducky, genie, args = argv[0]) ->
		@questions = []
		@ducky = {}
		@genie = {}
		@args = argv[0]
		return

	questions = [
		"did you make sure that your arguments aren't spelled wrong?",
		"check stackoverflow", "google it", "cache overflow maybe?",
		"make sure you have the right dependencies", "did you install your test dependencies?",
		"check if your arrows are right", "did you compile it through babel first?",
		"is your code ES6/7? maybe go compile first"
	]
	@ducky.prompt = Random questions
	@genie.text = _prompt + "\n\n" + @ducky.prompt

	return @genie.text