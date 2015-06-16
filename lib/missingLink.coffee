# @for sass missing link
#
# missing_link.coffee
_ = require 'underscore-plus'
Classy = require '../specs/Classy'

Classy.ClassCut = (_class, opts, from, to, _by) ->
	$scope = _.range from, to, _by
	for $idem in $scope
		template = """
			#{_class}-#{$idem} {
				#{opts}
			}
		"""
	return template

module.exports = Classy.ClassCut