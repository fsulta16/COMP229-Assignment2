//importing external dependencies
import express from 'express';
//application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls router
const router = express.Router();
export default router;
//use index view and passing title of Home
//res.render create a page through the template, pass object through the page titled property 

// create an index controller instance
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicePage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET project page. */
router.get('/project', DisplayProjectsPage);

/* GET service page. */
router.get('/service', DisplayServicePage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET Login View page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login' });
});
//module.exports = router;
