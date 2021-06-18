import express from 'express';
const router = express.Router();
export default router;
//use index view and passing title of Home
//res.render create a page through the template, pass object through the page titled property 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about' });
});
/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', page: 'project' });
});
/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service', page: 'service' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact' });
});
//module.exports = router;
