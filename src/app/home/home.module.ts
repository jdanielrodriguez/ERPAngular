import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LoadersCssModule } from 'angular2-loaders-css';

import { HomeRoutingModule } from './home.routing';
import { NavComponent } from './nav.component';

import { UsuarioGuard } from "./../_guards/usuario.guard";
import { EmpresaGuard } from "./../_guards/empresa.guard";
import { ClienteGuard } from "./../_guards/cliente.guard";
import { AdminGuard } from "./../_guards/admin.guard";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadersCssModule,
    HomeRoutingModule
  ],
  declarations: [NavComponent],
  providers: [
    UsuarioGuard,
    EmpresaGuard,
    ClienteGuard,
    AdminGuard
  ]
})
export class HomeModule { }
