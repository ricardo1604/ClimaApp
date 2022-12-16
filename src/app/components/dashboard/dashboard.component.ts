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

    this._climaService.getGeocoding(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true
      //this.lat = data.main.lat;
      //this.lon = data.main.lon;

      console.log(data[0].lat)//Este los trae
      //console.log(this.lat)

    })
  }
}
