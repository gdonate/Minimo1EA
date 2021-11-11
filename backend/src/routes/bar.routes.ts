import { Router } from "express"; 
import barController from "../controllers/bar.controller";

const router = Router();

router.get('/', barController.getAllBares);
router.get('/:id', barController.getBar);
router.post('/new',barController.newBar);
router.put('/update/:id', barController.updateBar);
router.delete('/:id', barController.deleteBar);

export default router;