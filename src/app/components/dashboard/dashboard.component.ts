import { ClimaService } from './../../services/clima.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  urlImg = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png'
  ciudad = '';
  loading = false;
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  lat = '';
  lon = '';

  constructor(private _climaService: ClimaService) {}

  obtenerClima() {
    this.loading = true;
    this.query = false;

    this._climaService.getGeocoding(this.ciudad).subscribe({next: (data) => {

      this.lat = data[0].lat;
      this.lon = data[0].lon;
      console.log(data[0].lat)
      console.log(data[0].lon)

      this._climaService.getWeather(this.lat, this.lon).subscribe({next: data2 => {
        this.loading = false;
        this.query = true;
        console.log(data2);

        this.temperatura = data2.main.temp - 273;
        this.humedad = data2.main.humidity;
        this.clima = data2.weather[0].main
      }, error: (err) => {
        console.info('Error!');
      }, complete: () => {

      }})

    }, error: (err) => {
      console.info(err)
    }, complete: () => {
      console.info('Complete')
    }})
  }
}
