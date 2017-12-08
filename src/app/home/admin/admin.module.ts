import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadersCssModule } from 'angular2-loaders-css';
import { ChartsModule } from 'ng2-charts';

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
import { LoaderComponent } from './loader/loader.component';
import { RolesComponent } from './roles/roles.component';
import { PuestosComponent } from './puestos/puestos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PerfilComponent } from './perfil/perfil.component';

import { UsersService } from "./_services/users.service";
import { EmployeesService } from "./_services/employees.service";
import { RolesService } from "./_services/roles.service";
import { PuestosService } from "./_services/puestos.service";
import { SucursalesService } from "./_services/sucursales.service";
import { ClientesService } from "./_services/clientes.service";
import { ProveedoresService } from "./_services/proveedores.service";
import { GenerarCompraComponent } from './generar-compra/generar-compra.component';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
import { VentasAnuladasComponent } from './ventas-anuladas/ventas-anuladas.component';
import { ComprasAnuladasComponent } from './compras-anuladas/compras-anuladas.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ChartsModule,
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
    LoaderComponent,
    RolesComponent,
    PuestosComponent,
    SucursalesComponent,
    PerfilComponent,
    GenerarCompraComponent,
    GenerarVentaComponent,
    VentasAnuladasComponent,
    ComprasAnuladasComponent,
    CotizacionComponent
  ],
  providers: [
    UsersService,
    EmployeesService,
    RolesService,
    SucursalesService,
    PuestosService,
    ClientesService,
    ProveedoresService
  ]
})
export class AdminModule { }
