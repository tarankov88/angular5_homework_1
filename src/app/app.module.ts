import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import { PlaceFilterPipe } from './common/pipes/place-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PlaceListComponent,
        SocialComponent,
        WeatherComponent,
        PlaceFilterPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
