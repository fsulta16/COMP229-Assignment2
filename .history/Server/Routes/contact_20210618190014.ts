import express from 'express';
const router = express.Router();
export default router;

//create a contact controller instance
import { DisplayClothingListPage } from '../Controllers/contact';

/* GET clothing-list page - with /clothing-list */
router.get('./', DisplayContactListPage);

/* display edit/:id page - with /clothing-list/edit:id */