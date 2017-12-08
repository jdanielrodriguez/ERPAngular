import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RolesComponent } from './roles/roles.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PuestosComponent } from './puestos/puestos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { PerfilComponent } from './perfil/perfil.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'puestos', component: PuestosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'perfil', component: PerfilComponent },
  ]},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
