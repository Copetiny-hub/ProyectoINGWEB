import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '@app/shared/models/user.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuario:Usuario = {
    nombre:"",
    apellido:"",
    clave:"",
    email:"",
    rut:"",
    direccion:"",
    region:"",
    ciudad:""
  }

  constructor(public authSvc:AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.usuario = data.usuario);
  }

  isAdmin(){
    if (this.usuario.tipo == 'admin') return 1
    else return 0;
    
  }

}
