import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';

import { AppComponent } from './app.component';
import {error404Component} from 'src/app/erro-404/erro-404';
import { CourseModule } from "src/app/courses/course.module";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    error404Component
  ],
  imports: [
    BrowserModule,
    CoreModule,
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
