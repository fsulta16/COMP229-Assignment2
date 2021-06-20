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

/* GET - display login page - with /login . */
router.get('/login', DisplayLoginPage);

/* POST - process login page when user clicks Login Button */
router.post('/login', ProcessLoginPage);

/* GET - display register page - with /register . */
router.get('/register', DisplayRegisterPage);

/* POST - process register page when user clicks Register Button */
router.post('/register', ProcessRegisterPage);

/* GET - process the logout page - with /logout . */
router.get('/logout', ProcessLogoutPage);

function DisplayLoginPage(arg0: string, DisplayLoginPage: any) {
  throw new Error('Function not implemented.');
}

function ProcessLoginPage(arg0: string, ProcessLoginPage: any) {
  throw new Error('Function not implemented.');
}

function DisplayRegisterPage(arg0: string, DisplayRegisterPage: any) {
  throw new Error('Function not implemented.');
}

function ProcessRegisterPage(arg0: string, ProcessRegisterPage: any) {
  throw new Error('Function not implemented.');
}
function ProcessLogoutPage(arg0: string, ProcessLogoutPage: any) {
  throw new Error('Function not implemented.');
}
//module.exports = router;
