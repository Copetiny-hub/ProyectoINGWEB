import { checkJwt } from "../middlewares/jwt";
import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkRole } from "../middlewares/role";
import {TicketRepController} from '../controller/TicketRepController';


const router = Router();

router.get('/', TicketRepController.getAll);
router.get('/:id', TicketRepController.getTicketRepByIdTicket);
router.get('/:id/id', TicketRepController.getTicketRepById);
router.post('/', TicketRepController.newTicketRep);
router.patch('/:id', TicketRepController.updateTicketRepById);
router.delete('/:id', TicketRepController.deleteTicketRepById);

export default router;
