import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import { Usuarios } from '../entity/Usuario';

export const checkRole = (roles:Array<string>) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        console.log(res.locals)
        const { userId } = res.locals.jwtPayload;
        const userRepository = getRepository(Usuarios);
        let user: Usuarios;

        try{
            user = await userRepository.findOneOrFail(userId);

        }catch(e){
            return res.status(401).json({message: 'No autorizado'});
        }

        //Check
        const {tipo} = user;
        if(roles.includes(tipo)){
            next();
        }
        else{
            res.status(401).json({message: 'No autorizado'});
        }
    }
}