import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent {
  @Input()
  public data: Place;
}
