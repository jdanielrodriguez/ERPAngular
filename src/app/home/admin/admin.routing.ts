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
import { ComprasComponent } from './compras/compras.component';
import { ComprasAnuladasComponent } from './compras-anuladas/compras-anuladas.component';
import { GenerarCompraComponent } from './generar-compra/generar-compra.component';
import { VentasComponent } from './ventas/ventas.component';
import { VentasAnuladasComponent } from './ventas-anuladas/ventas-anuladas.component';
import { GenerarVentaComponent } from './generar-venta/generar-venta.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ModulosComponent } from './modulos/modulos.component';
import { CuentasCobrarComponent } from './cuentas-cobrar/cuentas-cobrar.component';
import { CuentasCobrarPagadasComponent } from './cuentas-cobrar-pagadas/cuentas-cobrar-pagadas.component';
import { CuentasPagarComponent } from './cuentas-pagar/cuentas-pagar.component';
import { CuentasPagarPagadasComponent } from './cuentas-pagar-pagadas/cuentas-pagar-pagadas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioAdminComponent } from './inventario-admin/inventario-admin.component';
import { InventarioInicialComponent } from './inventario-inicial/inventario-inicial.component';
import { TiposProductoComponent } from './tipos-producto/tipos-producto.component';
import { PagosComponent } from './pagos/pagos.component';
import { EstadisticaVendedorComponent } from './estadistica-vendedor/estadistica-vendedor.component';
import { EstadisticaFlujoComponent } from './estadistica-flujo/estadistica-flujo.component';
import { EstadisticaClientesComponent } from './estadistica-clientes/estadistica-clientes.component';
import { EstadisticaVentasComponent } from './estadistica-ventas/estadistica-ventas.component';
import { ComisionesComponent } from './comisiones/comisiones.component';
import { SueldosComponent } from './sueldos/sueldos.component';

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
    { path: 'compras', component: ComprasComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'cotizacion', component: CotizacionComponent },
    { path: 'cuentas-cobrar', component: CuentasCobrarComponent },
    { path: 'cuentas-cobrar-pagadas', component: CuentasCobrarPagadasComponent },
    { path: 'cuentas-pagar', component: CuentasPagarComponent },
    { path: 'cuentas-pagar-pagadas', component: CuentasPagarPagadasComponent },
    { path: 'modulos', component: ModulosComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'inventario-admin', component: InventarioAdminComponent },
    { path: 'inventario-inicial', component: InventarioInicialComponent },
    { path: 'tipos-producto', component: TiposProductoComponent },
    { path: 'pagos', component: PagosComponent },
    { path: 'estadistica', component: EstadisticaVendedorComponent },
    { path: 'estadistica-clientes', component: EstadisticaClientesComponent },
    { path: 'estadistica-flujo', component: EstadisticaFlujoComponent },
    { path: 'estadistica-ventas', component: EstadisticaVentasComponent },
    { path: 'sueldos', component: SueldosComponent },
    { path: 'comisiones', component: ComisionesComponent },
  ]},
  { path: 'compras-anuladas', component: ComprasAnuladasComponent },
  { path: 'generar-compra', component: GenerarCompraComponent },
  { path: 'generar-venta', component: GenerarVentaComponent },
  { path: 'ventas-anuladas', component: VentasAnuladasComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
