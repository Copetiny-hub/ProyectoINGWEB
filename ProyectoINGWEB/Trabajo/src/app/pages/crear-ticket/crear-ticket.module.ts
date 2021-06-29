import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearTicketRoutingModule } from './crear-ticket-routing.module';
import { CrearTicketComponent } from './crear-ticket.component';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [
    CrearTicketComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    CrearTicketRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CrearTicketModule { }
