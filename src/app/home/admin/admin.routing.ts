import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AdminComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'empleados', component: EmpleadosComponent },
    // { path: 'cursos/:op/:name', component: CursosAlumnoComponent },
    // { path: 'tareas/:id/:name', component: TareasCursoComponent },
    // { path: 'cobros/:id/:name', component: CobrosComponent },
    // { path: 'profile', component: ProfileComponent },
  ]},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
