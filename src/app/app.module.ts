import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './Home/Home.module';
import { EstudiosComponent } from './Home/Informacion/estudios/estudios.component';
import { PresentacionComponent } from './Home/Presentacion/presentacion.component';
import { CreacionesComponent } from './Home/Informacion/creaciones/creaciones.component';
import { MenuComponent } from './Home/Menu-principal/menu.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'mostrar-estudios', component: EstudiosComponent},
      {path: 'mostrar-presentacion', component: PresentacionComponent},
      {path: 'mostrar-creciones', component: CreacionesComponent},
      {path: 'inicio', component: MenuComponent},
      {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
