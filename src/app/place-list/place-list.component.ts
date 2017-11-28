import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'course-place-list',
    templateUrl: './place-list.component.html',
    styleUrls: ['./place-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PlaceListComponent {
    @Input()
    public item: Place;


}
