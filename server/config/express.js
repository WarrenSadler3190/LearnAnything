var express = require('express')
    ,stylus = require('stylus')
    ,logger = require('morgan')
    ,bodyparser = require('body-parser');

module.exports = function(app, config){

  function compile(str,path) {
    return stylus(str).set('filename',path);
  }


  //View Engine and Static Dirs
  app.set('views', config.rootPath + '/server/views');
  app.set('view engine','jade');
  app.use(logger('dev'));
  app.use(bodyparser.urlencoded({
    extended:true
  }));
  app.use(bodyparser.json());
  app.use(stylus.middleware(
    {
      src: config.rootPath + '/public',
      compile: compile
    }
  ));
  app.use(express.static(config.rootPath + '/public'));

}