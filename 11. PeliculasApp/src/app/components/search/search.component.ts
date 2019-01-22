import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar:string = '';

  constructor(private _ps:PeliculasService, public route: ActivatedRoute) {
      this.route.params.subscribe(params => {
          if(params['texto']){
              this.buscar = params['texto'];
              this.buscarPelicula();
          }
      })
  }

  ngOnInit() {
  }

  buscarPelicula(){
      if(this.buscar.length == 0){return;}

      this._ps.buscarPelicula(this.buscar)
      .subscribe(data =>{

      })
  }

}
