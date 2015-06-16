# templateGenerator.coffee
Fs = require 'fs-extra'
_ = require 'underscore-plus'
Console = require './consoleMessages'
Classy = require '../specs/Classy'

Classy.Generator = (template, css, js) ->
	# @template {html, jade, haml}
	# @css {sass, scss, styl, less}
	# @js {js, coffee, babel}
	processors =
		html: "views/index.html",
		jade: "jade/views/index.jade",
		haml: "haml/views/index.haml",
		sass: "_sass/index.sass",
		scss: "_scss/index.scss",
		styl: "styl/index.styl",
		less: "less/index.less",
		js: "js/index.js",
		coffee: "js/coffee/index.coffee",
		babel: "js/es6/index.js"
	if template.indexOf(processors) and css.indexOf(processors) and js.indexOf(processors)
		[template, css, js].forEach Fs.createOutputStream(), (err) ->
			if !err
				Console.Success "pass!"
			else
				Console.error "error!!"