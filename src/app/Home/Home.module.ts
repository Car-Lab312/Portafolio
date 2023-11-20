import { CommonModule } from "@angular/common";
import { NgModule, createComponent } from "@angular/core";
// import { RouterModule } from '@angular/router';

import { PresentacionComponent } from './Presentacion/presentacion.component';
import { CreacionesComponent } from './Informacion/creaciones/creaciones.component';
import { EstudiosComponent } from './Informacion/estudios/estudios.component';

@NgModule({
    declarations: [
        PresentacionComponent,
        EstudiosComponent,
        CreacionesComponent
    ],
    exports: [
        PresentacionComponent,
        EstudiosComponent,
        CreacionesComponent
    ],
    imports: [
        CommonModule,
        // RouterModule.forRoot([
        //     {path: 'centificados', component: EstudiosComponent},
        //     {path: 'inicio', component: PresentacionComponent},
        //   ]),
    ]
})
export class HomeModule{

}

