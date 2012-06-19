
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'My sample App' ,welcome: 'Welcome' })
};
