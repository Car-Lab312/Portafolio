import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './Home/Home.module';
import { EstudiosComponent } from './Home/Informacion/estudios/estudios.component';
import { PresentacionComponent } from './Home/Presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([
      {path: 'mostrar-estudios', component: EstudiosComponent},
      {path: 'inicio', component: PresentacionComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
