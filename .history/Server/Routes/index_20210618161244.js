"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
});
router.get('/project', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'project' });
});
router.get('/service', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'service' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
});
router.get('/login', function (req, res, next) {
    res.render('index', { title: 'Login', page: 'login' });
});
//# sourceMappingURL=index.js.map