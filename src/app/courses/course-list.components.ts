import { Component, OnInit } from '@angular/core';
import { courses } from './courses';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{

    filteredCOurses: courses[] = [];
    _courses:courses[] = [];

    _filterby:string;
    
    
    constructor(private courseService:CourseService){}

    ngOnInit():void{
        this._courses = this.courseService.retrieveAll();
        this.filteredCOurses = this._courses;
    }
    set filter(value:string){
        this._filterby = value;
        this.filteredCOurses = this._courses.filter((courses: courses)=>courses.name.
        toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
    }
    get filter(){
        return this._filterby;
    }
}