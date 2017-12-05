import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadersCssModule } from 'angular2-loaders-css';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PagosComponent } from './pagos/pagos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EmpleadosComponent } from './empleados/empleados.component';

import { UsersService } from "./_services/users.service";
import { EmployeesService } from "./_services/employees.service";
import { RolesService } from "./_services/roles.service";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    SimpleNotificationsModule.forRoot(),
    Ng2SearchPipeModule,
    LoadersCssModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsuariosComponent,
    ComprasComponent,
    VentasComponent,
    CuentasComponent,
    EstadisticasComponent,
    InventarioComponent,
    PagosComponent,
    ClientesComponent,
    ProveedoresComponent,
    EmpleadosComponent,
    LoaderComponent
  ],
  providers: [
    UsersService,
    EmployeesService,
    RolesService
  ]
})
export class AdminModule { }
