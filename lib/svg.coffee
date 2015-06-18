# svg.coffee

Classy = require '../specs/Classy'
Console = require './consoleMessages'
_ = require 'underscore-plus'

class Svg extends Classy
	Svg.Create = () ->
		@args = Array::slice.call arguments, 1
		compile =
				"""
				<svg class="#{@args[0]}"
					width="#{@args[1]}"
					height="#{@args[2]}"
					shape="#{@args[3]}"
					cy="#{@args[4]}" cx="#{@args[5]}"
					rx="#{@args[6]}" ry="#{@args[7]}"
					style="#{@args[8]}"
				"""
		return compile
#
module.exports = Classy.Svg