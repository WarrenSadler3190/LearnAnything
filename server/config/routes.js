module.exports = function(app){
  //Routes
  app.get('/partials/*',function(req,res){
    res.render('../../public/app/' + req.params[0]);
  })

  app.get('*',function(req,res){
    res.render('index');
  });
}