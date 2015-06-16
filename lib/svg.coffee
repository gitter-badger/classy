# svg.coffee

Classy = require '../specs/Classy'
Console = require './consoleMessages'
_ = require 'underscore-plus'

Classy.Svg = (opts...) ->
	if _.isObject(opts...)
		# Ok, good to work with
		compile = _.template(
			"""
			<svg class="<% _classname %>
				width="<% w %>"
				height="<% h %>"
				shape="<% shape %>"
				cy="<% cy %>"
				cx="<% cx %>"
				rx="<% rx %>"
				ry="<% ry %>"
				style="<% style %>"
			""")
		return Svg(compile(opts...))
	else
		Console.error "!! Errror!!!"
	return
module.exports = Classy.Svg