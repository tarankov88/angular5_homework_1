import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeFilter'
})
export class PlaceFilterPipe implements PipeTransform {

  public transform(places: Place[], placeType: string): Place[] {
    if(!placeType){
      return places;
    }

    if(placeType === 'all'){
      return places;
    }

    return places.filter((place: Place) =>`${place.type}`.includes(placeType));
  }

}
