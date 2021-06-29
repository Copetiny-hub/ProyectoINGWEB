import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTicketComponent } from './crear-ticket.component';
import { TicketsComponent } from './tickets/tickets.component';


const routes: Routes = [{ path: 'crearticket', component: CrearTicketComponent },
{path:'tabla', component:TicketsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearTicketRoutingModule { }
