/*
 * GET about page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'My sample App' ,welcome: 'this page is under construction' })
};
