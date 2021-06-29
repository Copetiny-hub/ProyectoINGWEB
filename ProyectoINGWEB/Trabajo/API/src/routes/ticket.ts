import { Router } from "express";
import { checkJwt } from "../middlewares/jwt";
import TicketController from '../controller/TicketController';

const router = Router();

//Get all request
router.get('/', TicketController.getAll);

//Get one request for ID
router.get('/:id',TicketController.getById);

//Get one reques from User
router.get('/:id/user',TicketController.getTicketbyUserId);

//Get one request by status
router.get('/:status/status',TicketController.getTicketbyStatus);

//Create a new request
router.post('/', TicketController.newTicket);

//Edit request
router.patch('/:id', TicketController.editTicket);

//Delete request
router.delete('/:id', TicketController.deleteTicket);

export default router;
