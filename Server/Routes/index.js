"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Controllers/index");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/about', index_1.DisplayAboutPage);
router.get('/project', index_1.DisplayProjectsPage);
router.get('/service', index_1.DisplayServicePage);
router.get('/contact', index_1.DisplayContactPage);
router.get('/login', function (req, res, next) {
    res.render('index', { title: 'Login', page: 'login' });
});
//# sourceMappingURL=index.js.map