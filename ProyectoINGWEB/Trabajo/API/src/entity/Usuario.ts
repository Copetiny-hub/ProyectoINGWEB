import {Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import { MinLength, IsNotEmpty, IsEmail } from "class-validator";
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['id'])

export class Usuarios {

    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    clave:string;

    @Column()
    tipo:string;

    @Column()
    email:string;

    @Column()
    direccion?:string;

    @Column()
    ciudad?:string;

    @Column()
    region?:string;

    @Column()
    rut!:string;

    hashPassword():void{
        const salt = bcrypt.genSaltSync(10);
        this.clave = bcrypt.hashSync(this.clave, salt);
    }

    checkPassword(password:string):boolean{
        return bcrypt.compareSync(password, this.clave);
    }
}
