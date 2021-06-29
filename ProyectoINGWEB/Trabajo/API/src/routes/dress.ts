import { Router } from 'express';
const router = Router();

import * as dressController from '../controller/dresscontroller';

router.get('/', dressController.getRegiones);
router.get('/:id/comunas', dressController.getComunas);

export default router;