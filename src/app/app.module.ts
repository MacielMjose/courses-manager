import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.components';
import { starComponent } from 'src/star/star.component';
import {ReplacePipe} from 'src/app/pipe/replace.pipe';
import {navComponent} from 'src/app/nav-bar/nav-bar.component';
import {error404Component} from 'src/app/erro-404/erro-404';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    starComponent,
    ReplacePipe,
    navComponent,
    error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'courses',pathMatch:'full'
      },
      {
        path:'courses',component:CourseListComponent
      },
      {
        path:'**',component:error404Component
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
