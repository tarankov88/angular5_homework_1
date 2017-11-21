import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent{
  @Input()
  public data: Place;
}
