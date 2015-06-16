# Magic 8 Ball
# (^_^) for good luck
Classy = require '../specs/Classy'
Random = require '../specs/Random'

Classy.MagicBall = (question) ->
	phrases = [
		"I'm not so sure",
		"maybe", "ask another time",
		"just give up", "ask your friend",
		"maybe try debugging", "try again",
		"try some other time", "try next tuesday",
		"find another magic 8 ball"
	]
	return question + "\n Answer: #{Random(phrases)}"

module.exports = Classy.MagicBall