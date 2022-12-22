import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?appid=';
  urlCities = 'https://api.openweathermap.org/geo/1.0/direct?appid=';
  key = '6f549e9a7c892893d0eb5f06ec901137';

  constructor(private http: HttpClient) { }

  getGeocoding(ciudad: string): Observable<any> {

    const URL1 = this.urlCities + this.key + '&q=' + ciudad;

    let x = this.http.get(URL1)

    return x;
  }


  getWeather(lat: string, lon: string): Observable<any> {
    const URL = this.url + this.key + '&lat=' + lat + '&lon=' + lon;
    return this.http.get(URL);
  }

}
