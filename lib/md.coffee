# md.coffee
Classy = require '../specs/Classy'
#_ = require 'underscore-plus'

key =
	bold: "**",
	underline: "_",
	h1: "#", 
	h2: "##",
	h3: "###", 
	h4: "####",
	h5: '#####', 
	h6: '######',
	blockquote: ">",
	ahref: "@"

tail = [1..6]

Classy.md = (str...) ->
	str ?= str.substring(0)
	switch str
		when str is key.bold
			str.replace(key.bold, '<b>').substring(-1).replace(key.bold, '</b>')
		when str is key.underline
			str.replace(key.underline, "<u>").substring(-1).replace(key.underline, "</u>")
		when str is key.tail
			for number in tail
				str.replace(tail[number], "<h#{number}>").substring(-1).replace(tail[number], "</h#{number}>")
		when str is key.blockquote
			str.replace(key.blockquote, '<blockquote>').substring(-1).replace(key.blockquote, "</blockquote>")
		when str is key.ahref
			str.replace(key.ahref, '<a href="#">').substring(-1).replace("</a>")
			break
	return unless typeof str is "String"

module.exports = Classy.md