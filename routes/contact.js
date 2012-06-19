/*
 * GET contact page.
 */

exports.contact = function(req, res){
  res.render('contact', { title: 'My sample App' ,welcome: 'this page is under construction' })
};
