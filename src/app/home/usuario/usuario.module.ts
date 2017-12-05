import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario.routing';
import { UsuarioComponent } from './usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioComponent, DashboardComponent]
})
export class UsuarioModule { }
