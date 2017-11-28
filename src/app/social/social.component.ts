import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PlacesService } from '../common/services/places.service';

@Component({
    selector: 'course-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit{
    public data: Social;

    public constructor(private _placesServise: PlacesService){}

    public ngOnInit() {
        this._placesServise.selectedPlace$.subscribe(    
          (place: Place) => {this.data = place.social_info}
        )
    }
}
