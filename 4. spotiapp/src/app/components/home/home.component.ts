import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    nuevasCanciones :any[] = [];
    loading:boolean;
    error:boolean;
    mensajeError:string;

  constructor( private http: HttpClient, private spotify: SpotifyService) {
      this.loading = true;
      this.error = false;
      spotify.getNewReleases().subscribe((data:any )=> {
          console.log(data.albums.items);
          this.nuevasCanciones = data.albums.items;
          this.loading = false;
      }, (errorServicio) => {
          this.error = true;
          this.loading = false;
          this.mensajeError = errorServicio.error.error.message;
          console.log(errorServicio.error.error.message);
      });
  }

  ngOnInit() {
  }

}
