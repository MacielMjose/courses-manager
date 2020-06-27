import { Component, OnInit } from '@angular/core';
import { courses } from './courses';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{

    courses:courses[] = [];
    
    constructor(private courseService:CourseService){}

    ngOnInit():void{
        this.courses = this.courseService.retrieveAll();
    }
}