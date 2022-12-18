import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private _http: HttpClient) { }

  daysweather(){
    let urlAPI = 'https://jsonplaceholder.typicode.com/users';
    return this._http.get(urlAPI)
    .pipe(map((res: any) => res ));
  }
}

//https://api.openweathermap.org/data/2.5/weather?id=2172797&cnt=7&appid=74454ba78de64614015a1c4dfcc6f3b2


//https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=74454ba78de64614015a1c4dfcc6f3b2

