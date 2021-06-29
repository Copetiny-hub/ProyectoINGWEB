import { Router } from "express";
import AuthController from '../controller/AuthController';
import { checkJwt } from "../middlewares/jwt";

const router = Router();

//login
router.post('/login', AuthController.login);

//chage pass
router.post('/change-pass', [checkJwt], AuthController.changePassword);

//register
router.post('/register',AuthController.registerUser);

export default router;
