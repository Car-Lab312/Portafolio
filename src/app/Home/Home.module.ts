import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PresentacionComponent } from './Presentacion/presentacion.component';

@NgModule({
    declarations: [
        PresentacionComponent
    ],
    exports: [
        PresentacionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule{

}

