import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const data:Place[] = [
 {
    img_1:'images/res.jpg',
    img_2:'images/r1.jpg',
    address:'Address String to Place 1(fishing)',
    phone:  1285968685,
    weather: { 
       title:'Place 1',
       icon:'string',
       water:15,
       temperatur: 28
    },
    social_info:{ 
       title: 'string',
       img:'string',
       followers:1024,
       following:2048
    }, 
    type: 'fishing'
 },
 {
    img_1:'images/res.jpg',
    img_2:'images/r1.jpg',
    address:'Address String to Place 2(tour)',
    phone:  1285968685,
    weather: {
       title:'string',
       icon:'string',
       water:15,
       temperatur: 17
    },
    social_info:{ 
       title: 'Place 2',
       img:'string',
       followers:256,
       following:512
    }, 
    type: 'tours'
 }, 
 {
    img_1:'images/res.jpg',
    img_2:'images/r1.jpg',
    address:'Address String to Place 3(weather)',
    phone:  1285968685,
    weather: {
       title:'Place 3',
       icon:'string',
       water:15,
       temperatur: 36
    },
    social_info:{ 
       title: 'string',
       img:'string',
       followers:64,
       following:128
    }, 
    type: 'weather'
 }
];


 export const places$: Observable<Place[]> = Observable.of(data).delay(3500);