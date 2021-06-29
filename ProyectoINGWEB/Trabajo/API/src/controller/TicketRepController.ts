import { Respuesta } from './../entity/Respuesta';
import {getRepository} from "typeorm";
import { Request, Response} from "express";
import { IsDataURI, validate } from "class-validator";

export class TicketRepController{

  static newTicketRep = async (req:Request, res:Response) => {
    let respuesta = new Respuesta;

    respuesta = req.body;

    //Validate
    const validationOpt = {validationError: {target:false, value:false}};
    const errors = await validate(respuesta, validationOpt);
    if (errors.length > 0){
        return res.status(400).json(errors)
    };

    const solicitudRepository = getRepository(Respuesta)
    await solicitudRepository.save(respuesta);

    res.send('Respuesta creada');
  }

  static getAll = async (req:Request, res:Response) => {
    const respuestadRepository = getRepository(Respuesta);
    let respuestas;

    console.log("HOLa")
    try{
      respuestas  = await respuestadRepository.find()
    }catch(e){
        res.status(404).json({message: 'No hay resultados'});
    }

    if (respuestas.length > 0 ){
      res.send(respuestas);
    }
    else res.status(404).json({message: 'No hay resultados '});

  }

  static getTicketRepById = async (req:Request, res:Response) => {
    const {id} = req.params;
    const respuestasRepository = getRepository(Respuesta);
    try{
      const respuesta = await respuestasRepository.findOneOrFail(id);
      res.send(respuesta.respuesta);
    }
    catch(e){
      res.status(404).json({message:  'No hay resultado'});
    }
  }

  static getTicketRepByIdTicket = async (req:Request, res:Response) => {
    const {id} = req.params;
    console.log(id)
    const respuestaRepository = getRepository(Respuesta);

        try{
            const respuesta = await respuestaRepository.query("SELECT respuesta.respuesta, usuarios.nombre, usuarios.apellido FROM respuesta JOIN usuarios ON respuesta.usuarioIdId = usuarios.id WHERE solicitudIdId = ?", [id]);
            console.log(respuesta)
            res.send(respuesta);
        }catch(e){
            res.status(404).json({message:  'No hay resultado'});
        }
  }

  static updateTicketRepById = async (req:Request, res:Response) => {
    let respuestaS;
    const{id} = req.params;
    console.log(id)

    const {respuesta} = req.body;

    const respuestasRepository = getRepository(Respuesta);

        //Try get Respuesta
        try{
          respuestaS = await respuestasRepository.findOneOrFail(id);

          respuestaS.respuesta = respuesta;

        }catch(e){
            return res.status(404).json({message: 'Respuesta no encontrado'});
        }

        const validationOpt = {validationError: {target:false, value:false}};
        const errors = await validate(respuestaS, validationOpt);
        if (errors.length > 0){
            return res.status(400).json(errors);
        }

        //TRY to sabe
        try{
            await respuestasRepository.save(respuestaS);
        }catch(e){
            return res.status(404).json({message: 'Respuesta no se pudo editar'});
        }

        res.status(201).json({message: 'Respuesta editada'});
  }

  static deleteTicketRepById = async (req:Request, res:Response) => {
    const {id} = req.params;

    const respuestaRepository = getRepository(Respuesta);
    let respuesta: Respuesta;

    try{
      respuesta = await respuestaRepository.findOneOrFail(id);
    }
    catch(e){
      return res.status(404).json({message: 'Respuesta no encontrada'});
    }

    //Try remove
    respuestaRepository.delete(id);
    res.status(201).json({message: 'Respuesta eliminada'});
  }

}
