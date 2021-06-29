import { Usuarios } from './../entity/Usuario';
import {getRepository} from "typeorm";
import { Request, Response} from "express";
import { validate } from "class-validator";


export class UserController {
    static getAll = async (req:Request, res:Response) => {
        const userRepository = getRepository(Usuarios);
        let users;

        try{
            users  = await userRepository.find();
        }catch(e){
            res.status(404).json({message: 'No hay resultados'});
        }

        if (users.length > 0 ) res.send(users);
        else res.status(404).json({message: 'No hay resultados '});
    };

    static getById = async (req:Request, res:Response) => {
        const {id} = req.params;
        const userRepository = getRepository(Usuarios);
        try{
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        }catch(e){
            res.status(404).json({message:  'No hay resultado'});
        }
    };

    static newUser = async (req:Request, res:Response) => {
        let user = new Usuarios();
        const { nombre, apellido, clave, tipo, email, direccion, ciudad, region, rut } = req.body;

        user.nombre = nombre;
        user.apellido = apellido;
        user.clave = clave;
        user.email = email;
        user.direccion = direccion;
        user.ciudad = ciudad;
        user.region = region;
        user.rut = rut;
        user.tipo = tipo;

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

    static editUser = async (req:Request, res:Response) => {
        let user;
        console.log(user)

        const{id} = req.params;
        console.log(id);

        const {tipo, email, direccion, ciudad, region} = req.body;


        const userRepository = getRepository(Usuarios);

        //Try get user
        try{
            user = await userRepository.findOneOrFail(id);
            user.email = email;
            user.tipo = tipo;
            user.direccion = direccion;
            user.ciudad = ciudad;
            user.region = region;
            console.log(email);

        }catch(e){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        const validationOpt = {validationError: {target:false, value:false}};
        const errors = await validate(user, validationOpt);
        if (errors.length > 0){
            return res.status(400).json(errors);
        }

        //TRY to sabe
        try{
            await userRepository.save(user);
        }catch(e){
            return res.status(404).json({message: 'Usuario no se pudo editar'});
        }

        res.status(201).json({message: 'Usuario editado'});
    };

    static deleteUser = async (req:Request, res:Response) => {
        const {id} = req.params;
        const userRepository = getRepository(Usuarios);
        let user:Usuarios;

        try{
            user = await userRepository.findOneOrFail(id);
        }catch(e){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        //Try remove
        userRepository.delete(id);
        res.status(201).json({message: 'Usuario eliminado'});
    };
}

export default UserController;
