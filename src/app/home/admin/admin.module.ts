import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadersCssModule } from 'angular2-loaders-css';
import { ChartsModule } from 'ng2-charts';
import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';

import { AdminRoutingModule } from './admin.routing';

import { UsersService } from "./_services/users.service";
import { EmployeesService } from "./_services/employees.service";
import { RolesService } from "./_services/roles.service";
import { PuestosService } from "./_services/puestos.service";
import { SucursalesService } from "./_services/sucursales.service";
import { ClientesService } from "./_services/clientes.service";
import { ProveedoresService } from "./_services/proveedores.service";
import { ModulosService } from "./_services/modulos.service";
import { AccesosService } from "./_services/accesos.service";
import { ComprasService } from "./_services/compras.service";
import { VentasService } from "./_services/ventas.service";
import { InventarioService } from "./_services/inventario.service";
import { ProductosService } from "./_services/productos.service";
import { TiposProductoService } from "./_services/tipos-producto.service";
import { TiposVentaService } from "./_services/tipos-venta.service";
import { TiposCompraService } from "./_services/tipos-compra.service";
import { CuentasCobrarService } from "./_services/cuentas-cobrar.service";
import { CuentasPagarService } from "./_services/cuentas-pagar.service";
import { MovimientosPagarService } from "./_services/movimientos-pagar.service";
import { MovimientosCobrarService } from "./_services/movimientos-cobrar.service";
import { GastosService } from "./_services/gastos.service";
import { SueldosService } from "./_services/sueldos.service";
import { ComisionesService } from "./_services/comisiones.service";
import { EstadisticasService } from "./_services/estadisticas.service";

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
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
import { GenerarCompraComponent } from './generar-compra/generar-compra.component';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
import { VentasAnuladasComponent } from './ventas-anuladas/ventas-anuladas.component';
import { ComprasAnuladasComponent } from './compras-anuladas/compras-anuladas.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ModulosComponent } from './modulos/modulos.component';
import { TiposProductoComponent } from './tipos-producto/tipos-producto.component';
import { CuentasCobrarComponent } from './cuentas-cobrar/cuentas-cobrar.component';
import { CuentasPagarComponent } from './cuentas-pagar/cuentas-pagar.component';
import { CuentasCobrarPagadasComponent } from './cuentas-cobrar-pagadas/cuentas-cobrar-pagadas.component';
import { CuentasPagarPagadasComponent } from './cuentas-pagar-pagadas/cuentas-pagar-pagadas.component';
import { InventarioAdminComponent } from './inventario-admin/inventario-admin.component';
import { InventarioInicialComponent } from './inventario-inicial/inventario-inicial.component';
import { SueldosComponent } from './sueldos/sueldos.component';
import { ComisionesComponent } from './comisiones/comisiones.component';
import { EstadisticaVendedorComponent } from './estadistica-vendedor/estadistica-vendedor.component';
import { EstadisticaFlujoComponent } from './estadistica-flujo/estadistica-flujo.component';
import { EstadisticaVentasComponent } from './estadistica-ventas/estadistica-ventas.component';
import { EstadisticaClientesComponent } from './estadistica-clientes/estadistica-clientes.component';
import { DiarioComponent } from './conta/diario/diario.component';
import { MayorComponent } from './conta/mayor/mayor.component';
import { BalanceComponent } from './conta/balance/balance.component';
import { EstadoResultadosComponent } from './conta/estado-resultados/estado-resultados.component';
import { FlujoComponent } from './conta/flujo/flujo.component';
import { BalanceSaldosComponent } from './conta/balance-saldos/balance-saldos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ChartsModule,
    SimpleNotificationsModule.forRoot(),
    Ng2SearchPipeModule,
    LoadersCssModule,
    AngularMultiSelectModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsuariosComponent,
    ComprasComponent,
    VentasComponent,
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
    CotizacionComponent,
    ModulosComponent,
    TiposProductoComponent,
    CuentasCobrarComponent,
    CuentasPagarComponent,
    CuentasCobrarPagadasComponent,
    CuentasPagarPagadasComponent,
    InventarioAdminComponent,
    InventarioInicialComponent,
    SueldosComponent,
    ComisionesComponent,
    EstadisticaVendedorComponent,
    EstadisticaFlujoComponent,
    EstadisticaVentasComponent,
    EstadisticaClientesComponent,
    DiarioComponent,
    MayorComponent,
    BalanceComponent,
    EstadoResultadosComponent,
    FlujoComponent,
    BalanceSaldosComponent
  ],
  providers: [
    UsersService,
    EmployeesService,
    RolesService,
    SucursalesService,
    PuestosService,
    ClientesService,
    ProveedoresService,
    ModulosService,
    AccesosService,
    ComprasService,
    VentasService,
    InventarioService,
    ProductosService,
    TiposProductoService,
    TiposVentaService,
    TiposCompraService,
    CuentasCobrarService,
    CuentasPagarService,
    MovimientosPagarService,
    MovimientosCobrarService,
    GastosService,
    SueldosService,
    ComisionesService,
    EstadisticasService
  ]
})
export class AdminModule { }
