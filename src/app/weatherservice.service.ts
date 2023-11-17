import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  apiKey='fda48e91cd69f7e59d7cbb01b2954dbc';

  // service injection
  constructor(private http:HttpClient) { }
  getweather(city: string){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    return this.http.get(apiUrl)
  }
}
