// Generated by CoffeeScript 1.9.3
(function() {
  var Classy, Console, Fs, _;

  Fs = require('fs-extra');

  _ = require('underscore-plus');

  Console = require('./consoleMessages');

  Classy = require('../specs/Classy');

  Classy.Generator = function(template, css, js) {
    var processors;
    processors = {
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
    };
    if (template.indexOf(processors) && css.indexOf(processors) && js.indexOf(processors)) {
      return [template, css, js].forEach(Fs.createOutputStream(), function(err) {
        if (!err) {
          return Console.Success("pass!");
        } else {
          return Console.error("error!!");
        }
      });
    }
  };

}).call(this);