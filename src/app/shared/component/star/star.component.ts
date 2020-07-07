import { Component, OnChanges, Input, OnInit, SimpleChanges, ɵɵNgOnChangesFeature } from '@angular/core';


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']//recebe um array como padrao pois pode mais de uma CSS
})

export class starComponent implements OnChanges{
    
    @Input()
    rating:number = 0;
    starWidth:number;


    ngOnChanges():void{
        this.starWidth = this.rating * 74/5;
    }
}
