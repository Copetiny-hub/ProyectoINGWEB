import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '@app/shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string="http://localhost:3000/";
  constructor(private servicio:HttpClient) { }

  POSTUSUARIO(usuario:User){
    this.servicio.post<User>(`${this.url}`+'auth/register',usuario).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );;
  }
 
}

