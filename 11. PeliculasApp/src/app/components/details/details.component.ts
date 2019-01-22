import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {

  pelicula:any;
  regresarA:string="";
  busqueda:string = "";

  constructor(private _ps:PeliculasService, public route: ActivatedRoute) {

      this.route.params.subscribe(params => {
          this.regresarA = params['pag'];
          if( params['busqueda']){
              this.busqueda = params['busqueda'];
          }
          this._ps.getMovieById(params['id'])
          .subscribe(data =>  this.pelicula = data)
      });

  }

  ngOnInit() {
  }

}
