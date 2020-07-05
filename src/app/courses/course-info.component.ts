import { courses } from './courses';
import { CourseService } from './course.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './course-info.component.html'
})

export class courseInfoComponent{

    course: courses;

    constructor(private activatedRoute:ActivatedRoute, private CourseService: CourseService){}

    save():void{
        this.CourseService.save(this.course);
    }
   
    ngOnInit():void{
        this.course = this.CourseService.retrieveById (+this.activatedRoute.snapshot.paramMap.get('id'));
    }
}