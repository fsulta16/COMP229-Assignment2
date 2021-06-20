import express from 'express';
const router = express.Router();
export default router;

//create a contact controller instance
import { DisplayContactListPage } from '../Controllers/contact';

/* GET clothing-list page - with /contact-list */
router.get('./', DisplayContactListPage);

/* display edit/:id page - with /clothing-list/edit:id */