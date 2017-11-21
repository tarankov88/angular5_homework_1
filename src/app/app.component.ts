import { Component, OnInit } from '@angular/core';
import { places$ } from './data';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public places$: Observable<Place[]>;
    public currentPlace: Place;
    
    public filterTypes: FilterType = {
        all: 'all',
        fishing :'fishing',
        tour :'tour',
        weather: 'weather'
    }
    
    private filterText: string = 'all';

    public ngOnInit():void{
        this.places$ = places$;
    }

    public selectPlace(place: Place):void{
        this.currentPlace = place;
    }

    public setFilter(type: string): void{
        this.filterText= type;
        console.info('Filter:', this.filterText);
    }

}
