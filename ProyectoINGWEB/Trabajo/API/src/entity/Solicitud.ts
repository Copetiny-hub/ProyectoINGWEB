import {Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { MinLength, IsNotEmpty } from "class-validator";
import * as bcrypt from 'bcryptjs';
import { Usuarios } from "./Usuario";

@Entity()
//@Unique(['id'])

export class Solicitudes {

    @PrimaryGeneratedColumn()
    id?:number;

    @ManyToOne(type => Usuarios) @JoinColumn()
    usuario_id:Usuarios;

    @Column()
    estado:string;

    @Column()
    prioridad:string;

    @Column()
    categoria:string;

    @Column()
    asunto:string;

    @Column()
    descripcion:string;

    @Column({type:'date', default: () => "CURRENT_TIMESTAMP"})
    fechacreacion:string;

}
