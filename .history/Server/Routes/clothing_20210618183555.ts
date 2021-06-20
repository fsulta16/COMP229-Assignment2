import express from 'express';
const router = express.Router();
export default router;

//create an clothing controller instance
import { DisplayClothingListPage } from '../Controllers/clothing';

/* GET clothing-list page - with /clothing-list */
router.get('./', DisplayClothingListPage);

/* display edit/:id page - with /clothing-list/edit:id */