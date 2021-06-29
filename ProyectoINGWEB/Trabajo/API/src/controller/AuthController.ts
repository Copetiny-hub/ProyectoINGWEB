import { validate } from 'class-validator';
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Usuarios } from "../entity/Usuario";
import * as jwt from 'jsonwebtoken';
import config from "../config/config";

class AuthController{

    static login = async ( req:Request, res:Response) => {

        const {rut, clave} = req.body;
        console.log(rut);

        if ( !(rut && clave)){
            res.status(400).json({message: 'EL rut y la clave son requeridos'});
        }

        const userRepository = getRepository(Usuarios);
        let user:Usuarios;

        try{
            user = await userRepository.findOneOrFail({ where:{rut: rut}});
        }catch(e){
            return res.status(400).json({message: 'La clave o el rut esta incorrecto'});
        }

        //Check pass
        if (!user.checkPassword(clave)){
            return res.status(400).json({message: 'La clave o el rut esta incorrecto'});
        }

        const token = jwt.sign({userId: user.id, rut: user.rut}, config.jwtSectret, {expiresIn:'1h'} );

        res.json({message: 'OK', token, userId: user.id, role: user.tipo});
    }

    static changePassword = async ( req:Request, res:Response) => {
        const {userId} = res.locals.jwtPayload;
        const {oldPass, newPass} = req.body;

        if (!(oldPass && newPass)){
            res.status(400).json({message: 'Se requieren las claves'});
        }

        const userRepository = getRepository(Usuarios);
        let user: Usuarios;

        try {
            user = await userRepository.findOneOrFail(userId);
        }
        catch(e){
            res.status(400).json({message: 'Algo anda mal'});
        }

        if (!user.checkPassword(oldPass)){
            return res.status(401).json({message: 'Revisa tu clave antigua'});
        }

        user.clave = newPass;
        const validationOps = { validationError: {target: false, value: false} };
        const errors = await validate(user, validationOps);

        if (errors.length > 0){
            return res.status(400).json(errors);
        }

        //Hash pass
        user.hashPassword();
        userRepository.save(user);

        res.json({message: 'Clave cambiada'});
    }

    static registerUser = async (req:Request, res:Response) => {
      let user = new Usuarios();
      const { nombre, apellido, clave, email, direccion, ciudad, region, rut } = req.body;

      user.nombre = nombre;
      user.apellido = apellido;
      user.clave = clave;
      user.email = email;
      user.direccion = direccion;
      user.ciudad = ciudad;
      user.region = region;
      user.rut = rut;
      user.tipo = 'user';

      //Validate
      const validationOpt = {validationError: {target:false, value:false}};
      const errors = await validate(user, validationOpt);
      if (errors.length > 0){
          return res.status(400).json(errors)
      }

      //Todo: HASH PASSWORD
      const userRepository = getRepository(Usuarios)

      const find = await userRepository.findOne({rut : user.rut});
          if (!find){
              user.hashPassword();
              await userRepository.save(user);
          }
          else{
              return res.status(409).json({message: 'Usuario ya exite'});
          }

      //ALL OK
      res.send('Usuario creado');
  };
}

export default AuthController;
