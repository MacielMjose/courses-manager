import {NgModule  } from "@angular/core";
import { navComponent } from "./component/nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        navComponent
    ],
    imports:[
        RouterModule
    ],
    exports:[
        navComponent
    ]
})

export class CoreModule{

}