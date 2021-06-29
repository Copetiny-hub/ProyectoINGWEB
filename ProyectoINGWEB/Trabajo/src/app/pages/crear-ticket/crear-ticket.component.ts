import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {Ticket} from '../ticket';
import {TicketService} from '../ticket.service'

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.scss']
})

export class CrearTicketComponent implements OnInit {

  formulario:FormGroup;
  constructor(private fb:FormBuilder, private servicio:TicketService) {
    this.formulario=fb.group({
      asunto:['asunto',[Validators.required]],
      prioridad:['prioridad',[Validators.required]],
      categoria:['categoria',[Validators.required]],
      descripcion:['descripcion',[Validators.required]]
   })
  }

  ngOnInit(): void {
  }

 
  EnviarDatos(){
    let ticket:Ticket={
  
      asunto:this.formulario.controls['asunto'].value,
      prioridad:this.formulario.controls['prioridad'].value,
      categoria:this.formulario.controls['categoria'].value,
      descripcion:this.formulario.controls['descripcion'].value

    }
    console.log(this.formulario.controls['asunto'].value);
    this.servicio.POSTTICKET(ticket);
  }
  

}