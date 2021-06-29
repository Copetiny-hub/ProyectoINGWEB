import {Solicitudes} from '../entity/Solicitud';
import {getRepository} from "typeorm";
import { Request, Response} from "express";
import { validate } from "class-validator";
import { Usuarios } from '../entity/Usuario';

export class TicketController{

  static newTicket = async (req:Request, res:Response) => {
    let solicitud:Solicitudes = new Solicitudes();

    solicitud = req.body;

    //Validate
    const validationOpt = {validationError: {target:false, value:false}};
    const errors = await validate(solicitud, validationOpt);
    if (errors.length > 0){
        return res.status(400).json(errors)
    };
    const solicitudRepository = getRepository(Solicitudes);
    const usuarioRepository = getRepository(Usuarios)

    await
    await solicitudRepository.save(solicitud);

    res.send('Solicitud creada');

  }

  static getAll = async (req:Request, res:Response) => {
    const userRepository = getRepository(Solicitudes);
    let solicitudes;

    try{
      solicitudes  = await userRepository.find();
    }catch(e){
        res.status(404).json({message: 'No hay resultados'});
    }

    if (solicitudes.length > 0 ) res.send(solicitudes);
    else res.status(404).json({message: 'No hay resultados '});

  }

  static getById = async (req:Request, res:Response) => {
    const {id} = req.params;
    const userRepository = getRepository(Solicitudes);
        try{
            const solicitudes = await userRepository.findOneOrFail(id);
            res.send(solicitudes);
        }catch(e){
            res.status(404).json({message:  'No hay resultado'});
        }
  }

  static getTicketbyUserId = async (req:Request, res:Response) => {
    const {id} = req.params;
    const userRepository = getRepository(Solicitudes);
        try{
            const solicitudes = await userRepository.find({where: {usuario_id: id}});
            res.send(solicitudes);
        }catch(e){
            res.status(404).json({message:  'No hay resultado'});
        }
  }

  static getTicketbyStatus = async (req:Request, res:Response) => {
    const {status} = req.params;
    const userRepository = getRepository(Solicitudes);
        try{
            const solicitudes = await userRepository.find({where: {estado: status}});
            res.send(solicitudes);
        }catch(e){
            res.status(404).json({message:  'No hay resultado'});
        }
  }

  static deleteTicket = async (req:Request, res:Response) =>  {
    const {id} = req.params;
        const requRepository = getRepository(Solicitudes);
        let solicitud: Solicitudes;

        try{
          solicitud = await requRepository.findOneOrFail(id);
        }catch(e){
            return res.status(404).json({message: 'Solicitud no encontrada'});
        }

        //Try remove
        requRepository.delete(id);
        res.status(201).json({message: 'Solicitud eliminada'});
    //};

  };

  static editTicket= async (req:Request, res:Response) =>{
    let solicitud;
    const{id} = req.params;

    const {prioridad, estado,  descripcion, categoria, asunto} = req.body;

    const solicitudRepository = getRepository(Solicitudes);

        //Try get solicitud
        try{
          solicitud = await solicitudRepository.findOneOrFail(id);

          solicitud.estado = estado;
          solicitud.prioridad = prioridad;
          solicitud.descripcion =  descripcion;
          solicitud.categoria = categoria;
          solicitud.asunto = asunto;

        }catch(e){
            return res.status(404).json({message: 'solicitud no encontrado'});
        }

        const validationOpt = {validationError: {target:false, value:false}};
        const errors = await validate(solicitud, validationOpt);
        if (errors.length > 0){
            return res.status(400).json(errors);
        }

        //TRY to sabe
        try{
            await solicitudRepository.save(solicitud);
        }catch(e){
            return res.status(404).json({message: 'Solicitud no se pudo editar'});
        }

        res.status(201).json({message: 'Solicitud editada'});

  };

}

export default TicketController;
