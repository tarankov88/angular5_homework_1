import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PlacesService } from '../common/services/places.service';

@Component({
    selector: 'course-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit{
    public data: Weather;

    public constructor(private _placeService: PlacesService){};


    public ngOnInit(): void{
        this._placeService.selectedPlace$.subscribe(
            (place: Place) => {this.data = place.weather}
        )
    }
}
