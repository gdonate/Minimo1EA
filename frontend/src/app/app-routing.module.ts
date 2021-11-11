import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarComponent } from './modificar/modificar.component';
import { NuevogrupoComponent } from './nuevogrupo/nuevogrupo.component';
import { PrincipalComponent } from './principal/principal.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevogrupo', component: NuevogrupoComponent},
  { path: 'nuevousuario', component: NuevousuarioComponent},
  { path: ':id', component: ModificarComponent},
  { path: 'modificarusuario/:id', component: ModificarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
