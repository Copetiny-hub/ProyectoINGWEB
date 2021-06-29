import { AuthService } from './../auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as rutValidator from './utils/rutValidator';
import {UsuarioService} from '../../usuario.service'
import { User, Usuario } from '@app/shared/models/user.interface';
//import {User} from '../../usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  private isValidRut = /^[Z0-9-]/
  hide = false;

  loginForm = this.fb.group({
    rut: new FormControl('', [Validators.required, Validators.pattern(this.isValidRut)]),
    clave: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]),
  })

  constructor(private authSvc: AuthService, private fb:FormBuilder, private router:Router, private servicio:UsuarioService) {}

  rutValidator() {
    if(rutValidator.check(this.loginForm.get('rut')?.value)) {
      return {invalid:false};
    }
    return {invalid:true};
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

  }

  onSubmit():void{

  }

  onRegionChange(region:string){

  }

  EnviarDatos(){
    let usuario:User={
  
      rut:this.loginForm.controls['rut'].value,
      clave:this.loginForm.controls['clave'].value


    }
    console.log(this.loginForm.controls['rut'].value);
    this.servicio.POSTUSUARIO(usuario);
  }


  onLogin():void{

    if(this.loginForm.invalid){
      return ;
    }

    const formValue = this.loginForm.value;
    this.subscription.add(
      this.subscription = this.authSvc.login(formValue).subscribe(res => {
        if (res){
          this.router.navigate(['crearticket']);
        }
      })
    )
  }
}
