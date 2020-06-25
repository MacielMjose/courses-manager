import { Component, OnInit } from '@angular/core';
import { courses } from './courses';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{

    courses:courses[] = [];
      
    ngOnInit():void{
        this.courses = [
            {
                id:1,
                name:'Angular: Forms',
                imageurl:"/assets/images/forms.png",
                price:99.99,
                code:"xps-8796",
                duration:120,
                rating:5.4,
                releaseDate:'December, 2, 2019'
            }
            ,
            {
                id:1,
                name:'Angular: Http',
                imageurl:"/assets/images/http.png",
                price:45.99,
                code:"lkl-8796",
                duration:80,
                rating:4.5,
                releaseDate:'December, 4, 2019'
            }
        ]
    }
}