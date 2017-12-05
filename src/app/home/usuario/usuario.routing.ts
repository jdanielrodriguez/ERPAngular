import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from "./usuario.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: UsuarioComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'alumnos/:op', component: AlumnosComponent },
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
export class UsuarioRoutingModule { }
