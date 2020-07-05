import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './course-info.component.html'
})

export class courseInfoComponent{

    courseId: number;

    constructor(private activatedRoute:ActivatedRoute){}
   
    ngOnInit():void{
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    }
}