import { NgModule } from '@angular/core';
import { CourseListComponent } from "./course-list.components";
import { courseInfoComponent } from "./course-info.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {StarModule} from 'src/app/shared/component/star/star.module';
import { PipeModule} from "src/app/shared/pipe/app-pipe.module";


@NgModule({
    declarations: [
        CourseListComponent,
        courseInfoComponent,

    ], imports:[
        CommonModule,
        FormsModule,
        StarModule,
        PipeModule,
        RouterModule.forChild([
            {    
                path:'courses/info/:id',component:courseInfoComponent
            }
            ,
            {
                path:'courses',component:CourseListComponent
            }
        ])

    ]
})

export class CourseModule{

}