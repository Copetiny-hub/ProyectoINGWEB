import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
require('dotenv').config();

export const checkJwt = (req:Request, res:Response, next:NextFunction) => {
    /*const token = <string>req.headers["token"];
    if (!token) return res.status(401).json({message: "¡No has especificado el token de acceso!"});
    try {
        if (config.jwtSectret) {
            jwt.verify(token, config.jwtSectret, (err:any, decoded:any) => {
                if (err) return res.status(401).json({message: "¡El token especificado es inválido o ha expirado!"});
                req.userId = decoded.id;
                console.log(req.userId);
                console.log('wea')
                next();
            });
        }
    }
    catch (error) {
        return res.status(401).json({message: error});
    }*/

    
    const token = <string>req.headers['token'];
    console.log(req.headers);
    let jwtPayload;

    try{
        jwtPayload = <any>jwt.verify(token, config.jwtSectret);
        res.locals.jwtPayload = jwtPayload;

    }catch(e){
        return res.status(401).json({message: 'No autorizado'});
    }

    const {userId, rut} = jwtPayload;

    const newToken = jwt.sign({userId, rut}, config.jwtSectret, {expiresIn:'1h'});
    res.setHeader('token', newToken);

    //Call Next
    next();
}