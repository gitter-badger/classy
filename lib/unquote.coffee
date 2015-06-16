# unquote.coffee
Classy = require '../specs/Classy'
_ = require 'underscore-plus'
Classy.unquote = (str) ->
	_.escape(str) unless typeof str isnt "String"

module.exports = Classy.unquote