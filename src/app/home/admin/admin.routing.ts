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
