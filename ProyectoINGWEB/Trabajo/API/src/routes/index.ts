import { Router } from "express";

import auth from './auth';
import user from './user';
import ticket from './ticket';
import ticketRep from './ticketRep';
import dress from './dress';



const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/ticket', ticket)
routes.use('/ticketRep', ticketRep)
routes.use('/dress', dress)


export default routes;
