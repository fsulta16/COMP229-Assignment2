import express from 'express';
const router = express.Router();
export default router;
//use index view and passing title of Home
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project' });
});
/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
//module.exports = router;
