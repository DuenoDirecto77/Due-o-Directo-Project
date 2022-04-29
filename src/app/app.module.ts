import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCuentaComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
