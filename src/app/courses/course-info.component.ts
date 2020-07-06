import { courses } from './courses';
import { CourseService } from './course.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './course-info.component.html'
})

export class courseInfoComponent{

    course: courses;

    constructor(private activatedRoute:ActivatedRoute, private courseService: CourseService){}
    
    ngOnInit():void{
        this.courseService.retrieveById (+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error",err)
        });
    }
    save():void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('saved with success',course),
            error: err => console.log("erro",err)
        })
    }
}