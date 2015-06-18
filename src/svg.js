// Generated by CoffeeScript 1.9.3
(function() {
  var Classy, Console, Svg, _,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Classy = require('../specs/Classy');

  Console = require('./consoleMessages');

  _ = require('underscore-plus');

  Svg = (function(superClass) {
    extend(Svg, superClass);

    function Svg() {
      return Svg.__super__.constructor.apply(this, arguments);
    }

    Svg.Create = function() {
      var compile;
      this.args = Array.prototype.slice.call(arguments, 1);
      compile = "<svg class=\"" + this.args[0] + "\"\n	width=\"" + this.args[1] + "\"\n	height=\"" + this.args[2] + "\"\n	shape=\"" + this.args[3] + "\"\n	cy=\"" + this.args[4] + "\" cx=\"" + this.args[5] + "\"\n	rx=\"" + this.args[6] + "\" ry=\"" + this.args[7] + "\"\n	style=\"" + this.args[8] + "\"";
      return compile;
    };

    return Svg;

  })(Classy);

  module.exports = Classy.Svg;

}).call(this);
