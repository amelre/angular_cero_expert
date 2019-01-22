import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  populares:any = [];
  actuales:any = [];
  popularesKids:any = [];

  constructor(private _ps:PeliculasService) {
    this._ps.getPopular()
      .subscribe(data =>{
        this.populares = data.results;
      });

    this._ps.getKidsPopular()
      .subscribe(data =>{
        this.popularesKids = data.results;
      });

    this._ps.getActuales()
      .subscribe(data =>{
        this.actuales = data.results;
      });

  }

  ngOnInit() {
  }

}
