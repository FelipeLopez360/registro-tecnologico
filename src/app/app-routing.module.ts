import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { MantenimientosComponent } from './pages/mantenimientos/mantenimientos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { InformesComponent } from './pages/informes/informes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'mantenimientos', component: MantenimientosComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
