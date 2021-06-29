import { Solicitudes } from './Solicitud';
import { Usuarios } from './Usuario';
import {Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, ManyToOne} from "typeorm";
import { MinLength, IsNotEmpty } from "class-validator";
import * as bcrypt from 'bcryptjs';

@Entity()
//@Unique(['id'])

export class Respuesta {

    @PrimaryGeneratedColumn()
    id?:number;

    @ManyToOne(type => Usuarios)
    usuario_id:number;

    @ManyToOne(type => Solicitudes)
    solicitud_id:number;

    @Column()
    respuesta:string;

    @Column({type:'date', default: () => "CURRENT_TIMESTAMP"})
    fecha:string;

}
