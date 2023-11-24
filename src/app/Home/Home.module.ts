import { CommonModule } from "@angular/common";
import { NgModule, createComponent } from "@angular/core";

import { PresentacionComponent } from './Presentacion/presentacion.component';
import { CreacionesComponent } from './Informacion/creaciones/creaciones.component';
import { EstudiosComponent } from './Informacion/estudios/estudios.component';
import { MenuComponent } from './Menu-principal/menu.component';

@NgModule({
    declarations: [
        PresentacionComponent,
        EstudiosComponent,
        CreacionesComponent,
        MenuComponent
    ],
    exports: [
        PresentacionComponent,
        EstudiosComponent,
        CreacionesComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class HomeModule{

}

