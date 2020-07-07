import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';

import { AppComponent } from './app.component';
import {navComponent} from 'src/app/nav-bar/nav-bar.component';
import {error404Component} from 'src/app/erro-404/erro-404';
import { CourseModule } from "src/app/courses/course.module";

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'courses',pathMatch:'full'
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
