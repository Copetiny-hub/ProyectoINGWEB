import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroUsuarioRoutingModule } from './registro-usuario-routing.module';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    RegistroUsuarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RegistroUsuarioModule { }
