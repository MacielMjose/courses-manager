import { NgModule } from '@angular/core';
import { CourseListComponent } from "./course-list.components";
import { courseInfoComponent } from "./course-info.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { starComponent } from 'src/star/star.component';
import { ReplacePipe } from '../pipe/replace.pipe';


@NgModule({
    declarations: [
        CourseListComponent,
        courseInfoComponent,
        starComponent,
        ReplacePipe

    ], imports:[
        CommonModule,
        FormsModule,
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