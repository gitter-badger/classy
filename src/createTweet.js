// Generated by CoffeeScript 1.9.3
(function() {
  var Classy, _, chalk;

  Classy = require('../specs/Classy');

  _ = require('underscore-plus');

  chalk = require('chalk');


  /*
   * Classy.CreateTweet
   * - Generate a tweet
   * @param {tweet} A basic string
   * @param {at} Who you are mentioning (optional)
   */

  Classy.CreateTweet = function(tweet, at) {
    var limit, msg;
    limit = 140;
    msg = "" + (chalk.green("🐣 Tweet => "));
    if (_.contains('@', tweet) && tweet.length <= limit) {
      return msg + tweet;
    } else if (tweet.length <= limit && at) {
      this.tweet = "." + at + tweet;
      return msg + this.tweet;
    }
    if (!(tweet.length > limit)) {
      return msg + tweet;
    }
  };

  module.exports = Classy.CreateTweet;

}).call(this);
