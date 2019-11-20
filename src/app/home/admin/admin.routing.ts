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
import { TallerComponent } from './taller/taller.component';
import { GenerarOrdenComponent } from './generar-orden/generar-orden.component';

import { DiarioComponent } from './conta/diario/diario.component';
import { BalanceComponent } from './conta/balance/balance.component';
import { BalanceSaldosComponent } from './conta/balance-saldos/balance-saldos.component';
import { FlujoComponent } from './conta/flujo/flujo.component';
import { MayorComponent } from './conta/mayor/mayor.component';
import { EstadoResultadosComponent } from './conta/estado-resultados/estado-resultados.component';

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
    { path: 'taller', component: TallerComponent },
    { path: 'pagos', component: PagosComponent },
    { path: 'estadistica', component:  EstadisticaVentasComponent},
    { path: 'estadistica-clientes', component: EstadisticaClientesComponent },
    { path: 'estadistica-flujo', component: EstadisticaFlujoComponent },
    { path: 'estadistica-ventas', component: EstadisticaVendedorComponent },
    { path: 'sueldos', component: SueldosComponent },
    { path: 'comisiones', component: ComisionesComponent },
    { path: 'contabilidad/diario', component: DiarioComponent },
    { path: 'contabilidad/mayor', component: MayorComponent },
    { path: 'contabilidad/flujo-de-efectivo', component: FlujoComponent },
    { path: 'contabilidad/estado-de-resultados', component: EstadoResultadosComponent },
    { path: 'contabilidad/balance-general', component: BalanceComponent },
    { path: 'contabilidad/balance-de-saldos', component: BalanceSaldosComponent },
  ]},
  { path: 'compras-anuladas', component: ComprasAnuladasComponent },
  { path: 'generar-orden', component: GenerarOrdenComponent },
  { path: 'orden-taller/:id', component: GenerarOrdenComponent },
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
