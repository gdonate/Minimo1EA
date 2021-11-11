import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatosGruposinvestigacionComponent } from './datos-gruposinvestigacion/datos-gruposinvestigacion.component';
import { NuevogrupoComponent } from './nuevogrupo/nuevogrupo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { DatosUsuariosComponent } from './datos-usuarios/datos-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatosGruposinvestigacionComponent,
    NuevogrupoComponent,
    ModificarComponent,
    NuevousuarioComponent,
    ModificarUsuarioComponent,
    DatosUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
