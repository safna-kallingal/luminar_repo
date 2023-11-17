import { Component } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-weathercomponent',
  templateUrl: './weathercomponent.component.html',
  styleUrls: ['./weathercomponent.component.css']
})
export class WeathercomponentComponent {
  city! : string; 
  // its a variable that denotes a non nullable field it wont be null or undefined
  weatherData : any;
  constructor(private WeatherserviceService:WeatherserviceService){

  }
  getWeather(){
    this.WeatherserviceService.getweather(this.city).subscribe(data=>{
      // in angular subscribe is a function which is used to listen for values
      //when thos values are recieved
      this.weatherData=data;
      console.log(data);
    })
  }

}
