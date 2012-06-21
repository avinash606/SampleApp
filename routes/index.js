
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'My sample App' ,welcome: 'Welcome' })
};


exports.about = function(req,res){
    res.render('about',{title: 'slkdf', welcome: 'sldkl'})
};

exports.contact = function(req, res){
  res.render('contact', { title: 'My sample App' ,welcome: 'this page is under construction' })
};
