export type Roles = 'admin' | 'user';

export interface User {
  rut: string;
  clave: string;
}

export interface Usuario {
  id?:number;
  nombre:string;
  apellido:string;
  clave:string;
  tipo?:string;
  email:string;
  direccion?:string;
  ciudad?:string;
  region?:string;
  rut:string;

}

export interface UserResponse {
  message: string;
  token: string;
  userId: number;
  tipo: Roles;
}
