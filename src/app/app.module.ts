import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.components';
import { starComponent } from 'src/star/star.component';
import {ReplacePipe} from 'src/app/pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    starComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
