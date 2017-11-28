import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlacesService } from './common/services/places.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public places$: Observable<Place[]>;

    public filterTypes: FilterType = {
        all: 'all',
        fishing: 'fishing',
        tour: 'tour',
        weather: 'weather'
    };

    private filterText: string = 'all';

    public constructor(private _placesService: PlacesService) {}

    public ngOnInit(): void {
        this.places$ = this._placesService.places$;
    }

    public selectPlace(place: Place): void {
        this._placesService.selectedPlace$.next(place);
    }

    public setFilter(type: string): void {
        this.filterText = type;
    }

}
