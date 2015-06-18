# unquote.coffee
Classy = require '../specs/Classy'
_ = require 'underscore-plus'
Classy.unquote = (str) ->
	_.unescape(str)

module.exports = Classy.unquote