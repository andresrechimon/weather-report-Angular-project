import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImg:string = 'https://static.wikia.nocookie.net/horadeaventurafanon/images/4/43/WR.png/revision/latest?cb=20190930210228&path-prefix=es';
  city:string = '';
  loading:boolean = false;
  temp:number = 0;
  humidity:number = 0;
  time:string = '';
  query:boolean = false;
  showError:boolean = false;

  constructor(private wr:WeatherService) { }

  ngOnInit(): void {
  }

  weatherReport(){
    this.loading = true;
    this.wr.getWeather(this.city).subscribe(resp => {
      this.loading = false;
      this.query = true;
      this.temp = resp.main.temp - 273;
      this.humidity = resp.main.humidity;
      this.time = resp.weather[0].main;
    }, err => {
      this.loading = false;
      this.error();
    })
  }

  error(){
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 3000)
  }
}
