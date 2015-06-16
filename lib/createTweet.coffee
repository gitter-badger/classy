# createTweet.coffee

Classy = require '../specs/Classy'
_ = require 'underscore-plus'
chalk = require 'chalk'
###
# Classy.CreateTweet
# - Generate a tweet
# @param {tweet} A basic string
# @param {at} Who you are mentioning (optional)
###
Classy.CreateTweet = (tweet, at) ->
	limit = 140
	msg = "#{chalk.green("🐣 Tweet => ")}"
	if _.contains('@', tweet) and tweet.length <= limit
		return msg + tweet
	else if tweet.length <= limit and at
		@tweet = "." + at + tweet
		return msg + @tweet
	return msg + tweet unless tweet.length > limit

module.exports = Classy.CreateTweet