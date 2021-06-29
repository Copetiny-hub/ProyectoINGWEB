import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '@app/pages/admin/admin.component';
import { CrearTicketComponent } from '@app/pages/crear-ticket/crear-ticket.component';
import { RegistroUsuarioComponent } from '@app/pages/registro-usuario/registro-usuario.component';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'registrousuario', component: RegistroUsuarioComponent},
  {path: 'crearticket', component:CrearTicketComponent},
  {path: 'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
