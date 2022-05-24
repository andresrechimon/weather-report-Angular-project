import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key:string = 'bceaa204469a39d36322275101a0130a';
  url:string = 'https://api.openweathermap.org/data/2.5/weather?&appid=';

  constructor(private http:HttpClient) { }

  getWeather(city:string): Observable<any>{
    const URL = this.url + this.key + '&q=' + city; 
    return this.http.get(URL)
  }
}
