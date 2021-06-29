import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './pages/crear-ticket/tickets/tickets.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'notFound',
    loadChildren: () =>
    import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () =>
    import('./pages/auth/login/login.module').then(m => m.LoginModule),
    canActivate:[CheckLoginGuard]
  },
  { 
    path: 'registrousuario', 
    loadChildren: () => 
    import('./pages/registro-usuario/registro-usuario.module').then(m => m.RegistroUsuarioModule) 
  },
  { 
    path: 'crearticket', 
    loadChildren: () => 
    import('./pages/crear-ticket/crear-ticket.module').then(m => m.CrearTicketModule) 
  },
  {
    path:'tabla',component:TicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
