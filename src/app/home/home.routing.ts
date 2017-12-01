import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { UsuarioGuard } from "./../_guards/usuario.guard";
import { EmpresaGuard } from "./../_guards/empresa.guard";
import { ClienteGuard } from "./../_guards/cliente.guard";
import { AdminGuard } from "./../_guards/admin.guard";

const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
    { path: 'usuario',loadChildren: 'app/home/usuario/usuario.module#UsuarioModule', canActivate: [UsuarioGuard]},
    { path: 'empresa',loadChildren: 'app/home/empresa/empresa.module#EmpresaModule', canActivate: [EmpresaGuard]},
    { path: 'cliente',loadChildren: 'app/home/cliente/cliente.module#ClienteModule', canActivate: [ClienteGuard]},
    { path: 'admin',loadChildren: 'app/home/admin/admin.module#AdminModule', canActivate: [AdminGuard]},
  ]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
